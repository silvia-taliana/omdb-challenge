import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { MovieContext } from "../MovieContext";

// function to set width of slider
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

// returning the year the user chooses on the slider 
function valuetext(value) {
    return `${value}`;
}

function RangeSlider(props) {
    // getting styles
    const classes = useStyles();

    // setting state for range of years the user selects 
    const [value, setValue] = React.useState([1980, 2000]);

    // using global state
    const [search, setSearch] = useContext(MovieContext);

    // handling the change of the slider values 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} id="yearSlider">
            <Typography id="range-slider" gutterBottom>
                YEAR
      </Typography>
            <div id="sliderContainer">
                <label className="sliderElement">{value[0]}</label>
                <Slider
                    min={1900}
                    max={2021}
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    className="sliderElement"
                    name="yearrange"
                />
                <label className="sliderElement">{value[1]}</label>
            </div>
        </div>
    );
}

export default RangeSlider;