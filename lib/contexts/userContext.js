import { createContext, useContext, useReducer } from "react";

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, initialValues);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

function userReducer(state, action) {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_ID":
      return { ...state, id: action.payload };
    case "SET_TEL":
      return { ...state, tel: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_FLOOR":
      return { ...state, floor: action.payload };
    case "SET_OFFICE":
      return { ...state, office: action.payload };
    case "RESET":
      return initialValues;
    default:
      return state;
  }
}

const initialValues = {
  fullName: "",
  id: "",
  tel: "",
  image: "",
  floor: "",
  office: "",
};
