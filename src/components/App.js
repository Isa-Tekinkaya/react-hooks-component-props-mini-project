import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList"
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image}/>
      <ArticleList key={blogData.posts.id} preview={blogData.posts.preview} date={blogData.posts.date} title={blogData.posts.title}/>
    </div>
  );
}

export default App;
