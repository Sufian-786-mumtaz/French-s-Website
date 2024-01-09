import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Bio", "Gallery", "Videos", "Marketplace", "Contact Us"];

function DrawerAppBar(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="/images/logo.png"
        alt=""
        width={128}
        height={97}
        className="mx-auto my-4"
      />
      <Divider />
      <List sx={{ justifyContent: "flex-start" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding disableRipple>
            <ListItemButton>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "transparent",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <Toolbar
          sx={{
            pt: 5,
            justifyContent:'space-between',
            paddingLeft: { sm: "30px", md: "80px", lg: "120px" },
            paddingRight: { sm: "30px", md: "80px", lg: "120px" },
          }}
        >
          <img src="/images/logo.png" alt="" width={128} height={97} />
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                disableRipple
                sx={{
                  color: "#000000CC",
                  borderRight: "1.5px solid black",
                  borderRadius: "0px",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                  justifyContent: "flex-start",
                  paddingLeft: { lg: "30px", sm: "15px", md:'20px' },
                  paddingRight: { lg: "30px", sm: "15px", md:'20px' },
                  fontSize: { lg: "20px", md: "15px", sm:'13px' },
                  background:'none',
                  '&:hover': {
                    background: 'none',
                  },
                  '&:last-child': {
                    borderRight: 'none',
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          paddingLeft: { xs: "30px", md: "80px", lg: "175px" },
          paddingRight: { xs: "30px", md:'14px' },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
