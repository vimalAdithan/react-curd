import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { useNavigate } from "react-router-dom";

export function UserList() {
  const navigate = useNavigate();
  const [card, setCard] = useState([]);
  const getCard = () => {
    fetch("https://63d75fb85dbd723244249ea0.mockapi.io/items")
      .then((data) => data.json())
      .then((crd) => setCard(crd));
  };

  useEffect(() => getCard(), []);

  const deleteCard = (id) => {
    fetch(`https://63d75fb85dbd723244249ea0.mockapi.io/items/${id}`, {
      method: "DELETE",
    }).then(() => getCard());
  };

  return (
    <div>
      <div className="addbtn">
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/adduser")}

        >
          Add Users
        </Button>
      </div>
      <div className="useritems">
        {card.map((usr) => (
          <Cards
            key={usr.id}
            user={usr}
            id={usr.id}
            deletebutton={
              <IconButton onClick={() => deleteCard(usr.id)}>
                <DeleteIcon />
              </IconButton>
            }
            editbutton={
              <IconButton onClick={() => navigate(`/user/edit/${usr.id}`)}>
              <CreateIcon />
            </IconButton>
            }
          />
          ))}
      </div>
    </div>
  );
}
