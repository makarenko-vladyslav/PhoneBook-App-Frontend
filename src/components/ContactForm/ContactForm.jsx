import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "@reduxjs/toolkit";

import css from "./ContactForm.module.css";

export default function ContactForm() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name is required!"),
    number: Yup.string()
      .required("Phone number is required!")
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        "The phone number should be like this: 123-456-7890"
      ),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const nameFieldId = nanoid();
  const telFieldId = nanoid();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name of contact"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.fieldWrapper}>
          <Field
            className={css.field}
            type="tel"
            name="number"
            placeholder="Phone number"
            id={telFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// import { MdAlternateEmail } from "react-icons/md";
// import { IoMdUnlock } from "react-icons/io";

// <MdAlternateEmail className={css.inputIcon} />
// <IoMdUnlock className={css.inputIcon} />

// .inputIcon {
//   position: absolute;
//   left: 10px;
//   top: 21px;
// }
