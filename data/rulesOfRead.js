const rulesOfRead = {
  "c": {
    "head": {},
    "char": "c",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [с], только на альвеолах, если стоит перед гласными e, i, y:",
        "ts": "s",
        "exam": "circus, cycle, city, cellular, cedar, scent"
      },
      {
        "rule": "звучит как русский звук [к], но сильнее, в остальных случая, если НЕ стоит перед гласными e, i, y:",
        "ts": "k",
        "exam": "cat, cut, crate, crystal, cop, critical"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "g": {
    "head": {},
    "char": "g",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как сочетание русских звуков [дж], если стоит перед гласными e, i, y:",
        "ts": "d3",
        "exam": "gentleman, gym, gin"
      },
      {
        "rule": "звучит как русский звук [г]. В остальных случаях, если НЕ стоит перед гласными e, i, y:",
        "ts": "g",
        "exam": "glad, dog, grade, bag",
        "exce": "get, give, girl, gift"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "сh": {
    "head": {},
    "char": "сh",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [ч]:",
        "ts": "t∫",
        "exam": "Chips, chupa – chups, chocolate, children."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "ck": {
    "head": {},
    "char": "ck",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [к]:",
        "ts": "k",
        "exam": "pack, stack, slack, nick, neck, stick, click, deck, duck, stuck, truck, struck, lock, clock, block, black, stock, pocket."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "sh": {
    "head": {},
    "char": "sh",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [ш]:",
        "ts": "∫",
        "exam": "ship, shop, shell"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "th": {
    "head": {},
    "char": "th",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [з] (межзубный звук), характерный только для английского языка. Звонкий межзубный звук [ ð ] встречается между гласными.",
        "ts": "ð",
        "exam": "Weather, leather, whether, without."
      },
      {
        "rule": "звучит как русский звук [з] (межзубный звук), характерный только для английского языка. Звонкий межзубный звук [ ð ] встречается в служебных словах.",
        "ts": "ð",
        "exam": "Тhis, that, these, those, then, than, thus, though, the, they, their, them, with"
      },
      {
        "rule": "звучит как русский звук [c] (межзубный звук), характерный только для английского языка. Звонкий межзубный звук [ ð ] встречается в служебных словах.",
        "ts": "ϴ",
        "exam": "Bath, thunder, thousand."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "gh": {
    "head": {},
    "char": "gh",
    "vowel": false,
    "def": [
      {
        "rule": "не читается в словах:",
        "ts": "",
        "exam": "though, thought, eight, bought."
      },
      {
        "rule": "ряде слов звучит как русский звук [ф]:",
        "ts": "f",
        "exam": "Rough, tough, enough, laugh."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "ph": {
    "head": {},
    "char": "ph",
    "vowel": false,
    "def": [
      {
        "rule": "встречается в словах греческого происхождения и звучит как русский звук [ф]:",
        "ts": "f",
        "exam": "Photo, photography, geography, philosophy, physics."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "wh": {
    "head": {},
    "char": "wh",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [х], если после сочетания стоит [o]:",
        "ts": "h",
        "exam": "Who, whom, whose, whomsoever, whole, whore, whorehouse."
      },
      {
        "rule": "в остальных случаях:",
        "ts": "w",
        "exam": "wheat, while, when, where, whip, white, whale, what, wheedle, wheel, wharf, whelm, whey, which, why, whiffy, whiflet, whinny, whinger, whisky, whist.",
        "exce": "whoopie, whorl, whopper."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "wr": {
    "head": {},
    "char": "wr",
    "vowel": false,
    "def": [
      {
        "rule": "w не читается, звучит как русский звук [р] (язык поднять к небу):",
        "ts": "r",
        "exam": "Wrong, write, wreck."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "kn": {
    "head": {},
    "char": "kn",
    "vowel": false,
    "def": [
      {
        "rule": "если в начале слова, k не читается. Звучит как русский звук [н]:",
        "ts": "n",
        "exam": "Knit, knight, knee, knife, knap."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "qu": {
    "head": {},
    "char": "qu",
    "vowel": false,
    "intro": "Если вы заглянете в английский алфавит, кто перед буквой R вы найдете букву Q. Как [kju:] она никогда не читается, только в алфавите так называется, а звуков дает два, в зависимости от того. В каком окружении мы ее встречаем. Q всегда путешествует с одной и той же буквой – u. Получается сочетание qu.В начале слов оно дает звук [kw]. А остальная часть слова читается по правилам.  Обратите внимание на то,что во всех словах за q  идет u.",
    "def": [
      {
        "rule": "звучит как русский звук [кв], в начале слова:",
        "ts": "kw",
        "exam": "Queen, quite, quiet, quick."
      },
      {
        "rule": "звучит как русский звук [к], обычно в конце слова:",
        "ts": "k",
        "exam": "Antique, unique, cheque."
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  }
}

// console.log(Object.values(rulesOfRead));
// Object.values(rulesOfRead).forEach(el => console.log(el));
