
import './App.css';
import Source from './components/Source';

const sources = [
  {
    name: "codepath",
    description: "The platform you can learn coding.",
    img: "/Images/codepath.jpg", 
    link: "https://www.codepath.org/"
  },
  {
    name: "Leecode",
    description: "Multiple problems you can solve.",
    img: "/Images/leetcode.jpg", 
    link: "https://leetcode.com/problemset/"
  },
  {
    name: "Neetcode",
    description: "The methods for leetcode questions.",
    img: "/Images/neetcode.jpg", 
    link: "https://neetcode.io/"
  },
  {
    name: "CarlRecording",
    description: "Chinese verison to solve the leetcode problems.",
    img: "/Images/CarlRecording.jpg",
    link: "https://github.com/youngyangyang04/"
  },
  {
    name: "OpenAI",
    description: "Get help from chatGPT.",
    img: "/Images/chatgpt.jpg", 
    link: "https://openai.com/chatgpt/"
  },
  
  {
    name: "Udemy",
    description: "Udemy offers affordable online courses covering computer science and related topics.",
    img: "/Images/udemy.png", 
    link: "https://www.udemy.com/"
  },
  {
    name: "freeCodeCamp",
    description: "Learn to code with freeCodeCamp's 8,000+ tutorials, interactive coding challenges, and projects.",
    img: "/Images/freecodecamp.jpg", 
    link: "https://www.freecodecamp.org"
  },
  {
    name: "Coursera",
    description: "Take free computer science courses from top universities and companies through Coursera.",
    img: "/Images/coursera.jpg", 
    link: "https://www.coursera.org"
  },
  {
    name: "edX",
    description: "edX offers free online courses from universities and institutions worldwide in computer science and more.",
    img: "/Images/dex.jpg",
    link: "https://www.edx.org"
  },

  {
    name: "Harvard CS50",
    description: "CS50 is Harvard University's introduction to computer science, available for free online.",
    img: "/Images/cs50.jpg", 
    link: "https://cs50.harvard.edu"
  },
  {
    name: "Github",
    description: "Github is a platform that allows developers to create, store, manage, and share their code.",
    img: "/Images/github.jpg", 
    link: "https://github.com/"
  },
  {
    name: "Netlify",
    description: "Netlify is a platform that can change your ideas into web that every body can see it.",
    img: "/Images/netlify.jpg", 
    link: "https://www.netlify.com/"
  },
];

const App = () => {
  return (
    <div className="App">
      <h1>Sources of learning Computer Science</h1>
      <h2>Here are many ways to learn coding, come and check these amazing websites.</h2>
      <div className="source-list">
        {sources.map((source, index) => (
          <Source
            key={index}
            name={source.name}
            description={source.description}
            img={source.img}
            link={source.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
