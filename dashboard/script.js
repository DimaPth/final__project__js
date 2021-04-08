const clientsContainer = document.querySelector ('section.clients div.container-md');
const main = document.querySelector ('section.main');
const clients = document.querySelector ('section.clients');
const map = document.querySelector ('section.map');
const menuLinks = document.querySelectorAll ('section.menu a');
const exitBtn = document.getElementById('exit-btn');


const nav = () =>{
  document.location.href = "../index.html"
}

exitBtn.addEventListener('click', nav);



menuLinks[0].onclick = () => {
  main.classList.remove('hide');
  clients.classList.add('hide');  
  map.classList.add('hide');
}
menuLinks[1].onclick = () => {
  main.classList.add('hide');
  clients.classList.remove('hide');  
  map.classList.add('hide');
}
menuLinks[2].onclick = () => {
  main.classList.add('hide');
  clients.classList.add('hide');  
  map.classList.remove('hide');
}



const tableConfig = [
    {
        header: 'Имя',
        key: 'name'
    },
    {
        header: 'Компания',
        key: 'company'
    },
    {
        header: 'Email',
        key: 'email'
    },
    {
        header: 'Телефон',
        key: 'phone'
    },
    {
        header: 'Баланс',
        key: 'balance'
    },
    {
        header: 'Дата регистрации',
        key: 'registered'
    },
];

  
const getTHead = () => {
  const tHead = document.createElement('thead');
  tableConfig.forEach((cell) => {
    const cellHead = document.createElement('th');
    cellHead.innerHTML = cell.header;
    tHead.appendChild(cellHead);
  })
  return tHead;
}
const createTable = (data) => {
  const table = document.createElement('table');
  const tHead = getTHead();
  table.appendChild(tHead);
  const tBody = document.createElement('tbody');
  if (data) {
    let id = 0;
    data.forEach(item => {
      const tr = document.createElement('tr');
      id += 1;
      tr.id = 'row-' + id;
      tableConfig.forEach((cell) => {
        const td = document.createElement('td');
        td.innerHTML = item[cell.key];
        tr.appendChild(td);
      });
      tBody.appendChild(tr);

      // Create dialog

      const del = document.createElement('td');
      del.id = 'del';
      const btn = document.createElement('button');
      btn.classList.add('btn-danger');
      btn.innerHTML = 'X';
      del.appendChild(btn);
      tr.appendChild(del);
      let createModal = () => {
        let div = document.createElement('div');
        div.style.backgroundColor = 'azure';
        div.style.position = 'fixed';
        div.style.maxWidth = '210px';
        div.style.minHeight = '100px';
        div.style.padding = '20px';
        div.style.top = '40%';
        div.style.left = '40%';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.innerHTML = 'Вы действительно хотите удалить строку?';

        // deleteBtn

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn-danger');
        deleteBtn.innerHTML = 'Подтвердить';
        div.appendChild(deleteBtn);
        let deleteDialog = (e) => {
          e.preventDefault();
          tr.remove(id);
          cancel();
        }
        deleteBtn.addEventListener('click', deleteDialog);

        // cancelBtn

        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('btn-info');
        cancelBtn.innerHTML = 'Отмена';
        div.appendChild(cancelBtn);
        let cancel = () => {
          div.remove();
          btn.disabled = false;
        }
        cancelBtn.addEventListener('click', cancel);
        clients.appendChild(div);
        btn.disabled = true;
      }
      btn.addEventListener('click', createModal);
    })
  }
  table.appendChild(tBody);
  table.classList.add('table');
  table.classList.add('table-dark');
  table.classList.add('table-hover');
  table.classList.add('mt-4');
  clientsContainer.appendChild(table);
};

const getTable = () => {
  const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
  fetch(url)
    .then(response => response.json())
    .then(response => createTable(response))
    .catch(error => createTable());
}

getTable();




// Initialize and add the map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 54.08941173327572, lng: 28.307625828719882 },
  });
  const marker = new google.maps.Marker({
    position: { lat: 54.09194449268693, lng: 28.309926056493378 },
    map: map,
  });
  let info = new google.maps.InfoWindow({
    content: '<h3>Zhodino</h3>'
  })
  const marker2 = new google.maps.Marker({
    position: { lat: 54.08839606765128, lng: 28.297280527099325 },
    map: map,
  });
  let info2 = new google.maps.InfoWindow({
    content: '<h3>Fix Price</h3>'
  })
  const marker3 = new google.maps.Marker({
    position: { lat: 54.09338112681396, lng: 28.29866605155789 },
    map: map,
  });
  let info3 = new google.maps.InfoWindow({
    content: '<h3>School №5</h3>'
  })
  const marker4 = new google.maps.Marker({
    position: { lat: 54.083591152986024, lng: 28.304470638406148 },
    map: map,
  });
  let info4 = new google.maps.InfoWindow({
    content: '<h3>X_x</h3>'
  })
  const marker5 = new google.maps.Marker({
    position: { lat: 54.087448085052166, lng: 28.312563340397336 },
    map: map,
  });
  let icon = document.querySelector('.card-img-top');
  let info5 = new google.maps.InfoWindow({
    content: icon,
  })
  
  marker.addListener('click', () => {
    info.open(map, marker);
  })
  marker2.addListener('click', () => {
    info2.open(map, marker2);
  })
  marker3.addListener('click', () => {
    info3.open(map, marker3);
  })
  marker4.addListener('click', () => {
    info4.open(map, marker4);
  })
  marker5.addListener('click', () => {
    info5.open(map, marker5);
  })
}