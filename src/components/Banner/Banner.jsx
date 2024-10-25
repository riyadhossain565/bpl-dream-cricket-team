import bannerMain from "../../assets/banner-main.png";

const Banner = ({ addCoins }) => {
  const handleClaimCoin = () => {
    const newCoins = 6000000;
    addCoins(newCoins);
  };

  return (
    <div
      className="w-5/6 mx-auto my-6 h-full bg-cover bg-no-repeat bg-black rounded-xl"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/6Zn8PsN/bg-shadow.png)",
        height: "500px",
      }}
    >
      <div className="flex flex-col items-center">
        <img className="h-52 w-60 mt-12" src={bannerMain} alt="" />
        <h1 className="text-4xl font-bold text-white text-center mt-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-bold text-gray-400 text-center my-4">
          Beyond Boundaries Beyond Limits
        </p>
        <button
          onClick={handleClaimCoin}
          className="mt-4 px-2 py-4 rounded-xl"
          style={{ border: "1px solid #e7fe29" }}
        >
          <span className="bg-[#E7FE29] px-4 py-3 rounded-lg font-bold hover:bg-white transition-all">
            Claim Free Credit
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
