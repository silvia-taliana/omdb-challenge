import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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

function RangeSlider() {
    // getting styles
    const classes = useStyles();

    // setting state for range of years the user selects 
    const [value, setValue] = React.useState([1980, 2000]);

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
                <label className="sliderElement">1970</label>
                <Slider
                    min={1970}
                    max={2021}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    className="sliderElement"
                />
                <label className="sliderElement">2021</label>
            </div>
        </div>
    );
}

export default RangeSlider;