const lessonsBase = ['1', '2', '3', '4', '5'];

const wordsSentence = {
  pronouns: ["I", "you", "we", "they"],
  nouns: ["car", "cap", "cat"],
  verbs: ["go", "run", "talk", "see", "sleep"],
  adverbs: ["fast", "slow", "hard", "easy"],
  adverbDefiniteTimes: ["today", "yesterday", "tomorrow"],
  adverbIndefiniteTimes: ["always", "ever", "never", "often", "seldom", "just", "already"]
};


function createSentencesPS(tense, wordsBase, wordsNew, wordsRepeat){
  let i = 1;
  // wordsBase.nouns.forEach(noun =>
  //   wordsBase.verbs.forEach(verb =>
  //     wordsBase.adverbs.forEach(adverb =>
  //       wordsBase.adverbIndefiniteTimes.forEach(adverbIndefiniteTime => console.log(`${i++}) ${noun} ${adverbIndefiniteTime} ${verb} ${adverb}.`)))));

  const repeat = Array.apply(null, Array(2)).map((val, idx) => idx);
  let newSentence, sentences = [];
  switch (tense) {
    case "PSAffirmative":
    if (wordsNew.verbs) {
      wordsNew.verbs.forEach(verb =>
        wordsBase.pronouns.forEach(pronoun => {
          do {
              newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}.`;
          }
          while (sentences.includes(newSentence)) // check for a coincide
          sentences.push(newSentence);
        }
      ));
    }
    break;
    case "PSNegative":
    if (wordsNew.verbs) {
      wordsNew.verbs.forEach(verb =>
        wordsBase.pronouns.forEach(pronoun => {
          do {
              newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} do not ${verb}.`;
          }
          while (sentences.includes(newSentence)) // check for a coincide
          sentences.push(newSentence);
        }
      ));
    }
    break;
    case "PSQestionGeneral":
    if (wordsNew.verbs) {
      wordsNew.verbs.forEach(verb =>
        wordsBase.pronouns.forEach(pronoun => {
          do {
              newSentence = `Do ${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}?`;
          }
          while (sentences.includes(newSentence)) // check for a coincide
          sentences.push(newSentence);
        }
      ));
    }
    break;
    // case PSAffirmative:
    //
    // break;
    default:
  }
  return sentences;
}

// let lessonFirst = createSentencesPS("PSAffirmative", wordsSentence, lessonsAll.PSAffirmative.wordsNew);
// lessonFirst.forEach(el => console.log(el));
