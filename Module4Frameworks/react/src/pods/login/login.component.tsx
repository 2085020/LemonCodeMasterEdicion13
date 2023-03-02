import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import rick from "./assets/rick.jpeg";

export const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };
  return (
    <>
      <Card sx={{ padding: "30px" }}>
        <form onSubmit={handleNavigation}>
          <h2>Hello from login page</h2>

          <div>
            <div>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Card>

      <Card sx={{ padding: "30px", marginTop: "20px" }}>
        <Link to={"/rickmorty"}>
          <img src={rick} />
          <br />
          <span>Go to Rick and Morty amazing space</span>
        </Link>
      </Card>
    </>
  );
};
