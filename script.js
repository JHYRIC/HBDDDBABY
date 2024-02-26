document.addEventListener("DOMContentLoaded", function() {
    setTimeout(revealText, 6000);
  
    function revealText() {
      var hiddenText = document.getElementById("hidden-text");
      hiddenText.classList.add("visible");
      hiddenText.classList.remove("hidden");
    }
  });

function createNotification(text) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = text;
    document.body.appendChild(notification);
  
   
    const screenWidth = window.innerWidth;
    const notificationWidth = notification.offsetWidth;
    notification.style.left = `${(screenWidth - notificationWidth) / 2}px`;
    notification.style.top = '20px'; // Adjust top position as needed
  
   
    notification.addEventListener('animationend', () => {
      notification.remove();
    });
  }
  
  
  const text = "I LOOVEEE YYOOUUUU❤️❤️❤️";
  
  
 
  setInterval(() => {
    createNotification(text);
  }, 6000);
  