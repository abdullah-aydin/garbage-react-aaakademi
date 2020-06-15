import { Container, AppBar, Hidden } from '@material-ui/core';
import clsx from 'clsx'
// Components
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
// Theme
import { useStyles } from './Layout.module'
//  @material-ui
import Typography from "@material-ui/core/Typography";

const Layout = ({children}) => {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(true);
    

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const content = (
      <React.Fragment>
        <div className={classes.constStructure}>
          <Typography variant="h2">
            <b>Anasayfa</b>
          </Typography>
          <hr/>
        </div>

        <div classes={classes.contentIndex}>{children}</div>
      </React.Fragment>
    );

    return (
        <Container maxWidth="xl" disableGutters={true} className={classes.root}>
            <Header open={open} handleDrawerToggle={handleDrawerToggle}  />
            {/*Büyük Ekran */}
            <Hidden smDown >
                <Sidebar big open={open} />
            </Hidden>
            {/*Küçük Ekran */}
            <Hidden mdUp >
                <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
            </Hidden>
            <div className={clsx(classes.content, {[classes.contentShift]: open,})}>
                {content}
            </div>
        </Container>
    );
}



export default Layout