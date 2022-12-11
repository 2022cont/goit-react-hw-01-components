import PropTypes from 'prop-types';
import { TableBodyTransaction } from './tablebody/TableBodyTransaction.jsx';
import css from './TableTransaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(({id, type, amount, currency}) => (
        <TableBodyTransaction
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </table>
  )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}