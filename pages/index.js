import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Navbar />
      <h1 className="text-4xl font-bold mt-10">Что такое палиндром?</h1>
      <p className="text-xl mt-4 max-w-2xl">
        Палиндром — это слово, фраза, число или другая последовательность символов, которая читается одинаково как слева направо, так и справа налево.
      </p>
      <div className="mt-6 w-64 h-64 bg-gray-300 flex items-center justify-center">
        <p>Здесь будет изображение</p>
      </div>
    </div>
  );
};

export default Home;
