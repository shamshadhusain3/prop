
const popBtn=document.getElementById('proposalButton')
const popUp=document.getElementById('proposalPopup')

popBtn.addEventListener('click', function() {
    popUp.classList.toggle('flex');
  });
  
  document.getElementById('yesButton').addEventListener('click', function() {
    // Display a kiss or message of love
    alert('💋 I love you too! 💖');
    document.getElementById('proposalPopup').style.display = 'none';
  });
  
  document.getElementById('noButton').addEventListener('click', function() {
    // Continuously prompt until she says yes
    alert('You have to love me! 😊');
  });
  document.getElementsByClassName('popup-content').addEventListener('click', function() {
    popBtn.classList.remove('flex');
  })
  