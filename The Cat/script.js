//define object
const mycat={
	tiredness:50,
	hunger:50,
	lonliness:50,
	happiness:50,

	/*feed(){
		this.hunger-=50;
		if (this.hunger<0) {this.hunger=0}
	},*/
	sleep(){
		this.tiredness-=50;
		if (this.tiredness<0) {this.tiredness=0}
		this.lonliness+=50;
	},
	pet(){
		this.lonliness-=50;
		if (this.lonliness<0) {this.lonliness=0}
		this.happiness+=50;
		this.tiredness+=50;
		this.hunger+=50;
	},
	printStatus(){
		if (this.tiredness>50)
			console.log("The cat is tired");
		else console.log("The cat is fine")
		
		if (this.hunger>50)
			console.log("The cat is hungry");
		else if (this.hunger===0) 
			console.log("The cat can't eat any more!");
		else console.log("The cat is full")

		if (this.lonliness>50)
			console.log("The cat is lonely");
		else console.log("The cat is happy")	
		console.log("--------------")		
	},

	feed(amount=50){
		this.hunger-=amount;
		if (this.hunger<0) {this.hunger=0}
	}
}
//test object
mycat.pet();
mycat.feed(70);
mycat.printStatus();
