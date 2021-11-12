// Fetch API

const apiKey = 'ZMp2HwfydA6haBzr0uQ2YZYZQzppLABz';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// Peticion fea

/* peticion.then(resp => {
    resp.json().then(data => {
        console.log(data)
    })
})
.catch(console.warn); */

// Peticion linda

peticion
    .then(resp => resp.json())
    .then(({data}) => {
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)