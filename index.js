

document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
        let heading = section.querySelector('.section-heading');
        let content = section.querySelector('.section-content');

        heading.addEventListener('click', function () {
            // Close all sections
            sections.forEach(function (sec) {
                sec.querySelector('.section-heading').style.display = 'block';
                sec.querySelector('.section-content').style.display = 'none';
            });

            // Open the clicked section and hide its heading
            content.style.display = 'block';
            heading.style.display = 'none';
        });
    });

    document.getElementById('addToCartButton').addEventListener('click', function () {
        alert('Items added to cart!');
    });
});

