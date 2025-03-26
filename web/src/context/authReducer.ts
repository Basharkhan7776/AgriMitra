import { User } from "firebase/auth";

export interface AuthState {
  user: User | null;
}

export type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export default authReducer;
