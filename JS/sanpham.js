document.getElementById('searchIconBtn').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('fullSearchContainer').classList.add('active');
    document.getElementById('iconContainer').classList.remove('d-flex');
    document.getElementById('iconContainer').classList.add('d-none');
    document.querySelector('.search-input').focus(); // Tự động focus con trỏ vào ô nhập
});

document.getElementById('closeSearchBtn').addEventListener('click', function () {
    document.getElementById('fullSearchContainer').classList.remove('active');
    document.getElementById('iconContainer').classList.remove('d-none');
    document.getElementById('iconContainer').classList.add('d-flex');
});
