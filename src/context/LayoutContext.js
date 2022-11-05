import { createContext, useReducer, useContext } from "react";

const LayoutStateContext = createContext();
const LayoutDispatchContext = createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, drawerOpen: !state.drawerOpen };
    case "TOGGLE_LEFT_DRAWER":
      return { ...state, leftDrawerOpen: !state.leftDrawerOpen };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) {
  const [state, dispatch] = useReducer(layoutReducer, {
    drawerOpen: false,
    leftDrawerOpen: false,
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  const context = useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useMessageState must be used within a MessageProvider");
  }
  return context;
}

function useLayoutDispatch() {
  const context = useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useMessageDispatch must be used within a MessageProvider");
  }
  return context;
}

export {
  LayoutProvider,
  useLayoutState,
  useLayoutDispatch,
  toggleDrawer,
  toggleLeftDrawer,
};

// ###########################################################
function toggleDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER",
  });
}
function toggleLeftDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_LEFT_DRAWER",
  });
}
