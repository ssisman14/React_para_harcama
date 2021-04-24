import './App.css';
import {useState, useEffect} from 'react';
import Header from "./components/Header";
import products from './products.json'
import Product from "./components/Product";
import Basket from "./components/Basket";


function App() {

    const [money, setMoney] = useState(100);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] =useState(0);

    const resetBasket = () => {
        setBasket([])
    };

    useEffect(()=>{
        const t = basket.reduce((acc, item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
        }, 0);

        setTotal(t)
    },[basket]);

    return (
        <>

            <Header total={total} money={money}/>
            <div className="container products">
                {products.map(product =>(
                    <Product key={product.id} basket={basket} setBasket={setBasket} product={product} total={total} money={money}/>
                ))}
            </div>
            {total > 0 && (
                <Basket basket={basket} products={products} total={total} resetBasket={resetBasket}/>
            )}



        </>
    );
}

export default App;
