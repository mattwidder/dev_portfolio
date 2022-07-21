const darkBtn = document.querySelector('.on');
const lightBtn = document.querySelector('.off');

let mode = false;
lightBtn.style.display = "inline-block";
darkBtn.style.display = "none";

function toggleSwitch() {
  mode = !mode;
  if (mode === false) {
    console.log('click dark');
    lightBtn.style.display = "inline-block";
    darkBtn.style.display = "none";
  } else {
    console.log('click light');
    lightBtn.style.display = "none";
    darkBtn.style.display = "inline-block";
  }
};

