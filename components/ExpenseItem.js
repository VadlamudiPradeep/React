import './ExpenseItem.css'
function ExpensesItems(props){
    //let {title , price , locationOfExpenditure} = props;
    return (
        <body>
            <div >
              
<div className='expense-item'>
            <p>{props.currentDate}</p>
<p>Location : {props.locationOfExpenditure}</p>
         <h2>{props.title}</h2>
         <div className="expense-item__price">{props.price}</div>

        </div>
      
</div>
        </body>

    )
}
export default ExpensesItems;