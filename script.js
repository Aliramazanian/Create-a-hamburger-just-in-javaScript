
// Insert HTML structure with backticks
document.body.innerHTML = `
  <div id="top-menu">
    <div id="hamburger-icon">&#9776;</div>
    <div id="dropdown-content" class="show-hide-menu">
      <a href="#">Home</a>
      <a href="#">Menu1</a>
      <a href="#">Menu2</a>
      <a href="#">Menu3</a>
      <a href="#">About Us</a>
    </div>
  </div>
`;

// Function to toggle dropdown visibility
function myFunction() {
 document.getElementById("dropdown-content").classList.toggle("show");
}

// Set up the click event listener for the hamburger icon
window.onload = () => {
 document.getElementById("hamburger-icon").onclick = function () {
  myFunction();
 };
};

// Apply styles to all <a> tags
let aTags = document.getElementsByTagName('a');
for (let a of aTags) {
 a.style.cssText = `
    text-decoration: none;
    display: block;
    padding: 12px 16px;
    color: black;
    background-color: white;
  `;
 a.onmouseover = () => a.style.backgroundColor = '#ddd';
 a.onmouseout = () => a.style.backgroundColor = 'white';
}

// Add basic CSS for dropdown functionality
const style = document.createElement('style');
style.textContent = `
  #dropdown-content {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  #dropdown-content.show {
    display: flex;
  }
  #hamburger-icon {
    cursor: pointer;
    font-size: 30px;
    padding: 10px;
  }
  #top-menu {
    position: relative;
  }
`;
document.head.appendChild(style);
