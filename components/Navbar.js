import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-gray-800 text-white flex justify-center space-x-4">
      <Link href="/" className="text-lg font-semibold">Главная</Link>
      <Link href="/dictionary" className="text-lg font-semibold">Слова-палиндромы</Link>
      <Link href="/sentences" className="text-lg font-semibold">Фразы-палиндромы</Link>
    </nav>
  );
};

export default Navbar;
