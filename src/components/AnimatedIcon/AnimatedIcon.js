import { Player } from "@lordicon/react";
import React, {useRef} from "react";
import './AnimatedIcon.css';

const AnimatedIcon = ({class_name="contact_icon", icon, link='', icon_size=30}) => {
    
    const playerRef = useRef(null);

    const playIcon = () => {
        playerRef.current.playFromBeginning();
    }

    return (
        <a href={link} onMouseEnter={playIcon} className={class_name}>
            <Player ref={playerRef} size={icon_size} icon={icon}/>
        </a>
    )
}

export default AnimatedIcon;