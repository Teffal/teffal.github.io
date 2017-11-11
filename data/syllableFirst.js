const syllableFirst = {
  "type": "Первый слог: [гласная + согласная] или [гласная + согласная + согласная].",
  "letters": {
    "a": {
      "char": "a",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [э], самый открытый звук в английском языке [æ]:",
          "ts": "æ",
          "exam": "bat, cat, dad, fat, lad, mad, man, mat, mask, map, pad, pat, pan, rap, ran, sat, tan, tap, tack"
        }
      ]
    },
    "e": {
      "char": "e",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как короткий русский звук [э], звук в английском языке [e]:",
          "ts": "e",
          "exam": "beg, bet, bend, bent, bell, best, let, lent, lest, led, lend, leg, nest, peg, peck, pell, pen, pet, spell, vest, went, well, west"
        }
      ]
    },
    "i": {
      "char": "i",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как короткий русский звук [и], звук в английском языке [i]:",
          "ts": "i",
          "exam": "it, ill, in, itch, into, fill, fit, fist, list, lid, lit, win, wind, will, bill, bin, bid, piss, miss, kiss, kit, kilt"
        }
      ]
    },
    "o": {
      "char": "o",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как короткий русский звук [o], звук в английском языке [ɒ]:",
          "ts": "ɒ",
          "exam": "boss, dock, dog, dot, fob, fog, fond, lock, log, loss, nock, nod, not, pod, pond, pond, pop, pot, pox, sob, sock, stock, top, toss"
        }
      ]
    },
    "u": {
      "char": "u",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как короткий русский звук [у], звук в английском языке [ʊ]:",
          "ts": "ʊ",
          "exam": "put, push, bush, pull, bull, full"
        },
        {
          "rule": "звучит как русский звук [а], звук в английском языке [Λ]:",
          "ts": "Λ",
          "exam": "but, bun, bug, buff, bus, buck, nut, run, gun, gut, gull, duck, dump, pump, pug, punch, lunch, luck, lug, mug, mud"
        }
      ]
    },
    "y": {
      "char": "y",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как короткий русский звук [и], звук в английском языке [i]:",
          "ts": "i",
          "exam": "analyst, myth, Olympic, rhythm, syllable, symbol, symptom, system, typical"
        }
      ]
    }
  }
};

// Object.values(syllableFirst.letters).forEach(el => console.log(el));
