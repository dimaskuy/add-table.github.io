const showCtrl = document.getElementById('show_ctrl');
const closeCtrl = document.getElementById('close_ctrl');
const blurCtrl = document.querySelector('.blur');

showCtrl.addEventListener('click', function() {
  blurCtrl.classList.remove('none');
});

closeCtrl.addEventListener('click', function() {
  blurCtrl.classList.add('none');
});

// document.querySelector('#ctrl-form').addEventListener('submit', function(event) {
//   event.preventDefault();
// });


const tableBody = document.querySelector('table > tbody');
const theadColor = document.querySelector('table > thead');
const inputColor = document.getElementById('change-color');
  inputColor.value = '#5C33F6';
const trCount = document.getElementsByTagName('tr');
const inputNoData = document.getElementById('inputData');

  inputColor.addEventListener('change', function() {
    const inputColorValue = inputColor.value;
      document.querySelector('.title-palette').style.color = inputColorValue;
      theadColor.setAttribute('style', `background-color: ${inputColorValue} !important`);
      document.querySelector('.title').style.color = inputColorValue;

      Array.from(document.querySelectorAll('.btn-primary')).forEach(function(btn) {
        btn.setAttribute('style', `background-color: ${inputColorValue}`);
      })
      Array.from(document.querySelectorAll('.title-control')).forEach(function(title) {
        title.style.color = inputColorValue;
      });
  });

  closeCtrl.addEventListener('mousemove', function() {
    this.style.color = inputColor.value;
    this.style.opacity = 0.5;
  });
  closeCtrl.addEventListener('mouseleave', function() {
    this.style.color = '#0A1931';
    this.style.opacity = 1;
  })

// const addSiswa = document.getElementById('submit');
// addSiswa.addEventListener('click', function() {

document.querySelector('#ctrl-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let nama = document.getElementById('inputNama').value;
    if (nama.length === 0) {
      nama += '(unamed)';
    }
  let kelas = document.getElementById('inputKelas').value;
    if (kelas.length === 0) {
      kelas += '(???)';
    }
  let profile = document.getElementById('inputFoto').value;

  const tr = document.createElement('tr');
  tr.classList.add('animasiTable');

  const datSiswa = document.createElement('td');
  const namaSiswa = document.createTextNode(nama)
  datSiswa.appendChild(namaSiswa);
  datSiswa.classList.add('siswa');

  const datKelas = document.createElement('td');
  const datKelasTxt = document.createTextNode(kelas);
  datKelas.appendChild(datKelasTxt);
  datKelas.classList.add('kelas');

  const datProfile = document.createElement('td');
  const imgProfile = document.createElement('img');
  imgProfile.setAttribute('src', profile);
  imgProfile.setAttribute('title', nama);
  imgProfile.setAttribute('alt', nama);
  datProfile.appendChild(imgProfile);

  const removeBtnTd = document.createElement('td');
  const removeBtn = document.createElement('button');
  const removeBtnIcon = document.createElement('i');
    removeBtnIcon.classList.add('remove-icon');
    removeBtnIcon.classList.add('bi');
    removeBtnIcon.classList.add('bi-trash');
  removeBtn.setAttribute('type', 'button');
  removeBtn.classList.add('btn');
  removeBtn.classList.add('btn-danger');
  removeBtn.classList.add('remove');
  removeBtn.appendChild(removeBtnIcon);
  removeBtnTd.appendChild(removeBtn);

    tr.appendChild(datSiswa);
    tableBody.appendChild(tr);

    for (let i = 1; i <= trCount.length - 2; i++) {
      tr.setAttribute('id', 'tr' + i);

      const allTr = document.getElementById('tr' + i);
        allTr.appendChild(datKelas);

        datProfile.setAttribute('id', 'photo_profile' + i);
        allTr.appendChild(datProfile);

        allTr.appendChild(removeBtnTd);

        allTr.addEventListener('click', function(e) {
          if (e.target.className === 'btn btn-danger remove' || e.target.className === 'remove-icon bi bi-trash') {
            this.style.display = 'none';
          }
        });
    }

    document.getElementById('example').style.display = 'none';
    // document.getElementById('example').setAttribute('hidden', '');

    document.getElementById('inputNama').value = '';
    document.getElementById('inputKelas').value = '';
    document.getElementById('inputFoto').value = '';

    blurCtrl.classList.add('none');
    return tr;
});


// document.querySelector('#ctrl-form').addEventListener('submit', function(event) {
//   document.getElementById('inputNama').value = '';
//   document.getElementById('inputKelas').value = '';
//   document.getElementById('inputFoto').value = '';
//
//   blurCtrl.classList.add('none');
//   // let kelas = document.getElementById('inputKelas');
//   // let profile = document.getElementById('inputFoto');
// });


// inputNoData.addEventListener('click', function() {
//
// })











// FIXME: Jika salah satu table row yang genap di hapus, maka ubah ke warna putih
// if (trCount.length - 2 % 2 === 0) {
//   alert(trCount.length - 2 % 2 === 0)
//   this.style.background = '#fff';
//   this.style.display = 'none';
// } else {
//   alert(trCount.length - 2 % 2 === 0)
//   this.style.background = '#f7f7f7';
//   this.style.display = 'none';
// }

// FIXME: Jika table row sudah habis setelah di hapus, maka tampilkan table row "example"
// if (e.target.className === 'remove' || e.target.className === 'remove-icon bi bi-trash') {
//   if (trCount.length - document.querySelectorAll('tr').length - 4 === 0) {
//     this.style.display = 'none';
//     document.getElementById('example').removeAttribute('hidden', '');
//     return;
//   } else {
//     this.style.display = 'none';
//   }
// }
