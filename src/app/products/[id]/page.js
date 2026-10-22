
const products=[
    {id:1,name:'laptop',price:30000},
    {id:2,name:'mobile',price:15000},
    {id:3,name:'Shoe',price:1500}
]
export default async function ProductPage({params }){

    const {id}=await params ;
    const product=products.find(
        (item)=>item.id==Number(id)
    )
    if(!product){
        return <h1>There is no product </h1>
    }

    return (
        <>
            <h1>
                Product details
            </h1>
            <p>
                Product id:{product.id}
            </p>
            <p>
                Product id:{product.name}
            </p>
            <p>
                Product id:{product.price}
            </p>

        </>
    )

}