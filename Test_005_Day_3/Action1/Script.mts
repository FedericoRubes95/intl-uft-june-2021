AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Maximize
wait 3

AIUtil("profile").Click
AIUtil("input", "Username").Type "Mercury"
AIUtil("input", "Password").Type "Mercury"
AIUtil.FindTextBlock("SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click



