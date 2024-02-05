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




  return (
    <>
      <header>
        <nav>
          <h1>URL-SHORT</h1>
          <div className="avtar">
                         <Avatar onClick={handleClick} >URL</Avatar>
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
                    history("/");
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
