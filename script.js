const navControl= document.getElementById("nav-bar")

function handleNav(){

    navControl.classList.toggle("hidden")

}

document.querySelector('.glow-effect').addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.style.setProperty('--x', `${x}px`);
    this.style.setProperty('--y', `${y}px`);

    const borderGlow = this.querySelector('.glow-border');
    const distanceToEdge = Math.min(x, y, rect.width - x, rect.height - y);
    const maxDistance = 200;
    const glowIntensity = Math.max(0, maxDistance - distanceToEdge) / maxDistance;
    borderGlow.style.borderColor = `rgba(79, 70, 229, ${glowIntensity})`;
  });

  document.querySelector('.glow-effect').addEventListener('mouseleave', function() {
    const borderGlow = this.querySelector('.glow-border');
    borderGlow.style.borderColor = 'transparent';
  });