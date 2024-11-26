import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <nav className="space-x-4">
          <Link href="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/whatido" className="hover:text-gray-400">
            What I Do
          </Link>
          <Link href="/education" className="hover:text-gray-400">
            Education
          </Link>
          <Link href="/references" className="hover:text-gray-400">
            References
          </Link>
          <Link href="/skills" className="hover:text-gray-400">
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
