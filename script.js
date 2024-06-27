document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    container.addEventListener('mouseover', function () {
        container.style.borderColor = '#ff0000';
    });

    container.addEventListener('mouseout', function () {
        container.style.borderColor = '#333';
    });
});
