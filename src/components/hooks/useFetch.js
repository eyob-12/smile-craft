import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        //const source = axios.CancelToken.source();

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(url, {
                    withCredentials: true,
                    // cancelToken: source.token
                });
                setData(res.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // source.cancel("Component unmounted");
        };
    }, [url]);

    const reFetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        }
        catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, reFetchData };
}

export default useFetch;
