import { useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Link from "./Link";
import defaultTheme from "../theme";
import AuthenticationContext from "../context/AuthenticationContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;

function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useContext(AuthenticationContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/" variant="subtitle1" color="text.secondary">
          FitSep club
        </Link>
      </Typography>
      <Divider />
      <List>
        {user ? (
          <ListItem key={1} disablePadding>
            <Link
              variant="button"
              color="text.primary"
              href="/dashboard"
              sx={{ my: 1, mx: 1.5 }}
            >
              dashboard
            </Link>
          </ListItem>
        ) : null}
        <ListItem key={2} disablePadding>
          <Link
            variant="button"
            color="text.primary"
            href="/videos"
            sx={{ my: 1, mx: 1.5 }}
          >
            videos
          </Link>
        </ListItem>
        <ListItem key={3} disablePadding>
          <Link
            variant="button"
            color="text.primary"
            href="/pricing"
            sx={{ my: 1, mx: 1.5 }}
          >
            plans
          </Link>
        </ListItem>
        <ListItem key={4} disablePadding>
          <Link
            variant="button"
            color="text.primary"
            href="/about"
            sx={{ my: 1, mx: 1.5 }}
          >
            about us
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="static" component="nav" color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/" variant="subtitle1" color="text.secondary">
                FitSep club
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {user ? (
                <Link
                  variant="button"
                  color="text.primary"
                  href="/dashboard"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  dashboard
                </Link>
              ) : null}
              <Link
                variant="button"
                color="text.primary"
                href="/videos"
                sx={{ my: 1, mx: 1.5 }}
              >
                videos
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/pricing"
                sx={{ my: 1, mx: 1.5 }}
              >
                plans
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="/about"
                sx={{ my: 1, mx: 1.5 }}
              >
                about us
              </Link>
              {user ? (
                <Button onClick={handleLogout}>Log Out</Button>
              ) : (
                <Button
                  href="/account/sign-in"
                  variant="outlined"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
            {user ? (
              <Button onClick={handleLogout}>Log Out</Button>
            ) : (
              <Button
                href="/account/sign-in"
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
              >
                Login
              </Button>
            )}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Navigation;
