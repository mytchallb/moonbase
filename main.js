
const data = {
  name: "Moon Base Alpha",
  stats: [
    {
      name: "Temp",
      value: 22.4
    },
    {
      name: "Oxygen",
      value: 100
    },
    
  ]
}





document.addEventListener('DOMContentLoaded', () => {
  const base = document.querySelector('#bases');
  const baseHeading = document.createElement('h3');
  const baseList = document.createElement('ul');
  const baseIem = document.createElement('li');


  baseHeading.textContent = data.name;
  baseIem.textContent = 'A';
  
  base.appendChild(baseHeading);
  base.appendChild(baseList);
  baseList.appendChild(baseIem);


  data.stats.forEach((stat, index) => {
    console.log(stat);
  });

});