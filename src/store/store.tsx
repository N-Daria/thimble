import React from "react";

export interface UserContext {
  users: UserData[] | null;
  setUsers: (users: UserData[]) => void;
}

export interface UserData {
  id: number;
  name: string;
  age: number;
  subscription: string;
  employment: boolean;
}

export const UsersContext = React.createContext<UserContext>({
  users: null,
  setUsers: () => {},
});
