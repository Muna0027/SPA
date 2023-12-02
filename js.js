
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const status = document.getElementById('status');
  
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        status.textContent = 'Switch is ON';
        // Perform actions when the switch is turned ON
        // Add logic here
      } else {
        status.textContent = 'Switch is OFF';
        // Perform actions when the switch is turned OFF
        // Add logic here
      }
    });
  });
  