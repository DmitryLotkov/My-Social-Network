import React, { ChangeEvent } from 'react';

import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

import userPhoto from '../../Images/defaultUserImage.jpg';
import { UserType } from '../../store/UsersReducer';

import style from './users.module.scss';

type usersPropsType = {
  totalUserCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  users: UserType[];
  followingInProgress: Array<string>;
  followTC: (userID: string) => void;
  unfollowTC: (userID: string) => void;
};

export const Users = ({
  users,
  totalUserCount,
  currentPage,
  pageSize,
  onPageChanged,
  followingInProgress,
  unfollowTC,
  followTC,
}: usersPropsType) => {
  const navigate = useNavigate();
  const pagesCount = Math.ceil(totalUserCount / pageSize);
  const defaultUserPhoto: string = userPhoto;
  const onPageHandler = (event: ChangeEvent<unknown>, page: number) => {
    onPageChanged(page);
  };

  return (
    <div className={style.usersWrapper}>
      <Pagination
        color="primary"
        onChange={onPageHandler}
        size="small"
        variant="outlined"
        shape="rounded"
        count={pagesCount}
        page={currentPage}
        data-testid="pagination"
      />
      {users.map(user => (
        <div key={user.id} data-testid="userArr">
          <div className={style.usersBlock}>
            <div className={style.avatarAndFollowButton}>
              <div
                onKeyUp={() => navigate(`/profile/${user.id}`)}
                tabIndex={0}
                role="button"
                onClick={() => navigate(`/profile/${user.id}`)}
              >
                <img
                  className={style.avatar}
                  src={user.photos.small ? user.photos.small : defaultUserPhoto}
                  alt="user"
                />
              </div>
              <span>
                {user.followed ? (
                  <Button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      // ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                      unfollowTC(user.id);
                    }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      // ниже вызывается thunk creator из пропсов, в userContainerFC unfollowTC оборачивается dispatch
                      // thunk creator нужен для связи DAL и BLL минуя UI
                      followTC(user.id);
                    }}
                  >
                    Follow
                  </Button>
                )}
              </span>
            </div>
            <div className={style.nameAndStatus}>
              <h3 className={style.name}>
                <div>{user.name}</div>
              </h3>
              <div className={style.status}>{`Status:  ${
                user.status ?? 'no status'
              }`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
