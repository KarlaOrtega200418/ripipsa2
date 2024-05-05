/************ Custom Font ************/
@font-face {
	font-family: Centra;
	src: url('./assets/fonts/CentraNo2-Bold.ttf');
	font-weight: 700;
}
@font-face {
	font-family: Centra;
	src: url('./assets/fonts/CentraNo2-Medium.ttf');
	font-weight: 500;
}
@font-face {
	font-family: Centra;
	src: url('./assets/fonts/CentraNo2-Book.ttf');
	font-weight: 400;
}


/************ Default Css ************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}

body {
  font-weight: 400;
  overflow-x: hidden;
  position: relative;
  background-color: #121212 !important;
  color: #fff !important;
  font-family: 'Centra', sans-serif !important;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

p, a, li, button, ul {
  margin: 0;
  padding: 0;
  line-height: normal;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}

button {
  border: 0;
  background-color: transparent;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

@media (min-width:1600px) {
  .container {
      max-width: 100%;
      padding: 0 150px; /* adjust or ensure it's correct */
  }
}

p.success {
	color: green;
}

p.danger {
	color: red;
}

/************ Navbar Css ************/
nav.navbar {
  padding: 0.05px 18px 0; /*0 px at top 18 bottom. 0 on sides*/
  position: fixed; /*This property positions the navbar relative to the browser window. The element will stay in the same place even if the page is scrolled.*/
  width: 100%;
  top: 0; /*specifies distance between the top edge of the navbar and the top edge of the viewport. 0, the navbar will be positioned flush against the top of the viewport.*/
  z-index: 9999; /*This property sets the stacking order of the navbar. Elements with a higher z-index are displayed in front of elements with a lower z-index. A value of 9999 ensures that the navbar will be displayed on top of most other elements on the page.*/
  transition:  0.32s ease-in-out; /*how transitions will happen*/
}
nav.navbar.scrolled {
  padding: 0px 0;
  background-color: #121212;
}
nav.navbar a.navbar-brand {
    width: 25%; /*tamaño logo Ripipsa*/
}
/*Estilo de Registrar Proyecto*/
nav.navbar .navbar-nav .nav-link.navbar-link {
  font-weight: 400;
  color: #fff !important;
  letter-spacing: 0.8px;
  padding: 0 25px;
  font-size: 18px;
  opacity: 0.75;
}

/*When I hover over Registrar Proyecto, it becomes white. Opacity 1*/
nav.navbar .navbar-nav a.nav-link.navbar-link:hover,
nav.navbar .navbar-nav a.nav-link.navbar-link.active {
    opacity: 1;
}

/* Targeting <span> elements with the class "navbar-text" */
span.navbar-text {
  /* Change the display behavior to flex */
  display: flex;
  /* Align the flex items (content) along the cross axis (vertical) */
  align-items: center;
}

/*Log Out Button*/

.navbar-text button {
  font-weight: 700;
  color: #fff;
  border: 1px solid #fff;
  padding: 12px 30px;
  font-size: 18px;
  margin-left: 18px; /*distance from Registrar Proyecto */
	position: relative;
	background-color: transparent;
	transition: 0.3s ease-in-out;
}

.navbar-text button span {
  z-index: 1;
}
.navbar-text button::before {
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}
.navbar-text button:hover {
  color: #121212;
}
.navbar-text button:hover::before {
	content: "";
	width: 100%;
	height: 100%;
	position: absolute;
}
nav.navbar .navbar-toggler:active,
nav.navbar .navbar-toggler:focus {
	outline: none;
    box-shadow: none;
}
nav.navbar .navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  border-bottom: 2px solid #fff;
  transition: all 300ms linear;
  top: -2px;
}
nav.navbar .navbar-toggler-icon:focus {
	border-bottom: 2px solid #fff;
}
nav.navbar .navbar-toggler-icon:after,
nav.navbar .navbar-toggler-icon:before {
	width: 24px;
	position: absolute;
	height: 2px;
	background-color: #fff;
	top: 0;
	left: 0;
	content: '';
	z-index: 2;
	transition: all 300ms linear;
}
nav.navbar .navbar-toggler-icon:after {
	top: 8px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
	transform: rotate(45deg);
	background-color: #fff;
	height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
	transform: translateY(8px) rotate(-45deg);
	background-color: #fff;
	height: 2px;
}
nav.navbar .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
	border-color: transparent;
}

/************ Projects Css ************/

/*General Proyectos Seccion*/
.Project {
  background-color: black;  /* Light grey background */
  padding: 20px;
  margin-top: 90px;
}

/*El header proyectos */
.Project h2 {
	font-size: 45px;
	font-weight: 700;
  text-align: center;
}

/*Estilo del parrafo. Los Proyectos Disponibles para tu usuario son: */
.Project p {
  color: #B8B8B8;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
}

/*Las pills: */
.Project .nav.nav-pills {
  display: flex;                /* Establishes the container as a flexbox container, enabling the use of Flexbox properties for layout management */
  flex-direction: row;          /* Aligns the child elements (flex items) horizontally in a row */
  flex: 1;                      /* Allows the flex container to expand to fill the space of its flex container if necessary */
  width: 70%;                  /* Sets the width of the navigation pills container to fill 70% of its parent container's width */
  margin: 0 auto;               /* Centers the navigation pills container horizontally within its parent container */
  padding: 1.9px;                /* Adds padding inside the navigation pills container, creating space around the content inside */
  border: none;                 /* Removes all borders from the navigation pills container */
  border-radius: 50px;          /* Applies rounded corners to the navigation pills container with a radius of 50px */
  overflow: hidden;             /* Clips any child elements or content that overflow the bounds of the navigation pills container */
  justify-content: space-evenly;/* Distributes the space between the children (flex items) evenly within the navigation pills container */
  align-items: center;          /* Vertically centers the child elements (flex items) within the navigation pills container */
  background-color: rgba(255, 255, 255, 0.1); /* Sets a semi-transparent white background color to the navigation pills container */
}

/*  This specific rule sets the width of each .nav-item to exactly one-third (or approximately 33.33333%) of its parent container's width. */

.Project .nav.nav-pills .nav-item {
  width: 33.33333%;
}

/*Aparentemente esto solo cambia el color del texto a blanco*/

.Project .nav.nav-pills .nav-link {
  background-color: transparent; /* Makes the background of the links transparent, showing whatever is behind them */
  flex-grow: 1; /* Ensures each link can grow to fill the space */
  padding: 8px 0; /* Adds vertical padding of 17px to the top and bottom, but no padding on the sides*/ 
  color: #fff; /* Sets the text color to white, ensuring it stands out against darker backgrounds*/ 
  font-size: 20px; /* Sets the size of the text within the links to 17 pixels for readability */
  letter-spacing: 0.8px; /* Increases the space between characters by 0.8 pixels, enhancing text clarity */
  font-weight: 500; /* Applies a medium font weight, making the text neither too bold nor too thin */
  
  position: relative; /* Positions the link relative to its normal position, allowing it to be adjusted with top/right/bottom/left */

  text-align: center; /* Centers the text horizontally within the link */
  display: flex; /* Makes it a flex container */
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */

  transition: 0.3s ease-in-out; /* Adds a smooth transition effect for changes in styles like color, lasting 0.3 seconds */
  z-index: 0; /* Sets the stack order of the link, placing it at the base level among other elements */
}

/*Esto hace la diferencia cuando uno se posiciona sobre el tab. Habla de lo azul*/
.Project .nav.nav-pills .nav-link::before {
  content: ""; /* Required to generate the pseudo-element, even if it's empty */
  position: absolute; /* Positions the pseudo-element absolutely relative to the nearest positioned (relative, absolute, or fixed) ancestor */
  width: 0; /* Initially sets the width of the pseudo-element to 0, useful for animations where this value changes */
  height: 100%; /* Sets the height to match 100% of the parent element's height, filling it vertically*/ 
  background: linear-gradient(90.21deg, #160ccb -5.91%, #5cd1ff 111.58%); /* Applies a linear gradient background, starting and ending beyond the typical 0% to 100% range for extended coverage */
  top: 0; /* Aligns the top edge of the pseudo-element with the top of the parent */
  left: 0; /* Aligns the left edge of the pseudo-element with the left of the parent */
  z-index: -1; /* Places the pseudo-element behind its parent, allowing content on the parent to be visible and interactable. Si esta cosa tiene un valor mayor, las letras blancas ya no se ven */
  transition: width 0.3s ease-in-out, border-radius 0.3s ease-in-out; /**/
  text-align: center; /* Centers the text horizontally within the pseudo-element (not typically necessary unless there's text or inline content)*/ 
  

}

.nav-link#projects-tabs-tab-first {
  border: 1px solid #FFFFFF; /* Adds a white border around each tab */
  border-radius: 55px 0px 0px 55px;
}

.nav-link#projects-tabs-tab-first::before {
  border-radius: 55px 0px 0px 55px;
}

.nav-link#projects-tabs-tab-second {
  border: 1px solid #FFFFFF; /* Adds a white border around each tab */
  border-radius: 0;
}

.nav-link#projects-tabs-tab-second::before {
  border-radius: 0;
}

.nav-link#projects-tabs-tab-third {
  border: 1px solid #FFFFFF; /* Adds a white border around each tab */
  border-radius: 0 55px 55px 0;
}

.nav-link#projects-tabs-tab-third::before {
  border-radius: 0 55px 55px 0;
}

.Project .nav.nav-pills .nav-link.active::before {
    /*Es la extension del cuadro azul. En sí lo que tiene el text es nav-link*/

  width: 100% !important;
}


/*cuadro de proyecto*/
.proj-imgbx {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Aligns content evenly*/
  align-items: center; /* Centers content horizontally. Me puso el texto en el centro. nuevo */
  height: 275px; /* Fixed height, adjust as needed */
  position: relative; /* Necessary if you use position:absolute on child elements */
  border-radius: 30px; /* Rounded corners */
  overflow: hidden; /* Clips content that goes outside the bounds of the box */
  margin: 15px auto; /* Ensures margin is applied uniformly around the card */
}

.proj-imgbx img {
  display: flex;
  flex-direction: column;
  width: 100%; /* Ensure the image covers the width */
  height: 700px; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the area without distorting the image */
}

/* Adjustments for larger screens */
@media (min-width: 1200px) { /* Targets screens wider than 1200px, typically desktops */
  .proj-imgbx {
    height: 300px; /* Slightly larger height might be more suitable for larger screens */
  }
}

/*cuadro azul*/
.proj-imgbx::before {
  content: "";   /* Inserting empty content before the element. Needed when using ::after and ::before */
  background: linear-gradient(90.21deg, #160ccb -5.91%, #5cd1ff 111.58%);   /* Background. It starts from top left corner (-5.91%) and ends at bttom right corner (111.5*/
  /*  background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);   /* Background. It starts from top left corner (-5.91%) and ends at bttom right corner (111.5*/  
  opacity: 0.85; /* Blue square is Slightly transparent */  
  position: absolute; /* Positioned absolutely within its containing element. Relative to the nearest ancestor */
  width: 100%; /* Covering the entire width of the containing element */
  height: 0; /* No height (pseudo-element doesn't have content) */  
  transition: 0.4s ease-in-out; /* Smooth transition effect over 0.4 seconds */
}

/*cuadro azul altura cuando acerco el cursor*/
.proj-imgbx:hover::before {
  height: 100%; /*altura del cuadro azul*/
}


.proj-text {
  position: absolute;
  top: 50%; /* Position at 50% of the parent height */
  left: 50%; /* Position at 50% of the parent width */
  transform: translate(-50%, -50%); /* Adjust position to truly center by moving it up and left by half its height and width */
  text-align: center; /* Ensure text is centered horizontally */
  width: 100%; /* Span the full width of the card to maintain center alignment regardless of text length */
  color: white; /* Maintain text color */
  opacity: 0; /* Initially hidden until hover */
  visibility: hidden; /* Hidden until hover */
  transition: opacity 0.3s, visibility 0.3s; /* Smooth transition for hover effects */
}


/* When the parent element with class "proj-imgbx" is hovered over, adjust the positioning and opacity of the child elements with class "proj-txtx" */

.proj-imgbx:hover .proj-text {
  opacity: 1;
  visibility: visible; /*se hace visible con el hover*/
}

.proj-text h4 {
  font-size: 20px; /* Set font size to 30 pixels */
  font-weight: 700; /* Set font weight to bold */
  letter-spacing: 0.8px; /* Increase spacing between letters slightly */
  line-height: 1.1em; /* Set line height to 1.1 times the font size */
}

.proj-text span {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
}

.background-image-right {
  top: 20%;
  position: absolute;
  bottom: 0;
  width: 35%;
  right: 0;
  z-index: -4;
}


