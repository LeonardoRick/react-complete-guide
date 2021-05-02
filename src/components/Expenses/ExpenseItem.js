import ExpenseDate from './ExpenseDate';
import './Expenses.css'

const ExpenseItem = (props) => {
    const { date, title, amount } = props;

    return (
        <li className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </li>
    )
}

export default ExpenseItem;
