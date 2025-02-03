import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full py-4 bg-gray-800 text-white flex justify-center space-x-4 items-center z-10">
      <Link href="/" className="text-lg font-semibold ml-4">Главная</Link>
      <Link href="/dictionary" className="text-lg font-semibold">Слова-палиндромы</Link>
      <Link href="/sentences" className="text-lg font-semibold mr-4">Фразы-палиндромы</Link>
      <Link href="/pdfPage" className="text-lg font-semibold mr-4">Рабочий лист</Link>
    </nav>
  );
};

export default Navbar;
