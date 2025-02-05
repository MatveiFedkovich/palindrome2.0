import { useState } from "react";
import Navbar from "../components/Navbar";

const images = [
  "images/page1.jpg",
  "images/page2.jpg",
  "images/page3.jpg",
  "images/page4.jpg",
  "images/page5.jpg"
];

const ImageViewer = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center text-center mt-32 md:mt-12">
      <Navbar />
      <div className="mt-6 shadow-lg border rounded-lg p-4">
        <img 
          src={images[pageIndex]} 
          alt={`Страница ${pageIndex + 1}`} 
          className="w-full max-w-3xl object-contain rounded-lg shadow-md"
        />
        <p className="mt-4">Страница {pageIndex + 1} из {images.length}</p>
        <div className="mt-2">
          <button 
            className="px-4 py-2 bg-gray-300 rounded mr-2"
            onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}
            disabled={pageIndex === 0}
          >
            Назад
          </button>
          <button 
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => setPageIndex(prev => Math.min(prev + 1, images.length - 1))}
            disabled={pageIndex === images.length - 1}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
