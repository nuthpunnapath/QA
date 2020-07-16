import { Then } from 'cucumber';
import pageObjects from '../../pageObjects/index';


Then(/^I will (not)*see "([^"]*)?" in "([^"]*)?" on "([^"]*)?" page$/, (isNot, text, ele, page) => {
  console.log('isNot', isNot)
  if (isNot === null) {
    pageObjects[page].getElement(ele).should.contain(text);
  } else {
    pageObjects[page].getElement(ele).should.not.contain(text);
  }
});

Then("I will see {string} on web title", (text) => {
  browser.getTitle().should.equal(text);
});

Then("I wait for element {string} on {string} page", (ele, page) => {
  pageObjects[page].getElement(ele).waitForExist({ timeout: 5000 });
})