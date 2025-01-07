<script>

  setTimeout(function() {
  window.location.href = 'index.html'; // Redirect to the main page after 10 seconds
}, 10000); // 10 seconds

  // Configuration
  const NUM_BALLOONS = 10; // Number of balloons
  const balloonContainer = document.getElementById('balloon-container');

  // Function to create a balloon
  function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Randomize position and animation duration
    const randomLeft = Math.random() * 100; // Random left position (percentage)
    const randomDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    const randomDelay = Math.random() * 3; // Random delay between 0s and 3s

    // Apply styles
    balloon.style.left = `${randomLeft}%`;
    balloon.style.animationDuration = `${randomDuration}s`;
    balloon.style.animationDelay = `${randomDelay}s`;

    return balloon;
  }

setTimeout(function() {
  window.location.href = 'index.html'; // Redirect to the main page after 10 seconds
}, 10000); // 10 seconds


  // Add balloons to the container
  for (let i = 0; i < NUM_BALLOONS; i++) {
    const balloon = createBalloon();
    balloonContainer.appendChild(balloon);
  }
</script>
