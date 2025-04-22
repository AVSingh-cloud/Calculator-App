import styles from "./Buttons.module.css";

const Buttons = ({ AllButtons, handleButtonNum }) => {
  return (
    <button
      className={styles.button}
      onClick={() => handleButtonNum(AllButtons)}
    >
      {AllButtons}
    </button>
  );
};

export default Buttons;
