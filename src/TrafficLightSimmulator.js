import { useEffect, useState } from "react";

function TrafficLightSimulator() {
    const [light, setLight] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLight(prev => (prev + 1) % 3);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="outer-div">
            <div className="text">
                Traffic Light Simulator
            </div>

            <div className="inner-div">
                <div className="circle1 circle" style={{ backgroundColor: light === 0 ? "red" : "grey", boxShadow: light === 0 ?  `0 0 20px red` :  "0 0 0px, grey"}}></div>
                <div className="circle1 circle" style={{ backgroundColor: light === 1 ? "yellow" : "grey", boxShadow: light === 1 ?  `0 0 20px yellow` :  "0 0 0px, grey"}}></div>
                <div className="circle1 circle" style={{ backgroundColor: light === 2 ? "green" : "grey", boxShadow: light === 2 ?  `0 0 20px green` :  "0 0 0px, grey"}}></div>
            </div>
        </div>
    );
}

export default TrafficLightSimulator;
