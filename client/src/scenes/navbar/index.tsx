import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import FlexBetween from "@/components/FlexBetween";
import { Dashboard } from "@mui/icons-material";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" padding="0.5rem 0rem" color={palette.grey[300]}>
      {/*LEFT SIDE*/}
      <FlexBetween gap="0.75rem">
        <JoinFullIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          Finacular
        </Typography>
      </FlexBetween>

      {/*RIGHT SIDE*/}
      <FlexBetween gap="2rem">
        {/*FIRST LINK*/}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("Dashboard")}
            style={{
              color: selected === "Dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        {/*SECOND LINK*/}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("Predictions")}
            style={{
              color: selected === "Predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
