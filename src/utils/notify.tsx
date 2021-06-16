import React from 'react';
import { toast } from 'react-toastify';

import { Notification, NotificationProps } from 'components/Notification';

export const notify = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.DEFAULT,
  });

notify.info = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.INFO,
  });

notify.success = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.SUCCESS,
  });

notify.warning = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.WARNING,
  });

notify.error = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.ERROR,
  });

notify.dark = (props: NotificationProps) =>
  toast(<Notification {...props} />, {
    type: toast.TYPE.DARK,
  });
