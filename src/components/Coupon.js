import Counter from "../Counter";
import {useRef, useState} from "react";

function Coupon({sale5PercentMore3Product}) {
    let [coupon, setCoupon] = useState("")
    let [isSale, setIsSale] = useState(false)

    const handlerCouponSend = e => {
        e.preventDefault()


        if (coupon === "sale") {
            sale5PercentMore3Product()
            setIsSale(false )
        } else {
            setIsSale(true)
        }
    }
    const handlerCouponText = (e) => {
        setCoupon(e.currentTarget.value.trim())
    }

    return <form>
        <div className="form-group">
            <div className="input-group">
                <input
                    onChange={handlerCouponText}
                    type="search"
                    className="form-control"
                    placeholder="Coupon Code"
                    aria-label="Search"
                    value={coupon}
                />
                <div className="input-group-append">
                    <button disabled={!coupon.length} onClick={handlerCouponSend} className="input-group-text" type="submit"
                            id="button-addonTags">Apply
                    </button>
                </div>
            </div>
            {
                isSale && <div>Такого кода нет</div>
            }

        </div>
    </form>
}

export default Coupon;
