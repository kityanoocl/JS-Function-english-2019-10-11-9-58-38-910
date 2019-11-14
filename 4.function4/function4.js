document.write(countWords('Good morning, I love JavaScript.'));

function countWords(message){
  // wirte your code here
  if (typeof(message) === 'string')
  {
    let space = true;
    let count = 0;
    for (let i = 0; i < message.length; i++)
    {
        if (message[i] == ' ')
        {
          space = true;
        }
        else
        {
          if (space == true)
          {
            count++;
            space = false;
          }
        }
    }
    return count;
  }

  return 0;
}