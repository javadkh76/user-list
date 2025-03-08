import React, { useEffect, useState } from 'react';
import { CircularProgress, List, Pagination } from '@mui/material';
import { useGetUsersQuery } from '@/services/api';
import UserItem from '@/components/user-item/UserItem';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import SearchInput from '@/components/searchInput/SearchInput';

const Users = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const favorites = useSelector((state: RootState) => state.favorites);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(search);
  const totalPages = Math.ceil(data?.length / 10);

  useEffect(() => {
    setPage(1);
  }, [data]);

  if (error && 'status' in error && error.status !== 404) return 'There is an error';

  return (
    <Box sx={{ width: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>
        <SearchInput onChange={(value) => setSearch(value)} />
      </Box>
      {error && 'status' in error && error.status === 404 ? (
        'User not found!'
      ) : (
        <>
          <List dense sx={{ width: 1, bgcolor: 'background.paper' }}>
            {isLoading || isFetching ? (
              <Box sx={{ width: 1, textAlign: 'center' }}>
                <CircularProgress />
              </Box>
            ) : (
              data
                .slice((page - 1) * 10, page * 10)
                .map((user) => (
                  <UserItem
                    key={user.id}
                    {...user}
                    isFavorite={favorites[user.id] && Object.keys(favorites[user.id]).length > 0}
                  />
                ))
            )}
          </List>
          <Pagination
            sx={{ mx: 'auto' }}
            hidden={totalPages <= 1}
            count={totalPages}
            size="small"
            page={page}
            onChange={(_, page) => {
              setPage(page);
            }}
          />
        </>
      )}
    </Box>
  );
};
export default Users;
