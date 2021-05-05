class Question {
  //IN SKETCH WE MADE CHANGES TO CANVAS SIZE, ACCORDINGLY MAKE CHANGES HERE
    constructor() {
      this.input1 = createInput("Enter Name");
      this.input2 = createInput("Correct option");
      this.button = createButton('submit');
      this.question = createElement('h3');
      this.title = createElement('h1');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(450, 100);
  
      this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      this.question.position(450, 180);
      this.option1.html("1: Everyone " );
      this.option1.position(450, 200);
      this.option2.html("2: Envelope" );
      this.option2.position(450, 220);
      this.option3.html("3: Estimate " );
      this.option3.position(450, 240);
      this.option4.html("4: Example" );
      this.option4.position(450, 260);
  
      this.input1.position(450, 330);
      this.input2.position(750, 330);
      this.button.position(690, 400);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }