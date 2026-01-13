import { useState, useEffect } from "react";
import ArticleDetails from "./ArticleDetails";

function Posts() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.includes(search) &&
    (userId === "" || article.userId === Number(userId))
  );

  return (
    <div>
      <h2>Posts</h2>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Recherche par titre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Tous les utilisateurs</option>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              Utilisateur {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="layout">
        <div className="left">
          {filteredArticles.map((article) => (
            <div key={article.id} className="article">
              <p>{article.title}</p>
              <button onClick={() => setSelectedArticle(article)}>
                Détails
              </button>
            </div>
          ))}
        </div>

        <div className="right">
          {selectedArticle && (
            <ArticleDetails article={selectedArticle} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;