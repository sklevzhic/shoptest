import {useState} from "react";
import useResizeWindow from "../hooks/useResizeWindow";
import Counter from "../Counter";
import ProductRow from "../components/ProductRow";
import Coupon from "../components/Coupon";



const Products = ({products,setCount,deleteItem, subTotal,sale5PercentMore3Product,nextStep}) => {

    let size = useResizeWindow()
    return <>
        <div className="row">
            <div className="card-body">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-8">
                        <div className="cart-container">
                            <div className="cart-head">
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Action</th>
                                            <th scope="col">Photo</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Price</th>
                                            <th scope="col" className="text-right">Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            products.map(product => <ProductRow
                                                key={product.id}
                                                product={product}
                                                setCount={setCount}
                                                deleteItem={deleteItem}
                                            />)
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="cart-body">
                                <div className="row">
                                    <div className="col-md-12 order-2 order-lg-1 col-lg-5 col-xl-6">
                                        <div className="order-note">
                                            <Coupon sale5PercentMore3Product={sale5PercentMore3Product}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 order-1 order-lg-2 col-lg-7 col-xl-6">
                                        <div className="order-total table-responsive ">
                                            <table className="table table-borderless text-right">
                                                <tbody>
                                                <tr>
                                                    <td>Sub Total :</td>
                                                    <td>${subTotal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping :</td>
                                                    <td>$0.00</td>
                                                </tr>
                                                {
                                                    false && <tr>
                                                        <td>Sale 5% :</td>
                                                        <td>$0.00</td>
                                                    </tr>
                                                }
                                                <tr>
                                                    <td>Tax(18%) :</td>
                                                    <td>${subTotal * 0.18}</td>
                                                </tr>
                                                <tr>
                                                    <td className="f-w-7 font-18"><h4>Amount :</h4></td>
                                                    <td className="f-w-7 font-18">
                                                        <h4>${subTotal + subTotal * 0.18}</h4></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <button
                    onClick={nextStep}
                    type="button"
                    className="btn btn-success"
                >
                    Next
                </button>
            </div>
        </div>
    </>
}

export default Products