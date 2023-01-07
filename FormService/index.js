function FormService(formParentElement, onSubmit) {
    // Get the form element
    const form = formParentElement.querySelector('form');
  
    // Set up the onSubmit method for the form
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Validate the form inputs
      const inputs = form.querySelectorAll('input');
      let isValid = true;
      for (const input of inputs) {
        // Remove any previous error messages
        input.nextElementSibling.innerHTML = '';
  
        if (input.type === 'text') {
          if (input.value.length < 2) {
            input.nextElementSibling.innerHTML = 'This field must be at least 2 characters';
            isValid = false;
          }
        } else if (input.type === 'number') {
          if (isNaN(input.value)) {
            input.nextElementSibling.innerHTML = 'This field must be a number';
            isValid = false;
          }
        } else if (input.type === 'email') {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            input.nextElementSibling.innerHTML = 'This field must be a valid email';
            isValid = false;
          }
        }
      }
  
      // If the form is valid, call the onSubmit function
      if (isValid) {
        onSubmit();
      }
    });
  
    // The onResetForm method for the form
    function onResetForm() {
      form.reset();
    }
  
    // Return the onSubmit, isValid, and onResetForm methods
    return {
      onSubmit: form.onsubmit,
      isValid: form.checkValidity(),
      onResetForm,
    };
  }


  