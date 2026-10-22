import { Suspense } from "react";

const products = [
    { id: 1, name: "laptop", price: 30000 },
    { id: 2, name: "mobile", price: 15000 },
    { id: 3, name: "Shoe", price: 1500 }
];

export default function ProductPage({ params }) {
    return (
        <Suspense fallback={<h1>Loading product...</h1>}>
            <ProductDetails params={params} />
        </Suspense>
    );
}

async function ProductDetails({ params }) {
    const { id } = await params;

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return <h1>There is no product</h1>;
    }

    return (
        <>
            <h1>Product details</h1>
            <p>Product ID: {product.id}</p>
            <p>Product name: {product.name}</p>
            <p>Product price: ₹{product.price}</p>
        </>
    );
}