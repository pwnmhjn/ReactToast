import { useState } from "react";
import styles from "./App.module.css";
import Button from "./Components/button/Button";
import Toast from "./Components/toast/Toast";

function App() {
  const [list, setList] = useState([]);

  let toastProperties = null;

  const showToast = (type) => {
    switch (type) {
      case "Success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a Success toast Components",
          backgroundColor: "#5cb85c",
        };
        break;
      case "Danger":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a Danger toast Components",
          backgroundColor: "#d9534f",
        };
        break;
      case "Info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a Info toast Components",
          backgroundColor: "#5bc0de",
        };
        break;
      case "Warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a Warning toast Components",
          backgroundColor: "#f0ed4e",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([...list, toastProperties]);
  };
  return (
    <div className={styles.root}>
      <h1>React Toast Components</h1>
      <div className="style.buttons">
        <Button handleClick={() => showToast("Success")}>Success</Button>
        <Button handleClick={() => showToast("Danger")}>Danger</Button>
        <Button handleClick={() => showToast("Info")}>Info</Button>
        <Button handleClick={() => showToast("Warning")}>Warning</Button>
      </div>
      <Toast toastList={list} position={"button-right"} setList={setList} />
    </div>
  );
}

export default App;
