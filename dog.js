const chosenBreed = document.getElementById('breedSearch');
const breedList = document.getElementById('dogBreeds');

const dogButton = document.getElementById('dogSubmit');

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);
        let htmlString;
        for (let i = 0; i < breedsArray.length; i++) {
            htmlString = htmlString + `<option value =\"${breedsArray[i]}\">`;
        }
        breedList.innerHTML = htmlString;
    });
 dogButton.addEventListener('click', function () {
    let url = `https://dog.ceo/api/breed/${chosenBreed.value}/images/random`;
    getDoggo(url);
});

const dogImg = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
    spinner.classList.add('show');
    dogImg.classList.remove('show');
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            dogImg.src = data.message;
        });
};

dogImg.addEventListener('load', () => {
    spinner.classList.remove('show');
    dogImg.classList.add('show');
});