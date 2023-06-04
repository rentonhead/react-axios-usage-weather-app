import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import City from "./City"

function App() {
  const key = "2a8c5baffef49d8bdb18b6395f399f6c";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Placeholder"
            className="px-3 py-3 w-[250px] placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
          />
          <City city={city} />
      </div>
    </div>
  );
}

export default App;
