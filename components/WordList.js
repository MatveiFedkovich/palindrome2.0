import words from '../words';

const WordList = () => {
  return (
    <div className="text-center mt-6">
      <h2 className="text-2xl font-bold">Список слов-палиндромов</h2>
      <ul className="mt-4">
        {words.map((word, index) => (
          <li key={index} className="text-lg">{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
