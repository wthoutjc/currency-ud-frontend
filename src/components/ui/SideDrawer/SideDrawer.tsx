"use client";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icons
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PriceChangeIcon from "@mui/icons-material/PriceChange";

const drawerWidth = 240;

const SideDrawer = () => {
  const pathname = usePathname();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        <Link href="/" passHref>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Currency App
          </Typography>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {[
          { name: "Convert", to: "convert", icon: <PriceChangeIcon /> },
          { name: "Currency", to: "currency", icon: <AttachMoneyIcon /> },
          {
            name: "Exchange Rate",
            to: "exchange",
            icon: <CurrencyExchangeIcon />,
          },
        ].map(({ name, to, icon }, index) => (
          <Link href={`/${to}`} passHref key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "#e0e0e0",
                    "&:hover": {
                      backgroundColor: "#e0e0e0",
                    },
                  },
                }}
                selected={pathname === `/${to}`}
              >
                <ListItemIcon>{icon}</ListItemIcon>

                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export { SideDrawer };
