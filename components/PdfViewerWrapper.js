import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

const PdfViewerWrapper = () => {
  return <PdfViewer />;
};

export default PdfViewerWrapper;
