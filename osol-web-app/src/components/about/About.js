import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box } from "@mui/material";
import backgroundImage from "../../images/logoCamfoot.JPG";
import "./About.css";

const About = () => {
  return (
    <div>
      <div>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{
            color: "#012f01",
            fontWeight: "bold",
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          About Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            // backgroundImage: `url(${backgroundImage})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <Card
            variant="outlined"
            sx={{ minWidth: 275, maxWidth: 800, margin: 3 }}
          >
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{
                  color: "burlywood",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                Who are we?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ fontSize: "15px", lineHeight: "1.6", color: "#333" }}
              >
                <bold>What is Lorem Ipsum?</bold> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqu
                <br />
                <br />
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
                <br />
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </Typography>
              <br />
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{
                  color: "burlywood",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                What do we value?
              </Typography>

              <Box
                sx={{
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Quality
                  </Typography>
                  By prioritizing quality in every aspect of the design and
                  production process, the company ensures that its accessories
                  are durable, functional, and aesthetically pleasing, providing
                  customers with products they can trust and enjoy.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Creativity
                  </Typography>
                  Embracing innovation, originality, and creativity in the
                  design and development of accessories that stand out for their
                  uniqueness and distinctiveness. By fostering a culture of
                  creativity within the company, the business can offer a
                  diverse range of accessories that cater to different tastes
                  and preferences, setting itself apart in a competitive market
                  and continuously delighting customers with fresh and exciting
                  designs.
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "10px",
                  margin: "10px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#333",
                  }}
                >
                  <Typography variant="body1" style={{ fontWeight: "bold" }}>
                    Customer-Centricity
                  </Typography>
                  We place the customer at the heart of everything we do. We
                  prioritize building strong relationships, understanding
                  customer needs and preferences, and delivering exceptional
                  service at every touchpoint. We target a personalized and
                  rewarding experience for every customer, by fostering loyalty
                  and trust in the brand.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default About;
