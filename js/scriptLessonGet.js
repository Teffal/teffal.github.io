'use strict'

const readWrite = [
  {eng: "Single letters", rus: "Одиночные согласные буквы"},
  {eng: "Letters in words", rus: "Буквы в словах"},
  {eng: "Combinations of vowels", rus: "Сочетание гласных"},
  {eng: "The first syllable", rus: "Первый тип слога"},
  {eng: "The second syllable", rus: "Второй тип слога"},
  {eng: "The third syllable", rus: "Третий тип слога"},
  {eng: "The fourth syllable", rus: "Четвертый тип слога"},
  {eng: "Prefixes", rus: "Предлоги"},
  {eng: "Unstressed vowels", rus: "Безударные гласные"}
];

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
    elType.setAttribute('class', "AllLessons");
  }
  return elType;
}

// Add first lesson: Single letters
function createRuleOfConsonants(letter) {
  sectionLesson.appendChild(createElement("p", `Правило чтения буквы "${letter.toUpperCase()}" - звучит как русский звук [${consonantLetters[letter]}]. Напечатайте по несколько раз букву для прослушивания её алфавитного произношение, как ориентира для запоминания.`));
  sectionLesson.appendChild(createElement("textarea", ''));
}

// Add first lesson: Single sentences
function createLessonsOne(sent) {
  sectionLesson.appendChild(createElement("li", sent));
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

function getLessonContain(nameLesson, elment, color) {
  let i, allLessons;
  // Remove the background color of all tablinks/buttons
  allLessons = document.getElementsByClassName("AllLessons");
  for (i = 0; i < allLessons.length; i++) {
      allLessons[i].style.backgroundColor = "";
  }

  // Add the specific color to the button used to open the tab content
  elment.style.backgroundColor = color;

  sectionLesson.innerHTML = "";
  switch (nameLesson) {
    case "Single letters": // Title need lesson
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
    case "Простое настоящее время (утвердительные предложения)":
    sectionLesson.appendChild(createElement("h3", lessonsAll.PSAffirmative.unit));
    sectionLesson.appendChild(createElement("i", lessonsAll.PSAffirmative.intro));
    sectionLesson.appendChild(createElement("p", lessonsAll.PSAffirmative.rule));
    lessonFirst.forEach(el => createLessonsOne(el));
    break;
    case "Простое настоящее время (отрицательные предложения)":
    sectionLesson.appendChild(createElement("h3", lessonsAll.PSNegative.unit));
    sectionLesson.appendChild(createElement("i", lessonsAll.PSNegative.intro));
    sectionLesson.appendChild(createElement("p", lessonsAll.PSNegative.rule));
    lessonSecond.forEach(el => createLessonsOne(el));
    break;
    case "Простое настоящее время (общий вопрос: да/нет)":
    sectionLesson.appendChild(createElement("h3", lessonsAll.PSQestionGeneral.unit));
    sectionLesson.appendChild(createElement("i", lessonsAll.PSQestionGeneral.intro));
    sectionLesson.appendChild(createElement("p", lessonsAll.PSQestionGeneral.rule));
    lessonThird.forEach(el => createLessonsOne(el));
    break;
    default:

  }
}
