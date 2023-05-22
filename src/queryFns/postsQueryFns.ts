import { jsonPlaceholderAxios } from '@/jsonPlaceholderAxios';

export const getPostsQueryFn = async ({ pageParam = 1 }) =>
  jsonPlaceholderAxios.get(`/posts`, { params: { _page: pageParam } }).then((res) => res.data);
