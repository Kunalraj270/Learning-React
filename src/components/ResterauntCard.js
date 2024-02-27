import { CDN_IMG } from "../utils/constants";
const ResterauntCard = (props) => {
  // const [resName , cuisine] = props
  const { resData } = props;
  const {
    name,
    avgRating,
    slaString,
    costForTwoString,
    cuisines,
    cloudinaryImageId,
  } = resData?.info;

//   console.log(props);
  return (
    <div className="res-card">
      <img className="res-logo" src={`${CDN_IMG}${cloudinaryImageId}`} />
      <div className="info">
        <h3>{name}</h3>
        <h5>⭐ {avgRating}</h5>
        <h5>{slaString}</h5>
        <h5>{costForTwoString}</h5>
        <span>{cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

export default ResterauntCard;
