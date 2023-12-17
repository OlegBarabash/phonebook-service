import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const errorNotify = () => {
    toast.error('Something went wrong!', {
      id: 'clipboard',
    });
  };

  return (
    <>
      <Helmet>
        <title>My contacts</title>
      </Helmet>
      <ContactForm />
      {!contacts.length && !isLoading ? (
        <h2>No contacts</h2>
      ) : (
        <>
          <h2>Contacts</h2>
          {isLoading ? <Loader /> : <Filter />}
          {contacts.length > 0 && <ContactList />}
        </>
      )}
      {error && errorNotify()}
      <Toaster />
    </>
  );
}
