document.write(palindrome('hello'));
document.write(palindrome('abcba'));
document.write(palindrome('helloo'));
document.write(palindrome('abccba'));

function palindrome(message){
    if (typeof(message) === 'string')
    {
        let left = 0;
        let right = 0;
        if (message.length % 2 == 0)
        {
            left = message.length / 2 - 1;
            right = message.length / 2;
        }
        else
        {
            left = message.length / 2 - 1.5;
            right = message.length / 2 + 0.5;
        }

        while (left >= 0 && right < message.length)
        {
            if (message[left] != message[right])
            {
                return false;
            }
            left--;
            right++;
        }
        return true;
    }
    return false;
  }