import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
    const { items } = props;
    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

    const changeYear = year => {
      setFilteredYear(year);
    }

    const filteredExpenses = items.filter(item => item.date.getFullYear().toString() === filteredYear)

    return (
      <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={changeYear}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    )
}
