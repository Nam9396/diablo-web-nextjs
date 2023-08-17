import useSWRMutation from 'swr/mutation'
import { BASE_URL, DISCORD_URL } from 'constant';
import { mutationPostFetcher } from './fetchFrame';

const sendMessage = () => { 
  const { trigger, isMutating, error } = useSWRMutation(`${BASE_URL}/${DISCORD_URL}`, mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
};


export { 
    sendMessage,
}