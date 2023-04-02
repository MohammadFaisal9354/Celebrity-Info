const button = document.getElementById('sub');

button.addEventListener('click', () => {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 200);
  var c=document.getElementById('celebrityname');
  if(c.value.length==0)
  alert('Please Enter the Celebrity Name');
  else
  {
    var name = c.value;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/celebrity?name=' + name,
    headers: { 'X-Api-Key': 'VUz/PhiUoSiFu+bTCDQwWw==CrdmVopAUwelWYmf'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        document.getElementById('name').innerText="Name = "+result[0].name;
        document.getElementById('net_worth').innerText="Net worth ="+result[0].net_worth;
        document.getElementById('gender').innerText="Gender = "+result[0].gender;
        document.getElementById('nationality').innerText="Nationality = "+result[0].nationality;
        var str = String(result[0].occupation).toUpperCase().split(",");
        document.getElementById('occupation').innerText="Occupation = "+str;
        document.getElementById('height').innerText="Height = "+result[0].height;
        document.getElementById('birthday').innerText="Birthday = "+result[0].birthday;
        document.getElementById('age').innerText="Age = "+result[0].age;
        document.getElementById('is_alive').innerText="Is Alive = "+result[0].is_alive;

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

  }
  
});