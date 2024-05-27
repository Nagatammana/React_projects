/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './index.css'
// eslint-disable-next-line react/prop-types
const RestautantCard = (props) => {
    // eslint-disable-next-line no-unused-vars
    const { resName } = props;
    // eslint-disable-next-line no-unsafe-optional-chaining
    return(
        <div className='card'>
            <img className='img_logo' alt='img_logo' src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resName.info.cloudinaryImageId}/>
            <div className='card1'>
            <h3>{resName.info.name}</h3>
            <h4>{resName.info.cuisines.join(",")}</h4>
            <h4>{resName.info.avgRating}</h4>
            <h4>{resName.info.areaName}</h4>
            </div>
    
        </div>

    );
}
export default RestautantCard;