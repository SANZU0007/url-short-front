import React, { useContext, useEffect } from "react";
import { LoginContext } from "./contextapp/context";
import { useNavigate } from "react-router-dom";
import URLShortener from "./urlApp/Url";

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
<>
  <br>   <br>   <br>  </br>  </br>  </br>
    <div>
    
      <h1 style={{padding:"10px"}}>Enter The Your Url..</h1>


     
     
     
     <URLShortener/>
    </div  >
  </>
  );
};

export default Dashboard;
