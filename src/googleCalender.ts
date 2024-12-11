import './style.css';
function googleCalender() {
  console.log('google calender');
  let grid = document.getElementById('gridId');
  let days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  //ENDPoINT
  // mycalnderAPI?month={month}&year={year}
  // reponse will be curr Dates length, Year, Month
  let apiRepsonse = {
    year: 2024,
    month: 'DEC',
    count: 31,
  };
  let task = [];
  function handleDays() {
    days.map((item, index) => {
      let day = document.createElement('div');
      day.innerText = item + '/' + apiRepsonse.month + '/' + apiRepsonse.year;
      day.id = 'day' + item;
      day.tabIndex = 0;
      day.classList.add('cellCnt');
      let newText = document.createElement('h4');
      newText.innerText = 'day' + item;
      day.appendChild(newText);
      grid.append(day);
    });
  }
  let selectedDay = -1;
  grid.addEventListener(
    'click',
    (e) => {
      if(e.target.id.substr(0,3) == 'day'){
      selectedDay = e.target.id;
      }
      // console.log(selectedDay , 'selectedDay');
      document.getElementById(selectedDay)?.focus();
    }
  );
  let currTask = "";
  document.getElementById('taskInput')?.addEventListener('input',(e)=>{
     currTask = e.target.value;
  });
  document.getElementById('btnId').addEventListener('click', ()=>{
      let task = document.createElement('div');
      
      task.innerText = currTask;
      document.getElementById(selectedDay)?.appendChild(task);
      document.getElementById('taskInput').value = "";
  })
  handleDays();
 
}

googleCalender();
