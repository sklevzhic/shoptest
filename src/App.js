import './App.css';
import Products from "./pages/Products"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import FormOrder from "./pages/FormOrder";
import OrderInfo from "./pages/OrderInfo";
import Modal from "./components/Modal";

let arr = [
    {id: "1", title: "Apple Watch", price: 1000, count: 3, rest: 25},
    {id: "2", title: "Apple iPhone", price: 2000, count: 2, rest: 23},
    {id: "3", title: "Apple iPad", price: 3000, count: 10, rest: 150},
    {id: "4", title: "Apple Watch1", price: 4000, count: 20, rest: 35},
    {id: "5", title: "Apple iPhone5", price: 5000, count: 10, rest: 15},
]

function App() {
    let [products, setProducts] = useState(arr)
    let [user, setUser] = useState({
        name: "",
        address: ""
    })
    let [step, setStep] = useState(0)
    let [visibleModal, setVisibleModal] = useState(false)
    const setUserInfo = (user) => {
        setUser(user)
    }
    const setCount = (id, val) => {
        setProducts(products.map(el => (el.id === id) ? {...el, count: val} : el))
    }
    const deleteItem = (id) => {
        setProducts(products.filter(el => el.id !== id))
    }
    let subTotal = products.reduce((acc, next) => {
        return acc + (+next.price * +next.count)
    }, 0)
    const sale5PercentMore3Product = () => {
        setProducts(products.map(el => {
            if (el.count >= 3) {
                return {...el, price: el.price * 0.95}
            }
            return el
        }))
    }
    const orderAgree = () => {
        setVisibleModal(true)
    }

    let handleVisibleModal = () => {
        setStep(p => p + 1);
        setVisibleModal(false)
    };
    return <div>
        <div className="container">
            <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="card m-b-30">
                    <div className="card-header">
                        <h5 className="card-title">Cart</h5>
                    </div>
                    {step === 0 &&
                        <Products products={products} setCount={setCount} deleteItem={deleteItem} subTotal={subTotal}
                                  sale5PercentMore3Product={sale5PercentMore3Product}
                                  nextStep={() => setStep(p => p + 1)}/>}
                    {step === 1 &&
                        <FormOrder setUserInfo={setUserInfo} nextStep={() => setStep(p => p + 1)} setVisibleModal={() => setVisibleModal(true)}/>}
                    {step === 2 && <OrderInfo user={user} products={products} subTotal={subTotal}/>}
                </div>

                {
                    visibleModal &&
                    <Modal agreeOrder={handleVisibleModal} closeModal={() => setVisibleModal(false)}/>
                }


            </div>
        </div>
    </div>;
}

export default App;
