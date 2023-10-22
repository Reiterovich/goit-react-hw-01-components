import css from './transactions.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <section className={css.section}>
      <table className={css.transactionhistory}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(item => (
          <tbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>U{item.currency}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
};
