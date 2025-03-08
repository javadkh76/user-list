import React, { memo } from 'react';
import {
  Avatar,
  CircularProgress,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { IUser } from '@/services/types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAddFavoriteUserMutation, useRemoveFavoriteUserMutation } from '@/services/api';
import { useDispatch } from 'react-redux';
import { add, remove } from '@/features/favoriteIdsSlice';

interface UserItemProps extends IUser {
  isFavorite?: boolean;
  userId?: string;
  onRemove?: () => void;
}
const UserItem = (props: UserItemProps) => {
  const { id, name, avatar, isFavorite = false, userId, onRemove } = props;
  const dispatch = useDispatch();
  const [addFavorite, { isLoading: addFavoriteLoading }] = useAddFavoriteUserMutation();
  const [removeFavorite, { isLoading: removeFavoriteLoading }] = useRemoveFavoriteUserMutation();

  const handleAddFavorite = async () => {
    try {
      const res = await addFavorite({ name, avatar, userId: id }).unwrap();
      dispatch(add(res));
    } catch (error) {
      alert(error);
    }
  };
  const handleRemoveFavorite = async () => {
    try {
      await removeFavorite(id).unwrap();
      dispatch(remove(+userId || +id));
      onRemove?.();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <ListItem
      secondaryAction={
        addFavoriteLoading || removeFavoriteLoading ? (
          <CircularProgress size={20} sx={{ m: 1 }} />
        ) : (
          <IconButton>
            {isFavorite ? (
              <FavoriteIcon color="error" onClick={handleRemoveFavorite} />
            ) : (
              <FavoriteBorderIcon onClick={handleAddFavorite} />
            )}
          </IconButton>
        )
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar alt={`Avatar ${name}`} src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
export default memo(UserItem);
