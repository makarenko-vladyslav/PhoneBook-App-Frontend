import css from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={css.home}>
            <h1 className={css.title}>Welcome to PhoneBook! </h1>
            <p className={css.text}>
                Save your contacts, quickly find phone numbers, and manage your
                address book. <br />
                Thank you for choosing our app 😊
            </p>
        </div>
    );
}
