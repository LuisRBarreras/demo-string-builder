const Browser = require('zombie');

Browser.localhost('localhost', 3000);


describe('Testing Demo String Builder', function() {
    const browser = new Browser();


    describe('Check content page', function() {
        before(function(done) {
            browser.visit('/',done);
        });


        it('should exist div#content', function() {
            browser.assert.element('#content');
        });

        it('should exist list-item with itemsq', function() {
            browser.assert.element("#list-items");

            browser.assert.element("#item-1");
            browser.assert.text("#item-1", "1. Apple");

            browser.assert.element("#item-2");
            browser.assert.text("#item-2", "2. Banana");

            browser.assert.element("#item-3");
            browser.assert.text("#item-3", "3. Coconut");


            browser.assert.element("#item-4");
            browser.assert.text("#item-4", "4. Strawberry");
        });
    });
});
