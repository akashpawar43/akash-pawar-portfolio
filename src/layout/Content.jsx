// import folder from "/assets/folder.png";
import Banner from './Banner';
import Prodisplay from './Prodisplay';
import Skills from './Skills';
import Deploylink from './Deploylink';
import Footer from './Footer';
import ProjectCard from './ProjectCard';

function Content() {
  const Project = [
    { src: "bms.webp", title: "BookMyShow Clone", sub: "Node.js, Express.js, HBS, JavaScript, Mongodb, CSS", git: "BookMyShow-clone", Link: "https://github.com/akashpawar43/BookMyShow-clone" },
    { src: "venus.webp", title: "Venus International", sub: "React, Node.js, Express.js, JavaScript, React-router, Tailwind CSS", git: "venus-react", Link: "https://venus-omega.vercel.app/" },
    { src: "epic.webp", title: "Epic Games", sub: "Node.js, Express.js, HBS, JavaScript, Mongodb, Bootstrap", git: "epic-clone", Link: "https://epic-games-clone-git-main-akashpawar45s-projects.vercel.app/" },
    { src: "todo.jpeg", title: "Todo App", sub: "React, Redux, Node.js, Thunk API, Express, MongoDB, JavaScript, Tailwind CSS", git: "Todo-redux", Link: "https://todo-redux-akash.vercel.app/" },
    // { src: "folder.png", title: "In Development", sub: "React, Node.js, Express.js, React-router, Tailwind CSS", git: "" }
  ];
  const Menu = [
    { link: "https://www.linkedin.com/in/akashpawar23/", src: "linkedin.webp" },
    { link: "https://github.com/akashpawar43", src: "github.webp" },
    { link: "https://www.instagram.com/mr.akki_1604/", src: "insta.webp" },
    { link: "#", src: "face.webp" },
  ];
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className=" rounded-lg dark:border-gray-700 mt-14">

          <Banner Menu={Menu} />

          {/* <Prodisplay Project={Project} /> */}
          <ProjectCard />

          <Skills />

          <Deploylink Project={Project} />

          <footer>
            <Footer Menu={Menu} />
          </footer>

        </div>
      </div>
    </>
  )
}

export default Content