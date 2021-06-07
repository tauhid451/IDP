import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('http://localhost:8000/')

WebUI.switchToWindowTitle('Arsenal Maintenance System')

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Login'))

WebUI.setText(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/input_E-Mail Address_email'), 
    'admin@admin.com')

WebUI.setEncryptedText(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/input_Password_password'), 
    '8SQVv/p9jVScEs4/2CZsLw==')

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/button_Login'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Go Issue Or Deposit'))

WebUI.setText(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/input'), '0003459146')

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/button_IssueDeposit'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/button_Lock'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Home'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Go Inventory'))

WebUI.selectOptionByValue(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'bd-08', true)

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/td_2021-05-30'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/td_2021-05-30'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/td_2021-05-30'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Home'))

WebUI.click(findTestObject('Object Repository/Deposition/Page_Arsenal Maintenance System/a_Logout'))

