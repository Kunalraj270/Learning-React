import ResterauntCard from "./ResterauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import restaurantList from "../utils/mockData";
//normal js variable
// let resLists = [
//   {
//     data: {
//       id: "73011",
//       name: "KFC",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["American", "Snacks", "Biryani"],
//       costForTwoString: "₹300 FOR TWO",
//       slaString: "31 MINS",
//       avgRating: "3.6",
//     },
//   },
//   {
//     data: {
//       id: "73012",
//       name: "Pizza Hut",
//       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//       cuisines: ["American", "Snacks", "Biryani"],
//       costForTwoString: "₹300 FOR TWO",
//       slaString: "31 MINS",
//       avgRating: "4.5",
//     },
//   },
// ];
// //state variable => superpower of variable

const Body = () => {
  //this normal array destructuring
  const [restaurantLists, setrestaurantLists] = useState([]);
  const [filterres, setFilterRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Use Effect Called!!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9165757&lng=77.6101163"
      );
      const json = await res.json();
      console.log(json);
      const restaurantsInfo =
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restaurantsInfo);
      setrestaurantLists(restaurantsInfo);
      setFilterRes(restaurantsInfo)
    } catch (error) {
      console.log(error)
    }
  };
  console.log("Body Called!!");
  //shimmer
  // if(restaurantLists.length === 0){
  //   return(
  //     <Shimmer/>
  //   )
  // }
  return restaurantLists.length === 0 ? <Shimmer /> : (
    <div className="body">

      <div className="search">
        <input type="text" value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <button className="search-btn" onClick={() => {
          //filter the resturant
          //search the resturant
          //fetch from restaurantLists
          const filterlist = restaurantLists.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          })
          setFilterRes(filterlist)
        }}>Search</button>

        <button
          className="filter-btn"
          onClick={() => {
            const resList = restaurantLists.filter(
              (res) => res.info.avgRating > 4
            );
            setrestaurantLists(resList);
            console.log(resList);
          }}
        >
          Top Reated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterres.map((restaurant) => (
          <ResterauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
