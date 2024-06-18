/* eslint-disable react/prop-types */
import style from "./Button.module.css";

function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
