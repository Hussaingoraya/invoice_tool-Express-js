import React, { useRef, useState } from "react";
import "./Nav.css";
import Navbar from "./Navbar";

export default function Expenss() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length) {
      setSelectedFile(files[0]);
      console.log(files[0]);
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length) {
      setSelectedFile(files[0]);
      console.log(files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navbar />
      <div className="spacer"></div>

      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1>Expenses</h1>
          </div>
          <div className="col-2"></div>
          <div className="col-5">
            <div className=" form-search-bar" role="search">
              <button
                className="btn btn-outline-success export"
                type="submit"
              >
                Export
              </button>
              <button
                className="btn btn-outline-success invoice-btn "
                type="submit"
              >
                New Expense
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="file-upload-container"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="custom-file-input"
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
          onChange={handleFileChange}
        />
        <label className="custom-file-label" htmlFor="inputGroupFile01">
          {selectedFile
            ? selectedFile.name
            : "Drag and drop a file here or click to upload"}
        </label>
      </div>
    </>
  );
}
