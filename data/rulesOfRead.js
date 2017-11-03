const rulesOfRead = {
  "c": {
    "head": {},
    "char": "c",
    "vowel": false,
    "def": [
      {
        "rule": "как русская с, только на альвеолах, если стоит перед гласными e, i, y.",
        "ts": "s",
        "exam": "circus, cycle, city, cellular, cedar, scent"
      },
      {
        "rule": "как русская к, но сильнее, в остальных случая, если НЕ стоит перед гласными e, i, y.",
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
        "rule": "(дж) если стоит перед гласными e, i, y.",
        "ts": "d3",
        "exam": "gentleman, gym, gin"
      },
      {
        "rule": "(г) в остальных случаях., если НЕ стоит перед гласными e, i, y.",
        "ts": "g",
        "exam": "glad, dog, grade, bag",
        "exce": "get, give, girl, gift"
      }
    ],
    "dolu": "2017-11-02 03:31:42.292099"
  },
}
