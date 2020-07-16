import { Given } from 'cucumber'
import { config } from '../../config/wdio.conf';
import pageObjects from  '../../pageObjects/index';

Given("I open {string} page", (page) => {
    browser.url(`${config.baseUrl}/${pageObjects[page].getPage()}`);
});

Given("I open {string} web", (page) => {
    browser.url(page);
});