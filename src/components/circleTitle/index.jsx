import { Box, Typography } from "@mui/material";
import CircleLogo from "../../assets/Logo-Circle.png";
const CircleTitle = ({ title, mt, conected }) => {
  return (
    <Box
      sx={{
        mt: mt || 0,
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <img src={CircleLogo} style={{ height: "50px", borderRadius: "11px" }} />
      <Typography
        ml={"10px"}
        fontSize={"37px"}
        color='white'
        letterSpacing={"1px"}
        fontWeight={300}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CircleTitle;
