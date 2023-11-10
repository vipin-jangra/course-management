import { createSlice } from "@reduxjs/toolkit";
import courses from "./data/courses";
import users from "./data/users";

export const userSlice = createSlice({
    name: "users",
    initialState:{
        users:users,
        currentUser:null,
        enrolledCourse:[],
        completedCourse:[],
    },
    reducers:{
        login: (state,action)=>{
            state.currentUser = action.payload
        },
        logout:(state)=> {
            state.currentUser= null;
        },
        enrolledCourse:(state,action) =>{
            state.enrolledCourse.push(action.payload);
        },
        completedCourse:(state,action) =>{
            state.completedCourse.push(action.payload);
        },
        
    },
}
);

export const courseSlice = createSlice({

    name: "courses",
    initialState:{
        courses:courses,
        searchResult:courses,
    },
    reducers:{
        setSearchCoursesResult: (state,action)=>{
            state.searchResult = state.courses.filter((course)=>{

          if(action.payload === "") return state.courses
                return (course.name.toLowerCase().includes(action.payload) || course.instructor.toLowerCase().includes(action.payload));
                
            
            })
        }
        
    },
})

export const {login, logout,enrolledCourse,completedCourse} = userSlice.actions;
export const selectUser = (state) => state.users.currentUser;
export const courseModal = (state) => state.courses.courses;
export const {setSearchCoursesResult} = courseSlice.actions;



