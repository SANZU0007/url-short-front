import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const history = useNavigate();

  const login = () => {
    history("/");
  };
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ color: "red" }}>This is 404 Error Page Pls Back....! </h1>
      <Button
        variant="contained"
        onClick={() => {
          login();
        }}
      >
      
        click to back...
      </Button>
    </div>
  );
};

export default Error;
