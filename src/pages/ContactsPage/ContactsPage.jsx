import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

import css from "./ContactsPage.module.css";


export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>PhoneBook</h1>

      <ContactForm />
      <SearchBox />
      {loading && !error ? <b>Loading...</b> : <ContactList />}
    </>
  );
}
