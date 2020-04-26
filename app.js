function checksize(){
    var input_string = document.getElementById("input-words").value;
    var cols = document.getElementById("cols").value;
    var rows = document.getElementById("rows").value;
    var warning = document.getElementById("warning")
    var inputs =  input_string.split(",");
    var ilen = inputs.length

    if(ilen< (rows*cols)*2){
        console.log("warning")
        warning.innerHTML="You should at least enter " + rows*cols*2 +" items.";
    }
    else{
        warning.innerHTML="";
        maketables();
    }
}



async function maketables() {
    var dvTable1 = document.getElementById("dvTable1");
    var dvTable2 = document.getElementById("dvTable2");
    var dvTable3 = document.getElementById("dvTable3");
    var ticket1 = document.getElementById("ticket1");
    var ticket2 = document.getElementById("ticket2");
    var ticket3 = document.getElementById("ticket3");
    dvTable1.innerHTML = "";
    dvTable2.innerHTML = "";
    dvTable3.innerHTML = "";
    var no_of_tickets = document.getElementById("no_of_tickets").value;
    console.log(no_of_tickets/3);
    for(var i=0;i<Math.floor(no_of_tickets/3);i++){
        await sleep(250);
        var table1 = GenerateTable();
        var caption1 = table1.createCaption()
        caption1.innerHTML = "<center><b>Ticket " + String(Number((i*3)+1))+ "</b></center>";
        dvTable1.appendChild(table1)
        await sleep(250);
        var table2 = GenerateTable();
        var caption2 = table2.createCaption()
        caption2.innerHTML = "<center><b>Ticket " + String(Number((i*3)+2))+ "</b></center>";
        dvTable2.appendChild(table2);
        await sleep(250);
        var table3 = GenerateTable();
        var caption3 = table3.createCaption()
        caption3.innerHTML = "<center><b>Ticket " + String(Number((i*3)+3))+ "</b></center>";
        dvTable3.appendChild(table3);
        
    }
    var rem = no_of_tickets%3;
    if(rem==1){
        var table1 = GenerateTable();
        var caption1 = table1.createCaption()
        caption1.innerHTML = "<center>Ticket " + String(Number((i*3)+1))+ "</center>";
        dvTable1.appendChild(table1);
    }
    else if(rem==2){
        var table1 = GenerateTable();
        var caption1 = table1.createCaption()
        caption1.innerHTML = "<center>Ticket " + String(Number((i*3)+1))+ "</center>";
        dvTable1.appendChild(table1);
        var table2 = GenerateTable();
        var caption2 = table2.createCaption()
        caption2.innerHTML = "<center>Ticket " + String(Number((i*3)+2))+ "</center>";
        dvTable2.appendChild(table2);
    }

}



function GenerateTable() {

    var cols = document.getElementById("cols").value;
    var rows = document.getElementById("rows").value;
    //console.log(cols , rows);
    var input_string = document.getElementById("input-words").value;
    //console.log(typeof(input_words));
    var inputs =  input_string.split(",");
    console.log(inputs[4]);
    var table = document.createElement("TABLE");
    table.border = "1";

    var rand_words=[]
    
    while(rand_words.length!= (rows*cols)){
        var num = Math.floor(Math.random() * inputs.length)
        if(!rand_words.includes(inputs[num])){
            rand_words.push(inputs[num]);
        }
    }

    //Add the data rows.
    for (var i = 0; i < rows; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < cols; j++) {
            var num = Math.floor(Math.random() * inputs.length)
            var cell = row.insertCell(-1);
            cell.innerHTML = rand_words[(i*3)+j];
        }
    }
    return table;
}

function getrandomnos(){
    var input_string = document.getElementById("input-words").value;
    var inputs =  input_string.split(",");
    var num = Math.floor(Math.random() * inputs.length);
    
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    

    var host = document.getElementById("host");
    host.innerHTML = inputs[num].toUpperCase() ;
    host.style.color = randomColor;
}

function change_input(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].value;
    var textbox = document.getElementById("input-words");
    console.log(strUser);
    if(strUser==2){
        textbox.value = "war,farm,national,brave,answer,opinion,typical,according,motion,square,finally,strong,afraid,load,cap,burn,her,donkey,powerful,operation,look,everywhere,low,higher,shape,soap,journey,handle,do,chamber,seat,develop,nervous,add,against,yesterday,flow,past,radio,effect,tight,biggest";
    }
    else if(strUser==3){
        textbox.value=" 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }