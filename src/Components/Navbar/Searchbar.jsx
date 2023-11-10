import { useState } from "react";
import './Searchbar.css'
import { useDispatch } from "react-redux";
import { setSearchCoursesResult } from "../../AppSlice";
function Search() {
  
    const [inputText, setInputText] = useState("");
    const dispatch = useDispatch()
    // useFilterData(inputText)
    const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
      dispatch(setSearchCoursesResult(lowerCase))
};
  return (
    <div className="main">
      <div className="search">
        <input className="searchbar" value={inputText} type="text" label="Search" placeholder="Search" onChange={inputHandler} />
      </div>
      
    </div>
    
  );
  
}

export default Search;
