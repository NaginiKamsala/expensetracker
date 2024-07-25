import styles from "./Navbar.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Expense Tracker</h1>
    </div>
  );
};

export default Header;
