import './TaskForm.css'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskForm = (props) => {
  const month = props.date.toLocaleString("en-EN");
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

  const deletePost = () => {
    props.deletePost(props.pos);
  };
  const editPost = () => {
    props.editPost(props.pos);
    props.funBul(true);
  };
  const formatDate = () => {
    return (
      <>
        {month} + {day} + {year}
      </>
    );
  };
  return (
    <div className="task-form">
      
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"  }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.task} secondary={month} />
        </ListItem>
      </List>
      

      <div></div>
      <div>
        <IconButton edge="end" aria-label="comments" onClick={editPost}>
          <CommentIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={deletePost}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default TaskForm;
