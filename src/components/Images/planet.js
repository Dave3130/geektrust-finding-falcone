import donlon from "../assests/donlon.svg";
import enchai from "../assests/enchai.svg";
import jebing from "../assests/jebing.svg";
import sapir from "../assests/sapir.svg";
import lerbin from "../assests/lerbin.svg";
import pingasor from "../assests/pingasor.svg";

export default function planetImg(src) {
    if (src.toLowerCase() === "donlon") {
        return <img src={donlon} alt={src} className="planetLogo" />;
    } else if (src.toLowerCase() === "enchai") {
        return <img src={enchai} alt={src} className="planetLogo" />;
    } else if (src.toLowerCase() === "jebing") {
        return <img src={jebing} alt={src} className="planetLogo" />;
    } else if (src.toLowerCase() === "lerbin") {
        return <img src={lerbin} alt={src} className="planetLogo" />;
    } else if (src.toLowerCase() === "sapir") {
        return <img src={sapir} alt={src} className="planetLogo" />;
    } else if (src.toLowerCase() === "pingasor") {
        return <img src={pingasor} alt={src} className="planetLogo" />;
    }
}
