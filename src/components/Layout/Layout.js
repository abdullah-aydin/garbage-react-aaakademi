import { Container, AppBar, Hidden } from '@material-ui/core';
import clsx from 'clsx'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import { useStyles } from './Layout.module'



const Layout = ({children}) => {
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(true);
    

    const handleDrawerToggle = () => {
        setOpen(!open);
    };


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
                <div classes={classes.contentIndex}>{children}</div>
            </div>
        </Container>
    );
}



export default Layout