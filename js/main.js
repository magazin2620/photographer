/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("$(window).on(\"load\", function () {\r\n\t$(\".preloader\").addClass(\"loaded\");\r\n})\r\n\r\n$(document).ready(function () {\r\n\r\n\t// nav toggle\r\n\t$(\".nav-toggle\").click(function () {\r\n\t\t$(\".main-nav\").slideToggle();\r\n\t})\r\n\t$(\".main-nav a\").click(function () {\r\n\t\tif ($(window).width() < 768) {\r\n\t\t\t$(\".main-nav\").slideToggle();\r\n\t\t}\r\n\t})\r\n\r\n\t// fixed page-header\r\n\t$(window).scroll(function () {\r\n\t\tif ($(this).scrollTop() > 100) {\r\n\t\t\t$(\".page-header\").addClass(\"fixed\")\r\n\t\t}\r\n\t\telse {\r\n\t\t\t$(\".page-header\").removeClass(\"fixed\");\r\n\t\t}\r\n\t})\r\n\r\n\t// add smooth scrolling to all links\r\n\t$(\"a\").on('click', function(event) {\r\n\r\n\t\t// make sure this.hash has a value before overriding default behavior\r\n\t\tif (this.hash !== \"\") {\r\n\t\t  event.preventDefault();\r\n  \t\t  var hash = this.hash;\r\n  \r\n\t\t  $('html, body').animate({\r\n\t\t\t scrollTop: $(hash).offset().top\r\n\t\t  }, 800, function(){\r\n  \r\n\t\t\t window.location.hash = hash;\r\n\t\t  });\r\n\t\t}\r\n\t });\r\n\r\n\t// set lightbox img max height\r\n\tconst wHeight = $(window).height();\r\n\t$(\".lightbox__img\").css(\"max-height\", wHeight + \"px\");\r\n\r\n\t// lightbox\r\n\t$(\".works__item-inner\").click(function () {\r\n\t\tindex = $(this).parent(\".works__item\").index();\r\n\t\t$(\".lightbox\").addClass(\"open\");\r\n\t\tlightboxSlideShow();\r\n\t})\r\n\t$(\".lightbox .prev\").click(function () {\r\n\t\tif (index == 0) {\r\n\t\t\tindex = totalWorkItems - 1;\r\n\t\t}\r\n\t\telse {\r\n\t\t\tindex--;\r\n\t\t}\r\n\t\tlightboxSlideShow();\r\n\t})\r\n\t$(\".lightbox .next\").click(function () {\r\n\t\tif (index == totalWorkItems - 1) {\r\n\t\t\tindex=0\r\n\t\t}\r\n\t\telse {\r\n\t\t\tindex++;\r\n\t\t}\r\n\t\tlightboxSlideShow();\r\n\t})\r\n\r\n\t$(\".lightbox__close\").click(function () {\r\n\t\t$(\".lightbox\").removeClass(\"open\");\r\n\t})\r\n\r\n\t// close lightbox when clicked outside\r\n\t$(\".lightbox\").click(function (event) {\r\n\t\tif ($(event.target).hasClass(\"lightbox\")) {\r\n\t\t\t$(this).removeClass(\"open\");\r\n\t\t}\r\n\t})\r\n\r\n})\r\n\r\nlet index = 0;\r\nconst totalWorkItems = $(\".works__item\").length;\r\nfunction lightboxSlideShow() {\r\n\tconst imgSrc = $(\".works__item\").eq(index).find(\"img\").attr(\"data-large\");\r\n\tconst category = $(\".works__item\").eq(index).find(\"h4\").html();\r\n\t$(\".lightbox__img\").attr(\"src\", imgSrc);\r\n\t$(\".lightbox__category\").html(category);\r\n\t$(\".lightbox__counter\").html((index+1) + \"/\" + totalWorkItems);\r\n}\n\n//# sourceURL=webpack://gulp-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;