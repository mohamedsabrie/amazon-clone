import Product from "./Product"

function ProductFeed({products}) {

    console.log(products)
    return (
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        { products.slice(0,4).map(({id, price, title, description, category, image}) =>(
          <Product
          key={id}
          id={id}
          price={price}
          title = {title}
          description = {description}
          category = {category}
          image = {image}
          /> 
        ))}
        <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />

        <div className="md:col-span-2">
        { products.slice(4,5).map(({id, price, title, description, category, image}) =>(
          <Product
          key={id}
          id={id}
          price={price}
          title = {title}
          description = {description}
          category = {category}
          image = {image}
          /> 
        ))}
        </div>
        { products.slice(5,products.length).map(({id, price, title, description, category, image}) =>(
          <Product
          key={id}
          id={id}
          price={price}
          title = {title}
          description = {description}
          category = {category}
          image = {image}
          /> 
        ))}
      </div>
       
    )
}

export default ProductFeed
