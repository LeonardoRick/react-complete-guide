import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const { selected } = props;
  const yearList = ['2019', '2020', '2021', '2022'].reverse();

  const selectYearHandler = ($event) => {
    const { value } = $event.target;
    props.onChangeYear(value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={selectYearHandler}>
            {yearList.map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
