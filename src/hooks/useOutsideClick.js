import {useEffect, useState} from "react";

const useResizeWindow = (rootEl, fn) => {
    const onClick = (e) => {
        if (rootEl.current !== e.target) {
            fn()
        }
    }
    useEffect(() => {
        document.addEventListener("click", onClick)
        return () => document.addEventListener("click", onClick)
    }, [])

}

export default useResizeWindow