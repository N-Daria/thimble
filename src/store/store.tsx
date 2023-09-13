import React from "react";

export type UserData = {
  id: number;
  name: string;
  age: number;
  subscription: string;
  employment: boolean;
};

export const UsersContext = React.createContext<UserData[] | null>(null);

export const mockData = {
  data: [
    {
      id: 1,
      name: "Name 1",
      age: 32,
      subscription: "Subscribed",
      employment: true,
    },
    {
      id: 2,
      name: "Name 2",
      age: 24,
      subscription: "Not subscribed",
      employment: true,
    },
  ],
};
