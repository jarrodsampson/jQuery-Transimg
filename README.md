# jQuery-Transimg
Turn your pictures into something more. Designed by [planlodge](https://github.com/planlodge).

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
		<link rel="stylesheet" href="demo/css/demo.css" />
	</head>
	<body>

		<div class="wrapper">
		
			<div class="header">
				<h1>Transimg.JS</h1>
				<p>Hover over the Image</p>
			</div>
		
			<img class="transform" src="demo/img/an.jpg" data-title="Sample Image" />
		
		</div>

		<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
		<script src="src/transimg.min.js"></script>
		<script>
			$('.transform').transimg({
				circular: true,
				rounded: false,
				animSet: true,
				animation: "fadeUp",
				animSpeed: 10000,
				showCaption: true,
				overlay: true,
				zoom: true
			});
		</script>
	</body>
	</html>

## License

Color ChangeJS is licensed under the [MIT license](http://opensource.org/licenses/MIT).
