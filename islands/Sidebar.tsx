// islands/Sidebar.tsx
import { FunctionComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

// Define props for your sidebar
interface SidebarProps {
  items: { label: string; href: string; }[];
  title?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ items, title = "Navigation" }) => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const updatePath = () => {
      // Get the path from the browser's window object
      const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');
      setCurrentPath(normalizedPath);
    };

    updatePath(); // Set initial path on load

    // Listen for URL changes
    window.addEventListener('popstate', updatePath); 
    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  }, []); // Run once on mount

  const BASE_PATH = "/"; 

  return (
    <>
      <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <a href={`${BASE_PATH}/`} title="Back to Wuxiapedia home">
          <img 
            src={`${BASE_PATH}/images/logo.png`} 
            alt="avatar" 
            title="Back to Wuxiapedia home."
            style="width:100%"
          />
        </a>
        {items.map(item => {
          const normalizedItemHref = item.href === BASE_PATH + '/' || item.href === '/' ? '/' : item.href.replace(/\/$/, '');
          // This is where the W3.CSS class toggling concept comes in:
          const isActive = normalizedItemHref === currentPath; 
          
          return (
            <a 
              key={item.href} 
              href={item.href} 
              // Dynamically apply 'w3-black' if active, otherwise 'w3-hover-black'
              class={`w3-bar-item w3-button w3-padding-large ${isActive ? "w3-black" : "w3-hover-black"}`}
            >
              {/* ... (content) ... */}
            </a>
          );
        })}
        </nav>
      <div class="w3-top w3-hide-large w3-hide-medium w3-black" id="myNavbar">
        <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          {items.map(item => {
            const normalizedItemHref = item.href === BASE_PATH + '/' || item.href === '/' ? '/' : item.href.replace(/\/$/, '');
            const isActive = normalizedItemHref === currentPath;

            if (item.label === "HOME" && item.href.startsWith("http")) {
                 return (
                    <a key={item.href} href={item.href} class="w3-bar-item w3-button" style="width:25% !important">
                      <i class="fa fa-home"></i> {item.label}
                    </a>
                );
            }

            return (
              <a 
                key={item.href} 
                href={item.href} 
                class={`w3-bar-item w3-button ${isActive ? "w3-black" : ""}`} 
                style="width:25% !important"
              >
                {item.label === "HOME" && <i class="fa fa-home"></i>} {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

/*
const Sidebar: FunctionComponent<SidebarProps> = ({ items, title = "Navigation" }) => {
  // State to hold the current URL pathname
  const [currentPath, setCurrentPath] = useState('');

  // Effect to update currentPath on mount and on URL changes
  useEffect(() => {
    // Function to update the path
    const updatePath = () => {
      // Get the path from the browser's window object
      // Normalize by removing trailing slashes for consistent comparison,
      // but keep '/' for the root.
      const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');
      setCurrentPath(normalizedPath);
    };

    // Set initial path
    updatePath(); 

    // Listen for pushState/popstate events (used by Fresh for client-side navigation)
    window.addEventListener('popstate', updatePath);
    // Fresh uses a custom 'beforeunload' or 'fresh:load' event or similar mechanisms
    // to handle internal navigation without full reloads.
    // A simple approach is to listen for clicks on links within the sidebar itself
    // or rely on browser's popstate for history navigation.
    // For more robust Fresh-specific client-side navigation updates, you might need
    // to observe the DOM or Fresh's internal signals if available.
    // However, `popstate` often catches most internal Fresh navigations.

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  const BASE_PATH = "/wuxia-pedia"; // Or "" if deployed at root
  // You might want to get this BASE_PATH dynamically or pass it as a prop
  // from Fresh's config if it's not fixed. For now, it's hardcoded as per your Jekyll example.

  return (
    <>
      <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <a href={`${BASE_PATH}/`} title="Back to Wuxiapedia home">
          <img 
            src={`${BASE_PATH}/assets/images/logo.png`} 
            alt="avatar" 
            title="Back to Wuxiapedia home."
            style="width:100%"
          />
        </a>
        {items.map(item => {
          const normalizedItemHref = item.href === BASE_PATH + '/' || item.href === '/' ? '/' : item.href.replace(/\/$/, '');
          const isActive = normalizedItemHref === currentPath;
          
          // Special handling for the absolute "HOME" link if it's external
          // This link is typically always "active" in the original Jekyll theme
          if (item.label === "HOME" && item.href.startsWith("http")) {
            return (
              <a key={item.href} href={item.href} class="w3-bar-item w3-button w3-padding-large w3-black">
                <i class="fa fa-home w3-xxlarge"></i>
                <p>{item.label}</p>
              </a>
            );
          }

          return (
            <a 
              key={item.href} 
              href={item.href} 
              class={`w3-bar-item w3-button w3-padding-large ${isActive ? "w3-black" : "w3-hover-black"}`}
            >
              {item.label === "HOME" && <i class="fa fa-home w3-xxlarge"></i>}
              {item.label === "ABOUT" && <i class="fa fa-user w3-xxlarge"></i>}
              {item.label === "PHOTOS" && <i class="fa fa-eye w3-xxlarge"></i>}
              {item.label === "CONTACT" && <i class="fa fa-envelope w3-xxlarge"></i>}
              <p>{item.label}</p>
            </a>
          );
        })}
      </nav>

      <div class="w3-top w3-hide-large w3-hide-medium w3-black" id="myNavbar">
        <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          {items.map(item => {
            const normalizedItemHref = item.href === BASE_PATH + '/' || item.href === '/' ? '/' : item.href.replace(/\/$/, '');
            const isActive = normalizedItemHref === currentPath;

            if (item.label === "HOME" && item.href.startsWith("http")) {
                 return (
                    <a key={item.href} href={item.href} class="w3-bar-item w3-button" style="width:25% !important">
                      <i class="fa fa-home"></i> {item.label}
                    </a>
                );
            }

            return (
              <a 
                key={item.href} 
                href={item.href} 
                class={`w3-bar-item w3-button ${isActive ? "w3-black" : ""}`} 
                style="width:25% !important"
              >
                {item.label === "HOME" && <i class="fa fa-home"></i>} {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
*/

