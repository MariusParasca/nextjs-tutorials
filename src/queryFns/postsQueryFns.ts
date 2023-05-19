import { jsonPlaceholderAxios } from '@/jsonPlaceholderAxios';

export const getPostsQueryFn = async () => jsonPlaceholderAxios.get(`/posts`).then((res) => res.data);
