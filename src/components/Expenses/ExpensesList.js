import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
  const { items } = props;

  if (items.length === 0) {
    return <p className="expenses-list__fallback">Found No Expenses</p>
  }

  return (
    <ul className="expenses-list">
      {items
        .map(item => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount="10"
              date={item.date}/>
        ))}
    </ul>
  )
}

export default ExpensesList;
