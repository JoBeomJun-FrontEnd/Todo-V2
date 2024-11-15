import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (event) => {
    const status = event.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDeleted = () => {
    onDelete(id);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDeleted}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
