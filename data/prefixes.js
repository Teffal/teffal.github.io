const prefixes = {
  "type": "Правильное ударение при чтении слов с приставкой.",
  "intro": "Приставки читается без ударения. Таким образом, если в предложении два слога, первый – приставка, значит, ударение падает на второй слог. Виды приставок: a-, ad-, be-, con-, de-, dis-, ex-, for-, il-, in-, ir-, oc-, per-, pre-, re-, se-, sub-, trans-",
  "letters": {
    "a": {
      "char": "a-",
      "vowel": true,
      "def": [
        {
          "exam": "aback, abed, afire, aflame, afore, along, amiss, ashake, ashore, aside, aslope, atop, aware, away, awhile"
        }
      ]
    },
    "be": {
      "char": "be-",
      "vowel": false,
      "def": [
        {
          "exam": "because, bedeck, befool, before, befuddle, began, begin, begun, behast, behave, behind, behoove, belay, believe, below, beneath, beret, beset, beside, besides, betide, betray, beyond"
        }
      ]
    },
    "con": {
      "char": "con-",
      "vowel": false,
      "def": [
        {
          "rule": "может менять последнюю букву в приставке под влиянием следующей, для удобства произношения:",
          "exam": "collapse, collide, commune, compel, complete, compose, composer, compound, concur, conduce, conduct, conductor, connect, conserve, convene, converse, correct, corrode"
        }
      ]
    },
    "de": {
      "char": "de-",
      "vowel": false,
      "def": [
        {
          "exam": "debark, debate, decline, deduce, deface, define, deflate, denounce, deny, deport, describe, deserve, destroy"
        }
      ]
    },
    "ex": {
      "char": "ex-",
      "vowel": false,
      "def": [
        {
          "exam": "xchange, excite, exciting, exclaim, excuse, exhale, expel, expose, extract, extrude"
        }
      ]
    },
    "for": {
      "char": "for-",
      "vowel": false,
      "def": [
        {
          "exam": "forgave, forget, forgive, forgiven, forgot, forgotten"
        }
      ]
    },
    "pro": {
      "char": "pro-",
      "vowel": false,
      "def": [
        {
          "exam": "produce, profound, progress, prolong, pronoun, pronunciation, proscribe, provoke"
        }
      ]
    },
    "re": {
      "char": "re-",
      "vowel": false,
      "def": [
        {
          "exam": "recall, recipe, recline, record, reduce, refer, reform, refuse, regard, regime, regress, reject, relate, relax, relief, remain, remind, remit, remote, remove, repeat, report, repose, repress, repulse, reserve, resist, resort, respond, result, retain, retire, return, reveal, review, revoke, revolve"
        }
      ]
    }
  }
};

// Object.values(combinationVowels.letters).forEach(el => console.log(el));
