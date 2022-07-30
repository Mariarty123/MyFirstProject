import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewTask = (props) => {
  const [inputTask, setInputTask] = useState("");
  const [inputDate, setInputDate] = useState("");

  const inputTaskNew = (event) => {
    setInputTask(event.target.value);
  };
  const inputDateNew = (event) => {
    setInputDate(event.target.value);
    console.log(inputDate);
  };
  const inputData = (event) => {
    event.preventDefault();
    let taskData = {
      key: Math.random().toString(),
      task: inputTask,
      date: new Date(inputDate),
    };
    props.inputNewData(taskData);
    setInputTask("");
    setInputDate("");
  };
  const cancelBullet = () => {
    props.cancelEdit(false);
  };

  return (
    <div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Задача"
          onChange={inputTaskNew}
          value={inputTask}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label=""
          type="date"
          onChange={inputDateNew}
          value={inputDate}
          style={{ borderWight: "150px" }}
        />
      </div>
      <Button onClick={inputData} variant="contained" color="success">
        Добавить
      </Button>
      <Button onClick={cancelBullet} variant="outlined" color="error">
        Отмена
      </Button>
    </div>
  );
};
export default NewTask;
