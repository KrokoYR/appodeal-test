export interface IAuthState {
  isLoggedIn: boolean;
}

export const defaultAuthState: IAuthState = {
  isLoggedIn: false
};
