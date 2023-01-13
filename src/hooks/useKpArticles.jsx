import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = `http://api.kisspress.jp/beta/articles/`;

export const useKpArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoding] = useState(false);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        setLoding(true);
        try {
            const res = await axios.get(URL);
            setArticles(res.data.data);
        } catch (error) {
            console.log(error);
        }
        setLoding(false);
    }

    return {articles, loading};
}