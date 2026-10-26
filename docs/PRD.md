# PRD: Digital Wedding Experience Platform

> **Note for this project:** This is the original, general PRD. Robert & Dora's wedding (#DeeRoy26) uses a reduced scope — see [SCOPE.md](SCOPE.md), which takes precedence wherever the two differ.

**Status:** Initial Product Requirements  
**Version:** 1.0  
**Product type:** Mobile-first web application  
**Primary users:** Couples, invited guests, and wedding administrators

## 1. Product Overview

### 1.1 Summary

A digital wedding platform that brings together personalized invitations, guest management, wedding-day information, and post-wedding memories in one seamless experience.

The platform's signature feature is an **animated, personalized invitation story**. Instead of opening a conventional invitation page, each guest receives a unique link that opens a short, cinematic story introducing the couple and their wedding. After the story, the guest enters the main wedding website to RSVP, explore the programme, find venue directions, and access other wedding features.

After the wedding, guests can contribute photographs, browse the wedding gallery, and leave messages for the couple.

The platform should be accessible through a web link without requiring guests to install an application or create an account.

### 1.2 Product Vision

Make attending a wedding and preserving its memories a more personal, interactive, and seamless digital experience.

### 1.3 Product Goals

- Create a memorable invitation experience for every guest.
- Simplify invitations, RSVPs, and guest-list management.
- Give guests easy access to wedding-day information.
- Make venue directions and song requests accessible in one place.
- Collect photographs and well wishes in a shared digital space.
- Give couples control over wedding content and guest interactions.
- Establish a foundation for future features such as face-based photo discovery.

### 1.4 Out of Scope for the Initial Release

- Face recognition or searching for guests across photographs.
- Native iOS and Android applications.
- Wedding vendor marketplaces and booking services.
- Online gift payments and financial transactions.
- Complex, unrestricted drag-and-drop animation editors.
- AI-generated wedding stories or automated video production.

## 2. User Roles

### 2.1 Couple / Wedding Owner

The person or people responsible for setting up the wedding experience.

They can configure the wedding, personalize the invitation, manage guests and RSVPs, publish the programme, moderate photographs, and manage song requests.

### 2.2 Guest

A person invited to the wedding.

Guests can view their personalized invitation, RSVP, access event information, submit song requests, upload photographs when enabled, and leave messages.

### 2.3 Wedding Administrator

An optional role for a wedding planner or trusted person helping manage the event.

The administrator can receive delegated permissions to manage guest lists, content, and submissions without necessarily having full ownership of the wedding.

The initial release may implement the couple and administrator as a single administrative role if role separation would delay delivery.

## 3. Core User Journey

The guest experience follows this sequence:

1. The guest receives a unique invitation link, for example through WhatsApp, email, or another messaging channel.
2. The guest opens the link and experiences the animated invitation story.
3. The guest continues to the wedding homepage.
4. The guest explores wedding details and submits an RSVP.
5. The guest accesses the wedding programme, venue directions, and song requests.
6. After the wedding, the guest returns to upload photographs, browse the gallery, and leave a message.

The couple's workflow begins with creating the wedding, configuring the invitation, and importing or adding the guest list. They then monitor responses and manage wedding content before, during, and after the event.

## 4. Functional Requirements

### 4.1 Wedding Setup and Homepage

**Objective:** Provide a central destination for all wedding-related information.

The homepage must display:

- Names of the couple.
- Wedding date and relevant event times.
- Wedding cover photograph or selected visual theme.
- Countdown to the wedding.
- Ceremony and reception details.
- Links to RSVP, programme, directions, and other available features.
- A clear route back to the invitation story when appropriate.

The homepage must be mobile-first and usable on common desktop and mobile browsers.

Wedding details should be configurable through the administrative dashboard rather than requiring code changes.

### 4.2 Personalized Animated Invitation Story

**Priority: P0 - Signature feature**

**Objective:** Turn a standard invitation link into a personalized, animated introduction to the wedding.

#### 4.2.1 Guest entry

Each guest must receive a unique invitation URL or token associated with their invitation record.

Opening the link should resolve the correct guest and load the wedding's configured story.

The story should display guest-specific content where applicable, including the guest's name and invitation details.

Example:

"Dear Ama, we'd love for you to celebrate this special day with us."

Personalized links must not expose internal database identifiers or unnecessary personal information.

#### 4.2.2 Story sequence

The default story template should support the following scenes:

1. **Opening:** A visual introduction inviting the guest into the experience.
2. **The couple:** The couple's names, photographs or illustrations, and an announcement.
3. **The big day:** The wedding date, venue, and optional countdown.
4. **Personal invitation:** A guest-specific greeting and an invitation to continue.

These scenes form a configurable template. The couple may edit the copy, upload photographs, choose a theme, and enable or disable supported scenes.

The experience should typically last approximately 15–30 seconds, excluding time spent interacting with the page.

#### 4.2.3 Animation and media

The story should support:

- Animated text and scene transitions.
- Configurable background imagery.
- Optional background music.
- Visual themes and typography.
- A clear continue or open-invitation action.
- A skip option available throughout the experience.

Audio must never autoplay unexpectedly with sound. The interface should offer a clear way to enable or disable music.

Animations should respect reduced-motion preferences, and the story must remain usable when media fails to load.

#### 4.2.4 Story completion

At the end of the story, the guest can select **Continue to Wedding** or an equivalent action.

This leads to the main wedding homepage. The guest should not need to re-enter their name or invitation code.

#### 4.2.5 Story editor

The administrative dashboard should allow the couple to:

- Select from available invitation templates.
- Edit scene text.
- Upload and select photographs.
- Configure supported visual styles and transitions.
- Add or disable background music.
- Preview the story before publishing.
- Publish changes to guest invitation links.

The first version should use predefined, polished templates rather than a fully free-form animation editor.

### 4.3 RSVP and Guest Management

**Objective:** Enable guests to respond to invitations and allow the couple to track attendance.

#### Guest capabilities

Guests must be able to:

- Confirm attendance or decline.
- View the number of seats allocated to their invitation.
- Submit a response before the RSVP deadline.
- Provide dietary requirements when requested.
- Submit an optional message to the couple.
- Review their current response and update it when permitted.

The number of guests a person can confirm must not exceed the allocation associated with their invitation.

The application should communicate clearly when an RSVP deadline has passed or responses are no longer editable.

#### Administrative capabilities

The couple must be able to:

- Add guests individually.
- Import a guest list, preferably through CSV.
- Edit guest names and contact details.
- Assign invitation-specific seat allocations.
- Generate and copy unique invitation links.
- View attendance confirmations, declines, and pending responses.
- Search and filter the guest list.
- Review dietary requirements and guest messages.
- Export the guest list and RSVP report.
- Identify guests who have not responded.

The system should support sending RSVP reminders through an available messaging or email integration. Automated reminders are not required unless included in the initial implementation scope.

### 4.4 Wedding Programme

**Objective:** Give guests a clear schedule for the wedding day.

The programme must support multiple events or activities, each with:

- Event title.
- Date, where applicable.
- Start time and optional end time.
- Venue or location.
- Description or additional notes.
- Display order.

Examples include the ceremony, reception, photographs, dinner, and dancing.

The couple must be able to create, edit, reorder, publish, and remove programme entries.

Guests should be able to view the programme without logging in and distinguish between different venues or event locations.

Changes to the programme must be reflected on the published wedding site.

### 4.5 Venue Directions and Event Logistics

**Objective:** Help guests reach the correct venue and understand practical arrangements.

The platform must support separate ceremony and reception locations.

For each location, the couple should be able to configure:

- Venue name.
- Address.
- Map coordinates or map destination.
- Relevant event time.
- Directions or location notes.
- Parking and transport information.
- Additional instructions.

Guests should be able to open directions through a supported maps service, such as Google Maps.

The application should also support:

- Dress-code information.
- General transport guidance.
- Optional nearby accommodation information.
- A contact person or assistance contact, if configured.

The platform does not need to provide its own navigation engine or accommodation booking system.

### 4.6 Song Requests

**Objective:** Allow guests to suggest music for the wedding reception.

#### Guest capabilities

Guests must be able to:

- Submit a song title.
- Provide the artist's name.
- Optionally include a Spotify, YouTube, or other supported music link.
- Submit a request without creating a separate account.
- Receive confirmation that their request was submitted.

#### Administrative capabilities

The couple or administrator must be able to:

- View submitted requests.
- Approve or reject requests.
- Remove inappropriate or duplicate submissions.
- Search or filter requests.
- Export or compile approved songs for the DJ.

The system should detect likely duplicate requests and warn guests or administrators where appropriate.

The couple must retain control over which songs are approved. An approved request does not automatically mean the song will be played.

Integration with music streaming APIs is optional. The initial version can store song details and links without generating a synchronized playlist.

### 4.7 Photo Uploads and Wedding Gallery

**Objective:** Create a shared collection of wedding photographs before and after the event.

#### Guest capabilities

Guests should be able to:

- Open the wedding gallery.
- Upload supported image formats.
- View uploaded photographs once published.
- Browse photographs in a gallery layout.
- View photographs at a larger size.
- Download individual images when enabled.

The couple may choose to make guest uploads available before the wedding, during the event, or only after the wedding.

#### Administrative capabilities

The couple or administrator must be able to:

- Enable or disable uploads.
- Review submitted photographs.
- Publish or reject uploads.
- Remove inappropriate or unwanted images.
- Organize photographs into albums or categories.
- Upload official photographs.
- Control whether guests can download images.
- Configure gallery visibility.

Uploaded photographs should be subject to file-type and file-size validation. The platform should provide clear upload progress and error states.

The application must not assume that a submitted photograph is immediately public. Publication should follow the wedding's configured moderation policy.

### 4.8 Guestbook and Well Wishes

**Objective:** Allow guests to leave messages for the couple.

Guests should be able to submit a written message without creating a separate account.

The guestbook should support:

- Guest name, populated from the invitation when appropriate.
- Written message.
- Submission confirmation.
- Optional display of published messages.

The couple or administrator must be able to review, publish, hide, or delete messages.

The couple should be able to export or retain the messages as a digital keepsake.

Guestbook visibility and moderation must be configurable. Private messages should not be exposed publicly.

### 4.9 Administrative Dashboard

**Objective:** Provide one place for managing the wedding experience.

The dashboard should contain the following sections:

| Section | Requirements |
|---|---|
| Overview | Wedding summary, RSVP totals, pending responses, and recent submissions |
| Wedding setup | Couple's names, date, locations, cover image, and theme |
| Invitation story | Template selection, scene editing, media, preview, and publishing |
| Guest management | Guest records, invitation links, seat allocations, and RSVP tracking |
| Programme | Event creation, editing, ordering, and publishing |
| Venue logistics | Locations, map links, transport, dress code, and notes |
| Song requests | Review, approve, reject, and export |
| Photo gallery | Upload review, moderation, albums, and download settings |
| Guestbook | Review and manage messages |
| Settings | Publication status, feature availability, access settings, and relevant deadlines |

The dashboard must require authenticated administrative access.

Guests must not be able to access administrative functions by modifying URLs or request parameters.

## 5. Access Control and Privacy

The platform must distinguish between public wedding information, guest-specific information, and administrative information.

- Public wedding details may be accessible without authentication if the couple enables public access.
- Personalized invitations must resolve the intended invitation.
- Guests must not be able to modify another guest's RSVP simply by changing a URL.
- Administrative actions must require authorization on the server.
- Invitation tokens must be sufficiently unpredictable to prevent easy enumeration.
- Private photos and messages must follow the couple's configured visibility settings.
- Guest contact information must not be exposed through public guest lists or invitation URLs.
- Uploaded images and user-generated messages must be subject to moderation and abuse controls.
- The platform should provide clear information about photo uploads, storage, visibility, and removal.
- Any future face-matching functionality must include a separate privacy, consent, and access-control assessment before release.

Unique invitation links are intended to simplify access, not to replace authorization checks for sensitive operations.

## 6. Non-Functional Requirements

### 6.1 Usability

- Mobile-first responsive design.
- No mandatory app installation for guests.
- No mandatory guest account creation for standard interactions.
- Clear navigation between wedding features.
- Accessible text, contrast, and controls.
- Useful loading, empty, success, and error states.
- A skip option for the invitation story.

### 6.2 Performance

- The invitation story should load quickly on common mobile connections.
- Images should be appropriately compressed and responsive.
- Large media assets should not block access to essential wedding information.
- The application should degrade gracefully if music or animation assets fail.
- Photo uploads should provide feedback and recover gracefully from common errors.

### 6.3 Reliability

- RSVP submissions must be persisted reliably.
- Duplicate requests should be handled safely.
- Failed uploads must not be shown as successful.
- Administrative changes should be reflected consistently across the published wedding experience.
- Destructive operations should require appropriate confirmation.

### 6.4 Accessibility

- Support keyboard navigation where applicable.
- Respect reduced-motion preferences.
- Provide readable text over backgrounds.
- Avoid making music necessary to understand the story.
- Provide meaningful labels for interactive controls.
- Ensure that the invitation can be skipped or revisited.

### 6.5 Security

- Secure administrative authentication.
- Server-side authorization for protected operations.
- Input validation and upload restrictions.
- Rate limiting or abuse protection for public submission endpoints.
- Secure storage and access to private media.
- Appropriate handling of personal information and invitation tokens.

## 7. Release Priorities

### P0: Core launch

- Wedding setup and homepage.
- Personalized invitation links.
- Animated invitation story templates.
- Guest list and RSVP management.
- Wedding programme.
- Venue directions and logistics.
- Administrative dashboard.
- Guestbook.
- Photo uploads and wedding gallery.
- Song requests.

### P1: Improvements

- RSVP reminder workflows.
- Additional story templates and customization options.
- More advanced photo albums and download controls.
- Export enhancements for guest lists and approved songs.
- Delegated administrator permissions.
- Additional notification channels.

### P2: Future possibilities

- Face-based photo discovery.
- Advanced photo search.
- More sophisticated story creation tools.
- Optional integrations with external music and communication services.

Priorities may be adjusted after estimating implementation effort. P0 defines the intended initial product scope, not a commitment to a specific delivery date.

## 8. Success Metrics

The platform should measure whether it makes the wedding experience easier and more engaging.

### Invitation and RSVP

- Percentage of invited guests who open their invitation.
- Percentage of guests who complete the invitation story.
- RSVP completion rate.
- Percentage of invitations with a recorded response.
- Number of pending responses at the RSVP deadline.

### Wedding information

- Usage of programme and venue directions.
- Frequency of successful navigation to map links.
- Song request submission and approval counts.

### Memories

- Number of photographs submitted and published.
- Number of guests who contribute photographs.
- Number of guestbook submissions.
- Gallery visits after the wedding.

### Reliability

- Invitation story load and completion performance.
- RSVP submission failure rate.
- Photo upload failure rate.
- Administrative operation failure rate.

Metrics should be collected in a privacy-conscious manner and used to improve the experience rather than exposing individual guest behavior unnecessarily.

## 9. Acceptance Criteria

The initial release is acceptable when the following end-to-end scenarios work:

1. A couple can create a wedding and configure its core details.
2. The couple can create a guest record and generate a unique invitation link.
3. A guest can open the link and see a personalized animated story.
4. The guest can skip or complete the story and reach the wedding homepage.
5. The guest can submit an RSVP within their allocated seat limit.
6. The couple can view the response and identify guests who have not responded.
7. The couple can publish a programme and venue information that guests can access.
8. A guest can open venue directions using a supported maps service.
9. A guest can submit a song request and the couple can review it.
10. A guest can submit a photograph and the couple can moderate it before publication.
11. Guests can browse published photographs and leave messages.
12. The couple can manage the wedding through an authenticated dashboard.
13. Guests cannot access administrative operations or modify other guests' responses.
14. The core experience remains usable on mobile devices when animations or music are unavailable.

## 10. Assumptions and Open Decisions

The following decisions remain open and should be resolved before implementation is finalized:

- **Platform model:** Whether the product initially serves one wedding or supports multiple couples and weddings from the beginning. The architecture should avoid unnecessary constraints if multi-wedding support is expected.
- **Pricing and ownership:** Whether the platform is a free service, paid product, or subscription.
- **Invitation access:** Whether wedding pages are public, unlisted, or restricted to invited guests.
- **Guest identification:** Whether invitation links alone are sufficient or whether some actions require an additional verification step.
- **Messaging:** Which email, WhatsApp, or other notification integrations are required for launch.
- **Photo policy:** Whether all uploads require approval and when guest uploads become available.
- **Story customization:** Which templates and visual controls are available at launch.
- **Event structure:** Whether the wedding may span multiple days and how events are grouped.
- **Data retention:** How long guest records, photographs, and messages remain available after the wedding.

## 11. Product Definition of Done

The initial product is complete when a couple can configure a wedding, invite guests through personalized animated stories, manage attendance, provide event logistics, collect song requests, and preserve post-wedding photographs and messages through one responsive web application.

The defining experience is the invitation story. All other features should support the guest's journey before, during, and after the wedding without making the application unnecessarily complex.
