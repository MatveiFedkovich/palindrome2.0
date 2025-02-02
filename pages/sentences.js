import Navbar from '../components/Navbar';
import SentenceList from '../components/SentenceList';

const Sentences = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Navbar />
      <SentenceList />
    </div>
  );
};

export default Sentences;
