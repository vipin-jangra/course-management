
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function CardItem(props) {
  const [disabled, setDisabled] = useState((props.enroll === "Open") ? false : true);
  const [card_btn,setCard_btn] = useState((props.enroll === "Open") ? "card__btn" : "card_btn_dis");
  return (
    <>
      <div className='cards__item'>
        <Link className='cards__item__link' >
          <figure className='cards__item__pic-wrap' data-category={props.enroll}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <span className='durationTitle'>Duration : {props.duration}</span>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.label}</h5>
            <p className='desc'>{props.desc}</p>
            <span className='instructor'><span className='inst-icon'> {<AccountCircleIcon color ="action"/>} </span>{props.instructor}</span>
            <Link to={props.path}><button className={card_btn} disabled={disabled}>Explore</button></Link>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CardItem;