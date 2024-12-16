import ExpenseInfoModal from "./ExpenseInfoModal.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Expenses({ expenses }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    name: "",
    amount: "",
    date: "",
    category: {},
  });

  const closeModal = () => setIsOpen(false);

  function handleDelete(id) {
    // deleteFromServer(id);
  }
  function showInfo(id) {
    // getStudentDataByID(id);
  }

  return (
    <div className="container container2">
      <div className="students-container">
        <h1 className="heading">All Students</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((student, index) => (
              <tr
                key={student.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.program}</td>
                <td className="centered-button">
                  <button
                    className="show-info-button"
                    onClick={() => showInfo(student.id)}
                  >
                    💁
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(student.id)}
                  >
                    ✖️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <ExpenseInfoModal
            closeModal={closeModal}
            id={modalInfo.id}
            name={modalInfo.name}
            program={modalInfo.program}
          />
        )}
      </div>
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired, // ISO string for date
      category: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
