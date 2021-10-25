import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { Notification, NotificationProps } from 'components/Notification';

type NotifyOptions = ToastOptions & NotificationProps;

export const notify = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.DEFAULT,
    autoClose,
  });

notify.info = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.INFO,
    autoClose,
  });

notify.success = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.SUCCESS,
    autoClose,
  });

notify.warning = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.WARNING,
    autoClose,
  });

notify.error = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.ERROR,
    autoClose,
  });

notify.dark = ({ autoClose, ...props }: NotifyOptions) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.DARK,
    autoClose,
  });
