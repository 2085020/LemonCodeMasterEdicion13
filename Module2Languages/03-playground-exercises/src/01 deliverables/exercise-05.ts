console.log("************** DELIVERABLE 05 *********************");
class SlothMachine {
    games = 0;
    play = () => {
        this.games ++;
        if (this.generateRandomBoolean() && this.generateRandomBoolean() && this.generateRandomBoolean()) {
            console.log("Congratulations!!!. You won "+this.games+" coins!!");
            this.games = 0;
        } else {
            console.log("Good luck next time!!")
        }
    }

    generateRandomBoolean = () => {
        return Math.random() > 0.5;
    }

  }
  
  const machine1 = new SlothMachine();
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 3 coins!!"
  machine1.play(); // "Good luck next time!!"
  machine1.play(); // "Congratulations!!!. You won 2 coins!!"
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  machine1.play();
  