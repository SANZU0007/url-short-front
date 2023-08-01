import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import { LoginContext } from "./contextapp/context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);

  // console.log(logindata);

  const history = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutuser = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("https://login-zft1.onrender.com/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 201) {
      console.log("use logout");
      localStorage.removeItem("usersdatatoken");
      setLoginData(false);
      history("/");
    } else {
      console.log("error");
    }
  };
  const goDash = () => {
    history("/dash");
  };

  const goError = () => {
    history("*");
  };

  return (
    <>
      <header>
        <nav>
          <h1>URL-SHORT</h1>
          <div className="avtar">
            {logindata.validUserOne ? (
              <Avatar style={{ background: "red" }} onClick={handleClick}>
                {logindata.validUserOne.fname[0]}
              </Avatar>
            ) : (
              <Avatar style={{ background: "blue" }} onClick={handleClick} />
            )}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {logindata.validUserOne ? (
              <>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    goDash();
                  }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                    logoutuser();
                  }}
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    goError();
                  }}
                >
                  Profile
                </MenuItem>
              </>
            )}
          </Menu>
        </nav>
      </header>
    </>
  );
};

export default Header;
