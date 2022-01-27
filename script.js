function aetherC(){
    var Aet = document.getElementById("image");
    Aet.setAttribute('src', '../Aether.png');
    document.body.appendChild(Aet);
}
function beidouC(){
    var Bei = document.getElementById("image");
    Bei.setAttribute('src', '../Beidou.png');
    document.body.appendChild(Bei);
}
function albedoC(){
    var Alb = document.getElementById("image");
    Alb.setAttribute('src', '../Albedo.png');
    document.body.appendChild(Alb);
}
function removeImge(){
    var image_x = document.getElementById('image');
    image_x.parentNode.removeChild(image_x);
}
function getNewName(){
    fetch("https://api.genshin.dev/characters/all")
        .then(function(response){
            console.log(response);
            response.json().then(function (data){
                console.log(data)
                var lucky = document.getElementById('number').value;
                if ((lucky == '0') || (lucky == null)){
                    removeImge();
                    document.getElementById('hero').innerHTML ="Pick A Hero!";
                }else if (lucky == '1'){
                    aetherC();
                    hname = data[36].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '2'){
                    beidouC();
                    hname = data[6].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '3'){
                    albedoC();
                    hname = data[0].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '4'){
                    hname = data[3].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '5'){
                    hname = data[4].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '6'){
                    hname = data[5].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '7'){
                    hname = data[6].name;
                    document.getElementById('hero').innerHTML = hname;
                }
            })   
        })
        .catch(function (err){
            console.log(err + '404');
        })
}
