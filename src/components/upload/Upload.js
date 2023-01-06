import React, { useState } from "react";
import DropFileInput from "./drop-file-input/DropFileInput";
import { useHttpClient } from "../../security/hooks/axiosProvider";

import Button from "react-bootstrap/Button";

import "./upload.css";

const Upload = () => {
  const [isLoading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const httpClient = useHttpClient(true);
  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const uploadFiles = (files, course_id) => {
    Promise.all(
      files.map((file) => {
        const formData = new FormData();
        formData.append("file", file);
        return httpClient.current?.post(
          `/media/upload-file/${course_id}`,
          formData,
          config
        );
      })
    ).then((responses) => {
      console.log(responses);
      setLoading(false);
    }).catch((errors) => {
      setLoading(false);
      console.log(errors.response.data);
    });
  };

  const handleClick = () => {
    if (fileList.length > 0) {
      setLoading(true);
      uploadFiles(fileList, 1);
    }
  };

  const onFileChange = (files) => {
    if(files.length === 0) {
      setLoading(false);
    }
    console.log(files);
    setFileList(files);
  };

  return (
    <div className="container">
      <div className="box">
        <h2 className="header">Charger votre vidéos/images</h2>
        <DropFileInput onFileChange={(files) => onFileChange(files)} />
        <Button variant="primary" disabled={isLoading} onClick={handleClick}>
          {isLoading ? "Chargement…" : "Charger"}
        </Button>
      </div>
    </div>
  );
};

export default Upload;
