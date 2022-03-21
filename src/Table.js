// import Counter from "./Counter";
// import {useEffect, useState} from "react";
// import isArrayEmpty from "./utils/isArrayEmpty";
// import useResizeWindow from "./hooks/useResizeWindow";
// import {Button} from "react-bootstrap";
//
//
//
// function Table() {
//
//     let [products, setProducts] = useState(arr)
//     let size = useResizeWindow()
//
//     const setCount = (id, val) => {
//         setProducts(products.map(el => (el.id === id) ? {...el, count: val} : el))
//     }
//     const deleteItem = (id) => {
//         setProducts(products.filter(el => el.id !== id))
//     }
//     let sum = products.reduce((acc, next) => {
//         return acc + (+next.price * +next.count)
//     }, 0)
//     let arrElements = products.map(el => {
//         return <tr key={el.id}>
//             <td>{el.title}</td>
//             {size.width > 700 && <td>{el.price}</td>}
//
//             <td></td>
//             <td>{el.price * el.count}</td>
//             <td>
//                 <button className="btn btn-danger" onClick={() => deleteItem(el.id)}>X</button>
//             </td>
//         </tr>
//     })
//     let elementsEmpty = <tr> <td>Элементов нет</td>  </tr>
//
//     let tmpSaleAllBy5 = () => {
//         setProducts(products.map(el => ({...el, count: 5})))
//     }
//     return <table>
//         <thead>
//         <tr>
//             <th>Name</th>
//             {size.height > 700 && <th>Price</th>}
//             <th>Count</th>
//             <th>Total</th>
//             <th>Actions</th>
//         </tr>
//         </thead>
//         <tbody>
//         {!isArrayEmpty(products) ? arrElements : elementsEmpty}
//         <tr>
//             <td>Сумма:</td>
//             <td><strong>{sum || 0}</strong></td>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         <Button onClick={tmpSaleAllBy5}>Всех по 5</Button>
//         </tbody>
//     </table>
// }
//
// export default Table