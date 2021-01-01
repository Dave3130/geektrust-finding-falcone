import spacePod from "../assests/space-pod.svg";
import spaceRocket from "../assests/space-rocket.svg";
import spaceShip from "../assests/space-ship.svg";
import spaceShuttle from "../assests/space-shuttle.svg";

export default function vehicleImg(src) {
    if (src.toLowerCase() === "space pod") {
        return <img src={spacePod} alt={src} className="vehicleLogo" id="#vehicle0" />;
    } else if (src.toLowerCase() === "space rocket") {
        return <img src={spaceRocket} alt={src} className="vehicleLogo" id="#vehicle1" />;
    } else if (src.toLowerCase() === "space shuttle") {
        return <img src={spaceShuttle} alt={src} className="vehicleLogo" id="#vehicle2" />;
    } else if (src.toLowerCase() === "space ship") {
        return <img src={spaceShip} alt={src} className="vehicleLogo" id="#vehicle3" />;
    }
}
