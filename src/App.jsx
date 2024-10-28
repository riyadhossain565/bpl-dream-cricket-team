import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import PlayersContainer from "./components/PlayersContainer/PlayersContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [coins, setCoins] = useState(0);
  const [isActive, setIsActive] = useState({
    card: true,
    status: "card",
  });

  const handleIsActiveState = (status) => {
    if (status == "card") {
      setIsActive({
        card: true,
        status: "card",
      });
    } else {
      setIsActive({
        card: false,
        status: "selected",
      });
    }
  };

  const addCoins = (newCoins) => {
    setCoins((prevCoins) => prevCoins + newCoins);
  };

  const handleDecreaseCoins = (price) => {
    {
      price > coins ? "" : setCoins(coins - price);
    }
  };

  return (
    <div>
      {/* Header */}
      <Header coins={coins}></Header>
      {/* Banner */}
      <Banner addCoins={addCoins}></Banner>
      {/* Available Players */}
      <PlayersContainer
        isActive={isActive}
        handleIsActiveState={handleIsActiveState}
        handleDecreaseCoins={handleDecreaseCoins}
        coins={coins}
      ></PlayersContainer>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default App;
