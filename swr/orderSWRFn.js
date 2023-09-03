import useSWRMutation from 'swr/mutation'
import useSWR from 'swr'
import { BASE_URL, ORDER_URL } from 'constant';
import { mutationDeleteFetcher, mutationPostFetcher, queryFetcher } from './fetchFrame';

const createOrder = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/order', mutationPostFetcher);
  return { trigger, isMutating, error };
};

const getUserOrder = () => { 
  const { data, isLoading, error, mutate } = useSWR('/api/order/mine', queryFetcher);
  return { data, isLoading, error, mutate };
}

const userDeleteOrder = (id) => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/order', mutationDeleteFetcher);
  return { trigger, isMutating, error };
};


export { 
  createOrder,
  getUserOrder,
  userDeleteOrder,
}

// về mutation trong SWR
// - Có hai hình thức: mutate và useSWRMutation
// - Không rõ muatate hoạt động như thế nào mà gọi là tự động 
// - useSWRMutation hoạt động khá giống với useMutation hook trong RTK 
// - nếu dùng mutate với một query request - nó sẽ update cached data đã được fetch từ query đó 
// - điều này không xảy ra với useSWRMutation, nó dùng một cache độc lập với query request, do đó, không thể update query cache 
//   đồng thời với mutation query
// - điều này đặt ra một nhu cầu nhất thiết phải có một lệnh như refetch() như trong RTK
// - nếu gọi mutata trong bound mutation mà không có FetchError, nó sẽ hoạt động như refetch()