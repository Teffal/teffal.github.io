const lessonsBase = ['1', '2', '3', '4', '5'];

const wordsSentence = {
  pronouns: ["I", "you", "we", "they"],
  nouns: ["car", "cap", "cat"],
  verbs: ["go", "run", "talk", "see", "sleep"],
  adverbs: ["fast", "slow", "hard", "easy"],
  adverbDefiniteTimes: ["today", "yesterday", "tomorrow"],
  adverbIndefiniteTimes: ["always", "ever", "never", "often", "seldom", "just", "already"]
};



function createSentencesPS(wordsBase, wordsNew, wordsRepeat){
  let i = 1;
  // wordsBase.nouns.forEach(noun =>
  //   wordsBase.verbs.forEach(verb =>
  //     wordsBase.adverbs.forEach(adverb =>
  //       wordsBase.adverbIndefiniteTimes.forEach(adverbIndefiniteTime => console.log(`${i++}) ${noun} ${adverbIndefiniteTime} ${verb} ${adverb}.`)))));

  const repeat = Array.apply(null, Array(2)).map((val, idx) => idx);
  let sentences = [];
  if (wordsNew.verbs) {
      wordsNew.verbs.forEach(verb =>
        wordsBase.pronouns.forEach(pronoun =>
          sentences.push(`${i++}) ${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${wordsBase.adverbIndefiniteTimes[Math.floor(Math.random() * wordsBase.adverbIndefiniteTimes.length)]} ${verb}.`)));
          // console.log(`${i++}) ${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${wordsBase.adverbIndefiniteTimes[Math.floor(Math.random() * wordsBase.adverbIndefiniteTimes.length)]} ${verb} ${wordsBase.adverbs[Math.floor(Math.random() * wordsBase.adverbs.length)]}.`)));

  }
  // sentences.forEach(el => console.log(el));
  return sentences;
}

let lessonFirst = createSentencesPS(wordsSentence, wordsSentence);
lessonFirst.forEach(el => console.log(el));
