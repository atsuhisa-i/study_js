const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

nameInput.addEventListener('input', () => {
  const inputStr = nameInput.value;
  const normalStr = inputStr.toLowerCase();
  if(normalStr.includes('test') === true){
    warningMessage.textContent = '「test」が含まれてます';
  }else{
    warningMessage.textContent = '';
  }
})