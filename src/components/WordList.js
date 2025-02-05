import { useState } from 'react';
import words from '../../data/words';

const WordList = () => {
    const [search, setSearch] = useState('');
    const filteredWords = words
                            .filter(word => word.includes(search))
                            .sort();
  
    return (
      <div className="text-left mt-6 w-full max-w-md px-4 md:px-8">
        <h2 className="text-2xl font-bold">Список слов-палиндромов</h2>
        <input 
          type="text" 
          placeholder="Поиск..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="mt-4 p-2 border rounded w-full" 
        />
        <ul className="mt-4">
          {filteredWords.map((word, index) => (
            <li key={index} className="text-lg">{word}</li>
          ))}
        </ul>
      </div>
    );
  };

export default WordList;