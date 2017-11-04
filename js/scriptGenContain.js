const sectionLetters = document.getElementById("Letters");
const sectionWords = document.getElementById("Words");
const section = document.getElementById("lessons");

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

function createUnit(element, contain){
  sectionWords.appendChild(createElement("h3", `Правило чтения буквы "${contain.char.toUpperCase()}".`));
  if(contain.intro) {
    sectionWords.appendChild(createElement("p", `${contain.intro}`));
  }

  for (let rule of contain.def){
    sectionWords.appendChild(createElement("p", `"${contain.char.toUpperCase()}" - ${rule.rule}`));
    sectionWords.appendChild(createElement("b", `${rule.exam}`));
    sectionWords.appendChild(createElement("textarea", ''));
    if (rule.exce){
      sectionWords.appendChild(createElement("b", `Исключения: ${rule.exce}.`));
      sectionWords.appendChild(createElement("textarea", ''));
    }
  }
}

Object.values(rulesOfRead).forEach(el => createUnit("", el));
