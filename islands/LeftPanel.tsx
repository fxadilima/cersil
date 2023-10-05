//import { CloseButton } from "../components/SideMenu.tsx";
import {ComponentChildren} from 'preact';

interface Props {
    children: ComponentChildren;
}

export function LeftPanel({children}: Props) {
    return (
        <div class="w3-sidebar w3-bar-block w3-black w3-border w3-text-white w3-animate-left w3-collapse" 
            style="width:300px;" 
            id="leftMenu">
            <button onClick={() => {
                document.getElementById('leftMenu').style.display = 'none';
            }} class="w3-bar-item w3-button w3-large w3-hover-black w3-hide-large">Close &times;</button>
            {children}
        </div>
    );
}

export function MenuButton({children}: Props) {
    return (
        <div class="w3-black">
            <button onClick={() => {
                document.getElementById('leftMenu').style.display = 'block';
            }} class="w3-button w3-xlarge w3-hover-black w3-hide-large"><i class="fa fa-bars"></i></button>
            {children}
        </div>
    );
}
