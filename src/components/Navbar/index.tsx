import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Button,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import useUser from "@/hooks/useUser";
import { useState } from "react";

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const user = useUser();
  const pages = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  const settings = [
    { title: "Profile", onClick: () =>  window.alert("Boo") },
    { title: "Account", onClick: () =>  window.alert("Boo") },
    { title: "Dashboard", onClick: () =>  window.alert("Boo") },
    { title: "Logout", onClick: () =>  user.logout()},
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, paddingLeft: "10px" }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                variant="text"
                component="a"
                href={page.href}
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user.user ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title={"Open Settings"}>
                  <IconButton>
                    <Avatar src={user?.user?.photoURL || ""} onClick={handleOpenUserMenu} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }} onClick={setting.onClick}>
                        {setting.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <Button variant="outlined" href="/login">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
