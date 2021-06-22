import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { AssetItem } from 'stores/pages/assets/types';

import { useStyles } from './styles';

type AssetItemProps = AssetItem & {
  onClick?: () => void;
};

export const Asset: FC<AssetItemProps> = ({
  name,
  description,
  price,
  onClick,
}) => {
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
