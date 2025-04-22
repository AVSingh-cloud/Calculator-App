import Buttons from "./Buttons";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ handleButtonNum }) => {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttons_container}>
      {ButtonNames.map((button) => (
        <Buttons
          key={button}
          AllButtons={button}
          handleButtonNum={handleButtonNum}
        ></Buttons>
      ))}
    </div>
  );
};

export default ButtonsContainer;
