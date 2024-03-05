import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
// import { Shimmer } from "react-shimmer";
import useResturantMenu from "../utils/useResturantMenu";
const ResturantMenu = () => {
    const { resId } = useParams();
    const resInfo = useResturantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />
    }
    const { itemCards: itemCards1, title: title1 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards: itemCards2, title: title2 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    const { itemCards: itemCards3, title: title3 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    const { itemCards: itemCards4, title: title4 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const { itemCards: itemCards5, title: title5 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
    const { itemCards: itemCards6, title: title6 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[8]?.card?.card;
    const { itemCards: itemCards7, title: title7 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[9]?.card?.card;
    const { itemCards: itemCards8, title: title8 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[10]?.card?.card;
    const { itemCards: itemCards9, title: title9 } = resInfo?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[11]?.card?.card;
    // console.log(itemCards)
    return (
        <div className="pt-28">
            <div className="flex items-center justify-between border-b w-1/2 mx-auto pb-4">
                <div>
                    <h1 className="font-bold text-lg text-gray-700">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
                    <p className="opacity-85">{resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}</p>
                    <p className="opacity-85">{resInfo?.cards[0]?.card?.card?.info.areaName}</p>
                    <p className="mt-4 opacity-80">{"🚲"}{resInfo?.cards[0]?.card?.card?.info.feeDetails.message}</p>

                </div>
                <div className=" flex items-center justify-center flex-col bg-white shadow-lg py-1 px-2 rounded-md border">
                    <p className="py-2">{"⭐"}{resInfo?.cards[0]?.card?.card?.info.avgRating}</p>
                    <div className="border-b my-2 w-full"></div>
                    <p>{resInfo?.cards[0]?.card?.card?.info.totalRatingsString}</p>
                </div>
            </div>
            <div className="flex items-center justify-between border-b w-1/2 mx-auto pb-4">
                <h1 className="font-bold mt-4">{"®️"}{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h1>
            </div>
            <div className="mt-10">
            <Menu title={title1} itemCards={itemCards1} />
            <Menu title={title2} itemCards={itemCards2} />
            <Menu title={title3} itemCards={itemCards3} />
            <Menu title={title4} itemCards={itemCards4} />
            <Menu title={title5} itemCards={itemCards5} />
            <Menu title={title6} itemCards={itemCards6} />
            <Menu title={title7} itemCards={itemCards7} />
            <Menu title={title8} itemCards={itemCards8} />
            <Menu title={title9} itemCards={itemCards9} />
            </div>
        </div>
    )
}
export default ResturantMenu; 