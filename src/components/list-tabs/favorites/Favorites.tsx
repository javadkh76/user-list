import React, { useState } from 'react';
import { CircularProgress, List, Pagination } from '@mui/material';
import { useGetFavoriteUsersQuery } from '@/services/api';
import UserItem from '@/components/user-item/UserItem';
import Box from '@mui/material/Box';

const NOT_FOUND = 'Favorite users not found!';

const Favorites = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, refetch } = useGetFavoriteUsersQuery();
  const totalPages = Math.ceil(data?.length / 10);

  if (error && 'status' in error && error.status !== 404) return 'There is an error';
  if (error && 'status' in error && error.status === 404) return NOT_FOUND;
  return (
    <Box sx={{ width: 1, display: 'flex', flexDirection: 'column' }}>
      <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {isLoading ? (
          <Box sx={{ width: 1, textAlign: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {data.length === 0 && NOT_FOUND}
            {data.slice((page - 1) * 10, page * 10).map((user) => (
              <UserItem key={user.id} {...user} isFavorite={true} onRemove={() => refetch()} />
            ))}
          </>
        )}
      </List>
      <Pagination
        sx={{ mx: 'auto' }}
        hidden={totalPages <= 0}
        count={totalPages}
        size="small"
        page={page}
        onChange={(_, page) => {
          setPage(page);
        }}
      />
    </Box>
  );
};
export default Favorites;
