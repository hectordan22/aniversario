let images = [
    'alegres-frente.jpeg',
    'beso-boda.jpeg',
    'manos.jpeg',
    'matrimonio1.jpeg',
    'matrimonio2.jpeg',
    'matrimonio3.jpeg',
    'matrimonio4.jpeg',
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
    '10.jpeg',
    '11.jpeg',
    '12.jpeg',
    '13.jpeg',
    '14.jpeg'
    
]


document.addEventListener('DOMContentLoaded', function() {
    const img =  document.getElementById('galeryImages')
    for (let i = 0; i < images.length; i++) {
       let imag = new Image()
       imag.className = 'img-galery'
       imag.src = './images/matrimonio/'+images[i] 
       img.appendChild(imag)
          
         }
});




