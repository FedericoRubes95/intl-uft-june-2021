'API TEST
RunAPITest "Test_006_Day_4" ,DataTable("APITestOutput", dtGlobalSheet)

'GUI TEST
RunAction "Action1 [Test_007_Day_4]", oneIteration, DataTable("APITestOutput", dtGlobalSheet)
