import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
  SvgIconProps,
  Tooltip,
} from '@material-ui/core';
import { SvgIconComponent } from '@material-ui/icons';
import React, { FC } from 'react';

export type IconButtonProps = MuiIconButtonProps & {
  title?: string;
  Icon: SvgIconComponent;
  iconFontSize?: SvgIconProps['fontSize'];
};

export const IconButton: FC<IconButtonProps> = ({
  title,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Icon,
  iconFontSize = 'small',
  ...props
}) => {
  const renderIconButton = () => (
    <MuiIconButton size="small" color="inherit" {...props}>
      <Icon fontSize={iconFontSize} />
    </MuiIconButton>
  );

  return title ? (
    <Tooltip title={title}>{renderIconButton()}</Tooltip>
  ) : (
    renderIconButton()
  );
};
