import { useState } from "react";
import cancel from "../../src/images/cancel.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditForm = (props) => {
  const [editTask, setEditTask] = useState("");
  const [editDate, setEditDate] = useState("");

  const editPostTask = (event) => {
    setEditTask(event.target.value);
  };
  const editPostDate = (event) => {
    setEditDate(event.target.value);
  };
  const editData = (event) => {
    event.preventDefault();
    const costData = {
      key: Math.random().toString(),
      task: editTask,
      date: new Date(editDate),
    };
    props.editData(costData);
  };
  const editCancel = (event) => {
    event.preventDefault();
    props.editCancel(false);
  };
  return (
    
     
        <div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Задача"
            onChange={editPostTask}
            value={editTask}
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label=""
            type="date"
            onChange={editPostDate}
            value={editDate}
            style={{ borderWight: "150px" }}
          />
        </div>
        <Button onClick={editData} variant="contained" color="success">
          Изменить
        </Button>
        <Button onClick={editCancel} variant="outlined" color="error">
          Отмена
        </Button>
      </div>
  );
};
export default EditForm;
