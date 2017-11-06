const sectionLetters = document.getElementById("Letters");
const sectionWords = document.getElementById("Words");
const sectionVowels = document.getElementById("Vowels");
const sectionSylFirst = document.getElementById("SylFirst");
const sectionSylSecond = document.getElementById("SylSecond");
const sectionSylThird = document.getElementById("SylThird");
const sectionSylFourth = document.getElementById("SylFourth");
const sectionPrefixes = document.getElementById("Prefixes");
const sectionUnstressedVowels = document.getElementById("UnstressedVowels");

function createElement(el, contain){
  let elType = document.createElement(el);
  elType.appendChild(document.createTextNode(contain));
  return elType;
}

function createRuleOfConsonants(letter){
  sectionLetters.appendChild(createElement("p", `Правило чтения буквы "${letter.toUpperCase()}" - звучит как русский звук [${consonantLetters[letter]}]. Напечатайте по несколько раз букву для прослушивания её алфавитного произношение, как ориентира для запоминания.`));
  sectionLetters.appendChild(createElement("textarea", ''));
}
sectionLetters.appendChild(createElement("h3", `Правило чтения согласных букв английского языка.`));
Object.keys(consonantLetters).forEach(el => createRuleOfConsonants(el));

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

Object.values(rulesOfRead).forEach(el => createUnit(sectionWords, el));

sectionVowels.appendChild(createElement("h3", combinationVowels.type));
Object.values(combinationVowels.letters).forEach(el => createUnit(sectionVowels, el));

sectionSylFirst.appendChild(createElement("h3", syllableFirst.type));
Object.values(syllableFirst.letters).forEach(el => createUnit(sectionSylFirst, el));

sectionSylSecond.appendChild(createElement("h3", syllableSecond.type));
sectionSylSecond.appendChild(createElement("p", syllableSecond.intro));
Object.values(syllableSecond.letters).forEach(el => createUnit(sectionSylSecond, el));

sectionSylThird.appendChild(createElement("h3", syllableThird.type));
Object.values(syllableThird.letters).forEach(el => createUnit(sectionSylThird, el));

sectionSylFourth.appendChild(createElement("h3", syllableFourth.type));
Object.values(syllableFourth.letters).forEach(el => createUnit(sectionSylFourth, el));

sectionPrefixes.appendChild(createElement("h3", prefixes.type));
sectionPrefixes.appendChild(createElement("p", prefixes.intro));
Object.values(prefixes.letters).forEach(el => createUnit(sectionPrefixes, el));

sectionUnstressedVowels.appendChild(createElement("h3", unstressedVowels.type));
sectionUnstressedVowels.appendChild(createElement("p", unstressedVowels.intro));
Object.values(unstressedVowels.letters).forEach(el => createUnit(sectionUnstressedVowels, el));
