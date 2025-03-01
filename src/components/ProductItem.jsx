import spinner from '../assets/images/Spinner.gif'
import styles from '../css/productitem.module.css'

const ProductItem = ({ products, isLoading }) => {
  return (
    <div className={styles.flexContainer}>
      { isLoading ? (<img src={spinner} />) : (
        products.map((product)=> (
          <div className={styles.productCard} key={product.id}>
            <div className={styles.imageContainer}>
            <img src={product.images[0]} />
            <hr className={styles.productDivider} />
            </div>
            <div className={styles.infoContainer}>
              <div>
              <p className={styles.productTitle}>{product.title}</p>
            </div>
            <div>
              <p className={styles.productPrice}>${product.price}</p>
            </div>

            <button className={styles.buyBtn}>Buy</button>
            </div>
            
            
          </div>
          
        ))
      )}
    </div>
  )
}

export default ProductItem
