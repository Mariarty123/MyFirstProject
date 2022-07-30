import { AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Mui = (props) => {
  const bullForm = () => {
    props.editForm(true);
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ textAlign: "right" }}>My Tasks</Typography>
        <Button
          style={{ marginLeft: "50px" }}
          variant="contained"
          onClick={bullForm}
        >
          Добавить задачу
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Mui;
