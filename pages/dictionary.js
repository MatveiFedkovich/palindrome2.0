import Navbar from '../components/Navbar';
import WordList from '../components/WordList';

const Dictionary = () => {
  return (
    <div className="flex flex-col items-center text-center mb-4 pt-16 mt-16 md:mt-0">
      <Navbar />
      <WordList />
    </div>
  );
};

export default Dictionary;
