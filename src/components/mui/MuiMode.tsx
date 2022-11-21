import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";

function MuiMode() {
  const theme = useTheme();
  return (
    <div>
      <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
    </div>
  );
}

export default MuiMode;
