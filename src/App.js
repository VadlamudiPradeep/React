// import logo from './logo.svg';
import React from 'react'
import './App.css';
import ExpenseItems  from './components/Expenses/ExpenseItem';


const App =()=>{

  let expenses = [
    {title :'Food' ,amount:'$25' ,locationOfExpenditure:'Restaurant', date :new Date()  },
    {title:'Car' , amount: '$50000' ,locationOfExpenditure:'NK', date :new Date()},
    { title:'Shopping' , amount:'$4000' , locationOfExpenditure:'Mall' ,date :new Date()}
  ];

  return (
    <div className="App">
    <h2>Let's get started!</h2>
  
    {expenses.map((expense , index)=>(
  <ExpenseItems key={index}
  date={expense.date}
   title={expense.title}
   amount={expense.amount}
   
   locationOfExpenditure={expense.locationOfExpenditure}
  >
  </ExpenseItems>
    ))}
  
    </div>
  );






  // return  React.createElement('div', {} ,
  // React.createElement('h2',{},"Let's get started") ,
  // React.createElement(ExpenseItem ,{items:expenses},)
  //)

}

export default App;




  // return (
  //   <div className="App">
  //   <h2>Let's get started!</h2>
  
  //   {expenses.map((expense , index)=>(
  // <ExpensesItems key={index}
  // date={expense.date}
  //  title={expense.title}
  //  amount={expense.amount}
   
  //  locationOfExpenditure={expense.locationOfExpenditure}
  // >
  // </ExpensesItems>
  //   ))}
  
  //   </div>
  // );