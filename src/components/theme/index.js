import { createTheme } from '@material-ui/core/styles'
import tinyColor from 'tinycolor2'

const colorPrimary = "#5ea9dd";

const Theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
      light: tinyColor(colorPrimary).lighten().toHexString(),
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0"
      }
    }, MuiListItem: {
      button: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0"
      }
    }, MuiButton: {
      label: {
        fontFamily: "shabnam !important",
        color: "#d2dbe0"
      }
    }
  }
})

export default Theme;