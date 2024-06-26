const user={
    username:"Aashritha"
}

const Products = (props) => {
    return (
        <div>
            <h2>{user.username}'s Favourite products</h2>
            <ul>
                { props.products.map((product)=>
                <li key={product.productId}>{product.productName}</li>
                )
                }
            </ul>
        </div>
    );
};

export default Products;