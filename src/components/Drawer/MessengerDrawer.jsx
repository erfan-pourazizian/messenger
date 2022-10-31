import {Drawer} from "@material-ui/core";
import RightSidebar from "../rightSidebar/RightSidebar";
import {toggleDrawer, useLayoutDispatch, useLayoutState} from "../../context/LayoutContext";


const MessengerDrawer = () => {
    const {drawerOpen} = useLayoutState()
    const layoutDispatch = useLayoutDispatch()

    const handleToggle = () => {
        toggleDrawer(layoutDispatch)
    }

    return (
        <Drawer anchor={"right"} open={drawerOpen} onClose={handleToggle}>
            <RightSidebar/>
        </Drawer>
    )}

export default MessengerDrawer