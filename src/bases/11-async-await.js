// Async - Await

/* const getImagenPromesa = () => {
    return new Promise ( (resolve, reject) => {
        resolve('https://jejeje.com')
    })
}

getImagenPromesa().then(console.log); */

// Usando Async

const  getImage = async() => {

    try{
        // Intenta hacer esto
        const apiKey = 'ZMp2HwfydA6haBzr0uQ2YZYZQzppLABz';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }catch(error){
        // Si da algun error, intenta hacer esto
        console.error(error)
    }

}

getImage();