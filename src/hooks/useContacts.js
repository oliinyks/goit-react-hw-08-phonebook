import { useSelector } from 'react-redux';
import { selectLoading, selectAllContacts } from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectAllContacts);
  return {
    isLoading,
    contacts,
  };
};
