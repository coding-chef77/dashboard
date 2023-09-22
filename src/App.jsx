import { Grid } from "@mui/material";
import Calculator from "./components/Calculator/Calculator";
import Calendar from "./components/Calendar/Calendar";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import WeatherWidget from "./components/WeatherWidget/WeatherWidget";
import StravaFeed from "./components/stravaFeed/StravaFeed";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={8}>
        <WeatherWidget />
      </Grid>
      <Grid item xs={4}>
        <Calendar />
      </Grid>
      <Grid item xs={8}>
        <NewsFeed />
      </Grid>
      <Grid item xs={4}>
        <Calculator />
      </Grid>
      <Grid item xs={4}>
        <StravaFeed />
      </Grid>
    </Grid>
  );
}

export default App;
