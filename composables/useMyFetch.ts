import { useFetch, UseFetchOptions, useRuntimeConfig } from '#app';

class T {}

export const useMyFetch = (request, opts: UseFetchOptions<T>) => {
  const config = useRuntimeConfig();
  return useFetch(request, {
    baseURL: config.public.variables.baseURL,
    ...opts,
  });
};
