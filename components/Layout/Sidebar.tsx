// components/Sidebar.tsx
import { FunctionComponent } from 'preact';

interface SidebarProps {
  items: { label: string; href: string; }[];
  title?: string;
  currentPath: string; // New prop for the current URL pathname
}

const Sidebar: FunctionComponent = () => {
  // Define a base path for your project if it's deployed under a subpath (e.g., GitHub Pages)
  // For local development or root deployment, this can be an empty string or just '/'
  // const BASE_PATH = "/wuxia-pedia"; // Example for GitHub Pages
  const BASE_PATH = ""; // Assuming deployed at root or handling locally

  return (
    <>
      <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <img 
          src={`/images/logo.jpg`} 
          alt="avatar" 
          title="Logo website Cersil"
          style="width:100%"
        />
        <a href="/" 
          class="w3-bar-item w3-button w3-padding-large w3-black tablink">
          <i class="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a href={`/content/preludes/`} class="w3-bar-item w3-button w3-padding-large w3-hover-black tablink">
          <i class="fa fa-user w3-xxlarge"></i>
          <p>Preludes</p>
        </a>
        <a href="/content/yttlj/" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-eye w3-xxlarge"></i>
          <p>Book 1</p>
        </a>
        <a href="/content/plitwh/" class="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i class="fa fa-envelope w3-xxlarge"></i>
          <p>Book 2</p>
        </a>
      </nav>

      <div class="w3-top w3-hide-large w3-hide-medium w3-black" id="myNavbar">
        <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href={`${BASE_PATH}/`} class="w3-bar-item w3-button" style="width:25% !important">
            <i class="fa fa-home"></i> HOME
          </a>
          <a href={`${BASE_PATH}/about/`} class="w3-bar-item w3-button" style="width:25% !important">ABOUT</a>
          <a href="#photos" class="w3-bar-item w3-button" style="width:25% !important">PHOTOS</a>
          <a href="#contact" class="w3-bar-item w3-button" style="width:25% !important">CONTACT</a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

