import { useCallback } from 'react';

const useMacaque = () => {
    const getMacaque = useCallback(async () => {
        return fetch("http://localhost:3002/baboon")
            .then(res => res.json())
            .catch(err => console.log(err));
    }, []);

    return { getMacaque };
};

export default useMacaque;
