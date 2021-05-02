// import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './ExpenseItem.css'

export default function Expenses(props) {
    const { items } = props;

    return (
        <div>
            {/* <ExpensesFilter /> */}
            <div className="expenses">
                {items.map(item => (
                    <ExpenseItem key={item.id} title={item.title} amount="10" date={item.date}/>
                ))}
            </div>
        </div>
    )
}
