import React, { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const TopGames: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">TopGames</Typography>
    </Box>
  );
};

export default TopGames;
