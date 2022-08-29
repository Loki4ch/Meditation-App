import {useCallback} from "react";

const throttleFunction = (callback, timeout) => {
    let timeoutID = null;

    return useCallback((...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout( () => {
            callback(...args);
            timeoutID = null;
        }, timeout);
    }, [])
}


export default throttleFunction;