import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link href="/">Главная</Link>
      <Link href="/dictionary">Словарь</Link>
      <Link href="/sentences">Предложения</Link>
    </nav>
  );
};

export default Navbar;
