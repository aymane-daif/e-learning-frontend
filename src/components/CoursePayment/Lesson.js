import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


export default function Lesson({lesson}){

    return (
        <div className="py-3 vedio-title">
            <PlayCircleIcon className="me-2 play-icon" />{lesson}
        </div>
    );
}