# jQuery-Transimg
Turn your pictures into something more. Designed by [planlodge](https://github.com/planlodge).

[![Build Status](https://travis-ci.org/stevenbenner/jquery-powertip.svg?branch=master)](https://travis-ci.org/stevenbenner/jquery-powertip)
[![Dependency Status](https://gemnasium.com/stevenbenner/jquery-powertip.svg)](https://gemnasium.com/stevenbenner/jquery-powertip)
[![Release Version](http://img.shields.io/github/release/stevenbenner/jquery-powertip.svg)][projectpage]

## Getting Started

 1. Include jQuery in your code.
 2. Download and include the transimg.js file.
 3. Pick your selector and apply transimg method.

## Example

    <!DOCTYPE html>
	<html lang="en-US">
	<head>
		<title>Transimg</title>
		<meta charset="utf-8">
		<link rel="stylesheet" href="css/transimg.min.css" />
	</head>
	<body>

		<div class="wrapper">
		
			<div class="header">
				<h1>Transimg.JS</h1>
				<p>Transform your pictures</p>
			</div>
		
			<img class="transform" src="demo/img/an.jpg" data-title="Sample Image" />
		
		</div>

		<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="src/transimg.min.js"></script>
		<script>
			$('.transform').transimg({
				circular: true,
				rounded: false,
				animSet: true,
				animation: "fadeDown",
				frame: "diamond"
			});
		</script>
	</body>
	</html>
	
**Note regarding Internet Explorer and Firefox support:**

> Internet Explorer and Firefox do not currently support the css clip feature. Must have availability to use webkits.

## License

Transimg is licensed under the [MIT license](http://opensource.org/licenses/MIT).
