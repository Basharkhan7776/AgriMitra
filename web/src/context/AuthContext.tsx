import { createContext, useEffect, useReducer, ReactNode } from "react";
import authReducer, { AuthState, AuthAction } from "./authReducer";

interface AuthContextType extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

const INITIAL_STATE: AuthState = {
  user: JSON.parse(localStorage.getItem("user") || "null"),
};

export const AuthContext = createContext<AuthContextType>({
  user: INITIAL_STATE.user,
  dispatch: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("user");
    }
  }, [state.user]);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
