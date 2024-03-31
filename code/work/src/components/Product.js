import styles from './Product.module.css'
import ViewList from './ViewList';
import { useState } from 'react';
import Card from './Card';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(2.99);
  const [list, setList] =  useState([]);
  const [sumTotal, setSumTotal] = useState(0);
  const [savingTotal, setSaving] = useState(0);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };
  const handlerChangePrice = (value) => {
    setPrice(value);
  };
  const handlerAddProduct = () => {
    const newItem = {
      name: name,
      quantity: count,
      price: price,
      discount: discount,
      total: count * price * (100-discount)/100,
      saving: count * price * discount/100,
   }  
   
   const newList = [...list, newItem];
   setList(newList);
   const sum = sumTotal + newItem.total;
   setSumTotal(sum);
   const saving = savingTotal + newItem.saving;
   setSaving(saving);
  }


  return (
    <div className={styles.container}>
      <Card name={name} handlerMinus={handlerMinus} count={count} handlerPlus={handlerPlus} price={price} discount={discount} handlerChangeName = {handlerChangeName} handlerChangePrice = {handlerChangePrice} handlerAddProduct ={handlerAddProduct}  />
      <ViewList list={list} sum={sumTotal} saving={savingTotal}/>
    </div>
  );
}
export default Product;
