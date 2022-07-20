import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MyInfoBar from "./MyInfoBar";
const drawerWidth = 240;
const navItems = ["Home", "Menu", "About", "Contact", "Market"];

function MyAppBar(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const changeTheme = () => {
    props.setIsDarkTheme(!props.isDarkTheme);
  };

  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 600 }}>
        Foody
        <RestaurantMenuIcon></RestaurantMenuIcon>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
    <Box sx={{ display: "flex", pb: 2.5 }}>
      <AppBar component="nav" color="inherit" sx={{ py: 0.3 }}>
        {/* <AppBar variant="outlined" sx={{ height: 20 }}>
          <Toolbar sx={{ m: 0 }} variant="string">
            asass
          </Toolbar>
        </AppBar> */}
        <MyInfoBar></MyInfoBar>

        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { sm: "space-around", xs: "space-between" },
            alignItems: "center",

            marginTop: 2.2,
          }}
        >
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
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: 600 }}
          >
            Foody
            <RestaurantMenuIcon></RestaurantMenuIcon>
          </Typography>

          <Tabs
            sx={{ display: { xs: "none", sm: "block" } }}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            {navItems.map((item) => (
              // <Button key={item} sx={{ color: "inherit  " }} variant="text">
              //   {item}
              // </Button>
              <Tab key={item} label={item}></Tab>
            ))}
          </Tabs>
          {/* Icons */}

          <Box sx={{ display: "flex" }}>
            <IconButton sx={{ ml: 1 }} color="inherit" onClick={changeTheme}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon></ShoppingCartIcon>
            </IconButton>
          </Box>
          {/* Icons */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
        </Drawer>
      </Box>
    </Box>
  );
}

export default MyAppBar;