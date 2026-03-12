import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
  direction="row"
  alignItems="center"
  p={2}
  sx={{
    position: "sticky",
    top: 0,
    justifyContent: "space-between",
    background: "linear-gradient(90deg,#0f172a,#1e293b)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    zIndex: 1000
  }}
>
  <Link to="/" style={{ display: "flex", alignItems: "center" }}>
    <img src={logo} alt="logo" height={45} />
  </Link>

  <SearchBar />
</Stack>
);

export default Navbar;
