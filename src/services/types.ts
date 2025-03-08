export interface IUser {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}
export interface IFavorite extends IUser {
  userId: string;
}
