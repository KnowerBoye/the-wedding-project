import{F as br,j as O,k as ie,l as Sn,p as Sr,u as kr,m as Fr,h as Nr,c as kn,n as Dr,L as xr,f as Or,o as ke,S as qr,e as Cr,C as Mr,r as nn,d as jr}from"./index.esm2017-BSd68sP1.js";var rn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(d,o){function l(){}l.prototype=o.prototype,d.D=o.prototype,d.prototype=new l,d.prototype.constructor=d,d.C=function(c,h,f){for(var u=Array(arguments.length-2),ut=2;ut<arguments.length;ut++)u[ut-2]=arguments[ut];return o.prototype[h].apply(c,u)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(d,o,l){l||(l=0);var c=Array(16);if(typeof o=="string")for(var h=0;16>h;++h)c[h]=o.charCodeAt(l++)|o.charCodeAt(l++)<<8|o.charCodeAt(l++)<<16|o.charCodeAt(l++)<<24;else for(h=0;16>h;++h)c[h]=o[l++]|o[l++]<<8|o[l++]<<16|o[l++]<<24;o=d.g[0],l=d.g[1],h=d.g[2];var f=d.g[3],u=o+(f^l&(h^f))+c[0]+3614090360&4294967295;o=l+(u<<7&4294967295|u>>>25),u=f+(h^o&(l^h))+c[1]+3905402710&4294967295,f=o+(u<<12&4294967295|u>>>20),u=h+(l^f&(o^l))+c[2]+606105819&4294967295,h=f+(u<<17&4294967295|u>>>15),u=l+(o^h&(f^o))+c[3]+3250441966&4294967295,l=h+(u<<22&4294967295|u>>>10),u=o+(f^l&(h^f))+c[4]+4118548399&4294967295,o=l+(u<<7&4294967295|u>>>25),u=f+(h^o&(l^h))+c[5]+1200080426&4294967295,f=o+(u<<12&4294967295|u>>>20),u=h+(l^f&(o^l))+c[6]+2821735955&4294967295,h=f+(u<<17&4294967295|u>>>15),u=l+(o^h&(f^o))+c[7]+4249261313&4294967295,l=h+(u<<22&4294967295|u>>>10),u=o+(f^l&(h^f))+c[8]+1770035416&4294967295,o=l+(u<<7&4294967295|u>>>25),u=f+(h^o&(l^h))+c[9]+2336552879&4294967295,f=o+(u<<12&4294967295|u>>>20),u=h+(l^f&(o^l))+c[10]+4294925233&4294967295,h=f+(u<<17&4294967295|u>>>15),u=l+(o^h&(f^o))+c[11]+2304563134&4294967295,l=h+(u<<22&4294967295|u>>>10),u=o+(f^l&(h^f))+c[12]+1804603682&4294967295,o=l+(u<<7&4294967295|u>>>25),u=f+(h^o&(l^h))+c[13]+4254626195&4294967295,f=o+(u<<12&4294967295|u>>>20),u=h+(l^f&(o^l))+c[14]+2792965006&4294967295,h=f+(u<<17&4294967295|u>>>15),u=l+(o^h&(f^o))+c[15]+1236535329&4294967295,l=h+(u<<22&4294967295|u>>>10),u=o+(h^f&(l^h))+c[1]+4129170786&4294967295,o=l+(u<<5&4294967295|u>>>27),u=f+(l^h&(o^l))+c[6]+3225465664&4294967295,f=o+(u<<9&4294967295|u>>>23),u=h+(o^l&(f^o))+c[11]+643717713&4294967295,h=f+(u<<14&4294967295|u>>>18),u=l+(f^o&(h^f))+c[0]+3921069994&4294967295,l=h+(u<<20&4294967295|u>>>12),u=o+(h^f&(l^h))+c[5]+3593408605&4294967295,o=l+(u<<5&4294967295|u>>>27),u=f+(l^h&(o^l))+c[10]+38016083&4294967295,f=o+(u<<9&4294967295|u>>>23),u=h+(o^l&(f^o))+c[15]+3634488961&4294967295,h=f+(u<<14&4294967295|u>>>18),u=l+(f^o&(h^f))+c[4]+3889429448&4294967295,l=h+(u<<20&4294967295|u>>>12),u=o+(h^f&(l^h))+c[9]+568446438&4294967295,o=l+(u<<5&4294967295|u>>>27),u=f+(l^h&(o^l))+c[14]+3275163606&4294967295,f=o+(u<<9&4294967295|u>>>23),u=h+(o^l&(f^o))+c[3]+4107603335&4294967295,h=f+(u<<14&4294967295|u>>>18),u=l+(f^o&(h^f))+c[8]+1163531501&4294967295,l=h+(u<<20&4294967295|u>>>12),u=o+(h^f&(l^h))+c[13]+2850285829&4294967295,o=l+(u<<5&4294967295|u>>>27),u=f+(l^h&(o^l))+c[2]+4243563512&4294967295,f=o+(u<<9&4294967295|u>>>23),u=h+(o^l&(f^o))+c[7]+1735328473&4294967295,h=f+(u<<14&4294967295|u>>>18),u=l+(f^o&(h^f))+c[12]+2368359562&4294967295,l=h+(u<<20&4294967295|u>>>12),u=o+(l^h^f)+c[5]+4294588738&4294967295,o=l+(u<<4&4294967295|u>>>28),u=f+(o^l^h)+c[8]+2272392833&4294967295,f=o+(u<<11&4294967295|u>>>21),u=h+(f^o^l)+c[11]+1839030562&4294967295,h=f+(u<<16&4294967295|u>>>16),u=l+(h^f^o)+c[14]+4259657740&4294967295,l=h+(u<<23&4294967295|u>>>9),u=o+(l^h^f)+c[1]+2763975236&4294967295,o=l+(u<<4&4294967295|u>>>28),u=f+(o^l^h)+c[4]+1272893353&4294967295,f=o+(u<<11&4294967295|u>>>21),u=h+(f^o^l)+c[7]+4139469664&4294967295,h=f+(u<<16&4294967295|u>>>16),u=l+(h^f^o)+c[10]+3200236656&4294967295,l=h+(u<<23&4294967295|u>>>9),u=o+(l^h^f)+c[13]+681279174&4294967295,o=l+(u<<4&4294967295|u>>>28),u=f+(o^l^h)+c[0]+3936430074&4294967295,f=o+(u<<11&4294967295|u>>>21),u=h+(f^o^l)+c[3]+3572445317&4294967295,h=f+(u<<16&4294967295|u>>>16),u=l+(h^f^o)+c[6]+76029189&4294967295,l=h+(u<<23&4294967295|u>>>9),u=o+(l^h^f)+c[9]+3654602809&4294967295,o=l+(u<<4&4294967295|u>>>28),u=f+(o^l^h)+c[12]+3873151461&4294967295,f=o+(u<<11&4294967295|u>>>21),u=h+(f^o^l)+c[15]+530742520&4294967295,h=f+(u<<16&4294967295|u>>>16),u=l+(h^f^o)+c[2]+3299628645&4294967295,l=h+(u<<23&4294967295|u>>>9),u=o+(h^(l|~f))+c[0]+4096336452&4294967295,o=l+(u<<6&4294967295|u>>>26),u=f+(l^(o|~h))+c[7]+1126891415&4294967295,f=o+(u<<10&4294967295|u>>>22),u=h+(o^(f|~l))+c[14]+2878612391&4294967295,h=f+(u<<15&4294967295|u>>>17),u=l+(f^(h|~o))+c[5]+4237533241&4294967295,l=h+(u<<21&4294967295|u>>>11),u=o+(h^(l|~f))+c[12]+1700485571&4294967295,o=l+(u<<6&4294967295|u>>>26),u=f+(l^(o|~h))+c[3]+2399980690&4294967295,f=o+(u<<10&4294967295|u>>>22),u=h+(o^(f|~l))+c[10]+4293915773&4294967295,h=f+(u<<15&4294967295|u>>>17),u=l+(f^(h|~o))+c[1]+2240044497&4294967295,l=h+(u<<21&4294967295|u>>>11),u=o+(h^(l|~f))+c[8]+1873313359&4294967295,o=l+(u<<6&4294967295|u>>>26),u=f+(l^(o|~h))+c[15]+4264355552&4294967295,f=o+(u<<10&4294967295|u>>>22),u=h+(o^(f|~l))+c[6]+2734768916&4294967295,h=f+(u<<15&4294967295|u>>>17),u=l+(f^(h|~o))+c[13]+1309151649&4294967295,l=h+(u<<21&4294967295|u>>>11),u=o+(h^(l|~f))+c[4]+4149444226&4294967295,o=l+(u<<6&4294967295|u>>>26),u=f+(l^(o|~h))+c[11]+3174756917&4294967295,f=o+(u<<10&4294967295|u>>>22),u=h+(o^(f|~l))+c[2]+718787259&4294967295,h=f+(u<<15&4294967295|u>>>17),u=l+(f^(h|~o))+c[9]+3951481745&4294967295,d.g[0]=d.g[0]+o&4294967295,d.g[1]=d.g[1]+(h+(u<<21&4294967295|u>>>11))&4294967295,d.g[2]=d.g[2]+h&4294967295,d.g[3]=d.g[3]+f&4294967295}r.prototype.u=function(d,o){o===void 0&&(o=d.length);for(var l=o-this.blockSize,c=this.B,h=this.h,f=0;f<o;){if(h==0)for(;f<=l;)i(this,d,f),f+=this.blockSize;if(typeof d=="string"){for(;f<o;)if(c[h++]=d.charCodeAt(f++),h==this.blockSize){i(this,c),h=0;break}}else for(;f<o;)if(c[h++]=d[f++],h==this.blockSize){i(this,c),h=0;break}}this.h=h,this.o+=o},r.prototype.v=function(){var d=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);d[0]=128;for(var o=1;o<d.length-8;++o)d[o]=0;var l=8*this.o;for(o=d.length-8;o<d.length;++o)d[o]=l&255,l/=256;for(this.u(d),d=Array(16),o=l=0;4>o;++o)for(var c=0;32>c;c+=8)d[l++]=this.g[o]>>>c&255;return d};function s(d,o){var l=p;return Object.prototype.hasOwnProperty.call(l,d)?l[d]:l[d]=o(d)}function a(d,o){this.h=o;for(var l=[],c=!0,h=d.length-1;0<=h;h--){var f=d[h]|0;c&&f==o||(l[h]=f,c=!1)}this.g=l}var p={};function m(d){return-128<=d&&128>d?s(d,function(o){return new a([o|0],0>o?-1:0)}):new a([d|0],0>d?-1:0)}function _(d){if(isNaN(d)||!isFinite(d))return v;if(0>d)return P(_(-d));for(var o=[],l=1,c=0;d>=l;c++)o[c]=d/l|0,l*=4294967296;return new a(o,0)}function g(d,o){if(d.length==0)throw Error("number format error: empty string");if(o=o||10,2>o||36<o)throw Error("radix out of range: "+o);if(d.charAt(0)=="-")return P(g(d.substring(1),o));if(0<=d.indexOf("-"))throw Error('number format error: interior "-" character');for(var l=_(Math.pow(o,8)),c=v,h=0;h<d.length;h+=8){var f=Math.min(8,d.length-h),u=parseInt(d.substring(h,h+f),o);8>f?(f=_(Math.pow(o,f)),c=c.j(f).add(_(u))):(c=c.j(l),c=c.add(_(u)))}return c}var v=m(0),T=m(1),R=m(16777216);n=a.prototype,n.m=function(){if(I(this))return-P(this).m();for(var d=0,o=1,l=0;l<this.g.length;l++){var c=this.i(l);d+=(0<=c?c:4294967296+c)*o,o*=4294967296}return d},n.toString=function(d){if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(A(this))return"0";if(I(this))return"-"+P(this).toString(d);for(var o=_(Math.pow(d,6)),l=this,c="";;){var h=K(l,o).g;l=Z(l,h.j(o));var f=((0<l.g.length?l.g[0]:l.h)>>>0).toString(d);if(l=h,A(l))return f+c;for(;6>f.length;)f="0"+f;c=f+c}},n.i=function(d){return 0>d?0:d<this.g.length?this.g[d]:this.h};function A(d){if(d.h!=0)return!1;for(var o=0;o<d.g.length;o++)if(d.g[o]!=0)return!1;return!0}function I(d){return d.h==-1}n.l=function(d){return d=Z(this,d),I(d)?-1:A(d)?0:1};function P(d){for(var o=d.g.length,l=[],c=0;c<o;c++)l[c]=~d.g[c];return new a(l,~d.h).add(T)}n.abs=function(){return I(this)?P(this):this},n.add=function(d){for(var o=Math.max(this.g.length,d.g.length),l=[],c=0,h=0;h<=o;h++){var f=c+(this.i(h)&65535)+(d.i(h)&65535),u=(f>>>16)+(this.i(h)>>>16)+(d.i(h)>>>16);c=u>>>16,f&=65535,u&=65535,l[h]=u<<16|f}return new a(l,l[l.length-1]&-2147483648?-1:0)};function Z(d,o){return d.add(P(o))}n.j=function(d){if(A(this)||A(d))return v;if(I(this))return I(d)?P(this).j(P(d)):P(P(this).j(d));if(I(d))return P(this.j(P(d)));if(0>this.l(R)&&0>d.l(R))return _(this.m()*d.m());for(var o=this.g.length+d.g.length,l=[],c=0;c<2*o;c++)l[c]=0;for(c=0;c<this.g.length;c++)for(var h=0;h<d.g.length;h++){var f=this.i(c)>>>16,u=this.i(c)&65535,ut=d.i(h)>>>16,en=d.i(h)&65535;l[2*c+2*h]+=u*en,tt(l,2*c+2*h),l[2*c+2*h+1]+=f*en,tt(l,2*c+2*h+1),l[2*c+2*h+1]+=u*ut,tt(l,2*c+2*h+1),l[2*c+2*h+2]+=f*ut,tt(l,2*c+2*h+2)}for(c=0;c<o;c++)l[c]=l[2*c+1]<<16|l[2*c];for(c=o;c<2*o;c++)l[c]=0;return new a(l,0)};function tt(d,o){for(;(d[o]&65535)!=d[o];)d[o+1]+=d[o]>>>16,d[o]&=65535,o++}function ot(d,o){this.g=d,this.h=o}function K(d,o){if(A(o))throw Error("division by zero");if(A(d))return new ot(v,v);if(I(d))return o=K(P(d),o),new ot(P(o.g),P(o.h));if(I(o))return o=K(d,P(o)),new ot(P(o.g),o.h);if(30<d.g.length){if(I(d)||I(o))throw Error("slowDivide_ only works with positive integers.");for(var l=T,c=o;0>=c.l(d);)l=at(l),c=at(c);var h=At(l,1),f=At(c,1);for(c=At(c,2),l=At(l,2);!A(c);){var u=f.add(c);0>=u.l(d)&&(h=h.add(l),f=u),c=At(c,1),l=At(l,1)}return o=Z(d,h.j(o)),new ot(h,o)}for(h=v;0<=d.l(o);){for(l=Math.max(1,Math.floor(d.m()/o.m())),c=Math.ceil(Math.log(l)/Math.LN2),c=48>=c?1:Math.pow(2,c-48),f=_(l),u=f.j(o);I(u)||0<u.l(d);)l-=c,f=_(l),u=f.j(o);A(f)&&(f=T),h=h.add(f),d=Z(d,u)}return new ot(h,d)}n.A=function(d){return K(this,d).h},n.and=function(d){for(var o=Math.max(this.g.length,d.g.length),l=[],c=0;c<o;c++)l[c]=this.i(c)&d.i(c);return new a(l,this.h&d.h)},n.or=function(d){for(var o=Math.max(this.g.length,d.g.length),l=[],c=0;c<o;c++)l[c]=this.i(c)|d.i(c);return new a(l,this.h|d.h)},n.xor=function(d){for(var o=Math.max(this.g.length,d.g.length),l=[],c=0;c<o;c++)l[c]=this.i(c)^d.i(c);return new a(l,this.h^d.h)};function at(d){for(var o=d.g.length+1,l=[],c=0;c<o;c++)l[c]=d.i(c)<<1|d.i(c-1)>>>31;return new a(l,d.h)}function At(d,o){var l=o>>5;o%=32;for(var c=d.g.length-l,h=[],f=0;f<c;f++)h[f]=0<o?d.i(f+l)>>>o|d.i(f+l+1)<<32-o:d.i(f+l);return new a(h,d.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=_,a.fromString=g,Fn=a}).apply(typeof rn<"u"?rn:typeof self<"u"?self:typeof window<"u"?window:{});const sn="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}M.UNAUTHENTICATED=new M(null),M.GOOGLE_CREDENTIALS=new M("google-credentials-uid"),M.FIRST_PARTY=new M("first-party-uid"),M.MOCK_USER=new M("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new xr("@firebase/firestore");function Xi(n){ct.setLogLevel(n)}function ht(n,...t){if(ct.logLevel<=ke.DEBUG){const e=t.map(Fe);ct.debug(`Firestore (${Pt}): ${n}`,...e)}}function se(n,...t){if(ct.logLevel<=ke.ERROR){const e=t.map(Fe);ct.error(`Firestore (${Pt}): ${n}`,...e)}}function Nn(n,...t){if(ct.logLevel<=ke.WARN){const e=t.map(Fe);ct.warn(`Firestore (${Pt}): ${n}`,...e)}}function Fe(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Dn(n,r,e)}function Dn(n,t,e){let r=`FIRESTORE (${Pt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw se(r),new Error(r)}function L(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||Dn(t,i,r)}function dt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="ok",Ne="cancelled",It="unknown",w="invalid-argument",xn="deadline-exceeded",De="not-found",Lr="already-exists",On="permission-denied",Kt="unauthenticated",qn="resource-exhausted",et="failed-precondition",xe="aborted",Cn="out-of-range",Oe="unimplemented",Mn="internal",jn="unavailable",$r="data-loss";class y extends br{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ur{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(M.UNAUTHENTICATED)))}shutdown(){}}class Br{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class zr{constructor(t){this.auth=null,t.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((t=>t?(L(typeof t.accessToken=="string",42297,{t}),new Ln(t.accessToken,new M(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}class Qr{constructor(t,e,r){this.i=t,this.o=e,this.u=r,this.type="FirstParty",this.user=M.FIRST_PARTY,this.l=new Map}h(){return this.u?this.u():null}get headers(){this.l.set("X-Goog-AuthUser",this.i);const t=this.h();return t&&this.l.set("Authorization",t),this.o&&this.l.set("X-Goog-Iam-Authorization-Token",this.o),this.l}}class Gr{constructor(t,e,r){this.i=t,this.o=e,this.u=r}getToken(){return Promise.resolve(new Qr(this.i,this.o,this.u))}start(t,e){t.enqueueRetryable((()=>e(M.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class on{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kr{constructor(t,e){this.m=e,this.appCheck=null,this.T=null,jr(t)&&t.settings.appCheckToken&&(this.T=t.settings.appCheckToken),e.onInit((r=>{this.appCheck=r}))}getToken(){return this.T?Promise.resolve(new on(this.T)):this.appCheck?this.appCheck.getToken().then((t=>t?(L(typeof t.token=="string",3470,{tokenResult:t}),new on(t.token)):null)):Promise.resolve(null)}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e,r,i,s,a,p,m,_,g){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=_,this.isUsingEmulator=g}}const Wt="(default)";class Nt{constructor(t,e){this.projectId=t,this.database=e||Wt}static empty(){return new Nt("","")}get isDefaultDatabase(){return this.database===Wt}isEqual(t){return t instanceof Nt&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Jr(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%62))}return r}}function S(n,t){return n<t?-1:n>t?1:0}function Ee(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return S(r,i);{const s=new TextEncoder,a=Yr(s.encode(an(n,e)),s.encode(an(t,e)));return a!==0?a:S(r,i)}}e+=r>65535?2:1}return S(n.length,t.length)}function an(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Yr(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return S(n[e],t[e]);return S(n.length,t.length)}function Ce(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="__name__";class H{constructor(t,e,r){e===void 0?e=0:e>t.length&&V(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&V(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return H.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof H?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=H.compareSegments(t.get(i),e.get(i));if(s!==0)return s}return S(t.length,e.length)}static compareSegments(t,e){const r=H.isNumericId(t),i=H.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?H.extractNumericId(t).compare(H.extractNumericId(e)):Ee(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Fn.fromString(t.substring(4,t.length-2))}}class k extends H{construct(t,e,r){return new k(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(w,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new k(e)}static emptyPath(){return new k([])}}const Xr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends H{construct(t,e,r){return new j(t,e,r)}static isValidIdentifier(t){return Xr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ae}static keyField(){return new j([Ae])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(w,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;i<t.length;){const p=t[i];if(p==="\\"){if(i+1===t.length)throw new y(w,"Path has trailing escape character: "+t);const m=t[i+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new y(w,"Path has invalid escape sequence: "+t);r+=m,i+=2}else p==="`"?(a=!a,i++):p!=="."||a?(r+=p,i++):(s(),i++)}if(s(),a)throw new y(w,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(k.fromString(t))}static fromName(t){return new F(k.fromString(t).popFirst(5))}static empty(){return new F(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return k.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new k(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n,t,e){if(!e)throw new y(w,`Function ${n}() cannot be called with an empty ${t}.`)}function un(n){if(!F.isDocumentKey(n))throw new y(w,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ln(n){if(F.isDocumentKey(n))throw new y(w,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $n(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function oe(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":V(12329,{type:typeof n})}function G(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(w,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=oe(n);throw new y(w,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Un(n,t){if(t<=0)throw new y(w,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt=null;function Zr(){return zt===null?zt=(function(){return 268435456+Math.round(2147483648*Math.random())})():zt++,"0x"+zt.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){return n==null}function Jt(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="RestConnection",ti={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ei{get P(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.A=e+"://"+t.host,this.R=`projects/${r}/databases/${i}`,this.V=this.databaseId.database===Wt?`project_id=${r}`:`project_id=${r}&database_id=${i}`}I(t,e,r,i,s){const a=Zr(),p=this.p(t,e.toUriEncodedString());ht(ye,`Sending RPC '${t}' ${a}:`,p,r);const m={"google-cloud-resource-prefix":this.R,"x-goog-request-params":this.V};this.v(m,i,s);const{host:_}=new URL(p),g=Sn(_);return this.F(t,p,m,r,g).then((v=>(ht(ye,`Received RPC '${t}' ${a}: `,v),v)),(v=>{throw Nn(ye,`RPC '${t}' ${a} failed with error: `,v,"url: ",p,"request:",r),v}))}D(t,e,r,i,s,a){return this.I(t,e,r,i,s)}v(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Pt})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,s)=>t[s]=i)),r&&r.headers.forEach(((i,s)=>t[s]=i))}p(t,e){const r=ti[t];return`${this.A}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn,E;function hn(n){if(n===void 0)return se("RPC_ERROR","HTTP error has no status"),It;switch(n){case 200:return Te;case 400:return et;case 401:return Kt;case 403:return On;case 404:return De;case 409:return xe;case 416:return Cn;case 429:return qn;case 499:return Ne;case 500:return It;case 501:return Oe;case 503:return jn;case 504:return xn;default:return n>=200&&n<300?Te:n>=400&&n<500?et:n>=500&&n<600?Mn:It}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(E=cn||(cn={}))[E.OK=0]="OK",E[E.CANCELLED=1]="CANCELLED",E[E.UNKNOWN=2]="UNKNOWN",E[E.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",E[E.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",E[E.NOT_FOUND=5]="NOT_FOUND",E[E.ALREADY_EXISTS=6]="ALREADY_EXISTS",E[E.PERMISSION_DENIED=7]="PERMISSION_DENIED",E[E.UNAUTHENTICATED=16]="UNAUTHENTICATED",E[E.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",E[E.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",E[E.ABORTED=10]="ABORTED",E[E.OUT_OF_RANGE=11]="OUT_OF_RANGE",E[E.UNIMPLEMENTED=12]="UNIMPLEMENTED",E[E.INTERNAL=13]="INTERNAL",E[E.UNAVAILABLE=14]="UNAVAILABLE",E[E.DATA_LOSS=15]="DATA_LOSS";class ni extends ei{S(t,e){throw new Error("Not supported by FetchConnection")}async F(t,e,r,i,s){var a;const p=JSON.stringify(i);let m;try{const _={method:"POST",headers:r,body:p};s&&(_.credentials="include"),m=await fetch(e,_)}catch(_){const g=_;throw new y(hn(g.status),"Request failed with error: "+g.statusText)}if(!m.ok){let _=await m.json();Array.isArray(_)&&(_=_[0]);const g=(a=_==null?void 0:_.error)===null||a===void 0?void 0:a.message;throw new y(hn(m.status),`Request failed with error: ${g??m.statusText}`)}return m.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,r){this.alias=t,this.aggregateType=e,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function jt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ii("Invalid base64 string: "+s):s}})(t);return new nt(e)}static fromUint8Array(t){const e=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(t);return new nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return S(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const si=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(n){if(L(!!n,39018),typeof n=="string"){let t=0;const e=si.exec(n);if(L(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:D(n.seconds),nanos:D(n.nanos)}}function D(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dt(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,t){const e={typeString:n};return t&&(e.value=t),e}function Lt(n,t){if(!$n(n))throw new y(w,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){e=`Expected '${r}' field to equal '${s.value}'`;break}}if(e)throw new y(w,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=-62135596800,pn=1e6;class x{static now(){return x.fromMillis(Date.now())}static fromDate(t){return x.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*pn);return new x(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(w,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(w,"Timestamp nanoseconds out of range: "+e);if(t<fn)throw new y(w,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(w,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/pn}_compareTo(t){return this.seconds===t.seconds?S(this.nanoseconds,t.nanoseconds):S(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:x._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Lt(t,x._jsonSchema))return new x(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-fn;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}x._jsonSchemaVersion="firestore/timestamp/1.0",x._jsonSchema={type:Q("string",x._jsonSchemaVersion),seconds:Q("number"),nanoseconds:Q("number")};function je(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Qn(n){const t=n.mapValue.fields.__previous_value__;return je(t)?Qn(t):t}function xt(n){const t=ft(n.mapValue.fields.__local_write_time__.timestampValue);return new x(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__type__",oi="__max__",Qt={},Kn="__vector__",Ht="value";function pt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?je(n)?4:(function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===oi})(n)?9007199254740991:(function(e){var r,i;return((i=(((r=e==null?void 0:e.mapValue)===null||r===void 0?void 0:r.fields)||{})[Gn])===null||i===void 0?void 0:i.stringValue)===Kn})(n)?10:11:V(28295,{value:n})}function Vt(n,t){if(n===t)return!0;const e=pt(n);if(e!==pt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return xt(n).isEqual(xt(t));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=ft(i.timestampValue),p=ft(s.timestampValue);return a.seconds===p.seconds&&a.nanos===p.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,s){return Dt(i.bytesValue).isEqual(Dt(s.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,s){return D(i.geoPointValue.latitude)===D(s.geoPointValue.latitude)&&D(i.geoPointValue.longitude)===D(s.geoPointValue.longitude)})(n,t);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return D(i.integerValue)===D(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=D(i.doubleValue),p=D(s.doubleValue);return a===p?Jt(a)===Jt(p):isNaN(a)&&isNaN(p)}return!1})(n,t);case 9:return Ce(n.arrayValue.values||[],t.arrayValue.values||[],Vt);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},p=s.mapValue.fields||{};if(dn(a)!==dn(p))return!1;for(const m in a)if(a.hasOwnProperty(m)&&(p[m]===void 0||!Vt(a[m],p[m])))return!1;return!0})(n,t);default:return V(52216,{left:n})}}function Ot(n,t){return(n.values||[]).find((e=>Vt(e,t)))!==void 0}function Yt(n,t){if(n===t)return 0;const e=pt(n),r=pt(t);if(e!==r)return S(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return S(n.booleanValue,t.booleanValue);case 2:return(function(s,a){const p=D(s.integerValue||s.doubleValue),m=D(a.integerValue||a.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1})(n,t);case 3:return mn(n.timestampValue,t.timestampValue);case 4:return mn(xt(n),xt(t));case 5:return Ee(n.stringValue,t.stringValue);case 6:return(function(s,a){const p=Dt(s),m=Dt(a);return p.compareTo(m)})(n.bytesValue,t.bytesValue);case 7:return(function(s,a){const p=s.split("/"),m=a.split("/");for(let _=0;_<p.length&&_<m.length;_++){const g=S(p[_],m[_]);if(g!==0)return g}return S(p.length,m.length)})(n.referenceValue,t.referenceValue);case 8:return(function(s,a){const p=S(D(s.latitude),D(a.latitude));return p!==0?p:S(D(s.longitude),D(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return _n(n.arrayValue,t.arrayValue);case 10:return(function(s,a){var p,m,_,g;const v=s.fields||{},T=a.fields||{},R=(p=v[Ht])===null||p===void 0?void 0:p.arrayValue,A=(m=T[Ht])===null||m===void 0?void 0:m.arrayValue,I=S(((_=R==null?void 0:R.values)===null||_===void 0?void 0:_.length)||0,((g=A==null?void 0:A.values)===null||g===void 0?void 0:g.length)||0);return I!==0?I:_n(R,A)})(n.mapValue,t.mapValue);case 11:return(function(s,a){if(s===Qt&&a===Qt)return 0;if(s===Qt)return 1;if(a===Qt)return-1;const p=s.fields||{},m=Object.keys(p),_=a.fields||{},g=Object.keys(_);m.sort(),g.sort();for(let v=0;v<m.length&&v<g.length;++v){const T=Ee(m[v],g[v]);if(T!==0)return T;const R=Yt(p[m[v]],_[g[v]]);if(R!==0)return R}return S(m.length,g.length)})(n.mapValue,t.mapValue);default:throw V(23264,{C:e})}}function mn(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return S(n,t);const e=ft(n),r=ft(t),i=S(e.seconds,r.seconds);return i!==0?i:S(e.nanos,r.nanos)}function _n(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const s=Yt(e[i],r[i]);if(s)return s}return S(e.length,r.length)}function Xt(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Wn(n){return!!n&&"arrayValue"in n}function gn(n){return!!n&&"nullValue"in n}function yn(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function we(n){return!!n&&"mapValue"in n}function St(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return jt(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=St(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=St(n.arrayValue.values[e]);return t}return Object.assign({},n)}class Zt{constructor(t,e){this.position=t,this.inclusive=e}}function wn(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Vt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{}class U extends Jn{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ai(t,e,r):e==="array-contains"?new ci(t,r):e==="in"?new hi(t,r):e==="not-in"?new di(t,r):e==="array-contains-any"?new fi(t,r):new U(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ui(t,r):new li(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Yt(e,this.value)):e!==null&&pt(this.value)===pt(e)&&this.matchesComparison(Yt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return V(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mt extends Jn{constructor(t,e){super(),this.filters=t,this.op=e,this.N=null}static create(t,e){return new mt(t,e)}matches(t){return(function(r){return r.op==="and"})(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.N!==null||(this.N=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.N}getFilters(){return Object.assign([],this.filters)}}function Hn(n,t){return n instanceof U?(function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&Vt(r.value,i.value)})(n,t):n instanceof mt?(function(r,i){return i instanceof mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,p)=>s&&Hn(a,i.filters[p])),!0):!1})(n,t):void V(19439)}class ai extends U{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class ui extends U{constructor(t,e){super(t,"in",e),this.keys=Yn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class li extends U{constructor(t,e){super(t,"not-in",e),this.keys=Yn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yn(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>F.fromName(r.referenceValue)))}class ci extends U{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wn(e)&&Ot(e.arrayValue,this.value)}}class hi extends U{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ot(this.value.arrayValue,e)}}class di extends U{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ot(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ot(this.value.arrayValue,e)}}class fi extends U{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wn(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Ot(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e="asc"){this.field=t,this.dir=e}}function pi(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static fromTimestamp(t){return new N(t)}static min(){return new N(new x(0,0))}static max(){return new N(new x(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e){this.comparator=t,this.root=e||q.EMPTY}insert(t,e){return new ee(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Gt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Gt(this.root,t,this.comparator,!0)}}class Gt{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??q.RED,this.left=i??q.EMPTY,this.right=s??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new q(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw V(43730,{key:this.key,value:this.value});if(this.right.isRed())throw V(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw V(27949);return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw V(57766)}get value(){throw V(16141)}get color(){throw V(16727)}get left(){throw V(29726)}get right(){throw V(36894)}copy(t,e,r,i,s){return this}insert(t,e,r){return new q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.comparator=t,this.data=new ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new vn(this.data.getIterator())}getIteratorFrom(t){return new vn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class vn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.fields=t,t.sort(j.comparator)}static empty(){return new _t([])}unionWith(t){let e=new qt(j.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new _t(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ce(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.value=t}static empty(){return new $({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!we(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=St(e)}setAll(t){let e=j.emptyPath(),r={},i=[];t.forEach(((a,p)=>{if(!e.isImmediateParentOf(p)){const m=this.getFieldsMap(e);this.applyChanges(m,r,i),r={},i=[],e=p.popLast()}a?r[p.lastSegment()]=St(a):i.push(p.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());we(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];we(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){jt(e,((i,s)=>t[i]=s));for(const i of r)delete t[i]}clone(){return new $(St(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e,r,i,s,a,p){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=p}static newInvalidDocument(t){return new Y(t,0,N.min(),N.min(),N.min(),$.empty(),0)}static newFoundDocument(t,e,r,i){return new Y(t,1,e,N.min(),r,i,0)}static newNoDocument(t,e){return new Y(t,2,e,N.min(),N.min(),$.empty(),0)}static newUnknownDocument(t,e){return new Y(t,3,e,N.min(),N.min(),$.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e=null,r=[],i=[],s=null,a=null,p=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=p,this.O=null}}function Tn(n,t=null,e=[],r=[],i=null,s=null,a=null){return new mi(n,t,e,r,i,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e=null,r=[],i=[],s=null,a="F",p=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=p,this.endAt=m,this.q=null,this.B=null,this.$=null,this.startAt,this.endAt}}function Xn(n){return n.collectionGroup!==null}function Zn(n){const t=dt(n);if(t.q===null){t.q=[];const e=new Set;for(const s of t.explicitOrderBy)t.q.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let p=new qt(j.comparator);return a.filters.forEach((m=>{m.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(t).forEach((s=>{e.has(s.canonicalString())||s.isKeyField()||t.q.push(new te(s,r))})),e.has(j.keyField().canonicalString())||t.q.push(new te(j.keyField(),r))}return t.q}function Ie(n){const t=dt(n);return t.B||(t.B=tr(t,Zn(n))),t.B}function tr(n,t){if(n.limitType==="F")return Tn(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new te(i.field,s)}));const e=n.endAt?new Zt(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zt(n.startAt.position,n.startAt.inclusive):null;return Tn(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ve(n,t){const e=n.filters.concat([t]);return new yt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function _i(n,t){return(function(r,i){if(r.limit!==i.limit||r.orderBy.length!==i.orderBy.length)return!1;for(let s=0;s<r.orderBy.length;s++)if(!pi(r.orderBy[s],i.orderBy[s]))return!1;if(r.filters.length!==i.filters.length)return!1;for(let s=0;s<r.filters.length;s++)if(!Hn(r.filters[s],i.filters[s]))return!1;return r.collectionGroup===i.collectionGroup&&!!r.path.isEqual(i.path)&&!!wn(r.startAt,i.startAt)&&wn(r.endAt,i.endAt)})(Ie(n),Ie(t))&&n.limitType===t.limitType}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jt(t)?"-0":t}}function nr(n,t){return(function(r){return typeof r=="number"&&Number.isInteger(r)&&!Jt(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER})(t)?(function(r){return{integerValue:""+r}})(t):er(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this._=void 0}}class rr extends ae{}class ir extends ae{constructor(t){super(),this.elements=t}}class sr extends ae{constructor(t){super(),this.elements=t}}class or extends ae{constructor(t,e){super(),this.serializer=t,this.k=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this.field=t,this.transform=e}}class C{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new C}static exists(t){return new C(void 0,t)}static updateTime(t){return new C(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}class le{}class ar extends le{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Le extends le{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class ce extends le{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ur extends le{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi={asc:"ASCENDING",desc:"DESCENDING"},yi={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wi={and:"AND",or:"OR"};class vi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Pe(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ti(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ei(n,t){return Pe(n,t.toTimestamp())}function kt(n){return L(!!n,49232),N.fromTimestamp((function(e){const r=ft(e);return new x(r.seconds,r.nanos)})(n))}function $e(n,t){return Re(n,t).canonicalString()}function Re(n,t){const e=(function(i){return new k(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function ne(n,t){return $e(n.databaseId,t.path)}function be(n,t){const e=(function(i){const s=k.fromString(i);return L(hr(s),10190,{key:s.toString()}),s})(t);if(e.get(1)!==n.databaseId.projectId)throw new y(w,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(w,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F((function(i){return L(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(e))}function En(n,t,e){return{name:ne(n,t),fields:e.value.mapValue.fields}}function Ai(n,t){return"found"in t?(function(r,i){L(!!i.found,43571),i.found.name,i.found.updateTime;const s=be(r,i.found.name),a=kt(i.found.updateTime),p=i.found.createTime?kt(i.found.createTime):N.min(),m=new $({mapValue:{fields:i.found.fields}});return Y.newFoundDocument(s,a,p,m)})(n,t):"missing"in t?(function(r,i){L(!!i.missing,3894),L(!!i.readTime,22933);const s=be(r,i.missing),a=kt(i.readTime);return Y.newNoDocument(s,a)})(n,t):V(7234,{result:t})}function Ii(n,t){let e;if(t instanceof ar)e={update:En(n,t.key,t.value)};else if(t instanceof ce)e={delete:ne(n,t.key)};else if(t instanceof Le)e={update:En(n,t.key,t.data),updateMask:bi(t.fieldMask)};else{if(!(t instanceof ur))return V(16599,{L:t.type});e={verify:ne(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(s,a){const p=a.transform;if(p instanceof rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ir)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof sr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof or)return{fieldPath:a.field.canonicalString(),increment:p.k};throw V(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Ei(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V(27497)})(n,t.precondition)),e}function lr(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=(function(_,g){return $e(_.databaseId,g)})(n,i);const s=(function(_){if(_.length!==0)return cr(mt.create(_,"and"))})(t.filters);s&&(e.structuredQuery.where=s);const a=(function(_){if(_.length!==0)return _.map((g=>(function(T){return{field:st(T.field),direction:Vi(T.dir)}})(g)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const p=(function(_,g){return _.useProto3Json||zn(g)?g:{value:g}})(n,t.limit);return p!==null&&(e.structuredQuery.limit=p),t.startAt&&(e.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(t.endAt)),{M:e,parent:i}}function Vi(n){return gi[n]}function Pi(n){return yi[n]}function Ri(n){return wi[n]}function st(n){return{fieldPath:n.canonicalString()}}function cr(n){return n instanceof U?(function(e){if(e.op==="=="){if(yn(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NAN"}};if(gn(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(yn(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NOT_NAN"}};if(gn(e.value))return{unaryFilter:{field:st(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:st(e.field),op:Pi(e.op),value:e.value}}})(n):n instanceof mt?(function(e){const r=e.getFilters().map((i=>cr(i)));return r.length===1?r[0]:{compositeFilter:{op:Ri(e.op),filters:r}}})(n):V(54877,{filter:n})}function bi(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function hr(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return new vi(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,r=1e3,i=1.5,s=6e4){this.U=t,this.timerId=e,this.j=r,this.W=i,this.K=s,this.G=0,this.J=null,this.H=Date.now(),this.reset()}reset(){this.G=0}Y(){this.G=this.K}Z(t){this.cancel();const e=Math.floor(this.G+this.X()),r=Math.max(0,Date.now()-this.H),i=Math.max(0,e-r);i>0&&ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.G} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.J=this.U.enqueueAfterDelay(this.timerId,i,(()=>(this.H=Date.now(),t()))),this.G*=this.W,this.G<this.j&&(this.G=this.j),this.G>this.K&&(this.G=this.K)}tt(){this.J!==null&&(this.J.skipDelay(),this.J=null)}cancel(){this.J!==null&&(this.J.cancel(),this.J=null)}X(){return(Math.random()-.5)*this.G}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{}class ki extends Si{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.et=!1}rt(){if(this.et)throw new y(et,"The client has already been terminated.")}I(t,e,r,i){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.I(t,Re(e,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===Kt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(It,s.toString())}))}D(t,e,r,i,s){return this.rt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,p])=>this.connection.D(t,Re(e,r),i,a,p,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===Kt&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new y(It,a.toString())}))}terminate(){this.et=!0,this.connection.terminate()}}async function Rt(n,t){const e=dt(n),r={writes:t.map((i=>Ii(e.serializer,i)))};await e.I("Commit",e.serializer.databaseId,k.emptyPath(),r)}async function fr(n,t){const e=dt(n),r={documents:t.map((p=>ne(e.serializer,p)))},i=await e.D("BatchGetDocuments",e.serializer.databaseId,k.emptyPath(),r,t.length),s=new Map;i.forEach((p=>{const m=Ai(e.serializer,p);s.set(m.key.toString(),m)}));const a=[];return t.forEach((p=>{const m=s.get(p.toString());L(!!m,55234,{key:p}),a.push(m)})),a}async function Fi(n,t){const e=dt(n),{M:r,parent:i}=lr(e.serializer,Ie(t));return(await e.D("RunQuery",e.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((s=>!!s.document)).map((s=>(function(p,m,_){const g=be(p,m.name),v=kt(m.updateTime),T=m.createTime?kt(m.createTime):N.min(),R=new $({mapValue:{fields:m.fields}}),A=Y.newFoundDocument(g,v,T,R);return _?A.setHasCommittedMutations():A})(e.serializer,s.document,void 0)))}async function Ni(n,t,e){var r;const i=dt(n),{request:s,nt:a,parent:p}=(function(v,T,R,A){const{M:I,parent:P}=lr(v,T),Z={},tt=[];let ot=0;return R.forEach((K=>{const at="aggregate_"+ot++;Z[at]=K.alias,K.aggregateType==="count"?tt.push({alias:at,count:{}}):K.aggregateType==="avg"?tt.push({alias:at,avg:{field:st(K.fieldPath)}}):K.aggregateType==="sum"&&tt.push({alias:at,sum:{field:st(K.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:tt,structuredQuery:I.structuredQuery},parent:I.parent},nt:Z,parent:P}})(i.serializer,(function(v){const T=dt(v);return T.$||(T.$=tr(T,v.explicitOrderBy)),T.$})(t),e);i.connection.P||delete s.parent;const m=(await i.D("RunAggregationQuery",i.serializer.databaseId,p,s,1)).filter((g=>!!g.result));L(m.length===1,64727);const _=(r=m[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(_).reduce(((g,v)=>(g[a[v]]=_[v],g)),{})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="ComponentProvider",Ft=new Map;function rt(n){if(n._terminated)throw new y(et,"The client has already been terminated.");if(!Ft.has(n)){ht(pr,"Initializing Datastore");const t=(function(s){return new ni(s)})((function(s,a,p,m){return new Wr(s,a,p,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Bn(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),e=Ue(n._databaseId),r=(function(s,a,p,m){return new ki(s,a,p,m)})(n._authCredentials,n._appCheckCredentials,t,e);Ft.set(n,r)}return Ft.get(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=1048576,mr="firestore.googleapis.com",An=!0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(w,"Can't provide ssl option if host option is not set");this.host=mr,this.ssl=An}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:An;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Di)throw new y(w,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(s,a,p,m){if(a===!0&&m===!0)throw new y(w,`${s} and ${p} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bn((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(w,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class it{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new In({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new y(et,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new y(et,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new In(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ur;switch(r.type){case"firstParty":return new Gr(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(w,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ft.get(e);r&&(ht(pr,"Removing Datastore"),Ft.delete(e),r.terminate())})(this),Promise.resolve()}}function ts(n,t,e){e||(e=Wt);const r=kn(n,"firestore/lite");if(r.isInitialized(e))throw new y(et,"Firestore can only be initialized once per app.");return r.initialize({options:t,instanceIdentifier:e})}function es(n,t){const e=typeof n=="object"?n:Nr(),r=typeof n=="string"?n:t||"(default)",i=kn(e,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Dr("firestore");s&&xi(i,...s)}return i}function xi(n,t,e,r={}){var i;n=G(n,it);const s=Sn(t),a=n._getSettings(),p=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),m=`${t}:${e}`;s&&(Sr(`https://${m}`),kr("Firestore",!0)),a.host!==mr&&a.host!==m&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},a),{host:m,ssl:s,emulatorOptions:r});if(!ie(_,p)&&(n._setSettings(_),r.mockUserToken)){let g,v;if(typeof r.mockUserToken=="string")g=r.mockUserToken,v=M.MOCK_USER;else{g=Fr(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new y(w,"mockUserToken must contain 'sub' or 'user_id' field!");v=new M(T)}n._authCredentials=new Br(new Ln(g,v))}}function ns(n){return n=G(n,it),Or(n.app,"firestore/lite"),n._delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Oi{constructor(t,e,r){this._userDataWriter=e,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new B(this.firestore,t,this._query)}}class b{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new W(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new b(this.firestore,t,this._key)}toJSON(){return{type:b._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Lt(e,b._jsonSchema))return new b(t,r||null,new F(k.fromString(e.referencePath)))}}b._jsonSchemaVersion="firestore/documentReference/1.0",b._jsonSchema={type:Q("string",b._jsonSchemaVersion),referencePath:Q("string")};class W extends B{constructor(t,e,r){super(t,e,(function(s){return new yt(s)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new b(this.firestore,null,new F(t))}withConverter(t){return new W(this.firestore,t,this._path)}}function rs(n,t,...e){if(n=O(n),Me("collection","path",t),n instanceof it){const r=k.fromString(t,...e);return ln(r),new W(n,null,r)}{if(!(n instanceof b||n instanceof W))throw new y(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return ln(r),new W(n.firestore,null,r)}}function is(n,t){if(n=G(n,it),Me("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new y(w,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new B(n,null,(function(r){return new yt(k.emptyPath(),r)})(t))}function qi(n,t,...e){if(n=O(n),arguments.length===1&&(t=Hr.newId()),Me("doc","path",t),n instanceof it){const r=k.fromString(t,...e);return un(r),new b(n,null,new F(r))}{if(!(n instanceof b||n instanceof W))throw new y(w,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return un(r),new b(n.firestore,n instanceof W?n.converter:null,new F(r))}}function ss(n,t){return n=O(n),t=O(t),(n instanceof b||n instanceof W)&&(t instanceof b||t instanceof W)&&n.firestore===t.firestore&&n.path===t.path&&n.converter===t.converter}function _r(n,t){return n=O(n),t=O(t),n instanceof B&&t instanceof B&&n.firestore===t.firestore&&_i(n._query,t._query)&&n.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this._byteString=t}static fromBase64String(t){try{return new z(nt.fromBase64String(t))}catch(e){throw new y(w,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new z(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:z._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Lt(t,z._jsonSchema))return z.fromBase64String(t.bytes)}}z._jsonSchemaVersion="firestore/bytes/1.0",z._jsonSchema={type:Q("string",z._jsonSchemaVersion),bytes:Q("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(w,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function os(){return new wt(Ae)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(w,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(w,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return S(this._lat,t._lat)||S(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:X._jsonSchemaVersion}}static fromJSON(t){if(Lt(t,X._jsonSchema))return new X(t.latitude,t.longitude)}}X._jsonSchemaVersion="firestore/geoPoint/1.0",X._jsonSchema={type:Q("string",X._jsonSchemaVersion),latitude:Q("number"),longitude:Q("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,t._values)}toJSON(){return{type:J._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Lt(t,J._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new J(t.vectorValues);throw new y(w,"Expected 'vectorValues' field to be a number array")}}}J._jsonSchemaVersion="firestore/vectorValue/1.0",J._jsonSchema={type:Q("string",J._jsonSchemaVersion),vectorValues:Q("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=/^__.*__$/;class Mi{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new ar(t,this.data,e,this.fieldTransforms)}}class gr{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yr(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V(40011,{it:n})}}class he{constructor(t,e,r,i,s,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.st(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get it(){return this.settings.it}ot(t){return new he(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ut(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ot({path:r,_t:!1});return i.ct(t),i}lt(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ot({path:r,_t:!1});return i.st(),i}ht(t){return this.ot({path:void 0,_t:!0})}ft(t){return re(t,this.settings.methodName,this.settings.dt||!1,this.path,this.settings.Et)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}st(){if(this.path)for(let t=0;t<this.path.length;t++)this.ct(this.path.get(t))}ct(t){if(t.length===0)throw this.ft("Document fields must not be empty");if(yr(this.it)&&Ci.test(t))throw this.ft('Document fields cannot begin and end with "__"')}}class ji{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ue(t)}Tt(t,e,r,i=!1){return new he({it:t,methodName:e,Et:r,path:j.emptyPath(),_t:!1,dt:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tt(n){const t=n._freezeSettings(),e=Ue(n._databaseId);return new ji(n._databaseId,!!t.ignoreUndefinedProperties,e)}function de(n,t,e,r,i,s={}){const a=n.Tt(s.merge||s.mergeFields?2:0,t,e,i);Je("Data must be an object, but it was:",a,r);const p=Tr(r,a);let m,_;if(s.merge)m=new _t(a.fieldMask),_=a.fieldTransforms;else if(s.mergeFields){const g=[];for(const v of s.mergeFields){const T=Mt(t,v,e);if(!a.contains(T))throw new y(w,`Field '${T}' is specified in your field mask but missing from your input data.`);Ar(g,T)||g.push(T)}m=new _t(g),_=a.fieldTransforms.filter((v=>m.covers(v.field)))}else m=null,_=a.fieldTransforms;return new Mi(new $(p),m,_)}class $t extends vt{_toFieldTransform(t){if(t.it!==2)throw t.it===1?t.ft(`${this._methodName}() can only appear at the top level of your update data`):t.ft(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $t}}function wr(n,t,e){return new he({it:3,Et:t.settings.Et,methodName:n._methodName,_t:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Be extends vt{_toFieldTransform(t){return new ue(t.path,new rr)}isEqual(t){return t instanceof Be}}class ze extends vt{constructor(t,e){super(t),this.Pt=e}_toFieldTransform(t){const e=wr(this,t,!0),r=this.Pt.map((s=>Et(s,e))),i=new ir(r);return new ue(t.path,i)}isEqual(t){return t instanceof ze&&ie(this.Pt,t.Pt)}}class Qe extends vt{constructor(t,e){super(t),this.Pt=e}_toFieldTransform(t){const e=wr(this,t,!0),r=this.Pt.map((s=>Et(s,e))),i=new sr(r);return new ue(t.path,i)}isEqual(t){return t instanceof Qe&&ie(this.Pt,t.Pt)}}class Ge extends vt{constructor(t,e){super(t),this.At=e}_toFieldTransform(t){const e=new or(t.serializer,nr(t.serializer,this.At));return new ue(t.path,e)}isEqual(t){return t instanceof Ge&&this.At===t.At}}function Ke(n,t,e,r){const i=n.Tt(1,t,e);Je("Data must be an object, but it was:",i,r);const s=[],a=$.empty();jt(r,((m,_)=>{const g=He(t,m,e);_=O(_);const v=i.lt(g);if(_ instanceof $t)s.push(g);else{const T=Et(_,v);T!=null&&(s.push(g),a.set(g,T))}}));const p=new _t(s);return new gr(a,p,i.fieldTransforms)}function We(n,t,e,r,i,s){const a=n.Tt(1,t,e),p=[Mt(t,r,e)],m=[i];if(s.length%2!=0)throw new y(w,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<s.length;T+=2)p.push(Mt(t,s[T])),m.push(s[T+1]);const _=[],g=$.empty();for(let T=p.length-1;T>=0;--T)if(!Ar(_,p[T])){const R=p[T];let A=m[T];A=O(A);const I=a.lt(R);if(A instanceof $t)_.push(R);else{const P=Et(A,I);P!=null&&(_.push(R),g.set(R,P))}}const v=new _t(_);return new gr(g,v,a.fieldTransforms)}function vr(n,t,e,r=!1){return Et(e,n.Tt(r?4:3,t))}function Et(n,t){if(Er(n=O(n)))return Je("Unsupported field value:",t,n),Tr(n,t);if(n instanceof vt)return(function(r,i){if(!yr(i.it))throw i.ft(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ft(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings._t&&t.it!==4)throw t.ft("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const p of r){let m=Et(p,i.ht(a));m==null&&(m={nullValue:"NULL_VALUE"}),s.push(m),a++}return{arrayValue:{values:s}}})(n,t)}return(function(r,i){if((r=O(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nr(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=x.fromDate(r);return{timestampValue:Pe(i.serializer,s)}}if(r instanceof x){const s=new x(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pe(i.serializer,s)}}if(r instanceof X)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof z)return{bytesValue:Ti(i.serializer,r._byteString)};if(r instanceof b){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.ft(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$e(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof J)return(function(a,p){return{mapValue:{fields:{[Gn]:{stringValue:Kn},[Ht]:{arrayValue:{values:a.toArray().map((_=>{if(typeof _!="number")throw p.ft("VectorValues must only contain numeric values.");return er(p.serializer,_)}))}}}}}})(r,i);throw i.ft(`Unsupported field value: ${oe(r)}`)})(n,t)}function Tr(n,t){const e={};return(function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0})(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jt(n,((r,i)=>{const s=Et(i,t.ut(r));s!=null&&(e[r]=s)})),{mapValue:{fields:e}}}function Er(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof x||n instanceof X||n instanceof z||n instanceof b||n instanceof vt||n instanceof J)}function Je(n,t,e){if(!Er(e)||!$n(e)){const r=oe(e);throw r==="an object"?t.ft(n+" a custom object"):t.ft(n+" "+r)}}function Mt(n,t,e){if((t=O(t))instanceof wt)return t._internalPath;if(typeof t=="string")return He(n,t);throw re("Field path arguments must be of type string or ",n,!1,void 0,e)}const Li=new RegExp("[~\\*/\\[\\]]");function He(n,t,e){if(t.search(Li)>=0)throw re(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new wt(...t.split("."))._internalPath}catch{throw re(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function re(n,t,e,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let p=`Function ${t}() called with invalid data`;e&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(s||a)&&(m+=" (found",s&&(m+=` in field ${r}`),a&&(m+=` in document ${i}`),m+=")"),new y(w,p+n+m)}function Ar(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new b(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ir(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ye("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ir extends gt{data(){return super.data()}}class Se{constructor(t,e){this._docs=e,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,e){this._docs.forEach(t,e)}}function $i(n,t){return n=O(n),t=O(t),n instanceof gt&&t instanceof gt?n._firestore===t._firestore&&n._key.isEqual(t._key)&&(n._document===null?t._document===null:n._document.isEqual(t._document))&&n._converter===t._converter:n instanceof Se&&t instanceof Se&&_r(n.query,t.query)&&Ce(n.docs,t.docs,$i)}function Ye(n,t){return typeof t=="string"?He(n,t):t instanceof wt?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{}class Ut extends Xe{}function as(n,t,...e){let r=[];t instanceof Xe&&r.push(t),r=r.concat(e),(function(s){const a=s.filter((m=>m instanceof bt)).length,p=s.filter((m=>m instanceof Bt)).length;if(a>1||a>0&&p>0)throw new y(w,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Bt extends Ut{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Bt(t,e,r)}_apply(t){const e=this._parse(t);return Pr(t._query,e),new B(t.firestore,t.converter,Ve(t._query,e))}_parse(t){const e=Tt(t.firestore);return(function(s,a,p,m,_,g,v){let T;if(_.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new y(w,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Pn(v,g);const A=[];for(const I of v)A.push(Vn(m,s,I));T={arrayValue:{values:A}}}else T=Vn(m,s,v)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Pn(v,g),T=vr(p,a,v,g==="in"||g==="not-in");return U.create(_,g,T)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function us(n,t,e){const r=t,i=Ye("where",n);return Bt._create(i,r,e)}class bt extends Xe{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new bt(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,s){let a=i;const p=s.getFlattenedFilters();for(const m of p)Pr(a,m),a=Ve(a,m)})(t._query,e),new B(t.firestore,t.converter,Ve(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ls(...n){return n.forEach((t=>Rr("or",t))),bt._create("or",n)}function cs(...n){return n.forEach((t=>Rr("and",t))),bt._create("and",n)}class Ze extends Ut{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ze(t,e)}_apply(t){const e=(function(i,s,a){if(i.startAt!==null)throw new y(w,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new y(w,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new te(s,a)})(t._query,this._field,this._direction);return new B(t.firestore,t.converter,(function(i,s){const a=i.explicitOrderBy.concat([s]);return new yt(i.path,i.collectionGroup,a,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function hs(n,t="asc"){const e=t,r=Ye("orderBy",n);return Ze._create(r,e)}class fe extends Ut{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new fe(t,e,r)}_apply(t){return new B(t.firestore,t.converter,(function(r,i,s){return new yt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)})(t._query,this._limit,this._limitType))}}function ds(n){return Un("limit",n),fe._create("limit",n,"F")}function fs(n){return Un("limitToLast",n),fe._create("limitToLast",n,"L")}class pe extends Ut{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new pe(t,e,r)}_apply(t){const e=Vr(t,this.type,this._docOrFields,this._inclusive);return new B(t.firestore,t.converter,(function(i,s){return new yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(t._query,e))}}function ps(...n){return pe._create("startAt",n,!0)}function ms(...n){return pe._create("startAfter",n,!1)}class me extends Ut{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new me(t,e,r)}_apply(t){const e=Vr(t,this.type,this._docOrFields,this._inclusive);return new B(t.firestore,t.converter,(function(i,s){return new yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)})(t._query,e))}}function _s(...n){return me._create("endBefore",n,!1)}function gs(...n){return me._create("endAt",n,!0)}function Vr(n,t,e,r){if(e[0]=O(e[0]),e[0]instanceof gt)return(function(s,a,p,m,_){if(!m)throw new y(De,`Can't use a DocumentSnapshot that doesn't exist for ${p}().`);const g=[];for(const v of Zn(s))if(v.field.isKeyField())g.push(Xt(a,m.key));else{const T=m.data.field(v.field);if(je(T))throw new y(w,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(T===null){const R=v.field.canonicalString();throw new y(w,`Invalid query. You are trying to start or end a query using a document for which the field '${R}' (used as the orderBy) does not exist.`)}g.push(T)}return new Zt(g,_)})(n._query,n.firestore._databaseId,t,e[0]._document,r);{const i=Tt(n.firestore);return(function(a,p,m,_,g,v){const T=a.explicitOrderBy;if(g.length>T.length)throw new y(w,`Too many arguments provided to ${_}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const R=[];for(let A=0;A<g.length;A++){const I=g[A];if(T[A].field.isKeyField()){if(typeof I!="string")throw new y(w,`Invalid query. Expected a string for document ID in ${_}(), but got a ${typeof I}`);if(!Xn(a)&&I.indexOf("/")!==-1)throw new y(w,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${_}() must be a plain document ID, but '${I}' contains a slash.`);const P=a.path.child(k.fromString(I));if(!F.isDocumentKey(P))throw new y(w,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${_}() must result in a valid document path, but '${P}' is not because it contains an odd number of segments.`);const Z=new F(P);R.push(Xt(p,Z))}else{const P=vr(m,_,I);R.push(P)}}return new Zt(R,v)})(n._query,n.firestore._databaseId,i,t,e,r)}}function Vn(n,t,e){if(typeof(e=O(e))=="string"){if(e==="")throw new y(w,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xn(t)&&e.indexOf("/")!==-1)throw new y(w,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(k.fromString(e));if(!F.isDocumentKey(r))throw new y(w,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xt(n,new F(r))}if(e instanceof b)return Xt(n,e._key);throw new y(w,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oe(e)}.`)}function Pn(n,t){if(!Array.isArray(n)||n.length===0)throw new y(w,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pr(n,t){const e=(function(i,s){for(const a of i)for(const p of a.getFlattenedFilters())if(s.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new y(w,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(w,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Rr(n,t){if(!(t instanceof Bt||t instanceof bt))throw new y(w,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Ui{convertValue(t,e="none"){switch(pt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return D(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Dt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw V(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return jt(t,((i,s)=>{r[i]=this.convertValue(s,e)})),r}convertVectorValue(t){var e,r,i;const s=(i=(r=(e=t.fields)===null||e===void 0?void 0:e[Ht].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>D(a.doubleValue)));return new J(s)}convertGeoPoint(t){return new X(D(t.latitude),D(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Qn(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(xt(t));default:return null}}convertTimestamp(t){const e=ft(t);return new x(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=k.fromString(t);L(hr(r),9688,{name:t});const i=new Nt(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(e)||se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class ge extends Ui{constructor(t){super(),this.firestore=t}convertBytes(t){return new z(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new b(this.firestore,null,e)}}function ys(n){const t=rt((n=G(n,b)).firestore),e=new ge(n.firestore);return fr(t,[n._key]).then((r=>{L(r.length===1,15618);const i=r[0];return new gt(n.firestore,e,n._key,i.isFoundDocument()?i:null,n.converter)}))}function ws(n){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new y(Oe,"limitToLast() queries require specifying at least one orderBy() clause")})((n=G(n,B))._query);const t=rt(n.firestore),e=new ge(n.firestore);return Fi(t,n._query).then((r=>{const i=r.map((s=>new Ir(n.firestore,e,s.key,s,n.converter)));return n._query.limitType==="L"&&i.reverse(),new Se(n,i)}))}function vs(n,t,e){const r=_e((n=G(n,b)).converter,t,e),i=de(Tt(n.firestore),"setDoc",n._key,r,n.converter!==null,e);return Rt(rt(n.firestore),[i.toMutation(n._key,C.none())])}function Ts(n,t,e,...r){const i=Tt((n=G(n,b)).firestore);let s;return s=typeof(t=O(t))=="string"||t instanceof wt?We(i,"updateDoc",n._key,t,e,r):Ke(i,"updateDoc",n._key,t),Rt(rt(n.firestore),[s.toMutation(n._key,C.exists(!0))])}function Es(n){return Rt(rt((n=G(n,b)).firestore),[new ce(n._key,C.none())])}function As(n,t){const e=qi(n=G(n,W)),r=_e(n.converter,t),i=de(Tt(n.firestore),"addDoc",e._key,r,e.converter!==null,{});return Rt(rt(n.firestore),[i.toMutation(e._key,C.exists(!1))]).then((()=>e))}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return Bi(n,{count:zi()})}function Bi(n,t){const e=G(n.firestore,it),r=rt(e),i=(function(a,p){const m=[];for(const _ in a)Object.prototype.hasOwnProperty.call(a,_)&&m.push(p(a[_],_,a));return m})(t,((s,a)=>new ri(a,s.aggregateType,s._internalFieldPath)));return Ni(r,n._query,i).then((s=>(function(p,m,_){const g=new ge(p);return new Oi(m,g,_)})(e,n,s)))}function Vs(n){return new Ct("sum",Mt("sum",n))}function Ps(n){return new Ct("avg",Mt("average",n))}function zi(){return new Ct("count")}function Rs(n,t){var e,r;return n instanceof Ct&&t instanceof Ct&&n.aggregateType===t.aggregateType&&((e=n._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((r=t._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function bs(n,t){return _r(n.query,t.query)&&ie(n.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){return new $t("deleteField")}function ks(){return new Be("serverTimestamp")}function Fs(...n){return new ze("arrayUnion",n)}function Ns(...n){return new Qe("arrayRemove",n)}function Ds(n){return new Ge("increment",n)}function xs(n){return new J(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Tt(t)}set(t,e,r){this._verifyNotCommitted();const i=lt(t,this._firestore),s=_e(i.converter,e,r),a=de(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,C.none())),this}update(t,e,r,...i){this._verifyNotCommitted();const s=lt(t,this._firestore);let a;return a=typeof(e=O(e))=="string"||e instanceof wt?We(this._dataReader,"WriteBatch.update",s._key,e,r,i):Ke(this._dataReader,"WriteBatch.update",s._key,e),this._mutations.push(a.toMutation(s._key,C.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=lt(t,this._firestore);return this._mutations=this._mutations.concat(new ce(e._key,C.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(et,"A write batch can no longer be used after commit() has been called.")}}function lt(n,t){if((n=O(n)).firestore!==t)throw new y(w,"Provided document reference is from a different Firestore instance.");return n}function Os(n){const t=rt(n=G(n,it));return new Qi(n,(e=>Rt(t,e)))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new y(w,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await fr(this.datastore,t);return e.forEach((r=>this.recordVersion(r))),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new ce(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach((e=>{t.delete(e.key.toString())})),t.forEach(((e,r)=>{const i=F.fromPath(r);this.mutations.push(new ur(i,this.precondition(i)))})),await Rt(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw V(50498,{Rt:t.constructor.name});e=N.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new y(xe,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(N.min())?C.exists(!1):C.updateTime(e):C.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(N.min()))throw new y(w,"Can't update a document that doesn't exist.");return C.updateTime(e)}return C.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={maxAttempts:5};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Vt=r.maxAttempts,this.It=new dr(this.asyncQueue,"transaction_retry")}yt(){this.Vt-=1,this.gt()}gt(){this.It.Z((async()=>{const t=new Gi(this.datastore),e=this.wt(t);e&&e.then((r=>{this.asyncQueue.enqueueAndForget((()=>t.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.vt(i)}))))})).catch((r=>{this.vt(r)}))}))}wt(t){try{const e=this.updateFunction(t);return!zn(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}vt(t){this.Vt>0&&this.Ft(t)?(this.Vt-=1,this.asyncQueue.enqueueAndForget((()=>(this.gt(),Promise.resolve())))):this.deferred.reject(t)}Ft(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!(function(i){switch(i){case Te:return V(64938);case Ne:case It:case xn:case qn:case Mn:case jn:case Kt:return!1;case w:case De:case Lr:case On:case et:case xe:case Cn:case Oe:case $r:return!0;default:return V(15467,{code:i})}})(e)}return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const a=Date.now()+r,p=new tn(t,e,a,i,s);return p.start(r),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(Ne,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="AsyncQueue";class Ji{constructor(t=Promise.resolve()){this.bt=[],this.Dt=!1,this.St=[],this.Ct=null,this.Nt=!1,this.Ot=!1,this.qt=[],this.It=new dr(this,"async_queue_retry"),this.Bt=()=>{const r=ve();r&&ht(Rn,"Visibility state changed to "+r.visibilityState),this.It.tt()},this.$t=t;const e=ve();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Bt)}get isShuttingDown(){return this.Dt}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Qt(),this.kt(t)}enterRestrictedMode(t){if(!this.Dt){this.Dt=!0,this.Ot=t||!1;const e=ve();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Bt)}}enqueue(t){if(this.Qt(),this.Dt)return new Promise((()=>{}));const e=new qe;return this.kt((()=>this.Dt&&this.Ot?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.bt.push(t),this.Lt())))}async Lt(){if(this.bt.length!==0){try{await this.bt[0](),this.bt.shift(),this.It.reset()}catch(t){if(!(function(r){return r.name==="IndexedDbTransactionError"})(t))throw t;ht(Rn,"Operation failed with retryable error: "+t)}this.bt.length>0&&this.It.Z((()=>this.Lt()))}}kt(t){const e=this.$t.then((()=>(this.Nt=!0,t().catch((r=>{throw this.Ct=r,this.Nt=!1,se("INTERNAL UNHANDLED ERROR: ",bn(r)),r})).then((r=>(this.Nt=!1,r))))));return this.$t=e,e}enqueueAfterDelay(t,e,r){this.Qt(),this.qt.indexOf(t)>-1&&(e=0);const i=tn.createAndSchedule(this,t,e,r,(s=>this.xt(s)));return this.St.push(i),i}Qt(){this.Ct&&V(47125,{Mt:bn(this.Ct)})}verifyOperationInProgress(){}async Ut(){let t;do t=this.$t,await t;while(t!==this.$t)}jt(t){for(const e of this.St)if(e.timerId===t)return!0;return!1}zt(t){return this.Ut().then((()=>{this.St.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.St)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ut()}))}Wt(t){this.qt.push(t)}xt(t){const e=this.St.indexOf(t);this.St.splice(e,1)}}function bn(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Tt(t)}get(t){const e=lt(t,this._firestore),r=new ge(this._firestore);return this._transaction.lookup([e._key]).then((i=>{if(!i||i.length!==1)return V(24041);const s=i[0];if(s.isFoundDocument())return new gt(this._firestore,r,s.key,s,e.converter);if(s.isNoDocument())return new gt(this._firestore,r,e._key,null,e.converter);throw V(18433,{doc:s})}))}set(t,e,r){const i=lt(t,this._firestore),s=_e(i.converter,e,r),a=de(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,a),this}update(t,e,r,...i){const s=lt(t,this._firestore);let a;return a=typeof(e=O(e))=="string"||e instanceof wt?We(this._dataReader,"Transaction.update",s._key,e,r,i):Ke(this._dataReader,"Transaction.update",s._key,e),this._transaction.update(s._key,a),this}delete(t){const e=lt(t,this._firestore);return this._transaction.delete(e._key),this}}function qs(n,t,e){const r=rt(n=G(n,it)),i=Object.assign(Object.assign({},Ki),e);(function(p){if(p.maxAttempts<1)throw new y(w,"Max attempts must be at least 1")})(i);const s=new qe;return new Wi((function(){return new Ji})(),r,i,(a=>t(new Hi(n,a))),s).yt(),s.promise}(function(){(function(e){Pt=e})(`${qr}_lite`),Cr(new Mr("firestore/lite",((t,{instanceIdentifier:e,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new it(new zr(t.getProvider("auth-internal")),new Kr(i,t.getProvider("app-check-internal")),(function(p,m){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new y(w,'"projectId" not provided in firebase.initializeApp.');return new Nt(p.options.projectId,m)})(i,e),i);return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),nn("firestore-lite",sn,""),nn("firestore-lite",sn,"esm2017")})();export{Ct as AggregateField,Oi as AggregateQuerySnapshot,z as Bytes,W as CollectionReference,b as DocumentReference,gt as DocumentSnapshot,wt as FieldPath,vt as FieldValue,it as Firestore,y as FirestoreError,X as GeoPoint,B as Query,bt as QueryCompositeFilterConstraint,Ut as QueryConstraint,Ir as QueryDocumentSnapshot,me as QueryEndAtConstraint,Bt as QueryFieldFilterConstraint,fe as QueryLimitConstraint,Ze as QueryOrderByConstraint,Se as QuerySnapshot,pe as QueryStartAtConstraint,x as Timestamp,Hi as Transaction,J as VectorValue,Qi as WriteBatch,As as addDoc,Rs as aggregateFieldEqual,bs as aggregateQuerySnapshotEqual,cs as and,Ns as arrayRemove,Fs as arrayUnion,Ps as average,rs as collection,is as collectionGroup,xi as connectFirestoreEmulator,zi as count,Es as deleteDoc,Ss as deleteField,qi as doc,os as documentId,gs as endAt,_s as endBefore,Bi as getAggregate,Is as getCount,ys as getDoc,ws as getDocs,es as getFirestore,Ds as increment,ts as initializeFirestore,ds as limit,fs as limitToLast,ls as or,hs as orderBy,as as query,_r as queryEqual,ss as refEqual,qs as runTransaction,ks as serverTimestamp,vs as setDoc,Xi as setLogLevel,$i as snapshotEqual,ms as startAfter,ps as startAt,Vs as sum,ns as terminate,Ts as updateDoc,xs as vector,us as where,Os as writeBatch};
