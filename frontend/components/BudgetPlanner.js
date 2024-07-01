import React, { useState } from 'react';

const BudgetPlanner = () => {
    const [budget, setBudget] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (e) => {
        e.preventDefault();
        const expenseName = e.target.elements.expenseName.value;
        const expenseAmount = parseFloat(e.target.elements.expenseAmount.value);
        setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
        e.target.reset();
    };

    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    const remainingBudget = budget - totalExpenses;

    return (
        <div>
            <h2>Travel Budget Planner</h2>
            <form onSubmit={handleAddExpense}>
                <input type="text" name="expenseName" placeholder="Expense Name" required />
                <input type="number" name="expenseAmount" placeholder="Expense Amount" required />
                <button>Add Expense</button>
            </form>
            <p>Budget: ${budget}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Remaining Budget: ${remainingBudget}</p>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>{expense.name} - ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default BudgetPlanner;
