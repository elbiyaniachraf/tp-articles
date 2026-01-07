function ArticleList({
  articles,
  search,
  setSearch,
  userId,
  setUserId,
  onDetails,
  onComments
}) {
  return (
    <div className="left">
      <h2>Articles</h2>

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

      {articles.map((article) => (
        <div key={article.id} className="article">
          <p>{article.title}</p>

          <button onClick={() => onDetails(article)}>
            Détails
          </button>

          <button onClick={() => onComments(article)}>
            Commentaires
          </button>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
