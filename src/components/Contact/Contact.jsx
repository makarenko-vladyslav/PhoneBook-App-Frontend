import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";
import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";

export default function Contact({ contact: { id, name, number } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={css.contactWrapper}>
      <div className={css.contactInfoWrapper}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>

        <p className={css.text}>
          <IoCall />
          {number}
        </p>
      </div>

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
  );
}
