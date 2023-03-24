# particleSystem

Copy the .js file and paste into the editor playground at https://editor.p5js.org or open the .html file for the experience in a web browser.

This p5.js code creates an interactive particle system on an HTML canvas. When the user clicks the mouse, particles are generated around the cursor and are affected by forces that depend on the distance from the cursor and the center of the canvas. The particles also fade away over time.

Here's a breakdown of the code:

1.	let particles = []; creates an empty array to store the Particle objects.

2.	let stopped = true; is a boolean variable to control the generation of particles.

3.	function setup() {...} is called once at the beginning and sets up the canvas with the dimensions of the window and the color mode to HSB.

4.	function draw() {...} is the main loop that runs continuously, drawing the background and updating and displaying the particles. If stopped is false, new particles are generated around the mouse cursor. It also removes particles that are either outside the canvas or have reached the end of their lifetime.

5.	function mousePressed() {...} is an event listener for mouse clicks, toggling the stopped variable to control whether particles are generated or not.

6.	The Particle class defines the properties and behavior of individual particles, such as position, velocity, acceleration, size, lifetime, and color (hue). The applyForce() method applies a force to the particle by updating its acceleration. The update() method updates the particle's position, velocity, and acceleration based on forces related to the mouse cursor and the center of the canvas, as well as decrementing the particle's lifetime. The isOutside() method checks if the particle is outside the canvas. The display() method draws the particle as an ellipse with a color determined by its hue and lifetime.
