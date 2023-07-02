async function getData()
{
    const api = await fetch("https://api.unsplash.com/photos/random?client_id=0qcbbk7nKoHdce5YL6D_0S8genBv7KfSKkPgzRSUlWs&count=10");
    const apiResult = await api.json();
    return apiResult;
}
let i = 0;
let temp = 0;
function dataResponse()
{
    
getData().then((response)=>{
    console.log(response);
    while(i<10)
    {
        //console.log(i);
        const child = document.createElement('a');
        child.setAttribute('href',  response[i].links.html,'target' , '_blank');

        const img = document.createElement('img');
        img.setAttribute('src' ,response[i].urls.regular, 'alt', response[i].alt_description);

        child.appendChild(img);
        document.querySelector('div').appendChild(child);

        i++;
    }
    temp = 1;
    if(i == 10)
    loader();
    i=0;
});
}

dataResponse();


function loader()
{
    document.querySelector('span').style.display = 'none';
    document.querySelector('div').style.display = 'flex';
}

window.addEventListener('scroll',(e)=>{
    if(Math.floor(window.scrollY) >= document.body.offsetHeight-1000)
    {
        if(temp == 1)
        {
            dataResponse();
            temp = 0;
        }
    }

})