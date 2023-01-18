player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1score=0;
player2score=0;
document.getElementById("player1_name").innerHTML=player1_name+" :";
document.getElementById("player2_name").innerHTML=player2_name+" :"
document.getElementById("player1_score").innerHTML=player1score;
document.getElementById("player2_score").innerHTML=player2score;
document.getElementById("player_quest").innerHTML="Question turn - " + player1_name;
document.getElementById("player_ans").innerHTML="Answer turn - " + player2_name;

function send(){
    getword=document.getElementById("word").value;
    Word=getword.toLowerCase();

    charAt1=Word.charAt(1);
    middleletter=Math.floor(Word.length/2);
    charAt2=Word.charAt(middleletter);
    lastletter=Word.length-1;
    charAt3=Word.charAt(lastletter);

    removecharAt1=Word.replace(charAt1,"_");
    removecharAt2=removecharAt1.replace(charAt2,"_");
    removecharAt3=removecharAt2.replace(charAt3,"_");

    question_word="<h4 id='word_display'> Q."+removecharAt3+"</h4>";
    input_box="<br> Answer: <input type='text' id='inputbox'>";
    checkbtn="<br> <br> <button class='btn btn-secondary' onclick='check()'> CHECK </button>";

    row=question_word+input_box+checkbtn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}

question_turn=" Player_1 "
answer_turn=" Player_2 "

function check(){
    get_answer=document.getElementById("inputbox").value ;
    answer=get_answer.toLowerCase();
    if (answer==Word){
        if (answer_turn=="Player_1"){
            player1score=player1score+1;
            document.getElementById("player1_score").innerHTML=player1score;
        }
         else {
            player2score=player2score+2;
            document.getElementById("player2_score").innerHTML=player2score;
         }
    }



    if (question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_quest").innerHTML="Question turn - " + player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_quest").innerHTML="Question turn - " + player1_name;
    }



    if (answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_ans").innerHTML="Answer turn - " + player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_ans").innerHTML="Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML="";
}