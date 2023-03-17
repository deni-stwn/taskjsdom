const btn = document.getElementById('btn')
const h1 = document.querySelector('h1')
h1.innerHTML = 'tugas'.toUpperCase()

btn.addEventListener('click', () => {
    const name = document.getElementById('name')
    const Nvalue = name.value

    const alamat = document.getElementById('alamat')
    const Avalue = alamat.value

    const keterangan = document.getElementById('keterangan')
    const Kvalue = keterangan.value

    const foto = document.getElementById('gambar')
    const Fvalue = foto.files[0]

    const card = document.createElement('div')
    card.classList.add("card-result")

    const btnDelete = document.createElement('button')
    btnDelete.classList.add("delete")
    btnDelete.innerHTML = '❌'

    const btnEdit = document.createElement('button')
    btnEdit.classList.add('edit')
    btnEdit.innerHTML = '📝'
    
    const tampilan = document.getElementById('tampilan')

    const h2 = document.createElement('h2')
    const h21 = document.createElement('h2')
    const h22 = document.createElement('h2')
    const img = document.createElement('img')
    const image = document.createElement('div')

    image.classList.add('img')
    img.classList.add('ff')
    
    h2.innerHTML = "Nama : " + Nvalue
    h21.innerHTML = "Alamat : " + Avalue
    h22.innerHTML = "Keterangan : " + Kvalue
    
    
    const reader = new FileReader()
    reader.onload = () => {
        img.src = reader.result
        image.prepend(img)
        card.prepend(image)
        card.append(h2,h21,h22,btnDelete,btnEdit)
        tampilan.prepend(card)
    }
    reader.readAsDataURL(Fvalue)
    // card.append(h2,h21,h22,btnDelete,btnEdit)//!

    // // card.append(h21)
    // // card.append(h22)
    // // card.append(btnDelete)
    
    // tampilan.prepend(card)
    
    name.value = ''
    alamat.value = ''
    keterangan.value = ''
    foto.value = ''
    
    btnDelete.addEventListener('click', () => {
        let i = confirm('Anda yakin ingin menghapus card ini')
        if (i == true){
          tampilan.removeChild(card)
        }
    })

    btnEdit.addEventListener('click', () => {
        form.classList.remove('hidden');
        overlay.classList.remove('hidden');
        name.value = Nvalue;
        alamat.value = Avalue;
        keterangan.value = Kvalue;
    
        //// if (btnClose.addEventListener('click', close))
        if (!btnClose.addEventListener('click', close)){
          btn.addEventListener('click',() =>{
            card.remove()
          })
        }
        //// card.remove();
      });
      
    form.classList.add('hidden')
    overlay.classList.add('hidden')
})

//!modal pop up

const form = document.getElementById('form')
const overlay = document.querySelector(".overlay");

const addBtn = document.getElementById('btnAdd')
const btnClose = document.getElementById('close')


function add(){
    form.classList.remove('hidden')
    overlay.classList.remove('hidden')
}


function close(){
    form.classList.add('hidden')
    overlay.classList.add('hidden')
}


addBtn.addEventListener('click', add)
btnClose.addEventListener('click', close)
overlay.addEventListener('click', close)

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

//!fitur search
searchBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card-result');
  const searchText = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const alamat = card.querySelectorAll('h2')[1].textContent.toLowerCase();
    const keterangan = card.querySelectorAll('h2')[2].textContent.toLowerCase();

    if (name.includes(searchText) || alamat.includes(searchText) || keterangan.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card-result');
  
    if (searchText === '') {
      cards.forEach(card => {
        card.style.display = '';
      });
    }
  });

  //! darkmode 

const darkMode = document.querySelector('.darkmode')
const btnDark = document.querySelector('.dark')
const body = document.body

darkMode.addEventListener('click', () => {
  body.classList.toggle('darkMode')
})






