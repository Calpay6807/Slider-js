var models = [
    {
        name : 'bmw E30',
        image : 'img/bmw.jpg',
        link :
        'http://www.arabalar.com.tr/'
    },

    {
        name : 'mazda cx-3',
        image : 'img/mazda.jpg',
        link :
        'http://www.arabalar.com.tr/'
    },

    {
        name : 'volvo s60',
        image : 'img/volvo.jpg',
        link :
        'http://www.arabalar.com.tr/'
    },

    {
        name : 'skoda superb',
        image : 'img/skoda.jpg',
        link :
        'http://www.arabalar.com.tr/'
    },
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings={
    duration : '1000',
    random : false
};

init(settings);


// click işlemi for right button
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){

    index--;
    showSlide(index);
    console.log(index)

});
// click işlemi for left button
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

// Sliderin random şeklinde kendi kendine çalışması sağlamak için yazdığıımız ko
function init(settings){

    var prev;
    interval=setInterval(function(){

        if(settings.random){
            // random index
           
            do{

                index = Math.floor(Math.random() * slaytCount);

            }while(index == prev)
            prev = index;


        }else{
            // artan index


            if(slaytCount == index+1){
                index = -1;
            }
             
            showSlide(index);
            console.log(index)
            index++;


        }
        showSlide(index);
      



    },settings.duration)
}


function showSlide(i) {

    index = i;

    if(i < 0) {
        index = slaytCount -1;
    }
    if(i >= slaytCount) {
        index = 0 ;
    }





    // Card tittle içindeki başlıkları img ile eşdeğer gitmesi için yazdığımız kod
document.querySelector('.card-title').textContent = models[index].name;

// img için model dizisi içerisine oluşturduğumjz objeleri alarak sırasıyla ekrana yazdırmamızı sağla
document.querySelector('.card-img-top').setAttribute('src',models
[index].image);

// model içerisinde belirlediğimiz linke buton vasıtasıyla gitmemizi sağlayan code
document.querySelector('.card-link').setAttribute('href',models
[index].link);

};




