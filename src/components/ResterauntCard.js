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
    <div className=" m-4 p-3 w-[250] h-[330] bg-slate-100 rounded-3xl shadow-sm  overflow-hidden">
      <img className="w-full h-40 object-cover rounded-3xl transition-transform transform hover:scale-95 overflow-hidden" style={{zIndex:1}} src={`${CDN_IMG}${cloudinaryImageId}`} />
      <div className="m-2 ">
        <h3 className="font-bold text-gray-700 text-xl">{name}</h3>
        <h5>⭐ {avgRating}</h5>
        <h5>{slaString}</h5>
        <h5>{costForTwoString}</h5>
        <span>{cuisines.join(", ")}</span>
      </div>
    </div>
  );
};

export default ResterauntCard;
