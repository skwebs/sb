# [Sidebar](https://skwebs.github.io/sidebar/) - with Bootstrap-4.3.1

## Features
1. Sidebar show only on mobile view. In desktop view sidebar change into normal navbar menu.
2. Sidebar also open-close on left-right finger swipe. (This feature works only on touchscreen supported device.)
3. You can set Sidebar Menu left or right as you wish.
4. You can set full height sidebar or, sidebar below navbar.
5. You can set Brand symbol (text/image) left or right. Navbar Toggler (Sidebar open-close button) set automatically according to Brand symbol side.
6. Toggler Button designed with Hamburger. Hamburger arrow side auto adjust accordingly Sidebar Side.
7. In fixed top navbar case you can set main content below nav or under nav.
8. You can change navbar and Sidebar Menu background & color using predefined bootstrap class `navbar-light` or `navbar-dark`. You can also change only background using `data-nav_bg`.


# [Demo-Page](https://skwebs.github.io/sidebar/)

## Get Started
**Bootstrap-_Sidebar_** configration is very simple.
1. You can download file locally or,
2. Direct add _jsDelivr CDN_ link in your project after bootstrap files.

I have created two type js file : 
1. Pure javascript based `sidebar-pureJS.js` and,
2. jQuery based `sidebar-jquery.js`
but use any one in your in your project.

All file are available both form **original files** & **minified files** 

### CDN (Original files) Links

- **CSS file link:** 

```html 
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/css/sidebar.css
```

- With html code 
```html 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/css/sidebar.css">
```

- **Pure js file link:** 
```html 
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-pureJS.js
```

- With html code 
```html 
<script src="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-pureJS.js"></script>
```

- **jQuery based js file link:** 
```html 
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-jquery.js
```

- With html code 
```html 
<script src="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-jquery.js"></script>
```

### CDN (Minified files) Links

- **CSS file link:** 
```html 
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/css/sidebar.min.css
```

- With html code 
```html 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/css/sidebar.min.css">
```

- **Pure js file link:** 
```html 
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-pureJS.min.js
```

- With html code 
```html
<script src="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-pureJS.min.js"></script>
```

- **jQuery based js file link:** 
```html
https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-jquery.min.js
```

- With html code 
```html 
<script src="https://cdn.jsdelivr.net/gh/skwebs/sidebar/dist/js/sidebar-jquery.min.js"></script>
```

###header
```html
<header>
	<!--Navbar-->
	<!--<nav data-nav_bg="linear-gradient(45deg, #000,#aaa)" class="_sidebar navbar navbar-expand-md p-0 navbar-dark fixed-top justify-content-sm-start">-->
	<nav class="_sidebar navbar navbar-expand-md p-0 navbar-light fixed-top ">
	  <!-- Navbar brand -->
	  <a class="navbar-brand _sb-brand my-0 p-0 p-md-1 order-md-0 ml-md-0 ml-3" href="#">
	  Sidebar
	   </a>
		
		<button class="navbar-toggler _sb-toggler mx-3 align-self-start hamburger my-auto " type="button">
			<span class="hamburger-box">
			<span class="hamburger-inner"></span>
			</span>
		</button>
	  <!-- Menu content -->
	  <div class="_sb-menu mt-md-0 pt-2 p-md-0 d-flex flex-column flex-md-row flex-lg-row justify-content-md-end navbar-collapse" >
		<img class="d-md-none mb-2 shadow-sm p-1" src="img/bs-1200.png" alt="Logo" >
	
	    <!-- Links -->
	    <ul class="navbar-nav align-self-stretch">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Home
	          <span class="sr-only">(current)</span>
	        </a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">About</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#">Contact</a>
	      </li>
		<li class="nav-item">
			<a class="nav-link" href="#">Admission</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Result</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="#">Login</a>
		</li>
	
	
	      <!-- Dropdown -->
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown"
	          aria-haspopup="true" aria-expanded="false">Student</a>
	        <div class="dropdown-menu dropdown-primary" aria-labelledby="dropdown1">
	          <a class="dropdown-item" href="#">Login</a>
	          <a class="dropdown-item" href="#">Payment</a>
	          <a class="dropdown-item" href="#">Result</a>
	        </div>
	      </li>
	   
	    </ul>
	    <!-- Links -->
		<form class="form-inline pr-3">
	      <div class="md-form my-0">
	        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
	      </div>
	    </form>
	  </div>
	</nav>
	<!--/.Navbar-->
	</header>
```


### Download all files link below.

[Download files](https://github.com/skwebs/sidebar/)



