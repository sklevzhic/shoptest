import {useEffect, useState} from "react";

const getSize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
const useResizeWindow = () => {
    let [size,setSize] = useState(getSize())

    const handlerWindowSize = () => {
        setSize(getSize())
    }

    useEffect(() => {
        window.addEventListener("resize", handlerWindowSize)
        return () => window.addEventListener("resize", handlerWindowSize)
    }, [])

    return size
}

export default useResizeWindow