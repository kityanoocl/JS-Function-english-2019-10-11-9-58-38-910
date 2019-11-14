document.write(reverseString('hello'));

function reverseString(message)
{
    var s = '';
    if (typeof(message) === 'string')
    {
        for (let i = message.length - 1; i >= 0; i--)
        {
            s += message[i];
        }
    }
    return s;
}