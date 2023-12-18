import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, Label, StyledField, Button } from '../Forms.styled';
import toast from 'react-hot-toast';
import { MdOutlineWarningAmber } from 'react-icons/md';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = value => {
    dispatch(
      register({
        name: value.name,
        email: value.email,
        password: value.password,
      })
    );
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
        // toast('Сheck your email', {
        //   icon: <MdOutlineWarningAmber />,
        // });
      }}
      autoComplete="off"
    >
      <StyledForm>
        <Label>
          Username
          <StyledField type="text" name="name" />
        </Label>
        <Label>
          Email
          <StyledField type="email" name="email" />
        </Label>
        <Label>
          Password
          <StyledField type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
