export type UserType = {
  id: number | null;
  email: string;
  password: string;
  username: string;
  role: number;
  avatarPath: string;
} | null;

export type TokenProps = {
  locale: string;
  children?: React.ReactNode;
};

export type TokenType = {
  access_token: string;
  user: UserType;
};

export type TokenContextType = {
  token: {
    access_token: string;
    user: UserType;
  };
  setToken: (token: TokenType) => {};
  storeTokenToLocalStorage: (token: TokenType) => {};
  removeTokenFromLocalStorage: () => {};
};

export type AuthMessages = {
  title: string;
  linkTitle: string;
  submitTitle: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  invalidEmail: string;
  invalidPassword: string;
  usernameEmpty: string;
  passwordDoesNotMatch: string;
  EmailAlreadyExist: string;
  emailNotExist: string;
  signupError: string;
  signinError: string;
};

export type AccountDropDownMessages = {
  account: string;
  signUp: string;
  signIn: string;
  signOut: string;
};