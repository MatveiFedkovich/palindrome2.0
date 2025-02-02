import Navbar from '../components/Navbar';
import WordList from '../components/WordList';

const Dictionary = () => {
  return (
    <div className="flex flex-col items-center text-center mb-4">
      <Navbar />
      <WordList />
    </div>
  );
};

export default Dictionary;
