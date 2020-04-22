const tips = {
  ruins: {
    enemies: [
      {
        label: 'Unholy monsters, Cultists (Human)',
        details: 'Few Bleed or Blight monsters'
      },
    ],
    heroes: [
      {
        label: 'Crusader',
        details: 'Smite for front, Crusader\'s Holy Lance for back ranks deal bonus DMG against unholy, '
      },
    ],
    provisions: [
      {
        label: 'Skeleton Keys, Holy Water',
        details: 'Most common for curio interactions'
      },
      {
        label: 'Holy Water on Eldritch Altar',
        details: 'Purge a negative Quirk'
      },
      {
        label: 'Holy Water on confession booth',
        details: 'Big stress heal'
      },
    ],
    effective: [
      {
        label: 'Blight',
        details: 'Low resist'
      },
      {
        label: 'Direct damage',
        details: 'Few high PROT enemies'
      }
    ],
    ineffective: [
      {
        label: 'Bleeds',
        details: 'High resist (200+)'
      }
    ],
    dangers: [
      {
        label: 'Bone spearman',
        details: 'At low ranks'
      },
      {
        label: 'Bone Courtier, Cultist Acolyte, Madman',
        details: 'Stress dealers'
      },
      {
        label: 'Books and bookshelves',
        details: 'High risk of bad outcome'
      }
    ]
  },
  warrens: {
    enemies: [
      {
        label: 'Beasts, Humans',
        details: 'Many dual typed'
      },
      {
        label: 'Swinetaur',
        details: 'Especially in the back rows'
      },
      {
        label: 'Swine chopper',
        details: 'High bleed, hard to kill'
      },
      {
        label: 'Bleed',
        details: 'Somewhat common'
      },
      {
        label: 'Blight',
        details: 'Not common'
      }
    ],
    heroes: [
      {
        label: 'Houndmaster',
        details: 'Extra DMG vs. Beast, bleed, marking'
      },
      {
        label: 'Bounty Hunter',
        details: 'Extra DMG vs. Beast, Humans, marking'
      }
    ],
    provisions: [
      {
        label: 'Medicinal Herbs',
        details: 'For curios'
      },
      {
        label: 'Bandages',
        details: 'For higher difficulties'
      },
      {
        label: 'Holy Water',
        details: 'For rare curios'
      },
      {
        label: 'Torches',
        details: 'Map layout'
      }
    ],
    effective: [
      {
        label: 'Bleed',
        details: 'Low resist'
      },
      {
        label: 'Scouting',
        details: 'Specific map layouts'
      }
    ],
    ineffective: [
      {
        label: 'Blight',
        details: 'High resist'
      }
    ],
    dangers: [
      {
        label: 'Stress generators',
        details: 'A lot'
      },
      {
        label: 'Diseases',
        details: 'By enemies and curios'
      }
    ]
  },
weald: {
    enemies: [
      {
        label: 'Eldritch and Human',
        details: 'Many have both types'
      },
      {
        label: 'Cultists and Bandits',
        details: 'In abundance'
      },
      {
        label: 'Crone',
        details: 'In the front rows'
      },
      {
        label: 'Ectoplasm',
        details: 'Can summon others'
      },
      {
        label: 'Rabid Gnasher',
        details: 'Fast, deals bleeds and diseases'
      },
      {
        label: 'Bleed and Blight',
        details: 'Fairly uncommon'
      }
    ],
    heroes: [
      {
        label: 'Hellion',
        details: 'Stuns both front-line foes, bleeds foes, removes own bleed and blight while increasing strength'
      }
    ],
    provisions: [
      {
        label: 'Extra Supplies',
        details: 'Area hard to navigate'
      },    
      {
        label: 'Bandages, Herbs, Antivenom',
        details: 'All common'
      },
      {
        label: 'Bandages',
        details: 'Many curios + enemies inflicting bleeds'
      },
      {
        label: 'Antivenom',
        details: 'Many curios + enemies inflicting blights'
      },
      {
        label: 'Shovels',
        details: 'More walls'
      },
      {
        label: 'Holy waters',
        details: 'Curios affecting quirks and stress positively, but rare'
      },
      {
        label: 'Medicinal Herbs',
        details: 'In higher difficulties against combat debuffs'
      }
    ],
    effective: [
      {
        label: 'Bleed',
        details: 'Low resist'
      },
      {
        label: 'Mark',
        details: 'Foes dodge easily. Front-line fighters boast high PROT, rend your heroes.'
      }
    ],
    ineffective: [
      {
        label: 'Blight',
        details: 'High resist'
      }
    ],
    dangers: [
      {
        label: 'self-Marking',
        details: 'Some monsters more deadly against Marked targets'
      }
    ]
  },  cove: {
    enemies: [
      {
        label: 'Eldritch',
        details: 'Every monster with exception of a single boss'
      },
      {
        label: 'Pelagic Grouper',
        details: 'Deals lot of damages from all positions'
      },
      {
        label: 'Thrall',
        details: 'Explodes and deals a lot of damages if left alive'
      },
      {
        label: 'Prot and Guard',
        details: 'By many monsters'
      }
    ],
    heroes: [
      {
        label: 'Occultist',
        details: 'Enemies mostly Eldritch'
      },
      {
        label: 'Plague Doctor',
        details: 'Blight and stun vs Pelagic Guardians'
      },
    ],
    provisions: [
      {
        label: 'Medicinal herbs',
        details: 'Curio for food and negative quirk removal, debuff interactions by traps'
      },
      {
        label: 'Shovels',
        details: 'For chests that Skeleton Keys will not work on'
      },
      {
        label: 'Bandages',
        details: 'Many bleed dealing enemies'
      }
    ],
    effective: [
      {
        label: 'Blight',
        details: 'Low blight resistance + high PROT'
      },
      {
        label: 'Prot debuff',
        details: 'Enemies with high PROT'
      },
    ],
    ineffective: [
      {
        label: 'Bleed',
        details: 'High resist'
      }
    ],
    dangers: [
      {
        label: 'Traps',
        details: 'Little damage but devastating debuffs that last very long'
      },
      {
        label: 'Bleed',
        details: 'Many bleed dealing enemies'
      }
    ]
  }
}

export function getTipsForLocation(location) {
  return tips[location];
}
