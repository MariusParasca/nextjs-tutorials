export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  balance: number;
  customProp?: string;
};
