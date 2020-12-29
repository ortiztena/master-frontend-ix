interface Specs {
    coins: Number;
    play: Function;
  }
  
class SlothMachine {
    coins = 0;

    play() {
        this.coins++
        function luck(): Boolean { return Math.random() < 0.5 };
        const reward: Boolean = (luck() && luck() && luck()) ? true : false;

        if (reward) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
            this.coins = 0;
        }
        else {
            console.log("Good luck next time!!")
        }
    }
}
  
const machine1 : Specs = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play();
machine1.play(); 
machine1.play(); 