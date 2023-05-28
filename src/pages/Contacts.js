import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contacts';
import { Filter } from 'components/Filter/filter';
import style from './contacts.module.css'
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSllice/operations';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectError, selectIsLoading, } from 'redux/selectors';
import Loader from '../components/Loader/Loader'

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>

      <div className={style.formDiv}>
        <h1 className={style.title}>Phone book</h1>
        <ContactForm />
        <h2 className={style.titleContacts}>Contacts</h2>

        {contacts.length > 0 ? (
          <div>
            <Filter />
            <ContactList />
            {isLoading && !error && <Loader />}
          </div>
        ) : (
          'You have no contacts'
        )}
      </div>
    </>
  );
}
