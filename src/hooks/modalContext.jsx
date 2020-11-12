import * as React from "react";

const initialState = {
  isOpen: false,
};

const ModalStateContext = React.createContext();
const ModalDispatchContext = React.createContext();

function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { isOpen: true };

    case "CLOSE_MODAL":
      return { isOpen: false };
    default:
      throw new Error(`unhandled action type : ${action.type}`);
  }
}

function ModalProvider({ children }) {
  let [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error("useModalState must be used within a ModalProvider");
  }
  return context;
}

function useModalDispatch() {
  const context = React.useContext(ModalDispatchContext);
  if (context === undefined) {
    throw new Error("useModalDispatch must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModalState, useModalDispatch };
