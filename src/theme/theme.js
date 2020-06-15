// @material-ui
import { createMuiTheme } from "@material-ui/core/styles";
// palette and typography styles 
import palette from "./palette/palette";
import typography from "./typography/typography";

const theme = createMuiTheme({
  palette,
  typography,
});

export default theme;
