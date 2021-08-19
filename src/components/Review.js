import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Review = (ref) => {
  const docs = ref.docs;
  console.log('%c'+ref, 'color:green')
  const [numDoc, setNumDoc] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfWrapper = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getDocNum = () => {
    return docs.map((d, k) => (
      <div
        onClick={() => {
          setNumDoc(k);
        }}
        className={
          k == numDoc
            ? "rounded-full px-2 m-2 bg-fwd"
            : "rounded-full px-2 m-2 text-fwd bg-white"
        }
      >
        {k + 1}
      </div>
    ));
  };

  return (
    <div className="cardContainer">
      <div className=" bg-gray-50 flex justify-center">
        <button
          onClick={() => {
            setNumDoc(numDoc - 1);
          }}
        >
          Previous
        </button>
        {getDocNum()}
        <button
          onClick={() => {
            setNumDoc(numDoc + 1);
          }}
        >
          Next
        </button>
      </div>
      <div className="bg-gray flex justify-center">
        <Document
          file={process.env.PUBLIC_URL + docs[numDoc]}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              wrap
              width={document.documentElement.clientWidth - 80}
            ></Page>
          ))}
        </Document>
      </div>
    </div>
  );
};
