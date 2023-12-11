process.stdout.write('hello from spinner1.js... \rheyyy\n');

const symbols = ['|', '/', '-', '\\'];

const spinner = function (index, numOfRotations) {
  process.stdout.write('\r' + symbols[index] + '   ');
  if (numOfRotations === 2) {
    return
  }
  if (index < symbols.length - 1) {
    index++;
  } else {
    index = 0;
    numOfRotations++;
  }
  setTimeout(() => {
    spinner(index, numOfRotations);
  }, 200);
};

setTimeout(() => {
  process.stdout.write('\n');
}, ((symbols.length * 2) * 200) + 200);

spinner(0,0);




