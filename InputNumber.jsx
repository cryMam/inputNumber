import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import classes from './InputNumber.module.css';

export const InputNumber = ({
  value,
  onChange,
  name,
  disabled,
  onClickUp,
  onClickDown
}) => {
  return (
    <div className={classes.inputNumberBox}>
      <input
        type="number"
        value={value}
        name={name}
        min="1"
        disabled={disabled}
        className={classes.inputNumber}
        onChange={onChange}
      />
      {!disabled ? (
        <div className={classes.inputNumberArrows}>
          <div
            className={classes.inputNumberArrowBox}
            name={name}
            onClick={onClickUp}
          >
            <IoMdArrowDropup />
          </div>
          <div className={classes.inputNumberDevider}></div>
          <div
            className={classes.inputNumberArrowBox}
            name={name}
            onClick={onClickDown}
          >
            <IoMdArrowDropdown />
          </div>
        </div>
      ) : (
        <div className={classes.inputNumberArrows}>
          <div className={classes.inputNumberArrowBox}>
            <IoMdArrowDropup />
          </div>
          <div className={classes.inputNumberDevider}></div>
          <div className={classes.inputNumberArrowBox}>
            <IoMdArrowDropdown />
          </div>
        </div>
      )}
    </div>
  );
};
