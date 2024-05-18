import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filter/slice";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import { selectName } from "../../redux/filter/selectors";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectName);
  const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    contacts.items.length > 0 &&
    visibleContacts && (
      <div className={css.inputWrapper}>
        <p>Find contact by name</p>
        <input
          className={css.field}
          type="text"
          value={searchValue}
          onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        />
      </div>
    )
  );
}
