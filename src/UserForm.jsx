import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function UserForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [emailid, setEmailid] = useState("");
  const [dob, setDob] = useState("");
  const [phno, setPhno] = useState("");
  const addUser = () => {
    const newCard = {
      Username: user,
      Password: password,
      Email: emailid,
      Dateofbirth: dob,
      phonenumber: phno,
    };
    fetch("https://63d75fb85dbd723244249ea0.mockapi.io/items", {
      method: "POST",
      body: JSON.stringify(newCard),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/user")
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
              value={user}
              onChange={(event) => setUser(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              size="small"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="EmailID"
              size="small"
              value={emailid}
              onChange={(event) => setEmailid(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Date of Birth"
              size="small"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Ph.no"
              size="small"
              value={phno}
              onChange={(event) => setPhno(event.target.value)}
            />
            <Button
              onClick={()=>addUser()}
              variant="contained"
              size="small"
              color="success"
            >
              ADD
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
