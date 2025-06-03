import { useState } from "react";

function TrafficLightSimmulator() {
    let redLight = true;
    let greenLight = true;
    let yellowLight = true;


     const trafficLight = [
        {color: 'red', text: 'RED'},
        {color: 'yellow', text: 'YELLOW'},
        {color: 'green', text: 'GREEN'},
    ];

    const [light, setLight] = useState(0);

    
     setInterval(() => {
        if(currentLight > 2) {
            setLight(0);
            currentLight = 0;
        } else {
            setLight(currentLight);
            currentLight++;
        }
    }, 1000);


    function changeColor1() {
        this.setState({ color1: 'red', color2: '', color3: '' });
    };

    function changeColor2() {
        this.setState({ color1: '', color2: 'yellow', color3: '' });
    };

    function changeColor3() {
        this.setState({ color1: '', color2: '', color3: 'green' });
    };


    setInterval(this.changeColor1.bind(this), 1000);
    setInterval(this.changeColor2.bind(this), 1000);
    setInterval(this.changeColor3.bind(this), 1000);

    // let color1;
    // let color2;
    // let color3;

    // redLight ? color1 = 'red': color1 = 'grey'
    // greenLight ? color2 = 'green': color2 = 'grey'
    // yellowLight ? color3 = 'yellow' : color3 = 'grey'




    return (
        <div className="outer-div">
            <div className="text">
                Traffic Light Simmulator
            </div>

            <div className="inner-div">
                <div className="circle1 circle" style={{backgroundColor: trafficLight[light].color}}></div>
                <div className="circle1 circle" style={{backgroundColor: trafficLight[light].color}}></div>
                <div className="circle1 circle" style={{backgroundColor: trafficLight[light].color}}></div>
            </div>
        </div>
    )
}




export default TrafficLightSimmulator;