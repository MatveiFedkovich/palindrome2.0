import { useState } from 'react';
import sentences from '../sentences';

const SentenceList = () => {
    const [search, setSearch] = useState('');
    const filteredSentences = sentences
                                    .filter(sentence => sentence.includes(search))
                                    .sort();
  
    return (
      <div className="text-left mt-6 w-full max-w-md">
        <h2 className="text-2xl font-bold">Список предложений-палиндромов</h2>
        <input 
          type="text" 
          placeholder="Поиск..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="mt-4 p-2 border rounded w-full" 
        />
        <ul className="mt-4">
          {filteredSentences.map((sentence, index) => (
            <li key={index} className="text-lg">{sentence}</li>
          ))}
        </ul>
      </div>
    );
  };

export default SentenceList;