import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import './Header.css'
import AllBooks from "./AllBooks";

const Header = () => {
  return (
    <>
    <div className="header">
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Link to={"/"} className="header__title">BookShelf</Link>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          


          <Button variant="contained">
            <Link
              style={{ textDecoration: "none", color: "white", }}
              to={"/login"}
            >
              Login
            </Link>
          </Button>
          <Button variant="contained">
            <Link
              style={{ textDecoration: "none", color: "white", }}
              to={"/register"}
            >
              Register
            </Link>
          </Button>

          
        </div>
      </Container>
    </div>
    <Container>
      <AllBooks/>
    </Container>
    </>

  );
};

export default Header;
