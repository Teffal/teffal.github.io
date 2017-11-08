'use strict'

const lessonsRead = {
  Letters: "Single letters",
  Words: "Letters in words",
  Vowels: "Combinations of vowels",
  SylFirst: "The first syllable",
  SylSecond: "The second syllable",
  SylThird: "The third syllable",
  SylFourth: "The fourth syllable",
  Prefixes: "Prefixes",
  UnstressedVowels:"Unstressed vowels"
}

const sectionLesson = document.getElementById("LessonContain");

// Add differen html element
function createElement(el, contain, myFunct){
  let elType = document.createElement(el);

  if (typeof contain !== "string"){
    elType.appendChild(contain);
  } else {
    elType.appendChild(document.createTextNode(contain));
  }

  if (myFunct) {
    elType.addEventListener("click", myFunct);
  }
  return elType;
}

// Add first lesson: Single letters
function createRuleOfConsonants(letter){
      sectionLesson.appendChild(createElement("p", `Правило чтения буквы "${letter.toUpperCase()}" - звучит как русский звук [${consonantLetters[letter]}]. Напечатайте по несколько раз букву для прослушивания её алфавитного произношение, как ориентира для запоминания.`));
      sectionLesson.appendChild(createElement("textarea", ''));
    }

// Add another lessons
function createUnit(self, contain){
  self.appendChild(createElement("h4", `Чтение "${contain.char.toUpperCase()}".`));
  if(contain.intro) {
    self.appendChild(createElement("p", `${contain.intro}`));
  }
  for (let rule of contain.def){
    self.appendChild(createElement("p", `"${contain.char.toUpperCase()}" - ${rule.rule}`));
    self.appendChild(createElement("b", `${rule.exam}`));
    self.appendChild(createElement("textarea", ''));
    if (rule.exce){
      self.appendChild(createElement("b", `Исключения: ${rule.exce}.`));
      self.appendChild(createElement("textarea", ''));
    }
  }
}

function getLessonContain(nameLesson, s, par2) {
  sectionLesson.innerHTML = "";
  switch (nameLesson) {
    case "Single letters":
    sectionLesson.appendChild(createElement("h3", `Правило чтения согласных букв английского языка.`));
    Object.keys(consonantLetters).forEach(el => createRuleOfConsonants(el));
    break;
    case "Letters in words":
    Object.values(rulesOfRead).forEach(el => createUnit(sectionLesson, el));
    break;
    case "Combinations of vowels":
    sectionLesson.appendChild(createElement("h3", combinationVowels.type));
    Object.values(combinationVowels.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "The first syllable":
    sectionLesson.appendChild(createElement("h3", syllableFirst.type));
    Object.values(syllableFirst.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "The second syllable":
    sectionLesson.appendChild(createElement("h3", syllableSecond.type));
    sectionLesson.appendChild(createElement("p", syllableSecond.intro));
    Object.values(syllableSecond.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "The third syllable":
    sectionLesson.appendChild(createElement("h3", syllableThird.type));
    Object.values(syllableThird.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "The fourth syllable":
    sectionLesson.appendChild(createElement("h3", syllableFourth.type));
    Object.values(syllableFourth.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "Prefixes":
    sectionLesson.appendChild(createElement("h3", prefixes.type));
    sectionLesson.appendChild(createElement("p", prefixes.intro));
    Object.values(prefixes.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    case "Unstressed vowels":
    sectionLesson.appendChild(createElement("h3", unstressedVowels.type));
    sectionLesson.appendChild(createElement("p", unstressedVowels.intro));
    Object.values(unstressedVowels.letters).forEach(el => createUnit(sectionLesson, el));
    break;
    default:

  }
}
