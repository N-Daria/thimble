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
  employment: string;
}

export interface UserDataContext {
  currentUser: UserData | null;
  setCurrentUser: (user: UserData) => void;
}

export interface formState {
  name: string;
  age: number | string;
  subscription: string;
  employment: boolean;
}

export interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

export const UsersContext = React.createContext<UserContext>({
  users: null,
  setUsers: () => {},
});

export const ThemeContext = React.createContext<Theme>({
  theme: "dark",
  setTheme: () => {},
});

export const CurrentUserContext = React.createContext<UserDataContext>({
  currentUser: null,
  setCurrentUser: () => {},
});
