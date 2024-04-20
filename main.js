const robot = require('robotjs');
const pos = require('./pos');

const SingleClick = false;
const DoubleClick = true;
const {
  Servers,
  Channel,
  Character,
  MenuOpen,
  MenuTaskIcon,
  MenuTaskAccept,
  MenuTaskComplete,
} = pos;
const sel = process.env.SERVER_SEL;

console.log(sel);

robot.setMouseDelay(100);
robot.setKeyboardDelay(100);

const main = async () => {
  await sleep(5000);
  robot.keyTap('left', 'command');
  console.log(`server ${sel} start`);
  robot.moveMouse(Servers[sel - 1].x, Servers[sel - 1].y);
  robot.mouseClick('left', SingleClick);
  await sleep(3000);
  robot.moveMouse(Channel.x, Channel.y);
  robot.mouseClick('left', DoubleClick);
  await sleep(5000);
  robot.moveMouse(Character.x, Character.y);
  robot.mouseClick('left', DoubleClick);
  await sleep(10000);
  robot.keyTap('escape');
  await sleep(3000);
  robot.moveMouse(MenuOpen.x, MenuOpen.y);
  robot.mouseClick('left', SingleClick);
  await sleep(3000);

  for (let i = 0; i < 5; i++) {
    robot.moveMouse(MenuTaskIcon.x, MenuTaskIcon.y);
    robot.mouseClick('left', SingleClick);
    await sleep(3000);
    robot.moveMouse(MenuTaskAccept.x, MenuTaskAccept.y);
    robot.mouseClick('left', SingleClick);
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
    robot.keyTap('space');
    await sleep(930000);
    robot.moveMouse(MenuTaskIcon.x, MenuTaskIcon.y);
    robot.mouseClick('left', SingleClick);
    await sleep(3000);
    robot.moveMouse(MenuTaskComplete.x, MenuTaskComplete.y);
    robot.mouseClick('left', SingleClick);
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
    robot.keyTap('space');
    await sleep(3000);
  }

  robot.keyTap('escape');
  await sleep(3000);
  robot.keyTap('up');
  await sleep(3000);
  robot.keyTap('enter');
  await sleep(3000);
  robot.keyTap('enter');
  await sleep(5000);
  robot.keyTap('escape');
  console.log(`server ${sel} end`);
}

function sleep(ms) {
  console.log(`sleep ${ms}`);
  return new Promise(resolve => setTimeout(resolve, ms));
}

main();
