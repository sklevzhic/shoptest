import Counter from "../Counter";

function ProductRow({product, setCount, deleteItem}) {

    let {title, count, rest, price, id} = product
    return <tr>
        <th scope="row">2</th>
        <td><a onClick={() => deleteItem(product.id)} className="text-danger">x</a></td>
        <td><img
            src="https://themesbox.in/admin-templates/olian/html/light-vertical/assets/images/ecommerce/product_02.svg"
            className="img-fluid" width={35} alt="product"/></td>
        <td>{title}</td>
        <td>
            <Counter current={count} max={rest} setCount={(val) => setCount(id, val)}/>
        </td>
        <td>${price}</td>
        <td className="text-right">{price * count}</td>
    </tr>
}

export default ProductRow;
