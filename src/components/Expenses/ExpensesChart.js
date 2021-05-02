import Chart from "../Chart/Chart";

const ExpensesChart = props => {
  const { expenses } = props;

  const dataPoints = [
    { id: 1, label: 'Jan', value: 0 },
    { id: 2, label: 'Fev', value: 0 },
    { id: 3, label: 'Mar', value: 0 },
    { id: 4, label: 'Apr', value: 0 },
    { id: 5, label: 'May', value: 0 },
    { id: 6, label: 'Jun', value: 0 },
    { id: 7, label: 'Jul', value: 0 },
    { id: 8, label: 'Aug', value: 0 },
    { id: 9, label: 'Sep', value: 0 },
    { id: 10, label: 'Oct', value: 0 },
    { id: 11, label: 'Nov', value: 0 },
    { id: 12, label: 'Dec', value: 0 },
  ]

  expenses.forEach(expense => {

    // starting at 0 as January, but 0 is january index on the list, so thats fine
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  })

  const pointValues = dataPoints.map(point => point.value)
  const max = Math.max(...pointValues)

  return <Chart dataPoints={dataPoints} max={max} />
}

export default ExpensesChart;
