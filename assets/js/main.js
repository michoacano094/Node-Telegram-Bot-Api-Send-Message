var txt;
readFile("./dict/users.json");

function fillUsers(txt) {
    console.log(txt);
    var usersFile = JSON.parse(txt);
    console.log(usersFile);
    var cmbUsers = document.getElementById("cmbUser");
    for (var i = 0; i < usersFile.users.length; i++) {
        var d = usersFile.users[i];
        cmbUsers.options.add(new Option(d.first_name+" "+d.last_name, d.id))
    };
}
function readFile(path) {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            txt = xmlhttp.responseText;
            fillUsers(txt);
        }
    };
    xmlhttp.open("GET",path,true);
    xmlhttp.send();
   
}