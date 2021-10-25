import { Avatar as MuiAvatar, Link } from '@material-ui/core';
import * as avatar from 'identity-img';
import React, { FC } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

import { APP_LOCATION } from 'routes';

avatar.config({ rows: 8, cells: 8 });

type AvatarProps = {
  address: string;
};

export const Avatar: FC<AvatarProps> = ({ address }) => {
  const { push } = useHistory();

  const src = avatar.create(address, { size: 30 });

  const goToUserPage = () => {
    push(generatePath(APP_LOCATION.user.root, { address }));
  };

  return (
    <Link component="button" onClick={goToUserPage}>
      <MuiAvatar src={src} alt="Avatar" />
    </Link>
  );
};
