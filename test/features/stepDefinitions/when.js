import { When } from 'cucumber';
import pageObjects from  '../../pageObjects/index';

When("I enter {string} to {string} on {string} page", (text, ele, page) => {
    pageObjects[page].getElement(ele).setValue(text);
    text.should.equal(pageObjects[page].getElement(ele).getValue());
});

When("I click {string} on {string} page", (ele, page) => {
    pageObjects[page].getElement(ele).click();
    browser.pause(1000);
});


When("I choose checkbox is {string} on {string} page", (ele, page) => {
    pageObjects[page].getElement(ele).click();
    browser.pause(1000);
});

When("I scroll to {string}", (ele, page) => {
    pageObjects[page].getElement(ele).waitForDisplayed({ timeout: 3000 });
    pageObjects[page].getElement(ele).scrollIntoView();
})