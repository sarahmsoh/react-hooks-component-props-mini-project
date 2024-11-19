import React from "react";
import blogData from "../data/blog";
import Header from "./Header/Header";
import About from "./About/About";



function App() {
  console.log(blogData);
  const blogName = "My Awesome Blog";
  const blogDescription = "Welcome to my blog! Here, I share my journey in tech and development.";
  const posts = [
    { id: 1, title: "Learning React", date: "October 30, 2024", preview: "React is amazing!" },
    { id: 2, title: "JavaScript Tips", date: "October 31, 2024", preview: "JavaScript can be tricky." },
    { id: 3, title: "HTML & CSS", preview: "Structure and style go hand in hand." },
  ];

  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name={blogName}/>
      <About about={blogDescription}/>
    </div>

  );
}

export default App;