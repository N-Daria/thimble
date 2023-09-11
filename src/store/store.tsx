export interface userData {
  id: number;
  name: string;
  age: number;
  subscription: string;
  employment: boolean;
}

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
