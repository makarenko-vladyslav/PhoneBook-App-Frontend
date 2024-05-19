import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";

import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

export default function Contact({ contact: { id, name, number } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edited, setEdited] = useState(false);
  const [editedContact, setEditedContact] = useState({
    name,
    number,
  });

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdited(true);
  };

  const handleSave = () => {
    dispatch(editContact({ id: id, editedContact: editedContact }));
    setEdited(false);
  };

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfoWrapper}>
        <p className={css.text}>
          <FaUser />
          <input
            type="text"
            value={editedContact.name}
            disabled={!edited}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
        </p>

        <p className={css.text}>
          <IoCall />
          <input
            type="text"
            value={editedContact.number}
            disabled={!edited}
            onChange={(e) =>
              setEditedContact({ ...editedContact, number: e.target.value })
            }
          />
        </p>
      </div>

      <div className={css.btnsWrapper}>
        {!edited ? (
          <button className={css.btnEdit} onClick={handleEdit}>
            Edit
          </button>
        ) : (
          <button className={css.btnSave} onClick={handleSave}>
            Save
          </button>
        )}

        <button
          className={css.btn}
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          Delete
        </button>

        {isModalOpen && (
          <ModalDelete
            id={id}
            name={name}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
}
