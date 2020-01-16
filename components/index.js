const add = document.getElementsByClassName('add');
const myList = document.getElementById('myList');

Array.from(add).forEach(element => {
    element.addEventListener('click', () => {
        element.src = '../icons/pngfuel.com.png';
        toggleClass(element);
        const movie = element.parentElement.parentElement.parentElement;
        const newMovie = movie.cloneNode(true);
        element.src = '../icons/plus-icon.png';
        toggleClass(element);
        myList.appendChild(newMovie);
        removeFromMyList();
        myList.childElementCount ? myList.parentElement.style.display = 'block' : myList.parentElement.style.display = 'none';
    });
});

const toggleClass = element => {
    element.classList.toggle('add');
    element.classList.toggle('less');
}

const removeFromMyList = () => {
    const less = document.getElementsByClassName('less');
    Array.from(less).forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.parentElement.parentElement.remove();
            myList.childElementCount ? myList.parentElement.style.display = 'block' : myList.parentElement.style.display = 'none';
        });
    });
};


removeFromMyList();

