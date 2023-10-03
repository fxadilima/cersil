import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="w3-content w3-padding-32">
        <div class="w3-panel w3-center">
          <img
            src="/logo.svg"
            width="128"
            height="128"
            alt="the Fresh logo: a sliced lemon dripping with juice"
          />
          <h1>404 - Page not found</h1>
          <p>
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="w3-btn w3-round w3-border">Go back home</a>
        </div>
      </div>
    </>
  );
}
