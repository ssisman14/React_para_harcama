

function BasketItem({item, products}) {
    return (
        <div>
            {products.title} * {item.amount}
        </div>
    );
}

export default BasketItem;