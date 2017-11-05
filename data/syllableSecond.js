let syllableSecond = {
  "type": "Второй слог: [согласная + гласная + согласная], в более редких случаях – в слове одна гласная и она стоит на конце слова (слово состоит из двух или максимум трех букв).",
  "intro": "В таком положении часто встречаются слова, где на конце стоит нечитаемая е, которая не дает никакого звука, но выполняет очень важную функцию: показывает, что гласная за одну согласную до нее читается так же, как она называется в алфавите (кроме буквы у).",
  "letters": {
    "a": {
      "char": "a",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [эй], звук в английском языке [ei]:",
          "ts": "ei",
          "exam": "bake, bale, bate, cake, dale, fake, fame, fate, gale, game, gate, lake, lame, late, male, mate, name, pale, rate, sake, same, take, tale, tame",
          "exce": "have"
        }
      ]
    },
    "e": {
      "char": "e",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [и], звук в английском языке [i:]:",
          "ts": "i:",
          "exam": "be, bede, cedar, eve, he, meter, pete, peter, scene, she, steve, the, theme, these, we"
        }
      ]
    },
    "i": {
      "char": "i",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [ай], звук в английском языке [ai]:",
          "ts": "ai",
          "exam": "bribe, bride, crime, dine, drive, file, fine, gribe, lime, mile, pile, pipe, pride, ride, ripe, side, stripe, strive, tile, wife"
        }
      ]
    },
    "o": {
      "char": "o",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [oу], звук в английском языке [ɜu]:",
          "ts": "ɜu",
          "exam": "bone, cone, cope, done, dope, lope, mone, mope, pode, poke, pole, pome, pone, pone, pote, rope, scope, zone"
        }
      ]
    },
    "u": {
      "char": "u",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как долгий русский звук [ю], звук в английском языке [ju:]:",
          "ts": "ju:",
          "exam": "computer, cube, cute, dune, fume, fuse, huge, hume, mule, muse, mute, pupil, student, sue, tube, tulip, tuna, tune, use"
        },
        {
          "rule": "если стоит после букв: r, j, l, то звучит как долгий русский звук [у], так как из за артикуляции этих звуков неудобно произносить [ju:], то есть, при произнесении теряется[j], остается только долгий звук [u:]:",
          "ts": "u:",
          "exam": "Bruce, July, June, brute, crude, fluke, flute, jute, plume, prude, prune, rude, rune, ruse"
        }
      ]
    },
    "y": {
      "char": "y",
      "vowel": true,
      "def": [
        {
          "rule": "звучит как русский звук [ай], звук в английском языке [ai]:",
          "ts": "ai",
          "exam": "by, cry, dry, dyke, fry, my, pry, sly, style, syce, try, type"
        }
      ]
    }
  }
}

// Object.values(syllableFirst.letters).forEach(el => console.log(el));
