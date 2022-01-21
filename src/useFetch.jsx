import React, { useState, useEffect } from "react";

const useFetch = ({ url }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    useEffect(() => {
        getFetch();
    }, []);

    const getFetch = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return { data, loading };
};

export default useFetch;
