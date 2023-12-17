import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, Label, StyledField, Button } from '../Forms.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = value => {
    dispatch(
      logIn({
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
      }}
      autoComplete="off"
    >
      <StyledForm>
        <Label>
          Email
          <StyledField type="email" name="email" />
        </Label>
        <Label>
          Password
          <StyledField type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </StyledForm>
    </Formik>
  );
};
