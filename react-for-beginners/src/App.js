import { useEffect, useState } from "react";

/* coin tracker 만들기 */
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    // response 받음 (json파일)
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        // coins를 json으로 바꾸고, json을 받아왔다면 로딩상태를 false로 바꾸어 로딩메세지 없애기
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>로딩중 ...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
