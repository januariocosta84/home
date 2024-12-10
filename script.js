const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const formatSwitcher = document.getElementById('formatSwitcher');
const formatText = document.getElementById('formatText');

let is24HourFormat = true;

// Function to update the time and date
function updateTimeAndDate() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let day = now.getDate();
  let month = now.getMonth() + 1; // Month is 0-based
  let year = now.getFullYear();
  
  // Format the date as Day, Month, Year
  const dateString = `${day}/${month < 10 ? '0' + month : month}/${year}`;
  
  if (!is24HourFormat) {
    formatText.textContent = '12-hour';
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  } else {
    formatText.textContent = '24-hour';
    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  // Display the date
  dateDisplay.textContent = dateString;
}

// Function to pad numbers for consistent formatting
function pad(number) {
  return number < 10 ? `0${number}` : number;
}

// Event listener for switching formats
formatSwitcher.addEventListener('change', () => {
  is24HourFormat = !is24HourFormat;
  updateTimeAndDate();
});

// Initialize the clock and date
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
