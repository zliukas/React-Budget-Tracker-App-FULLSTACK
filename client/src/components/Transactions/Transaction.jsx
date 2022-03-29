import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>

      {transaction.text} 
      <span>
        <span style={{marginRight: 50}}>{transaction.category}</span>
        {sign}${Math.abs(transaction.amount)}
      </span>

        <button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>

    </li>


  )
}