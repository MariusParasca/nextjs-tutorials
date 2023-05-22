'use client';

import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteCustomerMutationFn, getCustomersQueryFn } from '@/queryFns/customersQueryFns';
import { Customer } from '@/types';
import { useQueryClientInstance } from '@/context/QueryClientContext.client';

const CustomerElement = ({ customer }: { customer: Customer }) => {
  const { queryClient } = useQueryClientInstance();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCustomerMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });

  return (
    <div className='py-4'>
      <p>
        Email: <strong>{customer.email}</strong>
      </p>
      <p>Name: {customer.name}</p>
      <p>Balance: {customer.balance}</p>
      <div>{customer.customProp}</div>
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={() => {
            mutate(customer.id);
          }}
          disabled={isLoading}
          type='button'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

interface Props {}

const Customers = ({}: Props) => {
  const { data: customers, isLoading } = useQuery<Customer[]>({
    queryKey: ['customers'],
    queryFn: getCustomersQueryFn,
  });

  if (isLoading) return <div>Loading...</div>;

  if (!customers || customers?.length === 0) return <div>No data</div>;

  return (
    <div className='divide-y'>
      {customers.map((customer) => (
        <CustomerElement customer={customer} key={customer.id} />
      ))}
    </div>
  );
};

export default Customers;
