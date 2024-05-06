import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface Users {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [users, setUsers] = useState<Users>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUsers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!users.username || !users.password) {
      alert("Please enter all information!");
      return;
    }

    console.log("Login Data:", users);
    setUsers({ username: "", password: "" });

    navigate("/home");
  };

  return (
    <div className="register">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          background: "rgb(242, 241, 241)",
          borderRadius: "10px",
          padding: "20px",
          width: "400px",
        }}
      >
        <h2>Login</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__input">
            <label>Username:</label>
            <Input
              type="text"
              name="username"
              value={users.username}
              onChange={handleChange}
            />
          </div>
          <div className="register__input">
            <label>Password:</label>
            <Input
              type="password"
              name="password"
              value={users.password}
              onChange={handleChange}
            />
          </div>
          <Button style={{marginTop: "20px"}} variant="outlined" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
