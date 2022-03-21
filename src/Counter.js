import './App.css';
import * as PropTypes from "prop-types";

function Counter({max, min = 0, current, setCount}) {
    const applyCount = (number) => {
        let currentValue;
        if (number >= max) {
            currentValue = max
        } else if (number <= min) {
            currentValue = min
        } else {
            currentValue = number
        }
        setCount(currentValue)
    }
    const inc = () => applyCount(current + 1)
    const dec = () => applyCount(current - 1)

    const changeValue = (e) => {
        applyCount(+e.currentTarget.value.replace(/[^0-9\.]/g, ''))
    }

    return (
        <div>
            <div className="form-group mb-0">
                <input
                    type="number"
                    onChange={changeValue}
                    className="form-control cart-qty"
                    name="cartQty1"
                    id="cartQty1"
                    value={current}
                />
            </div>
        </div>
    )
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
}


export default Counter;
