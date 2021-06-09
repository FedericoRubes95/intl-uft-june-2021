'Declare the constants
Const limite = 9.0

'Test
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("BEATS STUDIO 2 OVER-EAR 2")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innerhtml", 9.3, 10000 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("BEATS STUDIO 2 OVER-EAR 2")_;_script infofile_;_ZIP::ssf4.xml_;_
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist(20)
currentScore = cDBL(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml"))
If currentScore >= limite Then
	reporter.ReportEvent micPass, "checkScore", "The score (" &currentScore& ") exceed the value of: " & limite
Else
	reporter.ReportEvent micFail, "checkScore", "The score (" &currentScore& ") is below the  threshold value of: " & limite
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click
