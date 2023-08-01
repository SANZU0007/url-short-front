import React, { useContext, useEffect } from "react";
import { LoginContext } from "./contextapp/context";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  // console.log(logindata)

  const history = useNavigate();
  const checkUserValidity = async () => {
    let token = localStorage.getItem("usersdatatoken");

    try {
      const res = await fetch("https://login-zft1.onrender.com/validuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const data = await res.json();

      if (data.status === 401 || !data) {
        
      } else {
        console.log("User verified");
       setLoginData(data)
       history("/dash")
       
      }
    } catch (error) {
      console.error("Error checking user validity:", error);
      history("/error")
    }
  };

  useEffect(() => {
    checkUserValidity();
  }, []);

  
  return (
    <div style={{backgroundColor:"blue",display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"100vh"}}>
     
    </div  >
  );
};

export default Dashboard;
