import './ExpenseItem.css'
function ExpensesItems(props){
    let {title , price , locationOfExpenditure} = props;
    return (
        <body>
            <div >
              
<div className='expense-item'>
         <h2>{title}</h2>
         <div className="expense-item__price">{price}</div>
        
         <p>Location : {locationOfExpenditure}</p>
        </div>
      
</div>
        </body>

   
    )
}
export default ExpensesItems;