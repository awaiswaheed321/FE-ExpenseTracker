import PropTypes from "prop-types";

export default function ExpenseInfoModal({ closeModal, expense }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Student Information</h2>
        <p>Name: {expense.name}</p>
        <p>Amount: {expense.amount}</p>
        <p>Date: {expense.date}</p>
        <p>Category: {expense.category.name}</p>
        <p>Category Description: {expense.category.description}</p>
        <button className="delete-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

ExpenseInfoModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
