
XCODE TeacherNotepad2 Project settings

Info

Deployment target 6.0

Hiding at startup

Modify TeacherNotepad2>Resources>TeacherNotepad2-Info.plist

Add/edit these two attributes if not present. Set "Status bar is initially hidden" to "YES" and set "View controller-based status bar appearance" to "NO". If you edit it manually without Xcode, the keys and values are:

<key>UIStatusBarHidden</key>
<true/>
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>

TeacherNotepad2>Resources>TeacherNotepad2-Info.plist

added TeacherNotepad2-Info.plist to repo