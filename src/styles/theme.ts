import { createMuiTheme } from "@material-ui/core/styles";
import { black, white } from "./colors";

const defaultTheme = createMuiTheme({
  palette: {
    common: {
      black,
      white,
    },
  },
});

export default defaultTheme;
