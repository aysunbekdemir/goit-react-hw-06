import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        className={styles.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Sil
      </button>
    </div>
  );
}
