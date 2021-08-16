import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Review = ({ docs }) => {
  const [numDoc, setNumDoc] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const getDocNum = () => {
    return docs.map((d, k) => (
      <div
        onClick={() => {
          setNumDoc(k);
        }}
        className="rounded-full px-2 m-2 bg-fwd"
      >
        {k + 1}
      </div>
    ));
  };

  return (
    <div className="w-full place-content-center  bg-gray-50 px-1  ">
      <div className=" bg-gray-50 flex justify-center">{getDocNum()}</div>
      <div id="docContainer" className="grid justify-items-stretch">
        <div className="justify-self-center">
          <Document
            file={process.env.PUBLIC_URL + docs[numDoc]}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                wrap
              ></Page>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
};
