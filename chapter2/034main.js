document.querySelector('#submitButton').addEventListener('click', (event) => {
  const phoneNumber = document.querySelector('#phoneNumberText').value;
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  alert(`電話番号は${trimmedPhoneNumber}です`);
  event.preventDefault();
})