import sentences from '../sentences';

const SentenceList = () => {
  return (
    <div className="text-center mt-6">
      <h2 className="text-2xl font-bold">Список предложений-палиндромов</h2>
      <ul className="mt-4">
        {sentences.map((sentence, index) => (
          <li key={index} className="text-lg">{sentence}</li>
        ))}
      </ul>
    </div>
  );
};

export default SentenceList;
