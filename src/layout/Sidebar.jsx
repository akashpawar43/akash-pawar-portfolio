import home from "/assets/home.webp";
import folder from "/assets/folder.webp";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { link: "https://www.linkedin.com/in/akashpawar23/", title: "Linkedin", src: "linkedin.webp" },
    { link: "https://github.com/akashpawar43", title: "github", src: "github.webp" },
    { link: "https://www.instagram.com/mr.akki_1604/", title: "insta", src: "insta.webp" },
    { link: "#", title: "face", src: "face.webp" },
  ];

  return (
    <>
      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" rel="noopener noreferrer" aria-label="Home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img className="w-6 h-6" src={home} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </a>
            </li>
            <li>
              <a href="#" rel="noopener noreferrer" aria-label="New" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <img className="w-6 h-6" src={folder} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">New</span>
              </a>
            </li>
            <li>
              <span className="flex-1 ms-3 whitespace-nowrap text-white mt-10">Socials</span>
            </li>
            {Menus.map((menus, i) => (
              <li key={i}>
                <a target="_blank" rel="noopener noreferrer" aria-label="Socials" href={menus.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <img className="w-6 h-6" src={`./assets/${menus.src}`} alt="" />
                  <span className="flex-1 ms-3 whitespace-nowrap">{menus.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>



    </>
  )
}

export default Sidebar