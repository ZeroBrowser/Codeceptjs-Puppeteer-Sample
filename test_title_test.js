Feature('test 0browser landing page has a title');

Scenario('test something', (I) => {
    I.amOnPage('https://0browser.com');
    I.seeInTitle('0Browser');
});
