import { useState } from "react";
import Mui from "./Mui/Mui";
import EditForm from "./TtaskForm/EditForm";
import NewTask from "./TtaskForm/NewTask";
import TaskForm from "./TtaskForm/TaskForm";
import Box from "@mui/material/Box";
import Tick from "./Tick/Tick";
import MyPhoto from "./MyPhoto/MyPhoto";

const INTERNESH = [
  {
    key: "1",
    task: "Выучить реакт",
    date: new Date("Sept 24, 23"),
  },
  {
    key: "2",
    task: "Тделать тату",
    date: new Date("Oct 15, 24"),
  },
  {
    key: "3",
    task: "погулять с Настей",
    date: new Date("Jul 24, 07"),
  },
];

function App() {
  const [taskData, setTaskData] = useState(
    JSON.parse(localStorage.getItem("postArray")) || INTERNESH
  );
  const [posId, setPosId] = useState(-1);
  const [editBul, setEditBul] = useState(false);
  const [bullForm, setBullForm] = useState(false);

  const inputData = (props) => {
    const Array = [...taskData, props];
    setTaskData(([...taskData]) => [...taskData, props]);
    localStorage.setItem("postArray", JSON.stringify(Array));
    setBullForm(false);
  };
  const deleteTask = (props) => {
    const Array = [...taskData];
    Array.splice(props, 1);
    setTaskData(([...taskData]) => [...Array]);
  };
  const postEdit = (props) => {
    setPosId(props);
  };

  const dataEdit = (props) => {
    const Array = [...taskData];
    Array[posId].task = props.task;
    Array[posId].date = new Date(props.date);
    Array[posId].key = props.key;
    console.log(Array);
    setTaskData([...Array]);
    setEditBul(false);
  };
  const funForm = (props) => {
    setEditBul(props);
  };
  const cancelEdit = (props) => {
    setEditBul(props);
  };
  const editBullForm = (props) => {
    setBullForm(props);
  };
  
  return (
    <div>
      <Mui editForm={editBullForm} />
      {bullForm === true && (
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
          style={{ paddingTop: "300px", paddingLeft: "600px" }}
        >
          <NewTask inputNewData={inputData} cancelEdit={editBullForm} />
        </Box>
      )}
      {editBul === true && (
        <Box
          sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
          style={{ paddingTop: "300px", paddingLeft: "600px" }}
        >
          <EditForm editData={dataEdit} editCancel={cancelEdit} />
        </Box>
      )}
      <em style={{ marginTop: "100px", marginLeft: "70px" }}>
        <Tick />
      </em>
      <div style={{ marginTop: "100px", marginLeft: "70px" }}>
        {taskData.map((task, pos) => (
          <TaskForm
            task={task.task}
            date={new Date(task.date)}
            pos={pos}
            deletePost={deleteTask}
            editPost={postEdit}
            key={task.key}
            funBul={funForm}
          />
        ))}
      </div>
      <MyPhoto/>
    </div>
  );
}

export default App;
