import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks';

export const ErrorAuthMsg = () => {
  const { authError } = useAuth();

  const errorNotify = () => {
    toast.error('Try again!', {
      id: 'clipboard',
    });
  };

  return (
    <>
      {authError && errorNotify()}
      <Toaster
        containerStyle={{
          zIndex: '99',
          position: 'absolute',
        }}
      />
    </>
  );
};
