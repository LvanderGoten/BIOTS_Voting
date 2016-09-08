contractAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "vote",
        "type": "string"
      }
    ],
    "name": "vote",
    "outputs": [],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint"
      }
      ],
    "name": "get_votes",
    "outputs": [ 
      { 
        "name": "votes",
        "type": "uint", 
      }
      ],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "get_candidate_num",
    "outputs": [ 
      { 
        "name": "out",
        "type": "uint", 
      }
      ],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "uint"
      }
      ],
    "name": "get_candidate",
    "outputs": [ 
      { 
        "name": "out",
        "type": "bytes", 
      }
      ],
    "type": "function"
  }
]