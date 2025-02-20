import {
    Grid,
    Typography,
    Autocomplete,
    TextField,
    Breadcrumbs,
  } from "@mui/material";
  
  import Filter from "./Filter";
  import NavigateNextIcon from "@mui/icons-material/NavigateNext";
  
  import HotelList from "./HotelList";
  import { useParams } from "react-router-dom";
  
  import React from "react";
  
  import { sortData } from "./constants";
  
  function BookingPage() {
    const { location = "Delhi" } = useParams();
  
    const [filteredTags, setFilteredTags] = React.useState([]);
    const [selectedSort, setSelectedSort] = React.useState("Ratings");
  
    const breadcrumbs = [
      <Grid underline="hover" key="1" color="inherit" href="/" onClick={() => {}}>
        Location
      </Grid>,
      <Grid
        underline="hover"
        key="2"
        color="inherit"
        href="/material-ui/getting-started/installation/"
        onClick={() => {}}
      >
        {location} City
      </Grid>,
      <Typography key="3" color="text.primary">
        {location}
      </Typography>,
    ];
  
    return (
      <Grid
        container
        style={{
          margin: "auto",
          width: 1475,
        }}
        spacing={4}
      >
        <Grid item lg={2}>
          <Filter filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
        </Grid>
  
        <Grid item lg={9}>
          <Grid item>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography variant="h3" fontSize={30}>
                  Best Restaurants Near Me in {location}
                </Typography>
              </Grid>
  
              <Grid item>
                <Grid container alignItems={"center"} spacing={2}>
                  <Grid item>
                    {/* <Typography variant="h5" fontSize={20}>
                      Sort
                    </Typography> */}
                  </Grid>
  
                  <Grid item>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={sortData}
                      sx={{ width: 150 }}
                      onChange={(event) => {
                        setSelectedSort(event.target.innerHTML);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} label="Sort" />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item paddingTop={4}>
            <HotelList
              location={location}
              filteredTags={filteredTags}
              selectedSort={selectedSort}
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
  
  export default BookingPage;