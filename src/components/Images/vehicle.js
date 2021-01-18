import spacePod from "../assests/space-pod.svg";
import spaceRocket from "../assests/space-rocket.svg";
import spaceShip from "../assests/space-ship.svg";
import spaceShuttle from "../assests/space-shuttle.svg";

const img = {
    width: "7.5rem"
}
export default function vehicleImg(src) {
    if (src.toLowerCase() === "space pod") {
        return <img src={spacePod} alt={src} style={img} />;
    } else if (src.toLowerCase() === "space rocket") {
        return <img src={spaceRocket} alt={src} style={img} />;
    } else if (src.toLowerCase() === "space shuttle") {
        return <img src={spaceShuttle} alt={src} style={img} />;
    } else if (src.toLowerCase() === "space ship") {
        return <img src={spaceShip} alt={src} style={img} />;
    }
}
