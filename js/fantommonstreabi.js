var ftmonabi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tokenName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tokenSymbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "baseURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageURL",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_imageExten",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_rank",
				"type": "uint8"
			}
		],
		"name": "BattleMonstre",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cheatGOHUNGRY",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cheatKILL",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cheatRevive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "cheatSTATS",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "DefrozeMonstre",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_trainer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "deligateToTrainer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_foodtype",
				"type": "uint8"
			}
		],
		"name": "feedsMonstre",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "FrozeMonstre",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "HatchEgg",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_count",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "won",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "hash",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct S.Monstres",
				"name": "selfOrBefore",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct S.Monstres",
				"name": "opponOrAfter",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "uint64",
				"name": "damage",
				"type": "uint64"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bit",
				"type": "uint256"
			}
		],
		"name": "Result",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "RevokeTrainer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "baseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ext",
				"type": "string"
			}
		],
		"name": "setImageExtension",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "URL",
				"type": "string"
			}
		],
		"name": "setImageURL",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct S.Monstres",
				"name": "AfterMon",
				"type": "tuple"
			}
		],
		"name": "StatChangedResult",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_trainingtype",
				"type": "uint8"
			}
		],
		"name": "trainsMonstre",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_id2",
				"type": "uint256"
			}
		],
		"name": "BattleSimulationR",
		"outputs": [
			{
				"internalType": "bool",
				"name": "Mon1Win",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "BattleRhythm",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"internalType": "struct S.Monstres",
				"name": "Mon1",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"internalType": "struct S.Monstres",
				"name": "Mon2",
				"type": "tuple"
			},
			{
				"internalType": "uint64",
				"name": "damage",
				"type": "uint64"
			},
			{
				"internalType": "uint8",
				"name": "bit",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getMonstresByOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getMonstresByOwnerByBatch",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"internalType": "struct S.Monstres[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "imageExtension",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "imageURL",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Monstre",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "species",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "gene",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "happiness",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "discipline",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "id",
						"type": "uint16"
					},
					{
						"internalType": "uint32",
						"name": "weight",
						"type": "uint32"
					},
					{
						"internalType": "uint8",
						"name": "stage",
						"type": "uint8"
					}
				],
				"internalType": "struct S.attributes",
				"name": "attribute",
				"type": "tuple"
			},
			{
				"components": [
					{
						"internalType": "uint32",
						"name": "hitpoints",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "strength",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "agility",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "intellegence",
						"type": "uint16"
					}
				],
				"internalType": "struct S.powers",
				"name": "power",
				"type": "tuple"
			},
			{
				"internalType": "uint32",
				"name": "exp",
				"type": "uint32"
			},
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "deadtime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "endurance",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "frozentime",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "stamina",
						"type": "uint64"
					},
					{
						"internalType": "uint64",
						"name": "evolutiontime",
						"type": "uint64"
					}
				],
				"internalType": "struct S.timings",
				"name": "time",
				"type": "tuple"
			},
			{
				"internalType": "uint32",
				"name": "status",
				"type": "uint32"
			},
			{
				"internalType": "uint16",
				"name": "family",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "shinning",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_salePrice",
				"type": "uint256"
			}
		],
		"name": "royaltyInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Trainer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "viewNFT",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "species",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "gene",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint8",
								"name": "happiness",
								"type": "uint8"
							},
							{
								"internalType": "uint8",
								"name": "discipline",
								"type": "uint8"
							},
							{
								"internalType": "uint16",
								"name": "id",
								"type": "uint16"
							},
							{
								"internalType": "uint32",
								"name": "weight",
								"type": "uint32"
							},
							{
								"internalType": "uint8",
								"name": "stage",
								"type": "uint8"
							}
						],
						"internalType": "struct S.attributes",
						"name": "attribute",
						"type": "tuple"
					},
					{
						"components": [
							{
								"internalType": "uint32",
								"name": "hitpoints",
								"type": "uint32"
							},
							{
								"internalType": "uint16",
								"name": "strength",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "agility",
								"type": "uint16"
							},
							{
								"internalType": "uint16",
								"name": "intellegence",
								"type": "uint16"
							}
						],
						"internalType": "struct S.powers",
						"name": "power",
						"type": "tuple"
					},
					{
						"internalType": "uint32",
						"name": "exp",
						"type": "uint32"
					},
					{
						"components": [
							{
								"internalType": "uint64",
								"name": "deadtime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "endurance",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "frozentime",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "stamina",
								"type": "uint64"
							},
							{
								"internalType": "uint64",
								"name": "evolutiontime",
								"type": "uint64"
							}
						],
						"internalType": "struct S.timings",
						"name": "time",
						"type": "tuple"
					},
					{
						"internalType": "uint8[3]",
						"name": "trait",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[3]",
						"name": "skill",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint32",
						"name": "status",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "family",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "shinning",
						"type": "bool"
					}
				],
				"internalType": "struct S.Monstres",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
