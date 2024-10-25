const AvailablePlayers = () => {
  return (
    <div className="w-5/6 mx-auto my-10 pt-4 flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Availalbe Players</h1>
      </div>
      <div>
        <button className="px-7 py-2 font-bold border rounded-l-lg bg-[#e7fe29]">
          Available
        </button>
        <button className="px-7 py-2 font-bold border rounded-r-lg">
          Selected
        </button>
      </div>
    </div>
  );
};

export default AvailablePlayers;
