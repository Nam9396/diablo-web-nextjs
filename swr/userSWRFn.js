import useSWRMutation from 'swr/mutation'
import { BASE_URL, USERS_URL } from 'constant';
import { mutationPostFetcher } from './fetchFrame';

const oauthUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/oauth', mutationPostFetcher);
  // const { trigger, isMutating, error } = useSWRMutation(`${BASE_URL}/${USERS_URL}/oauth`, mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
};

const registerUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('api/user/register', mutationPostFetcher);
  // const { trigger, isMutating, error } = useSWRMutation(`${BASE_URL}/${USERS_URL}/register`, mutationPostFetcher);
  return {
    trigger, 
    isMutating,
    error,
  }
}

const logOutUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/logout', mutationPostFetcher);
  // const { trigger, isMutating, error } = useSWRMutation(`${BASE_URL}/${USERS_URL}/logout`, mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
}

const authUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/login', mutationPostFetcher);
  // const { trigger, isMutating, error } = useSWRMutation(`${BASE_URL}/${USERS_URL}/auth`, mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
}


export { 
  oauthUser,
  registerUser,
  logOutUser,
  authUser,
}