import './ExpenseItem.css'
import ExpenseDate  from './ExpenseDate.js'
import Card from '../UI/Card';
const ExpenseItems= (props)=>{
    //let {title , price , locationOfExpenditure} = props;
    return (
        <div>
              <Card className='expense-item'>
          <ExpenseDate date={props.date} />
          <div className='expense-item__description'>
            <p>Location: {props.locationOfExpenditure}</p>
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
          </div>
        </Card>
        </div>
      
      
        

    )
}
export default ExpenseItems;