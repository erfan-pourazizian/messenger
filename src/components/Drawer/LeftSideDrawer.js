import React from 'react';
import {Drawer} from "@material-ui/core";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import {toggleLeftDrawer, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";


const LeftSideDrawer = () => {
    const {leftDrawerOpen} = useLayoutState()
    const Dispatch = useLayoutDispatch()

    return <Drawer anchor={"left"} open={leftDrawerOpen} onClose={() => {
        toggleLeftDrawer(Dispatch)
    }}>
        <LeftSidebar/>
    </Drawer>
}


export default LeftSideDrawer;