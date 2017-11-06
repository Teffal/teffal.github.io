let combinationVowels = {
  "type": "Cочетания гласных, которые дают определенные звуки.",
  "letters": {
    "ai": {
      "char": "ai",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [эй], звук в английском языке [ei]:",
          "ts": "ei",
          "exam": "aid, aide, aim, air, fail, fair, gain, hair, jail, mail, main, pain, pair, rail, rain, tail, wait"
        }
      ]
    },
    "ay": {
      "char": "ay",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [эй], звук в английском языке [ei]. Традиционно сочетание с [у] стоит в конце слова:",
          "ts": "ei",
          "exam": "away, day, gay, gray, lay, may, okay, pay, play, pray, say, stay, way"
        }
      ]
    },
    "air": {
      "char": "air",
      "vowel": false,
      "def": [
        {
          "rule": "звучит как русский звук [иэ], звук в английском языке [eə]:",
          "ts": "eə",
          "exam": "affair, air, airline, airport, chair, fair, fairly, hair, pair, stair"
        }
      ]
    },
    "au": {
      "char": "au",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [о], звук в английском языке [ɔ:]:",
          "ts": "ɔ:",
          "exam": "August, author, auto, autumn, because, cause, daughter, fault, launch, pause, sauce"
        }
      ]
    },
    "aw": {
      "char": "aw",
      "vowel": false,
      "def": [
        {
          "rule": "звучит как долгий русский звук [о], звук в английском языке [ɔ:]:",
          "ts": "ei",
          "exam": "award, aware, away, awful, dawn, draw, drawing, law, lawn, lawsuit, lawyer, paw, raw"
        }
      ]
    },
    "ea": {
      "char": "ea",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [и], звук в английском языке [i:]:",
          "ts": "i:",
          "exam": "bean, beat, dead, deal, each, ease, east, easy, eat, head, heat, idea, lead, leaf, lean, meal, mean, meat, peak, read, real, sea, seat, tea, team, weak"
        }
      ]
    },
    "ee": {
      "char": "ee",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [и], звук в английском языке [i:]:",
          "ts": "i:",
          "exam": "beer, deep, deer, fee, feed, feel, flee, free, heel, keep, meet, need, peer, see, seed, seek, seem, teen, tree, week"
        }
      ]
    },
    "oo": {
      "char": "oo",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [у], звук в английском языке [ʊ] или [u:]:",
          "ts": "u:",
          "exam": "book, boom, boot, cook, cool, door, food, foot, good, look, mood, moon, pool, poor, roof, room, root, soon, too, tool, wood"
        }
      ]
    },
    "oi": {
      "char": "oi",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [oй], звук в английском языке [ɔi]:",
          "ts": "ɔi",
          "exam": "appoint, avoid, boil, choice, coin, join, joint, noise, oil, ongoing, point, soil, spoil, voice"
        }
      ]
    },
    "oy": {
      "char": "oy",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [oй], звук в английском языке [ɔi]. Традиционно сочетание с [у] стоит в конце слова:",
          "ts": "ɔi",
          "exam": "annoy, boy, destroy, employ, enjoy, joy, toy"
        }
      ]
    },
    "igh": {
      "char": "igh",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [ай], звук в английском языке [ai]. (сочетание [gh] не читается):",
          "ts": "ai",
          "exam": "bright, fight, fighter, flight, high, highly, highway, insight, light, might, night, right, sigh, sight, slight, tight, tonight"
        }
      ]
    },
    "al": {
      "char": "al",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [oл], если стоит вконце слова или после этого сочетания следует согласная, звук в английском языке [ɔ:l]:",
          "ts": "ɔ:l",
          "exam": "all, allow, ally, alone, along, also, alter, ball, call, coal, equal, fall, false, final, goal, hall, legal, local, mall, metal, moral, palm, rural, salt, shall, small, tall, total, usual, vital, wall",
          "exce": "album, half, palm"
        }
      ]
    },
    "alk": {
      "char": "alk",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [oк], буква [l] не читается, звук в английском языке [ɔ:k]:",
          "ts": "ɔ:k",
          "exam": "chalk, talk, walk"
        }
      ]
    }
  }
}

// Object.values(combinationVowels.letters).forEach(el => console.log(el));
