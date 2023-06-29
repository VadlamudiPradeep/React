// import logo from './logo.svg';
import './App.css';
import ExpensesItems  from './components/ExpenseItem';

function App() {
  let currentDate = new Date()
  let expenses = [
    {title :'Food' ,price:'$25' ,locationOfExpenditure:'Resturant'},
    {title:'Car' , price: '$50000' ,locationOfExpenditure:'NK'},
    {title:'Shooping' , price:'$4000' , locationOfExpenditure:'Mall'}
  ]
  return (
    <div className="App">
    <h2>Let's get started!</h2>
    <p>{currentDate.toDateString()}</p>
    {expenses.map((expense , index)=>(
  <ExpensesItems key={index}
   title={expense.title}
   price={expense.price}
   locationOfExpenditure={expense.locationOfExpenditure}
  >
  </ExpensesItems>
    ))}
  
    </div>
  );
}

export default App;
