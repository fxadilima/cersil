import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function MenuButton(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="w3-bar-item w3-button w3-large w3-hide-large"
    />
  );
}
