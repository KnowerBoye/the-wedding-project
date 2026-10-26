// Firebase, configured from VITE_FIREBASE_* env vars (see .env.example).
// The SDK is only downloaded when a guest actually submits an RSVP or a photo,
// so the invitation stays light on slow connections. With no config the site
// still works and the RSVP/upload sections show an "opening soon" state.

const env = import.meta.env;

export const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
};

const REQUIRED = ['apiKey', 'projectId', 'appId'];
export const hasFirestore = REQUIRED.every((k) => Boolean(firebaseConfig[k]));
export const hasStorage = hasFirestore && Boolean(firebaseConfig.storageBucket);

let appPromise = null;
function app() {
  if (!hasFirestore) return Promise.reject(new Error('Firebase is not configured'));
  appPromise ||= import('firebase/app').then(({ initializeApp }) => initializeApp(firebaseConfig));
  return appPromise;
}

// Firestore Lite: writes only, no realtime listeners, a fraction of the size.
let dbPromise = null;
export function firestore() {
  dbPromise ||= Promise.all([app(), import('firebase/firestore/lite')]).then(([a, fs]) => ({ db: fs.getFirestore(a), fs }));
  return dbPromise;
}

let storagePromise = null;
export function storage() {
  if (!hasStorage) return Promise.reject(new Error('Firebase Storage is not configured'));
  storagePromise ||= Promise.all([app(), import('firebase/storage')]).then(([a, st]) => {
    const storage = st.getStorage(a);
    // The SDK retries silently for 10 minutes by default; on a phone that
    // looks like a frozen upload. Give up sooner and let the guest retry.
    storage.maxUploadRetryTime = 45000;
    storage.maxOperationRetryTime = 45000;
    return { storage, st };
  });
  return storagePromise;
}

// Start downloading the SDK once a guest shows intent (focus, file picker).
export function warmUp(kind) {
  if (kind === 'storage' ? !hasStorage : !hasFirestore) return;
  (kind === 'storage' ? storage() : firestore()).catch(() => {});
}
