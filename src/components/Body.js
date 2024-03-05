import ResterauntCard from "./ResterauntCard";
import { useEffect, useState  } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { Image , Shimmer } from "react-shimmer";
const Body = () => {

  const [restaurantLists, setRestaurantLists] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [topres , setTopRes] = useState(null)

  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    console.log("Use Effect Called!!");
    fetchData();
  }, [restaurantLists]);

  const fetchData = async () => {
    try {
      const res = await fetch(RES_API);
      const json = await res.json();
      console.log(json);
      const topres = json?.data?.cards[2]?.card?.card?.title
      const resInfo = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
      console.log(resInfo)
      setRestaurantLists(resInfo);
      setFilterRes(resInfo);
      setTopRes(topres)
    } catch (error) {
      console.log(error)
    }
  };
  console.log("Body Called!!");
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus)
  if(!onlineStatus){
    return (
      <h1 style={{margin:"100px"}}>You are offline!!!</h1>
    )
  }
  
  return (
    <div>
      {(!restaurantLists || restaurantLists.length === 0) ? (
        <Shimmer/>
      ) : (
        <div className="pt-20">
          <div className="flex items-center justify-center mx-16 bg-gr bg-pink-500  h-52  rounded-full overflow-hidden rounded-t-none gap-8">
            <input
            className="p-2 rounded-lg focus:outline-none"
              type="text"
              value={searchText}
              placeholder="Search Resturant......"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="bg-violet-300 p-2 rounded-lg hover:bg-violet-400"
              onClick={() => {
                const filterlist = restaurantLists.filter((res) => {
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                setFilterRes(filterlist);
              }}
            >
              Search
            </button>
            <button
              className="bg-blue-400 p-2 rounded-lg"
              onClick={() => {
                const resList = restaurantLists.filter(
                  (res) => res?.info?.avgRating > 4
                );
                setRestaurantLists(resList);
                console.log(resList);
              }}
            >
              ⭐Top Rated Restaurant
            </button>
          </div>
          <div className="flex justify-center  flex-wrap mt-10">
          <h1 className="w-full text-center text-4xl font-bold text-gray-800 mb-4">{topres}</h1> 
            {filterRes.map((restaurant) => (
              <Link to={"/resturant/" + restaurant?.info?.id}><ResterauntCard key={restaurant?.info?.id} resData={restaurant} /></Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
