import './Cards.css';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

function Cards() {
  const data = useSelector((state)=>{
    return state.courses.searchResult;
  })

  return (
    <div className='cards' id ="courses">
      <h1>Check out these EPIC Courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards__items'>
          {
            data.map((val)=>{
            return <>
            <CardItem
              key={`course-${val.id}`}
              id = {val.id}
              src={val.thumbnail}
              desc={val.description}
              label={val.name}
              path={'/course/'+val.id}
              enroll = {val.enrollmentStatus}
              duration = {val.duration}
              instructor = {val.instructor}
              location = {val.location}
            />
            </>
            
          })}
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;