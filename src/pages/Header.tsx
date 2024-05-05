import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <h1>BookShelf</h1>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Button variant="outlined">
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={"/home"}
          >
            Home
          </Link>
          </Button>
          <Button variant="contained">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/home"}
            >
              Login
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
