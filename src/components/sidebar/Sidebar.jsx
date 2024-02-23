import { links } from '../../data';
import { useGlobalContext } from '../../context/context';

export default function Sidebar() {
  const { isSidebarOpen } = useGlobalContext();

  const sidebarMapping = links.map((item) => {
    const { id, href, text } = item;
    return (
      <div
        key={id}
        className="w-full flex items-center justify-center capitalize p-4 text-xl"
      >
        <a href={href}>{text}</a>
      </div>
    );
  });

  return (
    <aside
      className={
        isSidebarOpen
          ? 'fixed top-10 sm:top-14 left-0 w-full z-20 md:hidden'
          : 'hidden'
      }
    >
      <div className="bg-white border-b-2 h-full w-full  flex flex-col justify-center p-2">
        {sidebarMapping}
      </div>
    </aside>
  );
}
