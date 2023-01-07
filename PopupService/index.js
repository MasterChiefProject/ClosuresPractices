function PopupService(popupBody, options) {
    // Create the popup element
    const popup = document.createElement('div');
    popup.className = options.popupClassName || '';
    popup.innerHTML = popupBody;
  
    // Add a close button to the popup
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'Close';
    closeButton.addEventListener('click', () => {
      close();
    });
    popup.appendChild(closeButton);
  
    // Set up the option to close the popup by clicking outside of it
    if (options.isCloseByClickOutside) {
      popup.addEventListener('click', (event) => {
        if (event.target === popup) {
          close();
        }
      });
    }
  
    // Add the popup to the body of the document
    document.body.appendChild(popup);
  
    // The open and close methods for the popup
    function open() {
      popup.style.display = 'block';
    }
    function close() {
      popup.style.display = 'none';
    }
  
    // Return the open and close methods
    return {
      open,
      close,
    };
  }

  // Get your Git profile picture
fetch('https://api.github.com/users/MasterChiefProject')
.then((response) => response.json())
.then((data) => {
  // Create the popup body with the profile picture
  const popupBody = `<img src="${data.avatar_url}" alt="Profile picture">`;
  // Create the popup service with the body and options
  const popup = PopupService(popupBody, {
    isCloseByClickOutside: true,
    popupClassName: 'git-profile-popup',
  });
  // Open the popup
  popup.open();
});
  