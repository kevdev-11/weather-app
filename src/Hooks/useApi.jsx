
import { useEffect } from 'react';
import { useState } from 'react';

const useApi = () => {

    const [climate, setClimate] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        axios.get(url)
        .then(res => setClimate(res.data))
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        });
    },[url]);

    return {climate, loading, error}
};

export default useApi;