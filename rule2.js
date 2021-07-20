//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9. 
Usaged: This is to store the state to the tictactoe board.
When a move is made 
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/* 
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1 

function toggle_move() {
	this.turn = !this.turn
}

/*
@Return int This return the turn variable. Please note that 
turn = 1 is for player_1 and 
turn = 0 is for player_2
@Param - No param
*/
function whose_move(){
	return this.turn
}

function mark_square(square) {
	if (document.getElementById(square).innerHTML != "X" && document.getElementById(square).innerHTML != "O"){
		if (whose_move() == 1 ) {
			document.getElementById(square).innerHTML = "X";
			this.board_state[this.table_ids.indexOf(square)] = 1;	
			toggle_move();
		}
		else {
			document.getElementById(square).innerHTML = "O";
			this.board_state[this.table_ids.indexOf(square)] = 0;
			toggle_move();
		}
		check_winner();
	}
	else {
		alert("invalid move");
	}
} 

function check_winner() {

	if(this.board_state[0] === 1 && this.board_state[1] === 1 && this.board_state[2] === 1){
		alert("X"+" wins");
		shift_play();
	}
	if(this.board_state[0] === 1 && this.board_state[3] === 1 && this.board_state[6] === 1){
		alert("X"+" wins");
		shift_play();
	}
	if(this.board_state[1]=== 1 && this.board_state[4] === 1 && this.board_state[7] === 1) {
		alert("X"+" wins");
		shift_play();

	}
	if(this.board_state[2] === 1 && this.board_state[5] === 1 && this.board_state[8] === 1){
		alert("X"+" wins");
		shift_play();

	}
	if(this.board_state[3] === 1 && this.board_state[4]=== 1 && this.board_state[5] === 1){
		alert("X"+" wins");
		shift_play();

	}
	if (this.board_state[6]=== 1 && this.board_state[7] === 1 && this.board_state[8] === 1) {

		alert("X"+" wins");
		shift_play();
	}
	if(this.board_state[2] === 1 && this.board_state[4] === 1 && this.board_state[6] === 1){
		alert("X"+" wins");
		shift_play();
	}
	if(this.board_state[0] === 1 && this.board_state[4] === 1 && this.board_state[8] === 1){
		alert("X"+" wins");
		shift_play();
	}

   if(this.board_state[0] === 0 && this.board_state[1] === 0 && this.board_state[2] === 0){
		alert("O"+" wins");
		shift_play();
	}
	if(this.board_state[0] === 0 && this.board_state[3] === 0 && this.board_state[6] === 0){
		alert("O"+" wins");
		shift_play();
	}
	if(this.board_state[1]=== 0 && this.board_state[4] === 0 && this.board_state[7] === 0){
		alert("O"+" wins");
		shift_play();

	}
	if(this.board_state[2] === 0 && this.board_state[5] === 0 && this.board_state[8] === 0){
		alert("O"+" wins");
		shift_play();

	}
	if(this.board_state[3] === 0 && this.board_state[4]=== 0 && this.board_state[5] === 0){
		alert("O"+" wins");
		shift_play();

	}
	if (this.board_state[6]=== 0 && this.board_state[7] === 0 && this.board_state[8] === 0) {

		alert("O"+" wins");
		shift_play();
	}
	if(this.board_state[2] === 0 && this.board_state[4] === 0 && this.board_state[6] === 0){
		alert("O"+" wins");
		shift_play();
	}     
	if(this.board_state[0] === 0 && this.board_state[4] === 0 && this.board_state[8] === 0){
		alert("O"+" wins");
		shift_play();
	}

	if (board_state.includes(-1) == false) {
		alert("Draw");
		shift_play_up();

	}
}

function shift_play_up() {
	var keep = [board_state[6], board_state[7], board_state[8]]; 
	for (let i=0; i<9; i++){
		board_state[i] = -1;
		console.log(board_state[i]);
		document.getElementById(table_ids[i]).innerHTML = '   '
	}
	for (let i=0; i<3; i++) {
		if (keep[i] == 1) {
			document.getElementById(table_ids[i]).innerHTML = 'X' 
			board_state[i] = 1;
			
		}
		if (keep[i] == 0) {
			document.getElementById(table_ids[i]).innerHTML = 'O' 
			board_state[i] = 1;
		}
	}
}

function shift_play_down() {
	var keep = [board_state[0], board_state[1], board_state[2]]; 
	for (let i=0; i<9; i++){
		board_state[i] = -1;
		console.log(board_state[i]);
		document.getElementById(table_ids[i]).innerHTML = '   '
	}
	for (let i=0; i<3; i++) {
		if (keep[i] == 1) {
			document.getElementById(table_ids[i+6]).innerHTML = 'X' 
			board_state[i] = 1;
			
		}
		if (keep[i] == 0) {
			document.getElementById(table_ids[i+6]).innerHTML = 'O' 
			board_state[i] = 1;
		}
	}
}
/*
todo
	-replicate shift up for other directions
	-create a function that randomly chooses a previously unchosen direction then calls that shift_play 
	-add score tracking function 
*/