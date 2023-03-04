var pvppveabi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
				"name": "timeOrArray",
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
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "BattleEthermonstre",
		"outputs": [],
		"stateMutability": "payable",
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
		"name": "PVE1ConcludeIncentive",
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
		"name": "PVE1Fund",
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
		"name": "PVE1MonstreCooldown",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PVE1RoundsCounter",
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
		"name": "PVE1STARTINGTIME",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PVE1Tier",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
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
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PVPFULLRecords",
		"outputs": [
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "uint64",
				"name": "winningtimestamp",
				"type": "uint64"
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
				"name": "monstredata",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PVPT1BATTLECOOLDOWN",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PVPT1INTERVAL",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
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
		"name": "PVPT1MonstreCooldown",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PVPT1RoundsCounter",
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
		"name": "PVPTrack1Fund",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "RewardWallet",
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
		"name": "TOTALOUT",
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
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "TrainerDamage",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "TrainersList",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "WinnerTime",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "WinnersList",
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
		"inputs": [],
		"name": "numberOfPVE1TrainerList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Number",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numberOfWinnerList",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "Number",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainPVE1RoundTime",
		"outputs": [
			{
				"internalType": "int256",
				"name": "RemainingTime",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "remainRoundTime",
		"outputs": [
			{
				"internalType": "int256",
				"name": "RemainingTime",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setTreassuryContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setTreassuryContractAddressONCE",
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
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setfantomonstreContractAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "setfantomonstreContractAddressONCE",
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
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "startBattlePVPT1",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "totalDamage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "TotalDamage",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewLastestPVPT1Records",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "winner",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "winningtimestamp",
						"type": "uint64"
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
						"name": "monstredata",
						"type": "tuple"
					}
				],
				"internalType": "struct PVPPVE.PVPRecordType",
				"name": "LastestRecord",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewPVE1TrainerListPerRound",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewPVPT1RecordsPerRound",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "winner",
						"type": "address"
					},
					{
						"internalType": "uint64",
						"name": "winningtimestamp",
						"type": "uint64"
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
						"name": "monstredata",
						"type": "tuple"
					}
				],
				"internalType": "struct PVPPVE.PVPRecordType[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewTrainerDamagePerRound",
		"outputs": [
			{
				"internalType": "uint64[]",
				"name": "",
				"type": "uint64[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewUnknownEthermonstre",
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
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewWinnerListPerRound",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_Round",
				"type": "uint256"
			}
		],
		"name": "viewWinnerTimesPerRound",
		"outputs": [
			{
				"internalType": "uint64[]",
				"name": "",
				"type": "uint64[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
