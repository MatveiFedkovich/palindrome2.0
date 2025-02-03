// import '../styles/styles.css';
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';

const PdfPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-14">
      <Navbar />
      
      <div className="mt-6 w-full max-w-4xl">
        {isClient ? (
            <iframe 
                src="task.pdf"
                className="w-full h-screen"
                title="PDF Document"
            ></iframe>
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default PdfPage;
