import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";


export function UserEdit() {
  const { id } = useParams();
  const [ucard, setUcard] = useState(null);

  useEffect(() => {
    fetch(`https://63d75fb85dbd723244249ea0.mockapi.io/items/${id}`)
      .then((data) => data.json())
      .then((crd) => setUcard(crd));
  }, []);

  return ucard ? <EditUserForm ucard={ucard} /> : <h1>Loading...</h1>;
}

function EditUserForm({ ucard }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [emailid, setEmailid] = useState();
  const [dob, setDob] = useState();
  const [phno, setPhno] = useState();

  const addUser = () => {
    const newCard = {
      Username: user,
      Password: password,
      Email: emailid,
      Dateofbirth: dob,
      phonenumber: phno,
    };
    fetch(`https://63d75fb85dbd723244249ea0.mockapi.io/items/${ucard.id}`, {
      method: "PUT",
      body: JSON.stringify(newCard),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/user");
  };

  return (
    <div>
      <div className="full">
        <Box>
          <form className="wrap">
            <TextField
              id="outlined-error-helper-text"
              label="UserID"
              size="small"
              defaultValue={ucard.Username}
              onChange={(event) => setUser(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              size="small"
              defaultValue={ucard.Password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="EmailID"
              size="small"
              defaultValue={ucard.Email}
              onChange={(event) => setEmailid(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Date of Birth"
              size="small"
              defaultValue={ucard.Dateofbirth}
              onChange={(event) => setDob(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Ph.no"
              size="small"
              defaultValue={ucard.phonenumber}
              onChange={(event) => setPhno(event.target.value)}
            />
            <Button
              onClick={() => addUser()}
              variant="contained"
              size="small"
              color="success"
            >
              SAVE
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
