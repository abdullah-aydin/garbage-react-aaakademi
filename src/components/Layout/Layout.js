import { Container, AppBar, Hidden } from "@material-ui/core";
import clsx from "clsx";
// Components
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
// Theme
import { useStyles } from "./Layout.module";
//  @material-ui
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import { ListData } from "../../data/Data";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  let pageName = ""
  {
    ListData.map((item, index) => {
      if (useRouter().pathname === item.url) {
        useRouter().pathname === "/book"
          ? (pageName = "Aktif Kitaplarım")
          : (pageName = item.name);
        // if (useRouter().pathname === "/book") {
        //   pageName = "Aktif Kitaplarım";
        // } 
      } 
    });
  }


  const content = (
    <React.Fragment>
      <div className={classes.constStructure}>
        <Typography variant="h2">
          <b>{pageName ? pageName : "Anasayfa"}</b>
        </Typography>
        <hr />
      </div>

      <div classes={classes.contentIndex}>{children}</div>
    </React.Fragment>
  );

  return (
    <Container maxWidth="xl" disableGutters={true} className={classes.root}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      {/*Büyük Ekran */}
      <Hidden smDown>
        <Sidebar big open={open} />
      </Hidden>
      {/*Küçük Ekran */}
      <Hidden mdUp>
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
      </Hidden>
      <div className={clsx(classes.content, { [classes.contentShift]: open })}>
        {content}
      </div>
    </Container>
  );
};

export default Layout;
