const rulesOfRead = {
  "c": {
    "head": {},
    "char": "c",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [с], только на альвеолах, если стоит перед гласными [e]:",
        "write": "+e",
        "ts": "s",
        "exam": "cell, dance, face, fence, force, ice, juice, nice, ocean, once, pace, peace, piece, place, price, race, rice, sauce, scene, since, slice, space, trace, twice, voice"
      },
      {
        "rule": "звучит как русский звук [с], только на альвеолах, если стоит перед гласными [i]:",
        "write": "+i",
        "ts": "s",
        "exam": "acid, ancient, circle, cite, citizen, city, civil, council, crucial, decide, deficit, racial, recipe, science, social, society, special, species, suicide"
      },
      {
        "rule": "звучит как русский звук [с], только на альвеолах, если стоит перед гласными [y]:",
        "write": "+y",
        "ts": "s",
        "exam": "agency, cycle, democracy, efficiency, emergency, frequency, legacy, policy, pregnancy, privacy, tendency"
      },
      {
        "rule": "звучит как русский звук [к], но сильнее, в остальных случая, если НЕ стоит перед гласными [e, i, y]:",
        "write": "-e -i -y",
        "ts": "k",
        "exam": "act, cake, call, camp, can, cap, car, card, care, case, cash, cast, cat, club, clue, coal, coat, code, cold, come, cook, cool, cop, cope, copy, core, corn, cost, cow, crew, crop, cry, cup, cut, fact"
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
        "rule": "звучит как сочетание русских звуков [дж], если стоит перед гласными [e]:",
        "write": "+e",
        "ts": "dƷ",
        "exam": "gentleman, age, agency, agenda, agent, bridge, budget, change, charge, damage, danger, edge, emerge, engage,  garage, gender, gene, gently,  huge, image, judge, large, legend, manage, orange, page, range, stage, urge, wage"
      },
      {
        "rule": "звучит как сочетание русских звуков [дж], если стоит перед гласными [i]:",
        "write": "+i",
        "ts": "dƷ",
        "exam": "gin, changing, digital, engine, engineer, giant, imagine, margin, origin, original, regime, region, regional, register, religion"
      },
      {
        "rule": "звучит как сочетание русских звуков [дж], если стоит перед гласными [y]:",
        "write": "+y",
        "ts": "dƷ",
        "exam": "gym, energy, psychology, strategy, technology"
      },
      {
        "rule": "звучит как русский звук [г]. В остальных случаях, если НЕ стоит перед гласными [e, i, y]:",
        "write": "-e, -i, -y",
        "ts": "g",
        "exam": "glad, dog, grade, bag",
        "exce": "eager, anger, singer, get, target, finger, forget, gear, begin, gift, gifted, girl, give, given"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "s": {
    "head": {},
    "char": "s",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [з], если стоит между гласными:",
        "ts": "Ʒ",
        "exam": "base, busy, case, ease, easy, lose, nose, pose, rise, rose, use, used, user, wise"
      },
      {
        "rule": "звучит как русский звук [с], в остальных случаях:",
        "ts": "s",
        "exam": "as, ask, bus, gas, his, its, sad, say, sea, see, set, sex, sin, sir, sit, six, ski, sky, so, son, sue, sun, us, yes"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "ch": {
    "head": {},
    "char": "ch",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [ч]:",
        "ts": "t∫",
        "exam": "chupa – chups, chocolate, children, beach, bench, bunch, catch, chain, chair, chart, chase, cheap, check, cheek, chef, chest, chief, child, chip, coach, couch, each, lunch, match, much, patch, pitch, porch, reach, rich, such, teach, touch, watch, which"
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
        "exam": "attack, back, black, block, brick, buck, check, clock, crack, deck, jacket, kick, knock, lack, lock, luck, lucky, neck, pack, pick, pocket, quick, rock, shock, sick, stick, stock, thick, ticket, track, trick, truck"
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
        "exam": "brush, cash, crash, dish, finish, fish, flesh, fresh, Irish, Jewish, push, rush, shade, shadow, shake, shall, shape, share, sharp, she, sheet, shelf, shell, shift, shine, ship, shirt, shit, shock, shoe, shoot, shop, shore, short, shot, should, shout, show, shower, shrug, shut, wash, wish"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "ssion": {
    "head": {},
    "char": "ssion",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как сочетание русских букв [шн]:",
        "ts": "ʃən",
        "exam": "emission, mission, passion, session"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "tion": {
    "head": {},
    "char": "tion",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как сочетание русских букв [шн]:",
        "ts": "ʃən",
        "exam": "action, edition, emotion, fiction, mention, motion, nation, notion, option, portion, section, station"
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
        "exam": "another, author, bother, breathe, brother, clothes, either, ethics, father, gather, leather, method, mother, neither, nothing, other, others, rather, weather, whether, within, without"
      },
      {
        "rule": "звучит как русский звук [з] (межзубный звук), характерный только для английского языка. Звонкий межзубный звук [ ð ] встречается в служебных словах.",
        "ts": "ð",
        "exam": "than, that, the, their, them, theme, then, there, these, they, this, those,     thus, though, with"
      },
      {
        "rule": "звучит как русский звук [c] (межзубный звук), [ϴ]  будет глухим в остальных случаях",
        "ts": "ϴ",
        "exam": "athlete, beneath, birth, both, breath,  death, depth, earth, ethnic, faith, fifth, forth, fourth, growth, health, healthy, length, math, month, mouth, myth, north, path, rhythm, smooth, south, thank, thanks, theater, theory, therapy, thick, thin, thing, think, third, thirty, though, thought, thousand, threat, three, throat, through, throw, thus, tooth, truth, wealth, wealthy, with, worth, youth"
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
        "exam": "bought, bright, eight, fight, fighter, flight, height, high, highly, highway, insight, light, might, night, ought, right, roughly, sigh, sight, slight, though, thought, tight, tonight, weigh, weight"
      },
      {
        "rule": "ряде слов звучит как русский звук [ф]:",
        "ts": "f",
        "exam": "enough, laugh, rough, through, tough",
        "exce": "ghost"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
  "gn": {
    "head": {},
    "char": "gn",
    "vowel": false,
    "def": [
      {
        "rule": "звучит как русский звук [н], g не читается:",
        "ts": "n",
        "exam": "assign, campaign, design, foreign, sign"
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
        "exam": "knap, knit, knight, knee, knife, knock, know, knowledge, unknown"
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
        "exam": "emphasis, emphasize, geography, phase, phone, photo, photography, phrase, physical, physician, physics,  philosophy, telephone"
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
        "write": "+o",
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
        "exam": "wrap, write, wreck, writer, writing, wrong"
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
        "exam": "qualify, quality, quarter, quarterback, queen, question, quick, quickly, quiet, quietly, quit, quite, quote"
      },
      {
        "rule": "звучит как русский звук [к], если это сочетание стоит в конце слова, а за ним идет нечитаемая [e]:",
        "ts": "k",
        "exam": "antique, cheque, technique, unique"
      },
      {
        "rule": "звучит как русский звук [ку], в середине слова:",
        "ts": "k",
        "exam": "acquire, adequate, consequence, equal, equally, equipment, frequency, frequent, frequently, inquiry, request, require, requirement, sequence, square, squeeze, subsequent"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  }
};

// console.log(Object.values(rulesOfRead));
// Object.values(rulesOfRead).forEach(el => console.log(el));
