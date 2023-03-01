import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const selectedYearChangeHandler = (e) => {
    props.onAddSelectedYear(e.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>연도별 필터</label>
        <select value={props.selectedYear} onChange={selectedYearChangeHandler}>
          <option value="all">전체보기</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;