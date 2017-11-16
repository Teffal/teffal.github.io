const lessonsBase = ['1', '2', '3', '4', '5'];

const wordsSentence = {
  pronouns: ["I", "you", "we", "they"],
  nouns: ["car", "cap", "cat"],
  verbs: ["go", "run", "talk", "see", "sleep"],
  adverbs: ["fast", "slow", "hard", "easy"],
  adverbDefiniteTimes: ["today", "yesterday", "tomorrow"],
  adverbIndefiniteTimes: ["always", "ever", "never", "often", "seldom", "just", "already"]
};

function upFirstCaseSentence(str) {
    return str.replace(/.+?[\.\?\!](\s|$)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
}

function getSentencesGen(construction, words, lang){
  let newSentence, sentences = [];
  words.verbs.forEach(verb => {
    words.pronouns.forEach(pronoun => {
      newSentence = "";
      construction.forEach(el => {
        switch (el) {
          case "pronoun":
            newSentence += ` ${pronoun[lang]}`;
            break;
          case "verb":
            newSentence += ` ${verb[lang]}`;
            break;
          case "PSQestionGeneral":

            break;
          default:
          newSentence += el;
        }
      });
      newSentence = newSentence.slice(0, 1)==" " ? newSentence.slice(1): newSentence; //cut first space
      sentences.push(upFirstCaseSentence(newSentence));
    })
  });
  return sentences;
}

function getSentencesOrderly(sentences, numb){
  let sentencesGroup = [];
  const step = sentences.length/numb
  for (let i = 0; i < sentences.length; i += step){
    sentencesGroup.push(sentences.slice(i, i + step).join(" "));
  }
  return sentencesGroup;
}

function getSentencesMixed(sentences, numb){
  let sentencesGroup = [];
  sentences.sort(function(a,b) {return Math.random() - 0.5;}); // mix values in array
  const step = sentences.length/numb
  for (let i = 0; i < sentences.length; i += step){
    sentencesGroup.push(sentences.slice(i, i + step).join(" "));
  }
  return sentencesGroup;
}

function getExercisesGen(exercise, words){
  let sentencesGen = [];
  exercise.lang.split("-").forEach(lang => sentencesGen = [].concat(sentencesGen, getSentencesGen(exercise.construction, words, lang)));
  if (exercise.difficulty === "orderly") {
    return getSentencesOrderly(sentencesGen, words.verbs.length);
  } else if (exercise.difficulty === "mixed") {
    return getSentencesMixed(sentencesGen, words.verbs.length);
  }
}

function getExercisesAll(nameLesson){
  let exercisesAll = [];
  nameLesson.exercises.forEach(exercise => exercisesAll.push(getExercisesGen(exercise, nameLesson.wordsNew)));
  return exercisesAll;
}





// function createSentencesPS(tense, wordsBase, wordsNew, wordsRepeat){
//   let newSentence, sentencesGroup = [], sentences = [];
//   if (wordsNew.verbs) {
//     wordsNew.verbs.forEach(verb => {
//       sentences = [];
//       if (verb in dictVerbRegular) {
//           dictVerbRegular[verb].def.forEach(el => {
//             if (el.tr[0].pos == "verb"){
//               sentences.push(`${verb} - ${el.tr[0].text}: `);
//             }
//           }
//         );
//       }
//       wordsBase.pronouns.forEach(pronoun => { // !!!местоимение не используется, просто перебирается по его колличеству.
//         do {
//           switch (tense) {
//               case "PSAffirmative":
//                 newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}.`;
//                 break;
//               case "PSNegative":
//                 newSentence = `${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} do not ${verb}.`;
//                 break;
//               case "PSQestionGeneral":
//                 newSentence = `Do ${wordsBase.pronouns[Math.floor(Math.random() * wordsBase.pronouns.length)]} ${verb}?`;
//                 break;
//               default:
//           }
//         }
//         while (sentences.includes(newSentence)) // check for a coincide
//         sentences.push(newSentence);
//       })
//       sentencesGroup.push(sentences.join(" "));
//     });
//   }
//   return sentencesGroup;
// }

// let lessonFirst = createSentencesPS("PSAffirmative", wordsSentence, lessonsAll.PSAffirmative.wordsNew);
// lessonFirst.forEach(el => console.log(el));
