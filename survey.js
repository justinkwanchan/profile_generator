// W02D2 - Fun Profile Generator
// Dynamically create a profile for a user based on answers given on the stdin

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const queryObj = [
  { type: 'name', question: "What's your name? Nicknames are also acceptable :) => ", },
  { type: 'activity', question: "What's an activity you like doing? => ", },
  { type: 'music', question: "What do you listen to while doing that? => ", },
  { type: 'meal', question: "Which meal is your favourite (eg: dinner, brunch, etc.) => ", },
  { type: 'food', question: "What's your favourite thing to eat for that meal? => ", },
  { type: 'sport', question: "Which sport is your absolute favourite? => ", },
  { type: 'superpower', question: "What is your superpower? In a few words, tell us what you are amazing at! => " }
];


const poseQuestions = function() {
  
  rl.question(queryObj[0].question, (answer) => {
    queryObj[0].answer = answer;

    rl.question(queryObj[1].question, (answer) => {
      queryObj[1].answer = answer;
      
      rl.question(queryObj[2].question, (answer) => {
        queryObj[2].answer = answer;
        
        rl.question(queryObj[3].question, (answer) => {
          queryObj[3].answer = answer;
          
          rl.question(queryObj[4].question, (answer) => {
            queryObj[4].answer = answer;
            
            rl.question(queryObj[5].question, (answer) => {
              queryObj[5].answer = answer;
              
              rl.question(queryObj[6].question, (answer) => {
                queryObj[6].answer = answer;
                
                console.log(`${queryObj[0].answer} loves listening to ${queryObj[2].answer} while ${queryObj[1].answer}, devouring ${queryObj[4].answer} for ${queryObj[3].answer}, prefers ${queryObj[5].answer} over any other sport, and is amazing at ${queryObj[6].answer}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

poseQuestions();