//Task 1: Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
let total = (subtotal + (subtotal * taxRate)) - discount;
    return total.toFixed(2);
} // Created a function that calculates the invoice total and prints it to the console.
console.log(`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); // Expected output: "Total Invoice: $103.00"
console.log(`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`); // Expected output: "Total Invoice: $530.00"

//Task 2: Employee Hourly Wage Calculation
function calculateHourlyWage (salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return hourlyWage.toFixed(2);
}; // Created a function that calculates the hourly wage.

console.log(`Hourly Wage: $${calculateHourlyWage(52000, 40)}`); // Expected output: "Hourly Wage: $25.00"
console.log(`Hourly Wage: $${calculateHourlyWage(75000, 35)}`); // Expected output: "Hourly Wage: $41.21"
// Prints the hourly wage to the console.

//Task 3: Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let loyalDiscount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let loyalPrice = amount * (1 - loyalDiscount);
    return `Discounted Price: $${loyalPrice.toFixed(2)}`;
}; // Created a function that calculates the discount based on the customers years with the business.

console.log(calculateLoyaltyDiscount(100, 6)); // Expected output: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected output: "Discounted Price: $190.00"
// Prints the loyalty discount price to the console.

//Task 4: Product Shipping Cost Calculation
const calculateShippingCost = (weight, location, expedited = false) => {
    let initialPrice = location === "USA" ? 5 + 0.5 * weight : 10 + 0.7 * weight;
    let totalPrice = (expedited ? initialPrice + 10 : initialPrice);
    return `Shipping Cost: $${totalPrice.toFixed(2)}`;
}; // Created a function that calculates shipping cost based on specific factors and applies a fee depending.

console.log(calculateShippingCost(10, "USA", true));
console.log(calculateShippingCost(5, "Canada", false));
// Prints the shipping cost to the console.

//Task 5: Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = (principal * rate * years);
    return `Total Interest: $${interest.toFixed(2)}`;
}; // Created a function that calculates the total interest accrued.

console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected output: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected output: "Total Interest: $1750.00"
// Prints the total interest to the console.

//Task 6: Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {     // Expected output: [1200, 3000, 2200]
    return transactions.filter(filterFunction);
}; // Created a function that filters all transactions over $1000.

console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected output: [1200, 3000, 2200]
// Logged the filtered transactions to the console.

//Task 7: Budget Tracker
function createBudgetTracker() {
let balance = 0;
    return function(balTotal) {
        balance -= balTotal;
        return `Current Balance: $${balance}`;
    };
}; // Created a function that added expenses and returned the total remaining balance.
    
let budget = createBudgetTracker();

console.log(budget(300)); // Expected output: "Current Balance: -$300"
console.log(budget(200)); // Expected output: "Current Balance: -$500"
// Prints the total balance to the console.
