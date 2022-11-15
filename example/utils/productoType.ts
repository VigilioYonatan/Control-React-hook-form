interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
}

export type AddUser = Omit<User, 'id'>;
