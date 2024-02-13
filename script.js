const start = `Welcome to the Star Wars Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are rebel pilot trying to destroy the death star. Should you...
1. Get in a Y-Wing bomber
OR
2. Get in an X-Wing
${enter}`;

const gameOver1 = `You get in a Y-Wing and can't outrun the TIE Fighters. ${gameOver}`;

const q2 = `You get in a X-Wing and see the death star in front of you. Should you...
1. Shoot directly at it
OR
2. Go into the trench
${enter}`;

const gameOver2 = `You shoot directly at the death star but the armor absorbs it and you get destroyed by it's turbo lasers. ${gameOver}`;

const q3 = `You go into the trench of the death star and see TIE fighters trying to surround you. Should you...
1. Wait for them to get in front of you
OR
2. Try to turn around
${enter}`;

const gameOver3 = `You try to turn around but crash into the walls. ${gameOver}`;

const q4 = `You wait for the TIE fighters to get in front of you and destroy them, as you get close to the reactor core Darth Vader's TIE comes up behind you. Should you...
1. Speed up and try to dodge him
OR
2. Try to knock one of his squad members into him
${enter}`;

const gameOver4 = `You speed up a dodge one bolt from him but he catches up and knocks your life support systems offline. ${gameOver}`;

const q5 = `You knock one of his squad members into him and knock him out into space. Should you...
1. Shoot the reactor core
OR
2. Take out the turbo lasers around the reactor core
${enter}`;

const gameOver5 = `You take out the turbo lasers around the reactor core but more TIE fighters come and destroy you. ${gameOver}`;

const q6 = `The reactor core explodes and you have to get out quickly. Should you...
1. Go out the way you came
OR
2. Go straight through the fire
${enter}`;

const gameOver6 = `You go straight through the fire and get destroyed by the explosion. ${gameOver}`;

const win = `You get out quickly and safely. CONGRATULATIONS! YOU DESTROYED THE DEATH STAR!!!`;

alert(start);

let userInput = prompt(q1);

if (userInput == 2) {
  userInput = prompt(q2);

  if (userInput == 2) {
    userInput = prompt(q3);

    if (userInput == 1) {
      userInput = prompt(q4);

      if (userInput == 2) {
        userInput = prompt(q5);

        if (userInput == 1) {
          userInput = prompt(q6);

          if (userInput == 1) {
            alert(win);
          } else {
            alert(gameOver6);
          }
        } else {
          alert(gameOver5);
        }
      } else {
        alert(gameOver4);
      }
    } else {
      alert(gameOver3);
    }
  } else {
    alert(gameOver2);
  }
} else {
  alert(gameOver1);
}
