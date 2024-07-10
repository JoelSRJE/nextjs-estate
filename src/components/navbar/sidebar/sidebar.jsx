import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { signOut } from "next-auth/react";

const Sidebar = ({ handleSidebar, userInfo }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const sideMenuItems = [
    {
      text: "Profile",
      link: "/",
    },
    {
      text: "Add Property",
      link: "/",
    },
    {
      text: "Create Post",
      link: "/",
    },
    {
      text: "Sign Out",
      link: "/",
      action: signOut(),
    },
  ];

  const styleIcon = {
    fontSize: "2rem",
    borderRadius: "50%",
    border: isExpanded ? "2px solid gray" : "2px solid #FFF",
    color: isExpanded ? "gray" : "#FFF",
  };

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Drawer
      anchor="left"
      variant="persistent"
      open={handleSidebar}
      onClose={() => setIsExpanded(false)}
      hideBackdrop={true}
      disableScrolllock={true}
      PaperProps={{
        sx: {
          position: "fixed",
          height: "100vh",
          top: "5rem",
          width: isExpanded ? "10rem" : "3rem",
          backgroundColor: isExpanded ? "#F4F4F4" : "transparent",
          boxShadow: isExpanded ? "5" : "0",
          opacity: isExpanded ? "1" : "0.5",
          padding: isExpanded ? "0.5" : "0.1rem",
          paddingTop: "5rem",
          transition: "width 0.3s ease",
        },
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        sx={{
          position: "relative",
          bottom: "4rem",
          alignSelf: "flex-end",
        }}
      >
        {isExpanded ? (
          <FaAngleLeft style={styleIcon} />
        ) : (
          <FaAngleRight style={styleIcon} />
        )}
      </IconButton>

      {isExpanded && (
        <Box sx={{ padding: "1rem", textAlign: "center" }}>
          <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
            Welcome, {userInfo.username}
          </Typography>
        </Box>
      )}

      <List>
        {sideMenuItems.map((item, idx) => (
          <ListItem
            key={idx}
            component="a"
            href={item.link}
            onClick={item.action ? item.action : undefined}
            sx={{
              display: isExpanded ? "block" : "none",
              marginBottom: "0.5rem",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            <ListItemText primary={item.text} sx={{ color: "#333" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
