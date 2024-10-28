import person from "../../assets/icons8-person-30.png";
import PropTypes from "prop-types";
const PlayersCard = ({ player, handleSelectPlayers }) => {
  const {
    name,
    image,
    country,
    role,
    rating,
    battingType,
    bowlingType,
    biddingPrice,
  } = player;
  return (
    <div className="p-4 border rounded-xl">
      <div className="">
        <img className="w-96 h-60 object-cover rounded-xl" src={image} alt="" />
      </div>

      <div className="flex items-center gap-1 my-3">
        <img className="w-6" src={person} alt="" />
        <p className="font-bold text-lg">{name}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-400">
          <i className="fa-solid fa-flag mr-1"></i>
          {country}
        </span>
        <span className="px-3 py-1 bg-gray-200 border rounded-lg">{role}</span>
      </div>
      <hr />
      <h4 className="font-bold mt-3">Rating : {rating}</h4>

      <div className="flex justify-between items-center my-3">
        <p>{battingType}</p>
        <p>{bowlingType}</p>
      </div>

      <div className="flex justify-between items-center">
        <p>Price:${biddingPrice}</p>
        <button
          onClick={() => handleSelectPlayers(player)}
          className="px-4 py-1 border rounded-lg bg-gray-200 hover:bg-[#E7FE29] transition-all"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

PlayersCard.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelectPlayers: PropTypes.func.isRequired,
};

export default PlayersCard;
