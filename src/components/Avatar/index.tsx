import React, { FC } from 'react';
import { Avatar as MuiAvatar } from '@material-ui/core';
import * as avatar from 'identity-img';

avatar.config({ rows: 8, cells: 8 });

type AvatarProps = {
  address: string;
};

export const Avatar: FC<AvatarProps> = ({ address }) => {
  const src = address ? avatar.create(address, { size: 30 }) : '';

  return <MuiAvatar src={src} alt="Avatar" />;
};
