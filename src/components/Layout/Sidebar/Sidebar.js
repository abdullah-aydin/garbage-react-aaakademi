import React from 'react'
import PropTypes from 'prop-types';
import BigScreenDrawer from './BigScreenDrawer/BigScreenDrawer'
import SmallScreenDrawer from './SmallScreenDrawer/SmallScreenDrawer'

const Sidebar = ({ big, open, handleDrawerToggle}) => {
    if(big){
        return <BigScreenDrawer  open={open}/>
    }

    return <SmallScreenDrawer handleDrawerToggle={handleDrawerToggle}  open={open}/>
}

export default Sidebar

Sidebar.prototypes ={
    big:PropTypes.bool,
    open:PropTypes.bool
}