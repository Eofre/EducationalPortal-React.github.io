import ArticleCard from "../components/ArticleCard";

function Articles({ articles }) {
  return (
    <section className="articles">
      <div className="conteiner">
        <div className="tests__inner">
          <h1 className="tests__title">Статьи</h1>
          <div className="tests__tests-cards">
            {articles.map((item) => (
              <ArticleCard key={item.id} article={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
