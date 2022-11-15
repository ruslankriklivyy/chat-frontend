import { useUserStore } from '~/stores/user';
import { navigateTo, useRuntimeConfig } from '#app';
import axios from 'axios';
import { useNotificationStore } from '~/stores/notification.';

export default function useUser() {
  const store = useUserStore();
  const { setNotification } = useNotificationStore();
  const config = useRuntimeConfig();

  const register = async (body) => {
    try {
      const {
        data: { access_token, user },
      } = await axios.post(
        config.public.variables.baseURL + '/auth/register',
        body
      );

      localStorage.setItem('access_token', access_token);

      navigateTo('/chat');
    } catch (err) {
      setNotification(err.response.data);
    }
  };

  return { store, register };
}
