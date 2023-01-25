'use strict';

document.querySelector('.propose').addEventListener('click', function () {
  const result = confirm('Will you be my Girl friend?');
  if (result == true) {
    alert('I love you to the moon');
  } else {
    alert('Are you sure');
  }
});
