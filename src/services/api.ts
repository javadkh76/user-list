import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFavorite, IUser } from './types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://67c82dad0acf98d070854ab8.mockapi.io/api/v1',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], string | void>({
      query: (name) => ({
        url: 'users',
        params: name ? { name } : {},
      }),
      keepUnusedDataFor: 0,
    }),
    getFavoriteUsers: builder.query<IFavorite[], string | void>({
      query: (name) => ({
        url: 'faivorites',
        params: name ? { name } : {},
      }),
      keepUnusedDataFor: 0,
    }),
    addFavoriteUser: builder.mutation<IFavorite, Omit<IFavorite, 'id' | 'createdAt'>>({
      query: (user) => ({
        url: 'faivorites',
        method: 'POST',
        body: user,
      }),
    }),
    removeFavoriteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `faivorites/${userId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetFavoriteUsersQuery,
  useAddFavoriteUserMutation,
  useRemoveFavoriteUserMutation,
} = api;
