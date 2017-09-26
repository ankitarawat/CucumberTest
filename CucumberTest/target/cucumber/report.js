$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "cucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openBrowser()"
});
formatter.result({
  "duration": 20383415799,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.34.0\u0027, revision: \u002711cd0ef93615408e0b6b3bfa28defe125906461a\u0027, time: \u00272013-08-06 11:43:14\u0027\nSystem info: os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:111)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:115)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:161)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:107)\r\n\tat cucumberJava.cucumberJava.openBrowser(cucumberJava.java:21)\r\n\tat ✽.Given I have open the browser(cucumberJava\\cucumberJava.feature:5)\r\nCaused by: org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00272.34.0\u0027, revision: \u002711cd0ef93615408e0b6b3bfa28defe125906461a\u0027, time: \u00272013-08-06 11:43:14\u0027\nSystem info: os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:165)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:62)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:527)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:111)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:115)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:161)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:107)\r\n\tat cucumberJava.cucumberJava.openBrowser(cucumberJava.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:44)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:223)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:75)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:80)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:48989/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:104)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:163)\r\n\t... 49 more\r\nCaused by: com.google.common.util.concurrent.UncheckedTimeoutException: java.util.concurrent.TimeoutException\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:143)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:79)\r\n\t... 50 more\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(FutureTask.java:205)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:130)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "cucumberJava.goToFacebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "cucumberJava.loginButton()"
});
formatter.result({
  "status": "skipped"
});
});