import {
  Grid2,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  Button,
  FormControlLabel,
  Box,
  AccordionDetails,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import Slider from "react-slick";
import Slider from "@mui/material/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import asFeaturedBy from "./images/ASFEATUREDBY.png";
import cheddar from "./images/cheddar.png";
import cnbc from "./images/cnbc.png";
import fortune from "./images/fortune.png";
import bloom from "./images/bloom.png";
import appimg from "./images/appimage.png";
import visacards from "./images/visacard.png";
import calend from "./images/calendar.png";
import React from "react";
import card from "./images/card.png";
import yahoo from "./images/yahoo.png";
import bank from "./images/bank.png";
import security from "./images/security.png";
import dollar from "./images/dollor.png";
import logo from "./images/logo.png";
import playstoreapp from "./images/playstore.png";
import mobileframeapp from "./images/mobileframe.png";
import greencirclefront from "./images/greencircle.png";
import starapp from "./images/star.png";
import navpic from "./images/navapp.png";
import { GTAGS } from "./data/config";

export default function HomePage() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const testimonials = [
    {
      text: "To pay off my credit card debt, I’m using Bright Money App. It’s really easy to use and their customer service is excellent. They are helpful.",
      author: "Anmol Singh",
    },
    {
      text: "Bright Money is willing to invest their time and get you a financial plan. Increase your score and reduce your debt all in one app.",
      author: "Lance Nelson",
    },
    {
      text: "If you’re looking to get your score better - this is the app that will help and guide you. You’ll have a better score in a few months. Get it.",
      author: "Sergio Lopez",
    },
    {
      text: "I recommend the Bright App to everybody. It helped me cut down on my credit card debt, save for a car, and plan vacations. Next, we’re saving for a house.",
      author: "Todd Curry",
    },
    {
      text: "Thank you to Bright for helping me improve my credit and eliminate my debt. The customer service is super helpful. Appreciate the journey.",
      author: "Tom",
    },
  ];
  const logos = [
    { src: asFeaturedBy },
    { src: cheddar },
    { src: cnbc },
    { src: fortune },
    { src: bloom },
    { src: yahoo },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <Grid2
        item
        xs={2}
        sm={8}
        md={12}
        sx={{
          background: "linear-gradient(to bottom, #E3F1E7, #FEEFC7)",
          px: { xs: 2, md: 6 },
          py: 3,
        }}
      >
        <Paper
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "transparent",
            px: { xs: 2, md: 8 }, // Increased left & right padding
            py: 2, // Decreased top & bottom padding
            mb: 2, // Reduced bottom margin
            mx: "auto",
            marginInline: { xs: 2, md: 10 }, // Ensuring responsiveness
          }}
        >
          <Grid2
            item
            xs={2}
            sm={8}
            md={12}
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <a
              href="https://www.brightmoney.co/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.gtag?.("event", GTAGS.SUCCESSFUL_BRIGHTMONEY_LOGO)
              }
            >
              <img
                src={logo}
                alt="Bright Money"
                style={{
                  maxWidth: "100px",
                  height: "auto",
                  marginRight: "16px",
                }}
              />
            </a>
            <Grid2 container alignItems="center" gap={1}>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ color: "#787F88", mr: 1 }}
              >
                AVAILABLE ON APPSTORE AND PLAYSTORE
              </Typography>
              <a
                href="https://apps.apple.com/us/app/bright-ai-debt-manager/id1511043796"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  window.gtag?.("event", GTAGS.SUCCESSFUL_NAVPIC_CLICK)
                }
              >
                <img
                  src={navpic}
                  alt="Apple Store"
                  style={{ maxWidth: "40px", height: "auto" }}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.brightcapital.app&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  window.gtag?.("event", GTAGS.SUCCESSFUL_PLAYSTORE_CLICK)
                }
              >
                <img
                  src={playstoreapp}
                  alt="Play Store"
                  style={{
                    maxWidth: "40px",
                    height: "auto",
                    marginLeft: "8px",
                  }}
                />
              </a>
            </Grid2>
          </Grid2>
        </Paper>

        <Typography
          variant="h1"
          align="center"
          color="black"
          fontWeight="bold"
          mt={8}
        >
          Pay off Credit Cards
        </Typography>
        <Typography variant="h1" align="center" color="black" mb={4}>
          with a single monthly payment
        </Typography>

        <Grid2
          mb={4}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          marginInline={36}
        >
          <FormControlLabel
            sx={{ color: "black" }}
            control={
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: "green",
                  "&.Mui-checked": { color: "green" },
                  "& .MuiSvgIcon-root": {
                    border: "2px solid green",
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label={
              <Typography variant="body1" color="black">
                Credit line of up to $8,000<sup>1</sup>
              </Typography>
            }
          />
          <FormControlLabel
            sx={{ color: "black" }}
            control={
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: "green",
                  "&.Mui-checked": { color: "green" },
                  "& .MuiSvgIcon-root": {
                    border: "2px solid green",
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label={
              <Typography variant="body1" color="black">
                No impact on the score to check rates<sup>2</sup>
              </Typography>
            }
          />
          <FormControlLabel
            sx={{ color: "black" }}
            control={
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: "green",
                  "&.Mui-checked": { color: "green" },
                  "& .MuiSvgIcon-root": {
                    border: "2px solid green",
                    borderRadius: "4px",
                  },
                }}
              />
            }
            label="Sign up in 2 mins"
          />
        </Grid2>

        <Grid2
          item
          xs={6}
          sm={8}
          md={12}
          p={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              position: "relative",
              width: "1000px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={mobileframeapp}
              width="100%"
              style={{ position: "relative", zIndex: 1 }}
            />

            <img
              src={greencirclefront}
              style={{
                position: "absolute",
                top: "50%",
                right: "-40%",
                transform: "translate(-50%, -50%)",
                width: "400px",
                zIndex: 2,
              }}
            />
          </Box>
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        p={8}
        display="flex"
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="white"
      >
        <Typography
          variant="h3"
          display="flex"
          textAlign="center"
          color="black"
          fontWeight="bold"
          mb={8}
          justifyContent="center"
          alignItems="center"
        >
          Why pay off cards{" "}
          <span style={{ fontWeight: "normal" }}>&nbsp;with Bright?</span>
        </Typography>

        <Box
          sx={{
            width: "100%",
            border: "2.67px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(213, 215, 219, 0) 5.73%, #BAE8CB 84.9%)", // Adjust gradient direction to 90deg
            borderImageSlice: 1,
            my: 4, // Adds margin to the top and bottom of the line
          }}
        ></Box>

        {/* FLEX CONTAINER TO KEEP ITEMS IN A SINGLE ROW */}
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex", flexWrap: "nowrap", gap: 4 }}
        >
          {/* First Item */}
          <Grid2 item display="flex" alignItems="center" sx={{ width: "auto" }}>
            <img
              src={bank}
              alt="Bank"
              style={{ width: 100, height: 80, marginRight: 16 }}
            />
            <Typography variant="h6" color="gray">
              Accepts all major bank cards
            </Typography>
          </Grid2>

          {/* Second Item */}
          <Grid2 item display="flex" alignItems="center" sx={{ width: "auto" }}>
            <img
              src={dollar}
              alt="Money"
              style={{ width: 100, height: 80, marginRight: 16 }}
            />
            <Typography variant="h6" color="gray">
              Affordable monthly payments
            </Typography>
          </Grid2>

          {/* Third Item */}
          <Grid2 item display="flex" alignItems="center" sx={{ width: "auto" }}>
            <img
              src={security}
              alt="Security"
              style={{ width: 100, height: 80, marginRight: 16 }}
            />
            <Typography variant="h6" color="gray">
              100% data security - 256-bit encryption
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        justifyContent="center"
        alignItems="center"
        display="flex"
        backgroundColor="#F4F5F8"
        py={4}
      >
        <Grid2
          container
          justifyContent="center"
          sx={{ width: "100%", overflow: "hidden" }}
        >
          <Grid2
            item
            xs={6}
            sm={8}
            md={12}
            sx={{ maxWidth: "1200px", width: "100%" }}
          >
            <div style={{ width: "100%", margin: "auto", overflow: "hidden" }}>
              <Slider {...settings}>
                {logos.map((logo, index) => (
                  <Grid2
                    key={index}
                    sx={{
                      backgroundColor: "#F4F5F8",
                      height: "70px",
                      padding: 2,
                      textAlign: "center",
                      maxWidth: "300px",
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={`Logo ${index + 1}`}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </Grid2>
                ))}
              </Slider>
            </div>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        sx={{ backgroundColor: "#F6FEF7", color: "black" }}
        p={6}
      >
        <Typography
          variant="h3"
          display="flex"
          textAlign="center"
          color="black"
          fontWeight="bold"
          mb={4}
          justifyContent="center"
          alignItems="center"
        >
          How to pay off cards{" "}
          <span style={{ fontWeight: "normal" }}>&nbsp;with Bright?</span>
        </Typography>
        <Box
          sx={{
            width: "100%",
            border: "2.67px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(213, 215, 219, 0) 5.73%, #BAE8CB 84.9%)", // Adjust gradient direction to 90deg
            borderImageSlice: 1,
            my: 4, // Adds margin to the top and bottom of the line
          }}
        ></Box>
        <Grid2
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#F7FAF7",
            padding: "40px 80px",
            borderRadius: "20px",
          }}
        >
          <Grid2
            item
            xs={6}
            sm={8}
            md={5}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={appimg}
              alt="App Screenshot"
              style={{
                width: "90%",
                maxWidth: "350px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid2>
          <Grid2
            item
            xs={6}
            sm={8}
            md={7}
            sx={{
              textAlign: { xs: "center", md: "left" },
              paddingLeft: { md: "48px" },
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#17C95F">
              01
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="black"
              sx={{ marginBottom: "10px" }}
            >
              Download the App and check the rates.
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              sx={{ marginBottom: "20px" }}
            >
              Get the best rates and credit limit with a quick soft credit
              inquiry.
            </Typography>

            <Button
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ color: "#17C95F" }} />}
              sx={{
                fontWeight: "bold",
                color: "black",
                textTransform: "none",
                fontSize: "16px",
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() =>
                window.gtag?.("event", GTAGS.SUCCESSFUL_APPLYNOW_CLICK)
              }
            >
              Apply Now
            </Button>
          </Grid2>

          <Box
            sx={{
              width: "100%",
              border: "2.67px solid",
              borderImageSource:
                "linear-gradient(270deg, rgba(213, 215, 219, 0) 5.73%, #BAE8CB 84.9%)",
              borderImageSlice: 1,
              my: 4, // Adds margin to the top and bottom of the line
            }}
          ></Box>
        </Grid2>

        <Grid2
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#F7FAF7",
            padding: "40px 80px",
            borderRadius: "20px",
          }}
        >
          <Grid2
            item
            xs={6}
            md={7}
            sm={8}
            sx={{
              textAlign: { xs: "center", md: "left" },
              paddingRight: { md: "48px" }, // Space between text & image
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#17C95F">
              02
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="black"
              sx={{ marginBottom: "10px" }}
            >
              Get the credit line and choose which cards to pay.
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              sx={{ marginBottom: "20px" }}
            >
              Refinance multiple cards up to your credit limit; pay down and
              choose more.
            </Typography>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ color: "#17C95F" }} />}
              sx={{
                fontWeight: "bold",
                color: "black",
                textTransform: "none",
                fontSize: "16px",
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() =>
                window.gtag?.("event", GTAGS.SUCCESSFUL_APPLYNOW_CLICK)
              }
            >
              Apply Now
            </Button>
          </Grid2>

          {/* Right Side - Image Section */}
          <Grid2
            item
            xs={6}
            md={5}
            sm={8}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={visacards}
              alt="Visa Cards"
              style={{
                width: "90%", // Image size
                maxWidth: "350px", // Max width increased
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid2>

          <Box
            sx={{
              width: "100%",
              border: "2.67px solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(213, 215, 219, 0) 5.73%, #BAE8CB 84.9%)", // Adjust gradient direction to 90deg
              borderImageSlice: 1,
              my: 4, // Adds margin to the top and bottom of the line
            }}
          ></Box>
        </Grid2>

        <Grid2
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "#F7FAF7",
            padding: "40px 80px",
            borderRadius: "20px",
          }}
        >
          <Grid2
            item
            xs={6}
            md={5}
            sm={8}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={calend}
              alt="App Screenshot"
              style={{
                width: "90%",
                maxWidth: "350px",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid2>

          <Grid2
            item
            xs={6}
            md={7}
            sm={8}
            sx={{
              textAlign: { xs: "center", md: "left" },
              paddingLeft: { md: "48px" },
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#17C95F">
              03
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="black"
              sx={{ marginBottom: "10px" }}
            >
              Make on-time payments and defeat debt.
            </Typography>
            <Typography
              variant="body1"
              color="#555"
              sx={{ marginBottom: "20px" }}
            >
              Choose how much to pay each month above your monthly minimum
              payment.
            </Typography>
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon sx={{ color: "#17C95F" }} />}
              sx={{
                fontWeight: "bold",
                color: "black",
                textTransform: "none",
                fontSize: "16px",
                "&:hover": { backgroundColor: "transparent" },
              }}
              onClick={() =>
                window.gtag?.("event", GTAGS.SUCCESSFUL_APPLYNOW_CLICK)
              }
            >
              Apply Now
            </Button>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        sx={{
          backgroundColor: "white",
          color: "black",
          paddingInline: 18,
          paddingBlock: 16,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight={"bold"}
          color="black"
          mb={2}
        >
          Changing lives every day.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          fontWeight={"bold"}
          color="black"
          mb={8}
          sx={{ fontSize: "1.2rem" }}
        >
          See how Bright users<sup>3</sup> reached financial well-being.
        </Typography>

        <Grid2
          container
          justifyContent="center"
          sx={{ width: "100%", overflow: "hidden" }}
        >
          <Grid2
            container
            justifyContent="center"
            sx={{ width: "100%", overflow: "hidden" }}
          >
            <Grid2
              item
              xs={6}
              sm={8}
              md={12}
              sx={{ maxWidth: "1200px", width: "100%" }}
            >
              <div
                style={{ width: "100%", margin: "auto", overflow: "hidden" }}
              >
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <Grid2
                      key={index}
                      sx={{
                        backgroundColor: "#F4F5F8",
                        height: "auto",
                        padding: 2,
                        textAlign: "center",
                        maxWidth: "300px",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: "10px", // Rounded corners for each individual testimonial box
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow for better visual effect
                        overflow: "hidden",
                      }}
                    >
                      <Grid2 display="flex" justifyContent="center" mb={2}>
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={starapp}
                            alt="star"
                            style={{ margin: "2px" }}
                          />
                        ))}
                      </Grid2>

                      <Typography
                        variant="body2"
                        sx={{
                          width: "200px", // Ensuring a fixed width
                          margin: "auto",
                          overflow: "hidden", // Hide overflow content
                          display: "inline-block",
                          wordWrap: "break-word", // Allows the text to break and wrap
                          textAlign: "center", // Align text to center within the box
                        }}
                      >
                        {testimonial.text}
                        <br />
                        <strong
                          style={{
                            display: "block",
                            wordWrap: "break-word", // Ensure the name stays within the box
                          }}
                        >
                          {testimonial.author}
                        </strong>
                      </Typography>
                    </Grid2>
                  ))}
                </Slider>
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        sx={{
          backgroundColor: "white",
          color: "black",
          paddingInline: 16,
          paddingBlock: 10,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight={"bold"}
          color="black"
          mb={8}
        >
          Frequently asked{" "}
          <span style={{ fontWeight: "normal" }}>questions</span>
        </Typography>

        <Accordion sx={{ borderTop: "1px solid #ccc", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              Can I pay off or close my account anytime?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderTop: "1px solid #ccc", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              {" "}
              Do I need to pay interest fees?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderTop: "1px solid #ccc", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              {" "}
              Is there a hard pull on the credit report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ borderTop: "1px solid #ccc", boxShadow: "none" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">
              {" "}
              Do you report to Equifax and TransUnion?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Grid2>

      <Grid2
        container
        display={"flex"}
        py={0} // Reduced vertical padding (top & bottom)
        px={0.2} // Keeps horizontal padding the same
        justifyContent={"center"}
        gap={48}
        alignItems={"center"}
        sx={{
          background:
            "linear-gradient(101.18deg, #E5F1E3 0.62%, #BAE8CB 69.56%)",
        }}
      >
        <Grid2
          item
          xs={6}
          sm={8}
          md={12}
          alignItems={"center"}
          sx={{ mt: 0, mb: 0 }}
        >
          <Typography variant="h4" fontWeight={"bold"} color="black">
            Crush Debt today <sup>1</sup>
          </Typography>
          <Typography variant="h4" color="black">
            with Bright
          </Typography>
        </Grid2>

        <Grid2
          item
          xs={6}
          sm={8}
          md={12}
          sx={{ backgroundColor: "#BAE8CB", mt: 0, mb: 0 }}
        >
          <img
            src={card}
            alt="Card"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid2>
      </Grid2>

      <Grid2
        item
        xs={6}
        sm={8}
        md={12}
        sx={{
          backgroundColor: "white",
          color: "black",
          paddingInline: 16,
          paddingBlock: 10,
        }}
      >
        <Typography variant="body2">2024 Bright Capital Inc.</Typography>
        <Typography variant="body2">
          Revolving lines of credit are made by CBW Bank, Member FDIC, and
          Bright Capital Inc., NMLS (2410428), subject to state residency.
          Personal loans are made by our referral partners independent of
          Bright. Deposit accounts are provided by Evolve Bank & Trust or CBW
          Bank, Members FDIC. Bright is a financial technology company and
          non-depository lender, not a bank.
        </Typography>
        <Typography variant="body2">
          <ol>
            <li>
              Revolving line of credit ranging from $500-$8,000 to help repay
              credit cards. Variable APR range from 9% –29.99%. Subject to
              Credit Approval. Final terms may vary depending on credit review,
              not all applicants will qualify for full loan amount. Not all
              applicants qualify for the lowest rate. Bright may also offer
              Personal Loans made by our referral partners. Bright Credit is
              line of credit and not a credit or debit card.
            </li>
            <li>
              When you check your rates for Bright Credit we initiate a “soft
              pull” of your credit. This will NOT impact your credit score. If
              you’re approved and activate Bright Credit we may do a hard
              inquiry which may affect you credit score.
            </li>
            <li>
              Bright uses standard industry practices to determine our customer
              satisfaction score. It's a metric used in all kinds of businesses
              to measure customer service and product quality. Businesses
              calculate their score by taking the number of satisfied customers
              (those who rated them 4 or higher) and dividing it by the total
              number of responses.{" "}
            </li>
          </ol>
          <Typography variant="body2">
            The product images shown are for illustration purposes only.
          </Typography>
        </Typography>
      </Grid2>
    </>
  );
}
