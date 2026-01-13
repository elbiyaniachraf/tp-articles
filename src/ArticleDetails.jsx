function ArticleDetails({ article }) {
  return (
    <div className="user-card">
      <h3>Détails de l'article</h3>
      <p><strong>Titre:</strong> {article.title}</p>
      <p><strong>Contenu:</strong> {article.body}</p>
      <p><strong>User ID:</strong> {article.userId}</p>
    </div>
  );
}

export default ArticleDetails;