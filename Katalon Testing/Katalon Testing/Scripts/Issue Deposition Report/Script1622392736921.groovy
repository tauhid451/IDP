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

WebUI.click(findTestObject('Report Issue/Page_Arsenal Maintenance System/a_Login'))

WebUI.click(findTestObject('Report Issue/Page_Arsenal Maintenance System/form_E-Mail Address  Password              _8e85b7'))

WebUI.setText(findTestObject('Report Issue/Page_Arsenal Maintenance System/input_E-Mail Address_email'), 'admin@admin.com')

WebUI.setEncryptedText(findTestObject('Report Issue/Page_Arsenal Maintenance System/input_Password_password'), 
    '8SQVv/p9jVScEs4/2CZsLw==')

WebUI.click(findTestObject('Report Issue/Page_Arsenal Maintenance System/button_Login'))

WebUI.click(findTestObject('Report Issue/Page_GMS/a_Go Inventory'))

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'bd-08', true)

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'lmg', true)

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'smg', true)

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'pistol', true)

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'g3', true)

WebUI.selectOptionByValue(findTestObject('Report Issue/Page_GMS/select_Choose Gun Type. BD-08 LMG SMG Pistol G3'), 
    'pistol', true)

WebUI.click(findTestObject('Report Issue/Page_GMS/td_admin'))

WebUI.closeBrowser()

