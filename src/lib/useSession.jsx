"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

export function useSession() {
  const [cookies] = useCookies(["accessToken"]);
  const router = useRouter();

  useEffect(() => {
    if (!cookies.accessToken) {
      router.replace("/");
    }
  }, [cookies, router]);

  return cookies.accessToken ? <Box>Restricted, please login</Box> : null;
}
