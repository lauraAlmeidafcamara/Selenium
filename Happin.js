const { Builder, By, until, Keys } = require('selenium-webdriver','selenium-WebDriverWait');

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('http://localhost:4200/login')
    .then(_ => driver.findElement(webdriver.By.name('btnEntrar')).click())
    .then(_ => driver.findElement(By.name('loginfmt')).sendKeys("teste@fcamara.com.br"))
    .then(_ => driver.findElement(By.id('idSIButton9')).click())
    .then(_ => driver.findElement(By.id('i0118')).sendKeys("senha@123"))
    //.then(_=> element=wait.until(ExpectedConditions.elementToBeClickable(By.id("idSIButton9"))))
    //.then(_=> wait.until(driver.element_to_be_clickable((By.ID, 'idSIButton9'))))
   // .then(_=> espera.until(ExpectedConditions.elementToBeClickable(By.id("idSIButton9"))))
    .then(_ => driver.findElement((new WebDriverWait(driver, 5)).until(ExpectedConditions.elementToBeClickable(By.id("idSIButton9"))).click()))
    .then(_ => driver.quit());