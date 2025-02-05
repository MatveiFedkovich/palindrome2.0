import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // Оставляем этот импорт
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Navbar from '../components/Navbar';
// import workerSrc from 'pdfjs-dist/build/pdf.worker.min.js';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;




const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-32 md:mt-12">
      <Navbar />
      <h1 className="text-3xl md:text-4xl font-bold mt-10">Просмотр PDF</h1>
      <div className="mt-6 shadow-lg border rounded-lg p-4">
        <Document file="task.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} className="border rounded-lg" />
        </Document>
        <p className="mt-4">Страница {pageNumber} из {numPages}</p>
        <div className="mt-2">
          <button className="px-4 py-2 bg-gray-300 rounded mr-2"
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
          >
            Назад
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
