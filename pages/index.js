import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Navbar />
      <h1 className="text-3xl md:text-4xl font-bold mt-10">Что такое палиндром?</h1>
      <p className="text-lg md:text-xl mt-4 max-w-2xl">
      Палиндром (греч. – «бегущий вспять», иначе палиндромон, перевертень) – фраза, построенная так, что ее можно читать и справа, и слева, сохраняя смысл, например, Атака заката
      </p>
      <img 
        src="/palindrome.jpg" 
        alt="Иллюстрация палиндрома" 
        className="mt-6 w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Home;
