import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Container, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ mt: 5 }}>
      <footer className="footer">
        <div className="container">
          <Container>
            <div className="row">
              <div className="col-md-3">
                <img
                  src="favicon.png"
                  alt="Logo"
                  width="70px"
                  className="logo"
                />
              </div>
              <div className="col-md-9">
                <div className="footer-links">
                  <div className="footer-section">
                    <ul className="list-unstyled list-inline quick-links">
                      <Stack flexDirection={{lg:'row', sm:'column'}} alignItems='center'>
                        <li className="list-inline-item">Home</li>
                        <li className="list-inline-item">About Us</li>
                        <li className="list-inline-item">Map</li>
                        <li className="list-inline-item">Blogs</li>
                        <li className="list-inline-item">Contact</li>
                        <li className="list-inline-item">Privacy </li>
                        <li className="list-inline-item">Terms of Use </li>
                      </Stack>
                    </ul>
                  </div>
                </div>
                <div className="footer-section">
                  {/* <p style={{ color: "#000000" }}>Phone: 5625841</p> */}
                  {/* <p style={{ color: "#000000" }}>Fax: 478178541568</p> */}
                  <Stack>
                    <Typography>CENTURY 21 MYRO REALTY</Typography>
                    <Typography>
                      Brokerage Independently Owned & Operated
                    </Typography>
                    <Typography sx={{ pt: 3 }}>3000 Hwy 7 Unit 201</Typography>
                    <Typography sx={{ pb: 3 }}>Markham, ON L3R 6E1</Typography>
                    <Typography>Phone: 647-277-6616</Typography>
                    <Typography>Fax: 416-386-0777</Typography>
                  </Stack>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </Box>
  );
}

export default Footer;
