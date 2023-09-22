import { Calculator } from "./components/Calculator/Calculator";
import { Calendar } from "./components/Calendar/Calendar";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import Navbar from "./components/navbar/Navbar";
import StravaFeed from "./components/stravaFeed/StravaFeed";

function App() {
  return (
    <>
      <Navbar />
      <WeatherWidget />
      <NewsFeed />
      <Calendar />
      <Calculator />
      <StravaFeed />
    </>
  );
}

export default App;
