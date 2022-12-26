import DropFileInput from "./drop-file-input/DropFileInput";
import "./upload.css";
const Upload = () => {
  const onFileChange = (files) => {
    console.log(files);
  };
  return (
    <div className="container">
      <div className="box">
        <h2 className="header">Charger votre vidéos/images</h2>
        <DropFileInput onFileChange={(files) => onFileChange(files)} />
      </div>
    </div>
  );
};

export default Upload;
