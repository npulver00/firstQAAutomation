import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities,} from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new SpecPage(driver);


test("search Owls", async () => {
    await page.navigate();
    await page.doSearch("owls");
    expect(await page.getResults()).toContain("owls")
  })
  
  afterAll(async () => {
    await driver.quit();
  });
