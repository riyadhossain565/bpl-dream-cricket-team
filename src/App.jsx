import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

const App = () => {
  const [coins, setCoins] = useState(0);

  const addCoins = (newCoins) => {
    setCoins((prevCoins) => prevCoins + newCoins);
  };

  return (
    <div>
      {/* Header */}
      <Header coins={coins}></Header>
      {/* Banner */}
      <Banner addCoins={addCoins}></Banner>
    </div>
  );
};

export default App;
