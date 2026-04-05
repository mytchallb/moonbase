
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
    {
      name: "Nitrogen",
      value: 80
    },
    {
      name: "People",
      value: 4
    },
  ]
}



document.addEventListener('DOMContentLoaded', () => {
  const base = document.querySelector('#bases');
  const baseHeading = document.createElement('h3');
  const baseList = document.createElement('ul');


  baseHeading.textContent = data.name;
  
  base.appendChild(baseHeading);
  base.appendChild(baseList);


  data.stats.forEach((stat, index) => {
    const baseIem = document.createElement('li');
    baseIem.textContent += stat.name + ": " + stat.value;
    baseList.appendChild(baseIem);

    
    console.log(stat);
  });

});