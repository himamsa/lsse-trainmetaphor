const trainData = [
  {
    version: "42.1.0",
    release_date: "2022-01-01",
    features: [
      "Hosts or cohosts are easily able to identify a participant joining a meeting as Internal to their organization, External to their organization, or Unverified where the user isn't authenticated by Webex and therefore can’t be verified. Notification of a participant waiting in the lobby is now more prominent and isn’t hidden in the Participant List. Hosts or cohosts are able to remove a participant from the lobby. They can also select an entire group and admit or remove those participants.",
    "As a host, you can customize the templates you use to send the following emails to panelists and attendees: invitations, reminders, thank yous, and cancellations.",
    "The administrator can flexibly configure various scenarios on different meeting sites and different services, such as Webex Meetings, Webex Calling, and Webex Messaging. In the Webex Meetings app, users can use different virtual backgrounds according to their administrator’s configuration.",
    "As part of our drive to provide you with secure meetings, we’re letting you know about some security improvements that we’re making to your Webex site. The default experience today is that anyone joining your Personal Room can jump into your meeting right away, without having to wait in the lobby. With this update, we're making your Personal Room meetings more secure. Guests who try to join your Personal Room automatically wait in your lobby until you admit them. In conjunction with these security changes, we’re also making changes to enhance the management of users in the lobby and in the meeting itself.",
    "Webex remembers your closed captioning selection for your next meeting or event. This behavior replaces the preference setting to automatically enable closed captions, to be removed in 42.2. This change applies to sites that have closed captions separated from the Webex Assistant.",
    "Hosts or cohosts are easily able to identify a participant joining a meeting as Internal to their organization, External to their organization, or Unverified where the user is not authenticated by Webex and therefore can’t be verified. Notification of a participant waiting in the lobby is now more prominent and isn’t hidden in the Participant List. Hosts or cohosts are able to remove a participant from the lobby. They can also select an entire group and admit or remove those participants.",
    "The tooltip and label name are duplicated in a few controls. This feature is to enhance the user's experience to remove a few redundant tooltips if they are duplicated with the text name.",
    "Enable simultaneous interpretation and manage available languages for event management in Webex Meetings or webinars. Hosts are responsible for enabling simultaneous interpretation for the meetings and webinars that they schedule, and for managing the interpretation during the meeting. They can preassign interpreters or add new language channels and interpreters to meet the needs of more attendees.",
    "While viewing your Webex recordings you can now choose to skip ahead or move backwards easily using the rewind and forward buttons. These buttons help you move forward or backwards in 10 second increments.",
    "Similar to the desktop app, you now have the option to remove background noise when choosing \"use computer for audio\" in the web app, helping your voice to sound clear and filtering out noise from your surroundings."
    ],
    sentiment: {
      positive: 4440,
      neutral: 1170,
      negative: 637
    }
  },
  {
    version: "42.10.0",
    release_date: "2022-10-01",
    features: [
      "This new default behavior allows invitees who are signed into Webex to join a scheduled meeting directly without having to wait in the lobby. No more admitting people in the lobby when they were supposed to be in the meeting anyways.",
    "We’re introducing an industry first ability to share the camera view from your mobile device or iOS and Android users. During a Webex Meeting, mobile app users can start sharing their mobile camera view with all the meeting participants. Meeting participants can view shared mobile camera content in full screen mode on their computers, devices, and phones.",
    "To help hosts and cohosts manage attendees in a meeting we have added sound notifications for when a person joins the lobby. In addition to the current visual notification, hosts and cohosts can now turn on an audio notification. This option is found in Meeting Setting -> Notifications. People can choose which sound they hear. Sound is only audible for hosts or cohosts. If multiple people join lobby at same time only one sound plays. After 10 seconds then sound plays again if a new person joins the lobby.",
    "This feature empowers the scheduling delegates, typically the executive administrators, to access the meeting content that includes recordings, transcripts, highlights, and attendance reports. Thereby, removing the burden from executives of download this information and manually sending them to their administrators for any further analysis or processing.",
    "When interpreters aren’t speaking in a language channel, participants subscribed to that channel automatically hear 100% original (floor) audio. Once an interpreter speaks in the channel, the user hears the volume balance of an interpreter or the original audio according to what has been set (by default, it is 80% interpreter, 20% original audio, but the user can change it according to their preference). This feature does not change the user interface.",
    "In this update, webinar supports three new email templates: Webinar invitation emails for panelists, cancellation emails for panelists who are removed in the webinar, and absentee follow up emails for people who registered for but didn't join the webinar.",
    "Breakout session attendance report is added to the meeting attendee report. This includes breakout session names along with the attendee join and leave time.",
    "This report was previously static and not sortable. Now it is sortable by last name directly in the browser without having to download it.",
    "The current site management pages use IFrames to pull the site management settings from Webex Site Administration into Control Hub. This interface refresh removes the IFrames and ports most of the site management settings on Control Hub pages. Meanwhile, all administrative activities are audited in Control Hub audit log. We provide a capability for the customers to revert to the old site administration tool in that time, and the administrator can also switch to a new site administration experience. (In this phase, we completed the relevant functions relating to Webex Meetings and Webinar meetings.)",
    "Site administrator sites with auto account creation can now be updated from Site administration to Control Hub. Administrators should configure their Control Hub ORG with Auto account creation and auto license template before updating their site or Control Hub to avoid loss of functionality."
    ],
    sentiment: {
      positive: 1114,
      neutral: 273,
      negative: 108
    }
  },
  {
    version: "42.11.0",
    release_date: "2022-11-01",
    features: [
      "Hosts can set up a customized logo in the scheduling step. The host and their attendees are impressed by the polished look of Slido’s polling and Q&A, as well as the variety of the polling questions. In the previous update, attendees view couldn’t be maximized, but in this update, attendees can max out the web browsers' space to view the webcast.",
    "Previously this feature was available with a beta tag, but in 42.11 it is generally available to everyone. The new Webex whiteboard is an infinite canvas where you can collaborate together with any meeting participants whether they are using Webex Meetings app, Webex App, or Webex devices.",
    "You can now edit your in-meeting display name in the meeting. This makes it easier to use a preferred name or control how you want your name is seen by others. As a Meetings participant or Webinar panelist, in the Participants panel, simply right-click your name and select Edit Display Name to edit your name for this meeting. Hosts and cohost can edit the display name of any Meetings participant or Webinar panelist in the meeting or webinar. The meeting recording and usage report always show the last-edited name of a user. For customers who prefer to block the ability to edit display names, the can administrator can desable it.",
    "The Enable Webex Assistant setting is on by default, in November, unless an administrator has already manually set it to Off. In November this change is applied to all customers, including both slow and fast channel customers.",
    "The Custom dictionary feature in Control Hub allows administrators to specify custom out-of-vocabulary words that aren’t part of the standard dictionary, so that when these words are uttered in meetings, they can be transcribed more accurately in the closed captions and transcript. The keywords include organization acronyms and jargon, industry terms, product names, organization name, and people's names. In this update, this dictionary is limited to 100 words and English language support only.",
    "The new lobby controls for Personal Room meetings re-categorizes guest users, separating them into two groups with separate lobby controls. Distinguishing between unverified and verified external users allows administrators to enhance meeting security by applying more stringent meeting entry controls for unverified users. For example, unverified users can’t join the meeting, while verified external users are placed in the lobby or unverified users are placed in the lobby, while verified external users can join the meeting directly.",
    "Webex Scheduler uses the default Webex site when scheduling a meeting. You can change the default Webex site in Webex App preferences. Administrators can perform a bulk default Webex site change for users by a user CSV export and import in Control Hub.",
    "You can now see a Change status to pending button in the manage webinar registration page, which allows you to change the registration status of an approved or declined attendee to pending. Attendees marked as pending are listed in the pending tab of the manage registration page. When the status of an approved attendee is changed to pending, the attendee receives an email informing them that their invitation to the webinar is cancelled. No such email is sent to attendees whose registration status has been changed from declined to pending.",
    "Webex users receive an email notification if they have recordings reaching expiry soon. They can see an expiring soon label next to their recordings in the recordings tab in the Webex site. These notifications are set either weekly or monthly, depending on the retention period set by the administrator. These notifications are controlled by the existing recording email notification toggle in settings.",
    "Today if a user is signed-in they adhere to their company policies no matter the device they join the meeting from. This behavior changes with the registry key installation from this update. Going forward if the restricted machine or device has a registry key the experience is the most restrictive policy. For example, devices or machines restrict file transfer but the user policy allows for this feature, if the user joins the meetings using this restricted device they can no longer perform file transfers in that meeting. we will go with the most restrictive policy."
    ],
    sentiment: {
      positive: 1328,
      neutral: 336,
      negative: 150
    }
  },
  {
    version: "42.12.0",
    release_date: "2022-12-01",
    features: [
      "Webinar hosts, cohosts, and panelists can now initiate a private chat with attendees using the chat panel or the participant list. They can now initiate communication with attendees proactively without requiring attendees to reach out to them first.",
    "When sharing the screen, sometimes the control bar gets in the way of content and the automatic opening and closing can be distracting. These changes allow the bar to be dragged left and right across the screen to see content behind. It’s also openable manually for better control of the menu.",
    "Hosts and cohosts can both manage built-in polling (not Slido) during meetings and webinars. Hosts and cohosts can edit polls at the same time and receive notifications for who is editing the poll as well as who has already made edits to the poll. This makes async collaboration much easier.",
    "When the host turns on the Webex Assistant, it no longer automatically turns on the host's closed captions box; instead, the closed captions box's on or off status is independent and follows the same behavior that exists for attendees. That is, for all users, including hosts and attendees, the closed captions box's on or off status depends on what the user selected last. For example, if the user had closed captions on in the last meeting, then it remembers that selection and continues to stay on in their next meeting, and conversely, regardless of the Webex Assistant status.",
    "The Webex Meetings app for iPhone and iPad is redesigned to provide a better experience for users.",
    "To add some festive cheer, we're giving reactions a seasonal makeover. You'll see these changes for all reactions on Windows and Mac from December 7 to December 30. (On mobile, reactions use the Android or iOS emojis so we aren't updating those reactions.) If you'd prefer to turn this option off, contact feature-feedback@cisco.com before December 10.",
    "In this update, we're giving you even more control over where and when you want to see your own video in meetings, webinars, and webcasts. You can still choose to either show your self-view with others or show your self-view in a floating window. But now you can also hide your self-view altogether, or only hide it when video is off.",
    "In case you missed the update that came in 42.11.5 the host can setup a customized logo from the scheduling step, which you couldn’t do before. The host and their attendees are impressed by the polished look of Slido’s polling and Q&A, as well as the variety of the polling questions. The streaming quality can go up to 1080p. In the previous version, attendees view couldn't be maximized, but in this update, attendees can max out the web browsers' space to view the webcast.",
    "Series owners can now schedule a new webinar from within their series. When you select Schedule a new webinar, the series owner is redirected to the scheduling page and goes through the process of scheduling a webinar. In this flow, however, the webinar series is pre-populated with the series name within which the webinar is being created.",
    "Webinar series owners and collaborators can now manage the registration of individual webinars in their series through the series information page. They can view how many people have registered for each webinar, including the number of pending, approved, and rejected registrants. They can also quickly respond to registrations from the series information page by clicking on the hyperlinked pending, approved, or rejected numbers listed by the webinar name, which redirects them to the registration page of that webinar."
    ],
    sentiment: {
      positive: 1169,
      neutral: 250,
      negative: 112
    }
  },
  {
    version: "42.2.0",
    release_date: "2022-02-01",
    features: [
      "Webex is updating its default library of virtual backgrounds. In addition to the most frequently used, we added a few new backgrounds, including two animated ones. Users can still upload their own as desired. Animated virtual backgrounds are not available when starting or joining a meeting from Webex App.",
    "Hosts can upload webinar materials such as Microsoft PowerPoint presentations, PDF, Microsoft Word documents, JPG, and PNG files in the webinar information page. Attendees can download material in the webinar information page. When you schedule a webinar, you see separate tabs for panelists, attendees, and hosts, making it easy to copy content and send it to your respective audience.",
    "In addition to polls using Slido, you can now start polls in webinars from the Polling panel, similar to Webex Meetings. Use polls to engage your participants, even if Slido is not available in your webinar. To pre-configure the polling questions the host can start any webinar to create questions and save the polling file in .atp format. During the webinar, the host can quickly add the questions by uploading the previously saved file.",
    "The Webex Meetings mobile app now supports background PiP (picture-in-picture) for iPad users. PiP support shrinks the whole meeting window to a small rectangular window that appears over your iPad home screen and even over other apps. For example, iPad users can browse their emails or web browser while on their iPad watching a meeting window outside the Meetings app. This is done using the picture-in-picture window that is positioned in one corner of the screen.",
    "Webex Meetings VDI to extend the maximum video ports from 3x3 to 5x5 in grid view mode. Your administrator controls the maximum video ports from Webex Control Hub.",
    "Hosts and cohosts can change the registration form - registrant number, registration ID, and approval rules option even after someone has registered for the webinar.",
    "In this update, users who have the 10,000, 25,000, 50,000, and 100,000 license plans can accept registration more than their current license allows. They now can accept 20 percent more of their maximum attendee numbers. For example, if their license is 10,000, they can accept up to 12,000 registrations. Users with 1,000, 3,000, and 5,000-license plans remain the same, with a maximum registration of 10,000.",
    "When a user wants to reopen an embedded app, they can open the Apps panel and find the app at the top of the In Meeting list. Previously, it was in the More (...) menu.",
    "Keep people on track using the new Shared Timer app. Hosts and participants can view and interact with a countdown timer during team collaboration or group activities, helping things to stay on schedule. The meeting host can launch the Shared Timer from the Apps panel, set a timer and share it with other meeting participants. Participants can start, pause, and add more time if the host allows. Administrators enable apps using Webex Control Hub.",
    "Google Workspace add-on users can toggle between Personal Room and one-time meeting links directly from the meeting settings panel. Default settings are used when a user chooses Webex meeting from the Add video conferencing option menu."
    ],
    sentiment: {
      positive: 2486,
      neutral: 574,
      negative: 258
    }
  },
  {
    version: "42.3.0",
    release_date: "2022-03-01",
    features: [
      "Speaker labels are added in the closed captioning box to further enhance live transcript readability. The closed captions feed behavior is also updated. More lines and up to two final utterances can be shown at once, depending on font size. Previous lines stay on screen, until new spoken lines push the script up.",
    "In this update we're excited to introduce a new way to view Grid View, that maximizes screen space by using Artificial Intelligence to dynamically crop videos to focus on the individual, rather than their surroundings. You’ll get a better face-to-face experience and feel more connected, regardless of how they’re positioned in front of their camera. People focus can be turned on from the Layout menu when in Grid View and can be turned off at any time.",
    "Hosts can download the in-webinar activity report for Q&A, chat, and polling for completed webinars. If Q&A or polling is done using Slido, hosts can find that information in Slido's report. This option is only available for recorded webinars. Webinars in webcast view also supports Q&A, chat, and polling.",
    "When the host schedules a webinar, they can preassign panelists to different breakout sessions. Attendees can't be preassigned but they can join breakout sessions by clicking the join link. Hosts can create up to 100 breakout sessions. Each breakout session can host up to 1000 attendees.",
    "In meetings, webinars, and events, you can filter out all background noises and enhance the voices of all users picked up by the microphone. The voice of the users that are farther away from the microphone are amplified to sound like they are much closer. This is done to create a better and more engaging experience during your meetings and events.",
    "In order to enhance the clarity for people who are deaf or hard of hearing, we need to provide them with an option to display speaker labeling within the closed caption feed.",
    "The volume balance in the simultaneous interpretation feature now shows interpreter on the right side instead of the left, so to hear the interpreter at a higher volume, users can slide the balance to the right.",
    "Similar to desktop, Webex Meetings mobile app users can now enhance their meeting experience using Optimize for My Voice option. You can now suppress all background talkers and noise to allow others to hear you better, by selecting the option to Optimize for My Voice during a meeting by clicking More > Webex Smart Audio. Users can set their preference prior to a meeting by accessing Audio and Video menu in the app setting under the Webex Smart Audio section. The default option is Noise Removal that is enabled (previously, called Remove Background Noise).",
    "IT administrators can make changes to meeting recordings such as reassigning to a new owner or deleting the recording file based on compliance regulations. In this update, we provide a setting at the site level for the IT administrators to notify the user when such actions take place.",
    "In addition to polls using Slido, you can now start polls in webinars from the Polling panel, similar to Webex Meetings. Use polls to engage your participants, even if Slido is not available in your webinar. To pre-configure the polling questions the host can start any webinar to create questions and save the polling file in .atp format. During the webinar, the host can quickly add the questions by uploading the previously saved file."
    ],
    sentiment: {
      positive: 2416,
      neutral: 583,
      negative: 271
    }
  },
  {
    version: "42.4.0",
    release_date: "2022-04-01",
    features: [
      "We’ve made interacting with shared content easier by moving the tools (from a fade-out side bar) into a dedicated toolbar above the stage so you can access it at any time. You can now see who's sharing content, zoom in or out, open the annotation tools, and more–without blocking your view of what's being shared.",
    "We are introducing the Move Meeting to Mobile feature where users can scan the QR code using their mobile camera and move their meeting to Webex Meetings mobile app without disrupting or disconnecting the meeting.",
    "Host can enter a URL address when they set up the meeting or webinar. Attendees can now be forwarded to a landing page after a meeting or webinar ends. This is a way to direct your audience to a survey, invite to next meeting or webinar, a thank you page, or information on event sponsors. This provides the opportunity to keep the attendee engagement going even after the meeting or webinar has ended.",
    "Optimize for 3D is a new sharing optimization that is available to customers upon request to your Customer Success Manager. This feature uses additional bandwidth to reduce color artifacts when sharing high fidelity 3D models. The increased quality can aid in real-time collaboration for other types of content including Computer Aided Design and Medical Imaging.",
    "This feature optimizes the Webex Meetings content sharing experience while sharing an application. Previously, when the user shared applications it would share the entire screen and mask areas outside of the application window. With this update, the receiving user sees the individual windows of the shared application and not the entire masked desktop screen.",
    "In this update we’ve added a new Share tab to the Meeting Settings dialog. This is the new location for all relevant share-based preferences. One new setting is added for the Optimization for shared content. Currently, the Webex Meetings desktop app defaults to Automatically Optimize each time you share. Updating this preference allows you to control the default optimization that appears when the share dialog is opened. This feature is to unify fragmented sharing settings into the unified preference to align with the Webex App. It offers a new setting under sharing section to configure the by-default sharing type. This setting could be entered using the new setting icon on the sharing dialog.",
    "A few visual and functional improvements are coming in March/April. As a presenter, you’ll be able to control the flow of incoming open-text responses more seamlessly. Also, we’re adding the option to display respondents’ names attached to their open-text answers. Respondents can decide if they want to submit their name or not, and the Slido administrator can decide if they want to allow the names when setting up the poll.",
    "We've made some small, but effective changes to the style of the name labels in the video windows. So that they don't cover up as much, particularly in smaller window sizes. Name label styles are being updated to better align better with the rest of the Webex portfolio for users joining from video devices.",
    "IT administrators can apply all e-compliance controls using templates in Control Hub at user, group, and org level for joining meetings from the Chrome browser. IT administrators can add the token to the new Chrome extension, then push the extension to all devices in the organization. All the compliance controls that are applicable to the user joining both internal and external meetings using the Webex Meetings desktop app are now applicable when they join meetings from the Chrome browser as well.",
    "A host may schedule meetings but for some reason, can’t delete the meetings by themselves. For example, if the host leaves the company, then the administrator should have an ability to find the meetings and delete them. On Control Hub, the administrator can search for the scheduled meetings per the host user's name or meeting number, and then delete them."
    ],
    sentiment: {
      positive: 1939,
      neutral: 427,
      negative: 182
    }
  },
  {
    version: "42.5.0",
    release_date: "2022-05-01",
    features: [
      "For meetings with Webex Assistant or closed captions, the host can now select the spoken language (transcription) of the meeting in four different languages: French, German, and Spanish, in addition to the existing English. If users wants transcription in more languages, as well as translation capabilities, that can be obtained with the real-time translation add-on, which enables spoken language (transcription) in 13 languages, and caption language (translation) in 100+ languages.",
    "We're excited to introduce People Focus—a new way to use Grid view, that maximizes screen space by using AI to dynamically crop videos to focus on the individual, rather than their surroundings. This gives you a better face-to-face experience with the people you are meeting with, regardless of how the person is positioned in front of their camera, making you feel more connected. Click Layout to turn on People Focus.",
    "Users can now change the size of the closed captions (CC) box to show more or fewer lines.",
    "We're excited to announce that the Webex Meetings web app is now available for download as a Progressive Web App (PWA) for ChromeOS in the Google Play store. This makes it easy for Chromebook users to access Meetings directly from their desktop, without having to go through the browser. Similarly, this provides you with more flexibility to manage services and apps for your users.",
    "We are introducing the Move Meeting to Mobile feature where users can scan the QR code using their mobile camera and move their meeting to Webex Meetings mobile app without disrupting or disconnecting the meeting.",
    "The goal is to ensure that all attendees are able to participate in the meeting effectively and use all the available features. We’re giving you the option to update your app before you join the meeting. Then you’ll be sure to have the latest features for an optimal meetings experience.",
    "Today, organizations or sites with licenses of 10,000 and below can schedule email reminders to attendees. Starting with the 42.5 update, organizations or sites who have more than 10,000 licenses can also schedule email reminders. To support a large volume of emails, the reminder can be scheduled to be sent at least 12 hours before the start time. This feature also supports webcast view for attendees.",
    "Now, when you go to register for an upcoming meeting, you see the meeting title, time, and host. This helps make it clear what meeting you're registering for. We've also removed the meeting password in the Registration page since you don't need that information during registration. If you're the host, you also get a registration link that they can copy to the Meeting information page.",
    "All new sites have this feature turned off by default. For existing sites that have entry and exit beep that is turned on, phone users continue to hear the beep, while it is turned off for computer audio users.",
    "Scheduler on website for Meetings and Webinars is undergoing following UI enhancements: (1) A new section that is called Security is added and all scheduling options that are related to security are moved here. This includes passwords for meetings and webinars, (2) Tooltips are added to most scheduling options including options under Attendee privileges and Meeting options, and (3) Agenda is now part of the main or basic scheduling flow instead of under advanced options."
    ],
    sentiment: {
      positive: 2127,
      neutral: 507,
      negative: 210
    }
  },
  {
    version: "42.6.0",
    release_date: "2022-06-01",
    features: [
      "Grid view in Meetings, Webinars, and Events (classic) can now support up to 81 simultaneous videos per page! This gives you the ability to see even more thumbnail videos in large meetings. You can set your preferred maximum numbers of videos to show in grid view in the Meetings settings. The actual number of videos may be limited by your screen resolution or window size.",
    "Webinar series brings a simple registration experience where registrants can select and register for multiple webinars at once. Webinar series owners can add webinars to a series. They can invite their team to a series as contributors. Contributors can also add their webinars to a series and manage the series. All webinars in the series will use the same registration form. The webinar owners manage registration approval for the webinars that they own.",
    "Third-party apps opened in Webex Meetings can now be opened in stage, not just in the Apps panel. Some apps are better used in full screen so now users can open those apps in stage view.",
    "To ensure you have a good support experience when faced with join meeting issues, we are adding a few more details to the error message dialogs shown to the user. With the next update, you can see a meaningful high level description of the error a user has run into. A meeting details component contains any other details surrounding the error including the error code. You also have the option to Send Problem Report to Cisco for the issue. You can share these details including the error code when logging a TAC case.",
    "You can now scale the Share content window to make it bigger. This makes it easier to see more of the windows you have open without having to scroll.",
    "Mobile users can now view their network quality status in the indicator center during a meeting.",
    "IT administrators can now enable the embedded apps for a group of users. To enable the app to a group of users, login to Control Hub, navigate to the Apps > Embedded Apps. Then choose an app and enable it for the selected groups.",
    "Participants connecting to a meeting hosted by Webex for Government can now easily tell what meeting platform they are connected to."
    ],
    sentiment: {
      positive: 1479,
      neutral: 356,
      negative: 168
    }
  },
  {
    version: "42.7.0",
    release_date: "2022-07-01",
    features: [
      "Webex Meetings users can view their upcoming meetings after connecting their iPhone to Apple CarPlay dashboard and can join the meeting with one click.",
    "With Windows 11, Webex Meetings now allows you to share applications directly from the task bar. This also includes the Mute and Unmute from taskbar. Hover over the application in the task bar and a pop-up appears with the option to share the application in Webex.",
    "Users on on-premises registered video devices such as cloud DX, SX, and MX, can now see presenters in front of shared content.",
    "The host can upload a music file in the scheduling process, when the practice session starts, this music file play by default for the attendees. Attendees can mute the music as needed.",
    "In the desktop app for Meetings and Webinars, we’ve consolidated the Audio & Video Statistics into Meeting settings. These settings can be found in the Statistics tab.",
    "The host can now edit the message that attendees see when practice session is in progress. Hosts can customize the message content and location in the scheduling process. When the practice session starts, this message is shown to the attendees.",
    "Currently, Webex doesn’t supports languages that are read right-to-left (RTL). In this update, we’re adding support for RTL languages, starting with Arabic and Hebrew.",
    "After a webinar ends, the attendance report from webinars with webcast view also contain the attendees' email address column, making it easy to accurately identify who the attendees are, and join with other report.",
    "Similar to desktop and iOS, Android now supports MP4 virtual background. GIF is currently not support for Android.",
    "We’ve innovated the legacy site administration configuration and moved site administration options to Control Hub. The administrator can go to administration activities in Control Hub to audit these activities. In this update, it covers all options relevant to Webex Meetings and Webinars in Control Hub managed sites."
    ],
    sentiment: {
      positive: 1768,
      neutral: 383,
      negative: 158
    }
  },
  {
    version: "42.8.0",
    release_date: "2022-08-01",
    features: [
      "You can use the improved webinar template to avoid making the same settings multiple times. Previously, the webinar template only saved the settings on the scheduling page (except registration setting and panelists). However, in this update, the webinar templates have additional settings with registration questions (including approval rules), panelists, email template, registration landing page, webinar materials, and practice session setup. If any of these fields don’t need to be saved, you can exclude them before saving.",
    "In a Webex meeting, you can now dynamically adjust the recording and streaming layout within the meeting. You can also record the stage that has been synced for all participants and when a meeting host adjusts the synced stage for all participants, the recording or streaming layout will match the stage layout. This especially helps when recording classrooms where the recorded videos need to be set in a certain way, or when recording all-hands sessions where a sign language interpreter needs to be present on stage.",
    "Hosts can define the survey questionnaire and layout when they set up a webinar. When the webinar ends, attendees see the survey on their main browser. After their responses are submitted, hosts can download the responses in the completed webinar portal.",
    "In a Webex meeting, you can now dynamically adjust the recording and streaming layout within the meeting.",
    "In this update we're improving the experience when sharing a camera as content. Now, when sharing a camera as content, it shows directly within the meeting window itself. This makes it easier to keep an eye on participant videos, panels, apps, and more! Any Files or Whiteboards that are currently being shared are stopped when choosing to share a camera. Similarly, if you are sharing a camera as content, it is stopped if a File or Whiteboard is shared.",
    "Other is now included as an option when selecting languages for simultaneous interpretation. This update doesn't yet support indicating a specific custom language. The option simply states Other, which allows users to assign it to interpreters who are speaking languages that aren't part of the standard list.",
    "In this update we’re removing Verify Rich Media Player from the Help menu in Webex Meetings, Webinars, Events (classic), and Training, as this option is now obsolete.",
    "When you join as an attendee, you won’t need to re-enter your email or registration ID before joining a webinar in the following cases: If you have a Webex account on the current site and you received a join link after the host invited you from the webinar or you registered for the webinar and are approved by the host; and If you already joined or registered for a webinar meeting earlier and the user name and mail is received from the cookie. This applies to webinar with webcast view.",
    "When you register for a webinar, you’ll see the following updates: If you're approved, the you’ll see more meaningful actions, for example, join button, add the webinar to calendar, and download material, and while you enter your information and click Submit, you’ll not see the Submit button while your approval is pending to avoid confusion for double registering. If your submission is approved, then you'll see the Join instead of the Submit button, and you can download webinar materials if the host has it setup.",
    "You'll see a webinars promotion dialogue and message bar in classic event."
    ],
    sentiment: {
      positive: 1853,
      neutral: 408,
      negative: 161
    }
  },
  {
    version: "42.9.0",
    release_date: "2022-09-01",
    features: [
      "If you are using Webex Meetings and Webinars you can now add chapters to a recording and share them with others. This makes it faster and easier to view recordings that are longer in duration. Hosts can indicate the starting timestamp of a chapter along with its title and then delete them. You can enable MP4 recording and Webex Events (classic). You can view all the chapters in the recording playback bar and chapter panel.",
    "Invitation sources allow you to see where your attendees are coming from if you share the webinar links in multiple locations. You can create unique URLs for different platforms and share that unique link to track how many joins or registrations each platform has generated.",
    "You can now reorder the participants you've moved on to the stage. Simply drag and drop the video you'd like to move into the position you'd like, or use the more options menu in the video thumbnail where you can select move to first position. As an attendee, you can't reorder participants who are being synced by the host or cohost.",
    "The new Webex whiteboard is an infinite canvas where you can collaborate together with any meeting participants whether they are using Webex Meetings app, Webex App, or Webex devices. There are several handy tools such as pen, shapes, sticky notes, and images. When collaborating with others, you can see their profile pictures moving along with their pen strokes. To start a new whiteboard, just click the \"...\" menu button and click \"Start New Whiteboard\". Or if other participants start a whiteboard session, you can automatically join that session.",
    "Starting in 42.9, cohosts can’t end meetings. This change prevents accidental ending of meetings by cohosts. If an organization wants to change back to allow cohosts to end meetings, they can have their CSM submit a provisioning request.",
    "When you share content in a meeting or webinar, the shared content is now larger and the speaker video(s) is now smaller. The ratio between content and speaker videos is approximately 70:30 but depends on the size of your screens and the number of speakers on stage. The rest of the stage flow works the same",
    "Simultaneous Interpretation is supported in Personal Room meetings. You can enable these settings in site preference. For both Personal Room meetings and scheduled meetings or webinars, hosts can enable or disable the interpretation feature ad-hoc in the meeting, easily by controlling it on the fly. Hosts can also set a default language channel for everyone in the meeting (except interpreters) during scheduling or in the meeting. This gives hosts greater control over the meeting experience for their attendees and makes it easier for users to experience interpretation in their meeting.",
    "The type of responses that are being submitted to Open text polls are clustered and organized into categories. Available in Slido Labs and automatically ON for Cisco accounts. Rolling out to more accounts in the following weeks.",
    "Four new expandable sections are now available; General, Privacy, Audience Q&A, and Polls. Click and open Advanced settings which bring you to a pop-out of administrator settings.",
    "This feature adds the option to display a name that is attached to an answer. Once the participant decides to add their name it is visible in administration, participant, and present mode."
    ],
    sentiment: {
      positive: 1487,
      neutral: 344,
      negative: 137
    }
  },
  {
    version: "43.1.0",
    release_date: "2023-01-01",
    features: [
      "You can now host up to 1,000 participants joining end-to-end encrypted (E2EE) v2 Webex meetings. E2EEv2 meetings are part of Webex by Cisco's Zero Trust Security initiative and Cisco's security pillar that privacy is a fundamental human right.",
    "We’re excited to announce that we’re going to allow cohosts and meeting participants to record a meeting in the cloud. This makes it easy to record a meeting if the host isn’t available or busy during the meeting. This has been a highly requested feature from users who mentioned that this makes the meetings less interruptive as any cohost or meeting participant can record the meeting. With this feature, cohosts or meeting participants can record the meeting and have the capabilities that a host to start, stop, or pause the recording. After the meeting ends, the recording is still owned by the host. However, the recording is shared automatically with the cohosts who are from within the organization.",
    "We’re excited to introduce Auto Admit that is designed to make your life easier as a meeting host while increasing the security of your meeting. New New default behavior introduced with Auto Admit allows invitees who are signed into Webex to join a scheduled meeting directly without having to wait in the lobby. No more admitting people from the lobby when they were supposed to be in the meeting anyways! For users who aren’t signed into Webex and those who aren’t on the invite, they continue to wait in the lobby until you or a cohost admits them.",
    "Host and cohost can now give your webinar a professional and polished look by adding a background wallpaper and logo to the stage, customize the speakers’ name label with name and subtitles. You can set up the background, logo, and name labels in the information page before the webinar starts, or setup and do a last-minute check when you're in the webinar. Attendees only see the produced and customized stage when you sync the stage to everyone.",
    "Meeting and webinar hosts can now enable NDI® streaming technology for their meetings and webinars. NDI is used in many video production environments to transport video streams over the network, between applications, and hardware devices. After the host has enabled use of NDI in Meeting Settings > NDI Management > Allow NDI technology for my meetings and webinars any host or cohost can enable NDI mode on their Meetings client. The meeting host must have live streaming and NDI permissions granted in the user configuration in Site Administration or the Advanced settings per user in Control Hub. Existing live streaming users automatically gain access to NDI streaming.",
    "If you have a paid Webex plan, now you get Italian spoken language for free, just like the existing English, French, German, and Spanish spoken languages. During the meeting, the host can select Italian as the spoken language for the meeting, which then appears in the closed captions and transcript.",
    "We’ve updated the meeting preview window to make it easier to get into meetings. The window size has been changed to be smaller than the meeting window and not be expandable. This prevents users from thinking the preview window is the actual meeting window. We’ve also added a new tool tip to encourage users to click Join or Startmeeting.",
    "We've made it easier to regain control when you've granted control of your screen or application share to someone else. We added a new End control button to the control bar at the top of the screen, and a new keyboard shortcut SHIFT+ALT+R. You can continue to double-click the mouse to regain control as well.",
    "Windows users can choose from Preferences -> Video -> Camera -> Automatically select camera to enable or disable automatic camera switching when they connect a new external camera to their Windows computer. By default, automatic camera switching is turned off (unchecked). When users connect to the camera, they see a new camera notification.",
    "Attendees joining Webinars scheduled by online users can now join a using their browser by default. This removes any friction from their join process, which previously required them to download, setup, join by using the desktop app, and better support online webinars."
    ],
    sentiment: {
      positive: 1180,
      neutral: 267,
      negative: 125
    }
  },
  {
    version: "43.10.0",
    release_date: "2023-10-01",
    features: [
      "Now, you can control the self-view window during meetings using the VoiceOver screen reader or keyboard commands. Keyboard users can use the F6 key to focus on the self-view window. Once there, they use the tab key to navigate within the window and arrow keys to move the self-view across the screen. When sharing, use Shift+Com+Con+S as a shortcut to move between all the floating windows including self-view window.",
    "Vidcasts automatically generate summaries going over the key highlights of your vidcast. Instead of always needing to watch the entirety of a vidcast, you can now play or scroll through the highlights provided.",
    "Vidcasts automatically generates chapters based on the content of your video.",
    "Collections in vidcasts are now called playlists. Playlists help you better organize your videos, and offer sequential playback.",
    "Allows you to share videos to a Webex space while only granting those in the space access to view​.",
    "This acts as a helper app to record your Vidcasts. While recording, you can move and resize vidcasts for desktop, switch between self-view and screen view, and also use floating controls."
    ],
    sentiment: {
      positive: 0,
      neutral: 0,
      negative: 0
    }
  },
  {
    version: "43.11.0",
    release_date: "2023-11-01",
    features: [
      "In this feature, Web Webex app has implemented this functionality, users can schedule meetings within the Web Webex app, creating a user experience that is consistent with Desktop Webex app.",
    "In the website scheduler, in order to clear any confusion of what the Auto admit advanced scheduler setting does, it has been re-named to Join rules. In addition there are some other copy changes mainly to explain who these settings apply to. If the user trying to join is either not invited or not signed-in, then the settings apply to them where they could either be able to join meeting directly, be placed in lobby or not allowed to join at all."
    ],
    sentiment: {
      positive: 1175,
      neutral: 233,
      negative: 113
    }
  },
  {
    version: "43.12.0",
    release_date: "2023-12-01",
    features: [
      "In the left-to-right layout, we can see the basic meeting settings on the left side of the main view, the invitees, and free/busy calendar on the right side, the advanced settings on the bottom left corner. The position of several options has also been changed compared to previous experience."
    ],
    sentiment: {
      positive: 383,
      neutral: 70,
      negative: 21
    }
  },
  {
    version: "43.2.0",
    release_date: "2023-02-01",
    features: [
      "This update allows attendees to join webinars from a Webex cloud device – perfect for bringing employees together during webinars, such as company All-Hands. Attendees need to enter the webinar ID and password on the cloud device, then they can join the webinar as an attendee from the device.",
    "In addition to joining a Webex meeting from the Apple CarPlay dashboard, you can connect your iPhones to the Apple CarPlay dashboard and listen to audio meeting recordings on the go. You can see a list of your meeting recordings and can tap on the recording title to start listening. You can play and pause the recording and also forward or rewind it by 10 seconds.",
    "We’ve added a new option to dynamically adjust participant video quality. With this option enabled, the video resolution of meeting participants is increased to better fill the actual window resolution being used. This feature dynamically monitors the system and network performance to limit the improvements to what the system can handle. This setting can be enabled in Meeting Settings in the Layout tab by checking the box to enable. Dynamically adjust participant video quality to the actual video size.",
    "You can now walk into a room and start an instant meeting on a Webex device. Once you start a meeting, you no longer need to struggle to invite guests to a meeting. In the invite pop-up, you can now invite any guests to a meeting. Scan the QR code, and then you can copy and share the meeting information with anyone.",
    "This feature adds a Source ID column to the Manage Registration page, which captures where registered attendees are coming from. This way, hosts can view where their attendees are coming from before the webinar starts to know whether they should increase engagement on certain invitation platforms to attract more attendees.",
    "With Webex Scheduler, you can now change your meeting template after you have scheduled a meeting. Previously, your default template was used and you couldn’t change it after the meeting was scheduled.",
    "This enhancement allows users and administrators to hide the floating window with video thumbnails when sharing. While many users find it useful to see reactions from users while sharing, some would rather not show it. This change allows them to do that. To change at Meeting level, go to Settings > Sharing Content. At organization level in Control Hub, go to Meetings settings.",
    "There is a new polling activity report that records attendees' actions. This provides visibility into who has selected what for each polling question.",
    "The webinar attendance report now includes three additional columns - First name, Last name, and Role. The First name and Last name columns display the names that the attendees first joined the webinar with. If an attendee’s name is edited during the webinar, the edited name doesn’t appear in the report. Additionally, guest attendee’s First name and Last name aren’t reported. The Role column includes the attendee’s roles at the time the webinar ends.",
    "In addition to the number of attendees who have submitted polls, the host also has visibility into how many attendees are actively editing their polls but haven't submitted them yet. The hosts can view the attendee’s editing status for the polls. With this visibility, a host can remind their attendees that they must submit their polls."
    ],
    sentiment: {
      positive: 521,
      neutral: 149,
      negative: 76
    }
  },
  {
    version: "43.3.0",
    release_date: "2023-03-01",
    features: [
      "You can now admit participants waiting in the lobby directly into a breakout session without having to admit them to the main session first. This is a great way to verify or brief a meeting participant privately, before admitting them to the main session, or helping to get participants who joined late directly into the appropriate breakout session.",
    "We’re excited to introduce Auto Admit that is designed to make your life easier as a meeting host while increasing the security of your meeting. New default behavior introduced with Auto Admit allows invitees who are signed into Webex to join a scheduled meeting directly without having to wait in the lobby. No more admitting people from the lobby when they were supposed to be in the meeting anyways! For users who aren’t signed into Webex and those who aren’t on the invite, they continue to wait in the lobby until you or a cohost admits them.",
    "With Apple iPad OS Multiple Windows (multiple scene) Support, users can now pop-out the shared content into a separate window and run multiple instances of the app side by side. Pop-out shared content on iPad: users can drag the shared content or click on the pop-out icon to view standalone shared content window on iPad. Users can change the shared content window size to full screen by swiping the right to left as shown the in image.",
    "With new UI enhancements, Webex Meetings Android users can enjoy the best meetings experience in all modes available on fold and flip phones: Flex mode, Tablet mode, and Folded mode. You can view up to 12 people on the same screen with a 3 x 4 grid in flex mode and tablet mode.",
    "You can now walk into a room and start an instant meeting on a Webex device. Once you start a meeting, you no longer need to struggle to invite guests to a meeting. In the invite pop-up, you can now invite any guests to a meeting. Scan the QR code, and then you can copy and share the meeting information with anyone.",
    "Webex is removing the option to retain post-meeting data (recording and transcripts) for an indefinite period."
    ],
    sentiment: {
      positive: 1593,
      neutral: 355,
      negative: 147
    }
  },
  {
    version: "43.4.0",
    release_date: "2023-04-01",
    features: [
      "Webex Webinars allows you to host large-scale, customizable, and engaging, virtual events with innovative capabilities such as rich branding, high-motion video and audio, increased audience engagement with reactions, polling, Q&A, and breakout sessions, and advanced production and content management.",
    "Webcast hosts, panelists, and cohosts can now view the attendee list in webcast view, search for attendees through that list, and expel attendees from the webinar in webcast view using the list.",
    "Completed webinars now include a new report in the Activity tab called Reports summary which combines attendance, registration, and survey data all into one csv file. This report is all inclusive for the webinar data pipeline and saves hosts from the effort of viewing the three reports separately or combining them manually. This report is visible once all three reports -- attendance, registration (if applicable), and survey (if applicable) are generated.",
    "This update allows attendees to join webinars from RoomOS 11 devices that are cloud registered or using Webex Edge for devices. This is perfect for bringing employees together during webinars, such as company All-Hands. Attendees need to enter the webinar ID and password on the cloud connected device, then they can join the webinar as attendee.",
    "Webex Events (classic) recordings are synced to the new view of recordings in Webinars after Webex Events (classic) is no longer available. The content of these recordings doesn’t change, however, the look and feel is upgraded to include some of the brand-new features that Webinars has to offer.",
    "Attendees can join a webinar once using one email address. This prevents uninvited attendees from using an email address that has been approved or invited to join the webinar.",
    "Webinar presenters can open and share an MP4 file to attendees during the webinar. This is an alternative way to share a video.",
    "To empower collaboration, cohosts can now access and download the same reports as the host from the webinar report page. Both hosts and cohosts can see the same tabs on the reporting page including attendance, registration (if required), survey (if any), activity (if any), recordings, and insights.",
    "A new Audio Watermarking option is available when scheduling meetings based on the type of Webex Meetings Pro-End to EndEncryption_VOIPonly. When enabled, the meeting audio includes a unique identifier for each participant. The site administrator can upload audio recordings to Control Hub to identify the source that was recorded based on the presence of a unique audio watermark identifier."
    ],
    sentiment: {
      positive: 1062,
      neutral: 257,
      negative: 88
    }
  },
  {
    version: "43.5.0",
    release_date: "2023-05-01",
    features: [
      "Now, webinar hosts don’t have to worry about losing registration data when adding a webinar to a series. Webinar registration is automatically turned on when you add it to a series. If the webinar already had registration turned on, the webinar registration syncs with the series registration. This means that any registration data collected before the webinar was added to the series is retained. However, new registration data is only collected based on what the series collects.",
    "Webinar cohosts can now start and end a practice session. This is an effort to increase collaboration and take the load off the host during the webinar.",
    "Share the join link to a webinar in webcast view to make it easier for others to join. You can copy the link from the webinar in webcast view and paste it so others can use it, or share a QR code, which contains the link to the webinar in webcast view.",
    "Webinar hosts are now able to redirect their attendees to a landing page after they have completed registration for that webinar.",
    "This update is for the user experience for devices that join using SIP to align with the experience provided by the Webex Meetings App. The main changes are: meeting icons, meeting notifications, and rounded corners on video panes.",
    "Access to cloud recordings can be restricted only to the company’s network. This makes recording access more secure for corporations to prevent unauthorized data access. Administrators can choose to either restrict recording playback or download for the entire organization. This prevents users from accessing using all interfaces including Webex App, Webex site, Webex Meetings mobile app, and other browsers. The corporate network can be defined using the existing network location setting within organization settings in Control Hub.",
    "Embedded App framework now supports sharing the app in a meeting. When a user brings an app in a meeting, they can find an option to Share the app content along-with Open for All (These options presented to the end user depend on the app developers to invoke the corresponding APIs - the app developer can choose to show both the options or either one). Selecting Share the app content allows users to share the contents of the app with all the meeting participants. All meeting participants (including the users joining from Webex devices) can view this content, however, they won’t be able to collaborate on the content.1",
    "Webex Scheduler now uses the operating systems default browser to authenticate Webex Scheduler. Previously, iFrame was used, which is now blocked on some versions of Outlook.",
    "Administrator can turn on Settings Override and use settings templates to apply it to certain hosts. When these hosts start a meeting, participants joining this meeting adhere to the host's meeting policy and not the participants’ own policy."
    ],
    sentiment: {
      positive: 952,
      neutral: 223,
      negative: 104
    }
  },
  {
    version: "43.6.0",
    release_date: "2023-06-01",
    features: [
      "To increase collaboration, webinar series contributors can allow the others in the series, cohost access to their webinars. If contributors are added or removed from the series, their cohost access changes accordingly.",
    "Webinar hosts can edit all webinar options and participants privileges in the scheduling page before the webinar begins. Rest easy knowing that you can set preferences before your webinar begins so you don't have to spend time during your webinar setting them. For example, you can enable chat from the scheduling page, the same way you can enable it during the webinar.",
    "To increase collaboration between hosts and cohosts, cohosts now have the same privileges as the host on the webinar scheduling page, if the cohost has a webinar license.",
    "The Internal label for meeting participants is now based on an org membership. Users who belong to the Control Hub org that owns the site gets the internal label. This works for devices as well.",
    "The ability to mark user profile fields as required for Control Hub orgs, along with new user profile fields such as alternate phone 1 and 2 for Control Hub users is currently in Beta testing.",
    "The Webex site has an updated look and feel: simplified navigation, updated look and feel, all existing Meetings 'site' feaures supported, and dark mode support comining in a later update. Other features are now located in More Features which can be access by clicking on your profile picture.",
    "We improved the experience for users downloading Webex Meetings for the first time on Mac to join a meeting. We’ve removed the duplicate permission request to access files in the Downloads folder. We’ve removed the redundant permission explanation text pop-up on the preview window. We've request permission for screen sharing only when user chooses to share in-meeting.",
    "Registered attendees can now easily rejoin a webcast using the same email address up to two times. This also means attendees can join a webcast on two devices. We previously supported joining only once per registered email or device.",
    "If your network bandwidth can't support streaming 360p video, webinars in webcast view automatically switches to audio-only mode. You can also choose audio-only mode. While in audio-only mode, you only hear the webinar in webcast view audio, which is useful if you're traveling and move between wireless networks. You can also manually select this mode in the player user interface. This mode only plays the audio from a webcast and is targeted for users in the car, moving between Wi-Fi and cellular networks or bandwidth-constrained environments.",
    "Webinars with webcast view previously required a Webinar 3000-user license or higher. We’re excited to announce that with 43.6 Webinar with webcast view is available for any Webinar licenses."
    ],
    sentiment: {
      positive: 1268,
      neutral: 259,
      negative: 140
    }
  },
  {
    version: "43.7.0",
    release_date: "2023-07-01",
    features: [
      "Similar to meetings, webinars now have the capability to lock breakout sessions. By choosing Only allow assigned participants to join during pre-assignment, only permitted pre-assigned attendees or panelists can join a particular breakout session.",
    "With this enhancement, changes made through stage manager in Webinars, are now reflected in recordings, webcasts, and on Cisco devices.",
    "Attendees can join a webinar or webcast with the same email address only once. This prevents uninvited attendees from joining. However, if the webinar or webcast doesn’t require registration IDs, there is no limit on the number of times an attendee can join using the same email address.",
    "Webex is removing the option to retain post-meeting data (recording and transcripts) for an indefinite period. If the retention policy has been set to indefinite today, then the default retention period changes to 3 years, with the option to change it from 7 days to a maximum of 10 years. You also have the option to purge user deleted recordings within 30 days or make them follow the retention policy.",
    "Meta (formerly Facebook) has made an announcement on their Portal website that they are no longer selling Meta Portal effective immediately. Webex Meetings won’t be supported on the Meta Portal device from July 1, 2023.",
    "When a Control Hub managed site is updated with this feature, user profile data for that meeting site is acquired from the Webex Identity in Control Hub rather than it being specific to each meeting site. Each site does a one-time sync as part of this switching to Webex Identity as the source for user profile data."
    ],
    sentiment: {
      positive: 2083,
      neutral: 478,
      negative: 217
    }
  },
  {
    version: "43.8.0",
    release_date: "2023-08-01",
    features: [
      "User Hub was previously Webex sites, but with new features and improvements to the user experience. It’s the now the single destination for user-specific settings for Calling, Meetings, and Devices. We’ve incorporated user-specific Meetings, Calling, and Device settings from settings.webex.com, myaccount.webex.com and CUP. User Hub also provides updated Profile and Settings tabs.",
    "Competitors like Microsoft Teams currently offer multiple eCDN options today. This is seen as a competitive advantage since it provides customers with several providers to choose from. Starting in 43.8, webinars in webcast view now supports Enterprise Content Delivery Network (eCDN) from Kollective which dramatically improves the streaming experience for hybrid users. We’re excited about this collaboration with Kollective. This revolutionizes the way organizations across the globe engage with their audiences, by delivering seamless and high-quality Webex webcasts at scale. Together, we’re empowering businesses to connect and communicate with their employees, customers, and partners in ways never before possible.",
    "Starting with the 43.8 updates, webcasts includes, closed captioning and transcripts: Similar functionality as webinars; Available to all Webinar licenses; On desktop (Windows and Mac), mobile will be available in a future update.",
    "Recording transcript accuracy is being enhanced. When multiple speakers are changing within a short span of time, the transcripts accurately represent the speaker.",
    "To enhance the ease of playback experience, the playback bar for the recording player is being enhanced to prioritize capabilities that help users skim through a recording faster. This involves changing the position and icons of capabilities like playback speed, follow speaker, edit recording, and volume control for better access."
    ],
    sentiment: {
      positive: 0,
      neutral: 0,
      negative: 0
    }
  },
  {
    version: "43.9.0",
    release_date: "2023-09-01",
    features: [
      "Webex administrators can turn the default video connection on or off to control the Webex App setting Start my video when I join the meeting. They can also choose if users can edit that setting and choose different settings to apply to desktop and mobile. This setting is only for the default video status in the preview window when joining meetings. Users can always turn their video on or off in the preview window and during meetings.",
    "With this enhancement, changes made through stage manager in Webinars are now reflected in recordings.",
    "A new Audio Watermarking option is available when scheduling meetings based on the type Webex Meetings Pro-End to End Encryption_VOIPonly. When enabled, the meeting audio includes a unique identifier for each participant. The site administrator can upload audio recordings to Control Hub to identify the source that was recorded based on the presence of a unique audio watermark identifier."
    ],
    sentiment: {
      positive: 1905,
      neutral: 424,
      negative: 210
    }
  },
];

export default trainData;