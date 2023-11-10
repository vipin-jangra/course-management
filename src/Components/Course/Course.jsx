
import './Course.css';
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useParams } from "react-router-dom";
import { enrolledCourse } from '../../AppSlice';
import { useState } from 'react';


function Course(){
    const {id} = useParams();
    const dispatch = useDispatch();
    
    const courses = useSelector((state)=>{
        return state.courses.courses;
      });
    const course = courses.find((c) => c.id.toString() === id)

    const allenrolledCourse = useSelector((state)=>{
        return state.users.enrolledCourse;
      });

    const allCompletedCourses = useSelector((state)=>{
        return state.users.completedCourse;
    })

    

    
    return (<>
       <div className="container">
            <div className="imagecard">
            <figure >
                <img
                className='course__item__img'
                alt='Travel Image'
                src={course.thumbnail}
                />
            </figure>
            </div>
            <div className="details-div">
                <h1>{course.name}</h1>
                <p>{course.description}</p>
                <div className="preReq">
                    Prerequisites: {course.prerequisites.toString()}
                </div>
                <div className="schedule">
                    Schedule : {course.schedule}
                </div>
                <div className="duration">
                    Duration : {course.duration}
                </div>
                <div className="loc">
                    Location : {course.location}
                </div>
                <div className="Instructor"> <span className='inst-icon'>{<AccountCircleIcon color ="action"/>} </span> {course.instructor} </div>
                
                <div className="enroll">
                <button className={allCompletedCourses.includes(course.id) ? "button-completed" : (allenrolledCourse.includes(course.id) ? "button-enrolled":"button-enroll")} onClick={()=>{
                    if(!allenrolledCourse.includes(course.id)){
                        dispatch(enrolledCourse(course.id))
                    }
                }}>{allCompletedCourses.includes(course.id) ? "Completed" : (allenrolledCourse.includes(course.id) ? "Enrolled":"Enroll")}</button>
                </div>
            </div>

       </div>
       <div className="syllabus-div">
       <div className="row-div">
        <div className="subject-title">
            <h3>Course Details !</h3>
        </div>
       </div>
           
       {course.syllabus.map((val)=>{
        return(
            <div className="row-div" key={val.week}>
                <div className="subject">
                    <h2>Week :{val.week}</h2>
                </div>
                <div className="module">
                    <h3>Topic {val.topic}</h3>
                    <p>{val.content}</p>
                </div>
            </div>
       )})}
            
       </div>

    </>)
}

export default Course;