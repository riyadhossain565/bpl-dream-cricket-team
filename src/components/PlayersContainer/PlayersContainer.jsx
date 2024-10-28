import { useEffect, useState } from "react";
import PlayersCard from "../PlayersCard/PlayersCard";
import Selected from "../Selected/Selected";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlayersContainer = ({
  handleIsActiveState,
  isActive,
  handleDecreaseCoins,
  coins,
}) => {
  //state
  const [players, setPlayers] = useState([]);
  const [selectePlayers, setSelectePlayers] = useState([]);
  //effect
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleSelectPlayers = (player) => {
    if (selectePlayers.length >= 6) {
      toast.error("You already have 6 players");
      return;
    }

    const isExist = selectePlayers.find(
      (previousPlayer) => previousPlayer.id === player.id
    );
    if (player.biddingPrice > coins) {
      toast.error("Not enough money to buy this player. Claim some credit.");
    } else if (isExist) {
      toast.warn("Player already selected");
    } else {
      handleDecreaseCoins(player.biddingPrice);
      setSelectePlayers((prevPlayers) => [...prevPlayers, player]);
      toast.success(`Congrats!! ${player.name} is now in your squad.`);
    }
  };

  const handleDelete = (player) => {
    const deletePlayer = selectePlayers.filter((p) => p.id != player);
    setSelectePlayers(deletePlayer);
    toast.warn("Player removed");
  };

  return (
    <div>
      <div className="w-5/6 mx-auto my-10 pt-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {isActive.card
              ? "Availalbe Players"
              : `Selected Player(${selectePlayers.length}/6)`}
          </h1>
        </div>
        <div>
          <button
            onClick={() => handleIsActiveState("card")}
            className={`px-7 py-2 font-bold border rounded-l-lg ${
              isActive.card ? "bg-[#E7FE29]" : "bg-white"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleIsActiveState("selected")}
            className={`px-7 py-2 font-bold border rounded-r-lg ${
              isActive.card ? "bg-white" : "bg-[#E7FE29]"
            }`}
          >
            Selected ({selectePlayers.length})
          </button>
        </div>
      </div>
      <div className="w-5/6 mx-auto my-10 mb-20">
        {isActive.card ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {players.map((player) => (
              <PlayersCard
                key={player.id}
                player={player}
                handleSelectPlayers={handleSelectPlayers}
              ></PlayersCard>
            ))}
          </div>
        ) : (
          <Selected
            handleDelete={handleDelete}
            selectePlayers={selectePlayers}
            handleIsActiveState={handleIsActiveState}
          ></Selected>
        )}
      </div>
    </div>
  );
};

PlayersContainer.propTypes = {
  handleIsActiveState: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  handleDecreaseCoins: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired,
};

export default PlayersContainer;
