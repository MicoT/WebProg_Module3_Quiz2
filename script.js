

function getNewName(){
    fetch("https://api.genshin.dev/characters/all")
        .then(function(response){
            console.log(response);
            response.json().then(function (data){
                console.log(data)
                var lucky = document.getElementById('number').value;
                if (lucky == '1'){
                    hname = data[0].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '2'){
                    hname = data[1].name;
                    document.getElementById('hero').innerHTML = hname;
                }else if (lucky == '3'){
                    hname = data[2].name;
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
