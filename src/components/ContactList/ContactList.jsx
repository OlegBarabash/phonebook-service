import { useDispatch, useSelector } from 'react-redux';
import { ListItem, List, DeleteBtn } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {filteredContacts.length !== 0 ? (
        <List>
          {filteredContacts.map(cont => (
            <ListItem key={cont.id}>
              {cont.name}: {cont.number}
              <DeleteBtn onClick={() => onDelete(cont.id)}>
                <MdDeleteForever color="#e84343" size={20} />
              </DeleteBtn>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Not found!</p>
      )}
    </>
  );
};
