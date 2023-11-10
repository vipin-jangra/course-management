import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { completedCourse, selectUser } from '../../AppSlice';
import Img from '../../assets/social-media.jpg';
import { useState } from 'react';

const Dashboard = (()=>{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const enrolledCourse = useSelector((state)=>{
        return state.users.enrolledCourse;
    })
    const courseDetails = useSelector((state)=>{
        return state.courses.searchResult;
    });

    const enrolledCourseDetails = enrolledCourse.map((courseId)=>{
        return courseDetails.find((course)=>{
            if(course.id === courseId){
                return course;
            }
        })
    })

    const allCompletedCourses = useSelector((state)=>{
        return state.users.completedCourse;
    })
    
    return (
        <div className='dash-main'>
            <div className='dash-header'>
                <div className="imagecard-dash">
                        <figure >
                            <img
                            className='course-dash'
                            alt=''
                            src={Img}
                            />
                        </figure>
                </div>
                
                <div className='profile-details'>
                    <div className='allDetails'>Name - {user?.name}</div>
                    <div className='allDetails'>Email - {user?.email}</div>
                    
                </div>

            </div>
            <div className='dash-table'>
            <div className='table-div'>
            {enrolledCourseDetails.length !== 0 ? 
                <table>
                    <tr>
                        
                        <th>Course</th>
                        <th>Instructor</th>
                        <th>Duration</th>
                        <th>Action</th>
                    </tr>
                    {enrolledCourseDetails.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.instructor}</td>
                                <td>{val.duration}</td>
                                <td><button className={allCompletedCourses.includes(val.id) ? "dash-button-completed" : "dash-button"} onClick={()=>{
                                    if(!allCompletedCourses.includes(val.id)){
                                        dispatch(completedCourse(val.id))
                                    }
                                }}>{allCompletedCourses.includes(val.id) ? "Completed" : "Mark as Completed"}</button></td>
                            </tr>
                        )
                    })}
                </table>
    
            : <h1 className='noCourses'>No Enrolled Courses</h1>}
                
            </div>
            </div>
        </div>
        
    );
})

export default Dashboard;