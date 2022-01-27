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
                if (lucky == '1'){
                    aetherC();
                    hname = data[36].name;
                    hvision = data[36].vision;
                    hwep = data[36].weapon;
                    hnat = data[36].nation;
                    haffi = data[36].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '2'){
                    beidouC();
                    hname = data[6].name;
                    hvision = data[6].vision;
                    hwep = data[6].weapon;
                    hnat = data[6].nation;
                    haffi = data[6].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '3'){
                    albedoC();
                    hname = data[0].name;
                    hvision = data[0].vision;
                    hwep = data[0].weapon;
                    hnat = data[0].nation;
                    haffi = data[0].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;;
                }else if (lucky == '4'){
                    hname = data[25].name;
                    hvision = data[25].vision;
                    hwep = data[25].weapon;
                    hnat = data[25].nation;
                    haffi = data[25].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '5'){
                    hname = data[15].name;
                    hvision = data[15].vision;
                    hwep = data[15].weapon;
                    hnat = data[15].nation;
                    haffi = data[15].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '6'){
                    hname = data[16].name;
                    hvision = data[16].vision;
                    hwep = data[16].weapon;
                    hnat = data[16].nation;
                    haffi = data[16].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '7'){
                    hname = data[27].name;
                    hvision = data[27].vision;
                    hwep = data[27].weapon;
                    hnat = data[27].nation;
                    haffi = data[27].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '8'){
                    hname = data[20].name;
                    hvision = data[20].vision;
                    hwep = data[20].weapon;
                    hnat = data[20].nation;
                    haffi = data[20].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '9'){
                    hname = data[28].name;
                    hvision = data[28].vision;
                    hwep = data[28].weapon;
                    hnat = data[28].nation;
                    haffi = data[28].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }else if (lucky == '10'){
                    hname = data[11].name;
                    hvision = data[11].vision;
                    hwep = data[11].weapon;
                    hnat = data[11].nation;
                    haffi = data[11].affiliation;
                    document.getElementById('hero').innerHTML = hname;
                    document.getElementById('vision').innerHTML = hvision;
                    document.getElementById('weapon').innerHTML = hwep;
                    document.getElementById('nation').innerHTML = hnat;
                    document.getElementById('affiliation').innerHTML = haffi;
                }
                
            })   
        })
        .catch(function (err){
            console.log(err + '404');
        })
}
