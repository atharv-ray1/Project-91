player_1name=localStorage.getItem("player_1name");
player_2name=localStorage.getItem("player_2name");
player_score1=0;
player_score2=0;

document.getElementById("player_1name").innerHTML=player_1name+" : ";
document.getElementById("player_2name").innerHTML=player_2name+" : ";

document.getElementById("player1_score").innerHTML=player_score1;
document.getElementById("player2_score").innerHTML=player_score2;
document.getElementById("player_question").innerHTML="Question Turn - "+player_1name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+ player_2name ;


function send(){
   
    number1=document.getElementById("number_tb").value;
    number2=document.getElementById("number_tb1").value;
    actual_answer=parseInt(number1)*parseInt(number2);

    question_number="<h4>"+number1+" X "+number2 + "</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn-btn warning' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";}

    




    
 
 
 
 
 
 

