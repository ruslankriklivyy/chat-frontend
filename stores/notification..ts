import { defineStore } from 'pinia';
import { useNotification } from 'naive-ui';

interface IResponseMessage {
  message: string;
  status: number;
}

export const useNotificationStore = defineStore('notification', () => {
  const notification = useNotification();

  const setNotification = (payload: IResponseMessage) => {
    if (payload.status >= 400) {
      notification.error({ content: payload.message, duration: 5000 });
    }
  };

  return {
    setNotification,
  };
});
