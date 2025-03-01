import { faShop } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
  return (
    <div className={styles.nav}>
      <FontAwesomeIcon icon={faShop}/>
      <span>e-Shop</span>
    </div>
  )
}

export default Nav
