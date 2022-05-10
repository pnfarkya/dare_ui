import Header from "./header";
import Footer from "./footer";
import styles from '../../styles/Home.module.css';

const Layout = (props) => (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
  
  export default Layout;