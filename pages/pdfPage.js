import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

const PdfViewer = dynamic(() => import("../components/PdfViewer"), { ssr: false });

const PdfPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 md:mt-12">
      <Navbar />
        <div className="mt-6 w-full max-w-4xl">
        <PdfViewer />
      </div>
    </div>
  );
};

export default PdfPage;
