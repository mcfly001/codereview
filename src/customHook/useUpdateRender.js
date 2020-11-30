import { useRef } from 'react';

const useUpdateRender = () => {
    const intervalRef = useRef();

    if (intervalRef.current === true) {
        return true
    } else {
        return () => {
            intervalRef.current = true
            return false
        }
    }
};

export default useUpdateRender;