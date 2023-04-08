const getFormm = document.querySelector('#form')
const input = getFormm.querySelector('input');
const container = document.querySelector('.container');

getFormm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // const req = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
    // makeImages(req.data);

    try {
        // Buat request API menggunakan axios
        const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
        makeImages(response.data);
        // Tampilkan hasil response
        console.log(response.data);
    } catch (error) {
        // Jika terjadi error, tampilkan pesan error
        console.error(error);
    }
})

const makeImages = (imge) => {
    for (let imgku of imge) {
        if (imgku.show.image) {
            const crImg = document.createElement('img');
            // crImg.src = req.data[1].show.image.medium;
            crImg.src = imgku.show.image.medium;
            const dv = document.createElement('div');
            const clas = dv.classList.add("card");
            dv.append(crImg);
            container.append(dv);
            console.log('success');
        }
    }
}