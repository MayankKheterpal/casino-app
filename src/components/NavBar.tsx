import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  AppBar,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
// import "./NavBar.css";

import { NavLink } from "react-router-dom";

const StyledLink: any = styled(Link)(({ theme }) => ({
  display: "inline-block",
  padding: "5px 10px",
  marginLeft: "2rem !important",
  "&.active": {
    backgroundColor: `${theme.palette.primary.contrastText}`,
  },
}));

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [linkCliked, setlinkCliked] = React.useState(false);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleItemCliked = () => {};

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.dark",
      }}
    >
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {routes.map((page) => (
            <Link
              key={page.key}
              component={NavLink}
              to={page.path}
              underline="none"
              variant="button"
              color="primary.dark"
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page.title}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {routes.map((page) => (
          <StyledLink
            key={page.key}
            component={NavLink}
            to={page.path}
            color="primary.light"
            underline="none"
            variant="button"
            sx={[
              {
                fontSize: "x-large",
                marginLeft: "3rem",
                textTransform: "none",
                height: "100%",
                "&:focus": {
                  backgroundColor: "primary.contrastText",
                },
              },
            ]}
          >
            {page.title}
          </StyledLink>
        ))}
      </Box>
    </AppBar>
  );
};
export default Navbar;
