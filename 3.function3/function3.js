document.write(alphabetSort('hello'));

function alphabetSort(message){
    let arr = message.split('');
    let sorted = arr.sort();
    return sorted.join('');
  }