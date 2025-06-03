import { useEffect, useState } from "react";

function TrafficLightSimulator() {
    const [light, setLight] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLight(prev => (prev + 1) % 3);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="outer-div">
            <div className="text">
                Traffic Light Simulator
            </div>

            <div className="inner-div">
                <div className="circle1 circle" style={{ backgroundColor: light === 0 ? "red" : "grey" }}></div>
                <div className="circle1 circle" style={{ backgroundColor: light === 1 ? "yellow" : "grey" }}></div>
                <div className="circle1 circle" style={{ backgroundColor: light === 2 ? "green" : "grey" }}></div>
            </div>
        </div>
    );
}

export default TrafficLightSimulator;
