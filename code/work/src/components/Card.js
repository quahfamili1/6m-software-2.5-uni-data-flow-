import Button from "./Button";
import Input from "./Input";
import styles from './Product.module.css'
function Card ({ name, handlerMinus,  count , handlerPlus, price, discount, handlerChangeName, handlerChangePrice, handlerAddProduct }) {
  return (
    <>
    <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label='➖' onClick={handlerMinus} />
        <span className={styles.count}>{count}</span>
        <Button label='➕' onClick={handlerPlus} />
      </div>
      <div className={styles.price}>{`$ ${price}`} each</div>
      <div className={styles.discount}>{`Discount: ${discount}%`}</div>
      <div className={styles.form}>
        <Input value={name} label='Product Name' onChange={handlerChangeName} />
        <Input value={price} label='Price' onChange={handlerChangePrice} />
      </div>
      <Button label='Add Product' onClick={handlerAddProduct} />
      </>
  );
}
export default Card;
