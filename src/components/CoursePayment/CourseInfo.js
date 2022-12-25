import React from "react";
import DateRangeIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function CourseInfo({course}){

    return (
        <div className="leftContent mx-0 py-5 bg-dark text-white">
                <h1 className="c-title">Learning Python for Data
                    Analysis and Visualization Ver 1</h1>
                <div className="c-description mt-5">Learn python and how to use it to analyze,visualize and 
                    present data. Includes tons of sample 
                    code and hours of video!</div>
                <div className="d-flex flex-column align-items-end mt-5">
                    <div className="c-students-nbr">194,907 students</div>
                    <div className="c-instructor">Created by
                        <span className="c-instructor-name">abdelali</span>
                    </div>
                </div>
                <div className="mt-2">
                    <DateRangeIcon className="me-3"/>
                    <span className="fw-bold">Difficulty : </span>Expert
                </div>
                <div className="mt-2">
                    <CalendarTodayIcon className="me-3" /> Last updated 09/2019
                </div>
        </div>
    );
}

export default CourseInfo;