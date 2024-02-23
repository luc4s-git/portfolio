import { links } from '../../data';
import { FaGithubSquare, FaLinkedin, FaBars } from 'react-icons/fa';
import { FaSquareXTwitter, FaX } from 'react-icons/fa6';
import { useGlobalContext } from '../../context/context';

export default function Navbar() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext();

  return (
    <nav className="sticky top-0 shadow-md bg-white z-10">
      <div className="align-center items-center py-2 flex flex-row justify-between sm:flex-row sm:py-4 sm:gap-x-16 sm:items-center">
        <div className="gap-x-3 hidden md:flex ">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                className="capitalize tracking-wide hover:text-violet-600 duration-300"
                key={id}
                href={href}
              >
                {text}
              </a>
            );
          })}
        </div>
        <div className="md:hidden">
          {isSidebarOpen ? (
            <FaX className="text-base cursor-pointer" onClick={closeSidebar} />
          ) : (
            <FaBars
              className="text-base cursor-pointer"
              onClick={openSidebar}
            />
          )}
        </div>
        <div className="flex gap-x-2">
          <a href="https://github.com/luc4s-git">
            <FaGithubSquare className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/lucas-santos-6539971b4/">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/moongrazs">
            <FaSquareXTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
