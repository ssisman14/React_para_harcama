import BasketItem from "./BasketItem";


function Basket({basket, products, total,resetBasket}) {
    return (
        <>
            <div className="basket container">
                <h5>Alışveris Detayları</h5>
                {basket.map(item => (
                    <BasketItem item={item} products={products.find(p => p.id === item.id)}/>
                ))}
                <div>
                    Toplam : {total} Tl
                </div>
                <button onClick={resetBasket}>Sepeti Sıfırla</button>
            </div>
            <style jsx>
                {`
                .basket{
                background: #fff;
                border: 1px solid #ddd;
                padding: 20px;
                width: 96%;
                }
                `}
            </style>
        </>
    );
}

export default Basket;