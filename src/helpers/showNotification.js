import { NotificationManager } from 'react-notifications';

const showNotification = (type) => {
  if (type === 'success') {
    return NotificationManager.success(
      'Message Sent Successfully.',
      'Thanks',
      5000
    );
  } else if (type === 'error') {
    return NotificationManager.error(
      'Failed to send Message',
      'Apologies',
      5000
    );
  }
};

export default showNotification;
