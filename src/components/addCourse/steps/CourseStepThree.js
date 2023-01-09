import React from "react"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function CourseStepThree({register,errors,setCourseImage}){

  const handleChange =(event)=>{
    setCourseImage(event.target.files[0]);
  }
  
  return (
  <div className="mt-5 d-flex justify-content-center">
    <label htmlFor="image">
        <CloudUploadIcon sx={{fontSize:200,color:"orange",cursor:"pointer"}} />
    </label>
    <input type="file" name="image" id="image"  
    className="d-none" 
    onChange={(event)=>handleChange(event)}
  />

  </div>
  );
}