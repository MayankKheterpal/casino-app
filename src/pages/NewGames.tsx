import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const NewGames: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">NewGames</Typography>
    </Box>
  );
};

export default NewGames;
