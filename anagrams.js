const anagramFinder = function (word) {
    let list = [];
    if (word.length === 1) {
      list.push(word[0]);
      return list;
    }
    for (let i = 0; i < word.length; i++) {
      const prefix = word[i];
      const rest = word.substring(0, i) + word.substring(i + 1);
      let words = anagramFinder(rest);
      for (let j = 0; j < words.length; j++) {
        list.push(prefix + words[j]);
      }
    }
    return list;
  };