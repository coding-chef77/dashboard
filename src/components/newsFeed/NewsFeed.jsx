import { Box, Button, Container, Paper, Typography } from "@mui/material";

const serviceList = ["News 1", "News 2", "News 3"];

function NewsFeed() {
  return (
    <Container>
      <Typography variant="h1" sx={{ my: 4, textAlign: "center" }}>
        News feed
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {serviceList.map((service, index) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }} key={index}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu Lorem
                ipsum dolor
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Read
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default NewsFeed;
