// document.addEventListener('DOMContentLoaded', function () {
//     var sections = document.querySelectorAll('.section');

//     sections.forEach(function (section) {
//         section.querySelector('.section-heading').addEventListener('click', function () {
//             // Close all sections
//             sections.forEach(function (sec) {
//                 sec.querySelector('.section-content').style.display = 'none';
//             });

//             // Open the clicked section
//             section.querySelector('.section-content').style.display = 'block';
//         });
//     });

//     document.getElementById('addToCartButton').addEventListener('click', function () {
//         alert('Items added to cart!');
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.section');

    sections.forEach(function (section) {
        var heading = section.querySelector('.section-heading');
        var content = section.querySelector('.section-content');

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

