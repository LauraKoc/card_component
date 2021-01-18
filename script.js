document.addEventListener('DOMContentLoaded', () => {
    const recentImageDataUrl = localStorage.getItem('recent-image');

    if (recentImageDataUrl) {
        document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
    }
})

const edit = document.querySelector('#myFileInput').addEventListener('change', function () {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        localStorage.setItem('recent-image', reader.result);
        const recentImageDataUrl = localStorage.getItem('recent-image');

        if (recentImageDataUrl) {
            document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
        }

    });

    reader.readAsDataURL(this.files[0]);
});



// document.addEventListener('change', () => {
//     const recentImageDataUrl = localStorage.getItem('recent-image');

//     if(recentImageDataUrl) {
//         document.querySelector('#imgPreview').setAttribute('src', recentImageDataUrl)
//     }
// })



