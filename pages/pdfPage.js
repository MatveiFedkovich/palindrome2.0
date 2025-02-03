import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), { ssr: false });

const PdfPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-14">
      <Navbar />
      <h1 className="text-3xl md:text-4xl font-bold mt-10">Читать PDF-документ</h1>
      <p className="text-lg md:text-xl mt-4 max-w-2xl">
        Ниже представлен PDF-документ, который вы можете пролистывать.
      </p>
      <div className="mt-6 w-full max-w-4xl">
        <PdfViewer />
      </div>
    </div>
  );
};

export default PdfPage;
