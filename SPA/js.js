
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const status = document.getElementById('status');
  
    toggleSwitch.addEventListener('change', function() {
      if (this.checked) {
        status.textContent = 'Switch is ON';
      
      } else {
        status.textContent = 'Switch is OFF';
  
      }
    });
    
  const form = document.getElementById('schedule-a-call');
  const errorList = document.getElementById('error-list');

  form.addEventListener('submit', function (event) {
    errorList.innerHTML = '';
    let errors = [];

    const businessName = document.getElementById('business_name');
    const phoneNumber = document.getElementById('Phone Number');
    const email = document.getElementById('email');

    if (!businessName.value.trim()) {
      errors.push({ field: businessName, message: 'Business Name is required' });
    }

    if (!phoneNumber.value.trim()) {
      errors.push({ field: phoneNumber, message: 'Phone Number is required' });
    }

    if (!email.value.trim()) {
      errors.push({ field: email, message: 'Email is required' });
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        errors.push({ field: email, message: 'Email format is invalid' });
      }
    }
//what does this do?
    if (errors.length > 0) {
      event.preventDefault();
      errors.forEach(function (error) {
        const li = document.createElement('li');
        const errorLink = document.createElement('a');
        errorLink.href = '#';
        errorLink.textContent = error.message;
        errorLink.addEventListener('click', function (e) {
          e.preventDefault();
          error.field.focus();
        });

        li.appendChild(errorLink);
        errorList.appendChild(li);
      });
    }
  });
  });
  