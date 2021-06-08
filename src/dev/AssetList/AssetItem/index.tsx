import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { useStyles } from './styles';

type AssetItemProps = {
  name: string;
  description: string;
  price: number;
};

// TODO add modal with confirm exchange NT to asset
export const AssetItem: FC<AssetItemProps> = ({ name, description, price }) => {
  const classes = useStyles();

  return (
    <Box className={classes.card}>
      <Box className={clsx(classes.cardLeftSide, classes.moveLeft)}>
        <Box className={clsx(classes.cardContent, classes.cardLeftContent)}>
          <Typography variant="body1">Buy</Typography>
          <Typography variant="body2" color="primary" noWrap>
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
