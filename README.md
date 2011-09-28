imageStage - jQuery-Plugin for a lightweight image scroller
===========================================================

How to use imageStage
---------------------

### This is the basic HTML structure:

    <div id="imageStage">
		<div id="imageStage-items">
			<img src="_assets/dummy.jpeg" width="750" height="150">
			<img src="_assets/dummy.jpeg" width="750" height="150">
			<img src="_assets/dummy.jpeg" width="750" height="150">
			<img src="_assets/dummy.jpeg" width="750" height="150">
			<img src="_assets/dummy.jpeg" width="750" height="150">
		</div>
	</div>
	
### And here's the JavaScript:

    $(document).ready(function() {
        $('#imageStage').imageStage();
    });