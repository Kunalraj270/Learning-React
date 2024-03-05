import { CDN_IMG } from "../utils/constants";
const Menu = ({ itemCards, title }) => {
    return (
        <div className="container mx-auto max-w-4xl overflow-hidden">
            <h2 className="font-bold text-2xl m-4">{title}</h2>
            <ul className="">
                {itemCards.map((item) => {
                    return (
                        <div className="flex  w-full mx-auto p-4 mb-4 border-b">
                            <div className="flex-grow pr-8">
                                <h3 className="text-lg font-semibold mb-2">{item.card.info.name}</h3>
                                <p className="text-gray-800">Rs: {item.card.info.price / 100}</p>
                                <p className="text-gray-800 opacity-80 mt-3 max-w-xl">{item.card.info.description}</p>
                            </div>
                            <div>
                                <img className="w-36 h-36 object-cover rounded-3xl align-bottom" src={CDN_IMG + item.card.info.imageId} alt={item.card.info.name} />
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>


    )
}

export default Menu;