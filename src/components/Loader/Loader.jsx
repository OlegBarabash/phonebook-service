import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="72"
      width="72"
      radius="8"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: 'relative',
        top: '40%',
        left: '44%',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
