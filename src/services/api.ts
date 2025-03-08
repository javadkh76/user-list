import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from './types.ts';

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
    }),
    getFavoriteUsers: builder.query<IUser[], string | void>({
      query: (name) => ({
        url: 'faivorites',
        params: name ? { name } : {},
      }),
    }),
    addFavoriteUser: builder.mutation<IUser, Omit<IUser, 'id' | 'createdAt'>>({
      query: (user) => ({
        url: 'faivorites',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetFavoriteUsersQuery, useAddFavoriteUserMutation } = api;
