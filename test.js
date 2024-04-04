// Import the function sum from the app.js file
const { sum } = require('./appp.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./appp.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(1);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 1 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.07); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Import the function from appp.js
    const { fromDollarToYen } = require('./appp.js');

    // Use the function like its supposed to be used
    const yen = fromDollarToYen(1.07);

    // 1.07 dollar is equal to 156.5 yen
    const expected = 156.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(1.07)).toBe(156.5); // 156.5 is 1.07 dollars
})

test("156.5 yen is equal to 0.87 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./appp.js');

    // Use the function like its supposed to be used
    const pound = fromYenToPound(156.5);

    // If 156.5 yen is 0.87 pound
    const expected = 0.87; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(156.5)).toBe(0.87); // If 156.5 yen is 0.87 pound
})