import { Link } from 'react-router-dom'
import './Card.scss'
import ChatIcon from '../../assets/chat.png'
import BathIcon from '../../assets/bath.png'
import BedIcon from '../../assets/bed.png'
import PinIcon from '../../assets/pin.png'
import SaveIcon from '../../assets/save.png'

const Card = ({ item }) => {
  return (
    <div className='card'>
      <Link to={`/${item?.id}`} className='imageContainer'>
        <img src={item.img} alt='' />
      </Link>
      <div className='textContainer'>
        <h2 className='title'>
          <Link to={`/${item?.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src={PinIcon} alt='' />
          <span>{item.address}</span>
        </p>
        <p className='price'>${item.price}</p>
        <div className='bottom'>
          <div className='features'>
            <div className='feature'>
              <img src={BedIcon} alt='' />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className='feature'>
              <img src={BathIcon} alt='' />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className='icons'>
            <div className='icon'>
              <img src={SaveIcon} alt='' />
            </div>
            <div className='icon'>
              <img src={ChatIcon} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
