
class Player{
	constructor(){
		this.name=null;
		this.hand=null;
	}
}
const game={
	players:[], //arr of 2 players
	
	start(){
		this.inputPlayerName();
		let i=1; //number of turn
		while(true){
			this.playTurn(i++);
			let winner=this.findPlayerWin();
			if (winner!==3) {
				this.gameOver(winner,i-1);
				break;
			}
			alert(`2 players choose same things! Please take more 1 turn`);
		}

		
	},
	inputPlayerName(){
		for (let i = 0; i<=1; i++) {
			const player= new Player();
			player.name=prompt(`Enter the name player ${i+1}:`);
			this.players.push(player);
		}
	},
	playTurn(i){
		//get 2 players choice
		for(let x=0;x<=1;x++){
			let choice=prompt(`Turn ${i}, player ${x+1}:  ${this.players[x].name}\r\nEnter your number decision(1 is rock, 2 is paper and 3 is scissors):`);
			//validate input
			if (Number.isNaN(Number(choice))||choice<1||choice>3) {
				alert('The input must be 1, 2 or 3');
				x--;
			}
			else this.players[x].hand=Number(choice);
		}
		
	},
	//a method find who win, return 3 if no one win.
	findPlayerWin(){
		if (this.players[0].hand==this.players[1].hand){ //no one wwin
			return 3;
		}
		else
		if ((this.players[0].hand+this.players[1].hand)==4) { //rock and scissors
			if (this.players[0].hand==1) {
				return 1;
			}
			else return 2;
		}
		//otherwhise
		else{
			if (this.players[0].hand>this.players[1].hand) 
				return 1;
			else return 2;
		}
	},
	gameOver(i, turn){
		alert(`Player ${i}: ${this.players[i-1].name} has won after ${turn} turns!`);
	}
}
game.start();