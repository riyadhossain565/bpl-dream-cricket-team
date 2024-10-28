import PropTypes from "prop-types";

const Selected = ({ selectePlayers, handleDelete, handleIsActiveState }) => {
  return (
    <div>
      {selectePlayers.map((player) => (
        <div
          className="flex items-center justify-between gap-3 p-3 border rounded-xl mb-4"
          key={player.id}
        >
          <div className="flex items-center gap-4">
            <div>
              <img
                className="w-20 h-20 object-cover rounded-xl"
                src={player.image}
                alt=""
              />
            </div>
            <div>
              <h4 className="font-bold">{player.name}</h4>
              <p className="text-sm text-[#13131399]">{player.battingType}</p>
            </div>
          </div>
          <div>
            <button onClick={() => handleDelete(player.id)}>
              <i className="fa-solid fa-trash-can mr-4"></i>
            </button>
          </div>
        </div>
      ))}
      <div className="p-1 border inline-block rounded-xl">
        <button
          onClick={() => handleIsActiveState("card")}
          className="px-4 py-2 font-bold border rounded-lg bg-[#E7FE29]"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

Selected.propTypes = {
  selectePlayers: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleIsActiveState: PropTypes.func.isRequired,
};

export default Selected;
