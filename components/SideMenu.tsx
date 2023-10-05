import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function CloseButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button 
        disabled={!IS_BROWSER || props.disabled}
        class="w3-bar-item w3-button w3-hover-none w3-hide-large">Close &times;
        </button>
    );
}
