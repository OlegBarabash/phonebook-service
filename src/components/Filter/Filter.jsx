import { useDispatch } from 'react-redux';
import { Label, StyledInput } from '../Forms.styled';
import { setContactsFilter } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setContactsFilter(filter));

  return (
    <Label>
      Find contacts by name
      <StyledInput
        type="text"
        name="name"
        onChange={e => handleFilterChange(e.target.value.toLowerCase())}
      />
    </Label>
  );
};
