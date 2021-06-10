'LOGIN
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1896913440_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "60bf72c1a7c813816d02" @@ hightlight id_;_2001430304_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_197794_;_script infofile_;_ZIP::ssf12.xml_;_

'Select ORder Number
WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER" @@ hightlight id_;_1896922752_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set @@ hightlight id_;_1885861056_;_script infofile_;_ZIP::ssf14.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("Param1") @@ hightlight id_;_1930847688_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click @@ hightlight id_;_1896924864_;_script infofile_;_ZIP::ssf16.xml_;_

'Delete
WpfWindow("Micro Focus MyFlight Sample").WpfButton("WpfButton").Click @@ hightlight id_;_1930851048_;_script infofile_;_ZIP::ssf17.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Dialog("Notification").WinButton("Yes").Click @@ hightlight id_;_591400_;_script infofile_;_ZIP::ssf18.xml_;_

