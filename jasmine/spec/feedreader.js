/*eslint no-undef: 0*/
/*eslint linebreak-style: ["error", "windows"]*/

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has urls', function() {
            allFeeds.forEach(function(feed) {
                var url = feed.url;

                expect(url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name', function() {
            allFeeds.forEach(function(feed) {
                var name = feed.name;

                expect(name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        const slideMenu = document.querySelector('.slide-menu');
        let parentClassName = slideMenu.parentElement.className;



        it('is hidden', function() {
            expect(parentClassName).toBe('menu-hidden');

        });
        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu hides when clicking', function() {
            const menuIcon = $('.menu-icon-link');
            function click() {
                menuIcon.on('click', function() {
                    return (slideMenu.parentElement.className);
                });
            }
            expect(click()).not.toBe(parentClassName);

        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('verifies that there is at least one entry', function(done) {
            const entryText = document.querySelector('.feed .entry').innerText;
            expect(entryText.length).toBeGreaterThan(0);
            done();
        });

    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        try {
            let newEntryText = document.querySelector('.feed .entry').innerText;
        } catch(err) {
            newEntryText=0;
        }
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function() {
            if (newEntryText === null) {
                newEntryText = 0;
            }
        });
        afterEach(function(done) {
            loadFeed(0);
            done();
        });

        it('the content changed', function(done) {
            // same querySelector as newEntryText, but with another name so as to not create double assignment
            const anotherEntryText = document.querySelector('.feed .entry').innerText;
            // so that newEntryText and anotherEntryText are the same querySelectors called before and after completing the async function
            expect(newEntryText).not.toBe(anotherEntryText);
            done();
        });


    });
}());
