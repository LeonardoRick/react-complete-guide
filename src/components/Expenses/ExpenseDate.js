import './ExpenseDate.css'

export default function ExpenseDate(props) {
    const {date} = props;
    const month = date.toLocaleString('pt-BR', { month: 'long' });
    const day = date.toLocaleString('pt-BR', { day: '2-digit' });
    const year = date.getFullYear();

    return (
        <div className="expense-date">
            <div className="espense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}