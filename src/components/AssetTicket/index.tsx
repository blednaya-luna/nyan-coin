import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React, { FC } from 'react';

import { Asset } from 'stores/assets/types';

import { useStyles } from './styles';

type AssetItemProps = {
  asset: Asset;
  onClick?: () => void;
};

export const AssetTicket: FC<AssetItemProps> = ({ asset, onClick }) => {
  const { name, description, price } = asset;
  const classes = useStyles();

  return (
    <Box className={classes.card} onClick={onClick}>
      <Box className={clsx(classes.cardLeftSide, classes.moveLeft)}>
        <Box className={clsx(classes.cardContent, classes.cardLeftContent)}>
          <Typography variant="body2" noWrap>
            {`${price} NT`}
          </Typography>
        </Box>
        <Box
          className={clsx(
            classes.dividerContainer,
            classes.dividerLeftContainer,
          )}
        >
          <Box className={classes.divider}>
            <Box className={clsx(classes.splitter, classes.leftSplitter)} />
          </Box>
        </Box>
      </Box>
      <Box className={clsx(classes.cardRightSide, classes.moveRight)}>
        <Box
          className={clsx(
            classes.dividerContainer,
            classes.dividerRightContainer,
          )}
        >
          <Box className={classes.divider}>
            <Box className={clsx(classes.splitter, classes.rightSplitter)} />
          </Box>
        </Box>
        <Box className={clsx(classes.cardContent, classes.cardRightContent)}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
