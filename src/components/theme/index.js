import { createTheme } from "@material-ui/core/styles";
import { textTransform } from "@mui/system";

const colorPrimary = "#31528c";

const Theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0",
      },
    },
    MuiListItem: {
      button: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0",
      },
    },
    MuiButton: {
      label: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0",
      },
    },
  },
});

export default Theme;
