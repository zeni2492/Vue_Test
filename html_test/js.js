const list = document.querySelectorAll('.list')
const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.OpenPopup');
const popover = document.querySelector('.popUp')
const container = document.querySelector('.container')
const Submit = document.querySelector('.Submit')

let isPopoverOpen = false;

button.addEventListener('click', function() {
  if (!isPopoverOpen) {
    popover.style.display = 'block';
    container.style.display = 'none';
    isPopoverOpen = true;
    
  }
});

document.addEventListener('click', function(event) {
  const isClickInsidePopover = popover.contains(event.target);
  const isClickInsideButton = button.contains(event.target);
  if (!isClickInsidePopover && !isClickInsideButton) {
    popover.style.display = 'none';
    container.style.display = 'block';

    isPopoverOpen = false;
  }
});



Submit.addEventListener('click', function() {
    const arr = ["Name", "Surname", "Phone", "Email","Adress"];
    inputs.forEach(function(input,index) {
            const inputValue = input.value.trim();
            const Lits = list[index];
    
            if(inputValue != ''){
                 Lits.textContent = ` ${arr[index]} : ${inputValue} `;
            } else {
                Lits.textContent = '';
            }
        popover.style.display = 'none';
        container.style.display = 'block';
        isPopoverOpen = false;
    })
})

