import React from "react";
import Article from "./components/Article/Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {};

ArticleList.defaultProps = {};

export default ArticleList;