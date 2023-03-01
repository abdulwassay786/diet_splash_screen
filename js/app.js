var modal = document.getElementById("myModal");

var btn = document.getElementsByTagName("button")[0];

var span = document.getElementsByClassName("close")[0];

function openModal() {
    modal.style.display = "block";
    setTimeout(function () {
        modal.querySelector('.modal-content').classList.add('show');
    }, 10);
}

function closeModal() {
    modal.querySelector('.modal-content').classList.remove('show');
    setTimeout(function () {
        modal.style.display = "none";
    }, 300);
}

window.onclick = function (event) {
    if (event.target == modal
    ) {
        closeModal();
    }
}


const gender1 = document.querySelector('.gender_1');
gender1.addEventListener('click', function() {
  gender1.classList.toggle('selected');
});

const gender2 = document.querySelector('.gender_2');
gender2.addEventListener('click', function() {
  gender2.classList.toggle('selected');
});
