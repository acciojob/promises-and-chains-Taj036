//your JS code here. If required.
function canVote() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = document.getElementById('name').value;
      let age = document.getElementById('age').value;

      if (name !== '' && !isNaN(age) && age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else if (name !== '' && !isNaN(age) && age < 18) {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      } else {
        reject('Something went wrong');
      }
    }, 4000);
  });
}

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();

  canVote()
    .then((data) => {
      alert(data);
    })
    .catch((error) => {
      alert(error);
    });
});
