// Random BG Color Generator
// Darker Colors

document.addEventListener('keydown', function() {
    let bod = document.querySelector('body');
    let r = Math.floor(Math.random() * 127);
    let g = Math.floor(Math.random() * 127);
    let b = Math.floor(Math.random() * 127);
    let randomColor = `rgb(${r}, ${g}, ${b})`;
    bod.style.backgroundColor = randomColor;
})

