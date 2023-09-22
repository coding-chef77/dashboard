import NewsFeed from "./components/newsFeed/NewsFeed";
import Navbar from "./components/navbar/Navbar";
import WeatherWidget from "./components/weatherWidget/WeatherWidget";
import Footer from "./components/footer/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <Container sx={{ height: "100vh" }}>
      <Navbar />
      <NewsFeed />
      <WeatherWidget />
      <Footer />
    </Container>
  );
}

export default App;
