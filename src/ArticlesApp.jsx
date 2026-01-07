import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import ArticleDetails from "./ArticleDetails";
import Comments from "./Comments";

function ArticlesApp() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showComments, setShowComments] = useState(false);

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
    <div className="layout">
      <ArticleList
        articles={filteredArticles}
        search={search}
        setSearch={setSearch}
        userId={userId}
        setUserId={setUserId}
        onDetails={(article) => {
          setSelectedArticle(article);
          setShowComments(false);
        }}
        onComments={(article) => {
          setSelectedArticle(article);
          setShowComments(true);
        }}
      />

      <div className="right">
        {selectedArticle && !showComments && (
          <ArticleDetails article={selectedArticle} />
        )}

        {selectedArticle && showComments && (
          <Comments articleId={selectedArticle.id} />
        )}
      </div>
    </div>
  );
}

export default ArticlesApp;
