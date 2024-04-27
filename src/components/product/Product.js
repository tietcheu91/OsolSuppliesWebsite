
import React from "react";
import axios from 'axios';
import CardProduct from './CardProduct';
import {getImageUrl} from '../../util';
import star from '../../images/star.jpg';
import useLocalStorageState from 'use-local-storage-state';
const API_URL = 'http://osolsupplieswebsitebe-env.eba-nmkrr52q.us-east-2.elasticbeanstalk.com/api/products/'

export interface CartProps {
  [productId: string]: Product
}

export default function Product() {
    // const [isLoading, setIsLoading] = React.useState(true)
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [cart, setCart] = useLocalStorageState('cart', {});
    React.useEffect(() => {
        // React advises to declare the async function directly inside useEffect
        
        const getData = async () =>{
          try {
          const response = await axios.get(API_URL);
          if (response.request.status === 200) {
            console.log("response", response.data);
            console.log("data");
            setProducts(response.data)
          } else {
            setError(true)
          }
        } catch (error) {
          setError(true)
        }
        };
    
        getData();
      }, []);

      const addToCart = (product: Product):void => {
        product.quantity = 1
    
        setCart((prevCart) => ({
          ...prevCart,
          [product.id]: product,
        }))
      }
    
      const isInCart = (productId: string):boolean => Object.keys(cart || {}).includes(productId.toString())


    if(error){
        return <h3 className="error">An error occurred when fetching data. Please check the API and try again.</h3>
    }

    const listItems = products.map(item =>
      <CardProduct  key={item.id}
            imgCard={getImageUrl(item)}
            data = {item}
            imgStar={star}
            rating = {Math.floor(Math.random() * 6)}
            numberOfReview = {Math.floor(Math.random() * 200)}
            country = {item.country}
            productName = {item.name}
            productId = {item.id}
            price = {item.price}
            quantity = {item.quantity}
            isInCart = {() => isInCart(item.id)}
            addToCart = {() => addToCart(item)}
            />
    );

    return (
      
        <div className="contacts"> {listItems}
        </div>
        
    )

}

