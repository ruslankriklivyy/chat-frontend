import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IUser {
  id: number;
  email: string;
  avatar_url: string;
  full_name: string;
  password: string;
  is_online: boolean;
  rooms_ids: number[];
}

export const useUserStore = defineStore('user', () => {
  const isAuth = ref(false);
  const user = ref({});

  const setUser = (payload: IUser) => {
    user.value = payload;
  };

  const setIsAuth = (payload: boolean) => {
    isAuth.value = payload;
  };

  return { user, isAuth, setIsAuth, setUser };
});
