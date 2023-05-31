import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/home.css";


const Home = () => {
  return (
    <div>
     
      <Typography sx={{ margin:"5%" }} variant="h3" align="center" className="head">
      JOB$wipe <br/>
      Unlock Your Dream Career 
      </Typography>
      <div className="btn-display">
        <div>
          <Button variant="outlined">
            <Link to="/employer/dashboard" className="links">
              Hire talent
            </Link>
            </Button>
            </div>
            <div>
          <Button variant="outlined">
            <Link to="/employee/feed" className="links">
              Get Job Now
            </Link>
            </Button>
            </div>
      </div>
    </div>
  );
};

export default Home;
