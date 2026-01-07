function ArticleDetails({ article }) {
  return (
    <div>
      <h2>Détails de l'article</h2>
      <p><strong>Titre :</strong> {article.title}</p>
      <p><strong>Contenu :</strong> {article.body}</p>
      <p><strong>User ID :</strong> {article.userId}</p>
    </div>
  );
}

export default ArticleDetails;
