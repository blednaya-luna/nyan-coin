import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

import { ReactComponent as ContentCopyIcon } from 'static/content-copy.svg';

export const ContentCopy = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <ContentCopyIcon />
    </SvgIcon>
  );
};
