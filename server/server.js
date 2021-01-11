// $(document).ready(function () {
// let name = prompt('Your name:', ' ');
// let message = $('<p>').text('Welcome ' + name);
// $('#welcome').append(message);
$('#bar ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
})
const tabBtn = document.querySelectorAll('#bar');
const tab = document.querySelectorAll('.dashboard-body>.tab');

function tabs(panelIndex) {
    tab.forEach(function (node) {
        node.style.display = 'none';
    })
    tab[panelIndex].style.display = 'block';
}
tabs(0);
// })
