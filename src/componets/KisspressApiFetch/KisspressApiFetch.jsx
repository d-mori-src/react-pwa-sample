import { useKpArticles } from '../../hooks/useKpArticles';

export const KisspressApiFetch = () => {
    const { articles, loading } = useKpArticles();

    return (
        <div>
            {loading && 'loading...'}
            {articles.map((article) => (
                <div key={article.id}>
                    <h3>{article.title_s}</h3>
                    <img src={`http://api.kisspress.jp/${article.image.file_path.l}`} alt="" />
                    <p>{article.release_datetime}</p>
                </div>
            ))}
        </div>
    );
}