document.addEventListener('DOMContentLoaded', function() {
    // Добавляем обработчик для гамбургер-меню
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });

    // Добавляем обработчик для кнопки закрытия меню
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('active');
    });
});
