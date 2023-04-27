import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Cards({ user, id, deletebutton,editbutton}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <div className="title">
          <p>{user.Username}</p>
        </div>
        <div className="cardinner">
          <p>{user.Password}</p>
          <p>{user.Email}</p>
          <p>{user.Dateofbirth}</p>
          <p>{user.phonenumber}</p>
        </div>
        <div className="icons">
          <IconButton onClick={() => navigate(`/user/${id}`)}>
            <InfoIcon />
          </IconButton>
          {editbutton}
          {deletebutton}
        </div>
      </div>
    </div>
  );
}
