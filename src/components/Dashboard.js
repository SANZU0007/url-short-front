import React, { useContext, useEffect } from "react";
import { LoginContext } from "./contextapp/context";
import { useNavigate } from "react-router-dom";
import URLShortener from "./urlApp/Url";

const Dashboard = () => {
 

 

  
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
