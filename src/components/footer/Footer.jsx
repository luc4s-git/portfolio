import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="align-center">
      <div className="flex items-center justify-center py-10 gap-x-2">
        <a href="https://github.com/luc4s-git">
          <FaGithubSquare className="text-5xl" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-santos-6539971b4/">
          <FaLinkedin className="text-5xl" />
        </a>
        <a href="https://twitter.com/moongrazs">
          <FaSquareXTwitter className="text-5xl" />
        </a>
      </div>
    </footer>
  );
}
