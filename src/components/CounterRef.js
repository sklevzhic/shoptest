import * as PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function CounterRef({max, min = 0, current, setCount, handlerModalClick}) {
    let rootEl = useRef()
    useOutsideClick(rootEl, handlerModalClick)

    return <div style={{border: "1px solid black"}} ref={rootEl}>
        <hr/>
        modal
        <hr/>
    </div>
}

export default CounterRef;
