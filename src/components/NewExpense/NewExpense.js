import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
    const [form, setForm] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const changeHandler = ($event) => {
        const { dataset, value } = $event.target;
        setForm(prevState => ({ ...prevState, [dataset.key]: value }))
    }

    const submitHandler = ($event) => {
        $event.preventDefault(); // prevent page reload
        props.onSaveExpenseData(form);
        setForm({
            title: '',
            amount: '',
            date: ''
        })
    }

    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title: </label>
                        <input
                            type="text"
                            value={form.title}
                            data-key="title"
                            onChange={changeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount {form.amount}</label>
                        <input
                            type="number"
                            value={form.amount}
                            min={0.01} step={0.01}
                            data-key="amount"
                            onChange={changeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            value={form.date}
                            min="2019-01-02"
                            max="2022-12-31"
                            data-key="date"
                            onChange={changeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;