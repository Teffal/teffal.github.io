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
  let newSentence, sentencesGroup = [], sentences = [];
  if (wordsNew.verbs) {
    wordsNew.verbs.forEach(verb => {
      sentences = [];
      if (verb in dictVerbRegular) {
          dictVerbRegular[verb].def.forEach(el => {
            if (el.tr[0].pos == "verb"){
              sentences.push(`${verb} - ${el.tr[0].text}: `);
            }
          }
        );
      }
      wordsBase.pronouns.forEach(pronoun => {
        do {
          switch (tense) {
              case "PSAffirmative":
                newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}.`;
                break;
              case "PSNegative":
                newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} do not ${verb}.`;
                break;
              case "PSQestionGeneral":
                newSentence = `Do ${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}?`;
                break;
              default:
          }
        }
        while (sentences.includes(newSentence)) // check for a coincide
        sentences.push(newSentence);
      })
      sentencesGroup.push(sentences.join(" "));
    });
  }
  return sentencesGroup;
}

// let lessonFirst = createSentencesPS("PSAffirmative", wordsSentence, lessonsAll.PSAffirmative.wordsNew);
// lessonFirst.forEach(el => console.log(el));
