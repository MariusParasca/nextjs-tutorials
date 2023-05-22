import { myApiAxios } from '@/myApiAxios';

export const getCustomersQueryFn = async () => myApiAxios.get(`/customers`).then((res) => res.data);
export const deleteCustomerMutationFn = (customerId: string) =>
  myApiAxios.delete(`/customers/${customerId}`).then((res) => res.data);
