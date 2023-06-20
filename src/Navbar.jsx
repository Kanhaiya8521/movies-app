import React from "react";
import styles from './navbar.module.css';

class Navbar extends React.Component {
    render() {
        return (
          <>
            <div className={styles.nav}>
              <div className={styles.title}>Movie-App</div>
              <div className={styles.cartIconContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
                  alt="cart-icon"
                  className={styles.cartImg}
                />
                <span className={styles.cartCount}>{this.props.cartCount}</span>
              </div>
            </div>
          </>
        );
    }

}

export default Navbar;