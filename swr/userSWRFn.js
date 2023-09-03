import useSWRMutation from 'swr/mutation'
import { BASE_URL, USERS_URL } from 'constant';
import { mutationPostFetcher } from './fetchFrame';

const oauthUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/oauth', mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
};

const registerUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('api/user/register', mutationPostFetcher);
  return {
    trigger, 
    isMutating,
    error,
  }
}

const logOutUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/logout', mutationPostFetcher);
  return { 
    trigger, 
    isMutating,
    error,
  }
}

const authUser = () => { 
  const { trigger, isMutating, error } = useSWRMutation('/api/user/auth', mutationPostFetcher);
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