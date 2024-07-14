"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import AddListing from "@/components/listingpage/addlisting/addlisting";
import { useCookies } from "react-cookie";
import { redirect } from "next/navigation";

const ListingPage = () => {
  const [cookies] = useCookies(["accessToken"]);

  useEffect(() => {
    if (!cookies.accessToken) {
      redirect("/");
    }
  }, [cookies.accessToken, redirect]);

  if (!cookies.accessToken) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#17253d",
        height: "auto",
        width: "100vw",
        paddingTop: "5rem",
      }}
    >
      <Box sx={{ height: "auto", width: "auto" }}>
        <AddListing />
      </Box>
    </Box>
  );
};

export default ListingPage;
