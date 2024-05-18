import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./ModalDelete.module.css";

export default function ModalDelete({ id, name, isModalOpen, setIsModalOpen }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.modal} open={isModalOpen}>
      <p className={css.text}>
        Delete the contact: <br />
        {name}?
      </p>
      <div className={css.btnsWrapper}>
        <button className={css.btn} onClick={handleDelete}>
          Yes, delete
        </button>
        <button className={css.btn} onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
