import React from "react";

// TODO: Implement AuthContext and AuthProvider using useReducer
export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // TODO: Add reducer and state logic
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};
