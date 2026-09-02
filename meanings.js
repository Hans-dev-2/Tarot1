/**
 * Tarot Card Definitions (0 to 77 Base IDs)
 * 0-21: Major Arcana
 * 22-35: Wands (22 = Ace)
 * 36-49: Cups (36 = Ace)
 * 50-63: Swords (50 = Ace)
 * 64-77: Pentacles (64 = Ace)
 */

const ASSET_BASE_URL = "https://hansostudio.github.io/tarot1/assets";
const CARD_DEFINITIONS = [
  // --- MAJOR ARCANA (0 - 21) ---
  {
    id: 0,
    name: "The Fool",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Beginnings", "Innocence", "Spontaneity"],
      meaning: "taking an uncalculated leap of faith into uncharted territory",
      narrativeSnippet: "a complete reset where past rules no longer apply"
    },
    reversed: {
      keywords: ["Recklessness", "Risk-taking", "Hesitation"],
      meaning: "hesitation or leaping without considering critical consequences",
      narrativeSnippet: "unfocused risk-taking or fear holding back necessary movement"
    }
  },
  {
    id: 1,
    name: "The Magician",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Manifestation", "Resourcefulness", "Power"],
      meaning: "channeling your focus and raw potential to realize tangible results",
      narrativeSnippet: "a period of direct alignment between intention and willpower"
    },
    reversed: {
      keywords: ["Illusion", "Unused Potential", "Manipulation"],
      meaning: "misdirection, scattered energy, or untapped potential",
      narrativeSnippet: "misguided efforts or feeling unable to apply your internal gifts"
    }
  },
  {
    id: 2,
    name: "The High Priestess",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Intuition", "Sacred Knowledge", "Divine Feminine"],
      meaning: "trusting quiet subconscious insights and unrevealed truths",
      narrativeSnippet: "a deep reliance on subtle internal wisdom over surface logic"
    },
    reversed: {
      keywords: ["Secrets", "Disconnected Intuition", "Surface Focus"],
      meaning: "ignoring internal warnings or getting lost in hidden motives",
      narrativeSnippet: "an intentional detachment from your inner voice"
    }
  },
  {
    id: 3,
    name: "The Empress",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Abundance", "Nurturing", "Sensuality"],
      meaning: "embodied creative expression, growth, and sensory connection",
      narrativeSnippet: "a rich environment where raw ideas take physical form"
    },
    reversed: {
      keywords: ["Creative Block", "Dependence", "Overindulgence"],
      meaning: "neglecting self-care, smothering attachment, or stifled creation",
      narrativeSnippet: "feeling disconnected from your natural creative flow"
    }
  },
  {
    id: 4,
    name: "The Emperor",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Authority", "Structure", "Stability"],
      meaning: "establishing firm boundaries, logical order, and clear control",
      narrativeSnippet: "a deliberate effort to build order and strategic direction"
    },
    reversed: {
      keywords: ["Tyranny", "Rigidity", "Lack of Control"],
      meaning: "inflexible control, chaos from lack of discipline, or overreaching power",
      narrativeSnippet: "stubborn resistance to necessary adaptation"
    }
  },
  {
    id: 5,
    name: "The Hierophant",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Tradition", "Conformity", "Belief Systems"],
      meaning: "adhering to established customs, structured learning, and shared values",
      narrativeSnippet: "guidance drawn from proven institutions or traditional wisdom"
    },
    reversed: {
      keywords: ["Rebellion", "Unconventionality", "New Beliefs"],
      meaning: "challenging outdated rules, personal dogma, or seeking unique paths",
      narrativeSnippet: "breaking away from expected norms to define your own truth"
    }
  },
  {
    id: 6,
    name: "The Lovers",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Harmony", "Relationships", "Values Alignment"],
      meaning: "deep mutual alignment, conscious choices, and personal values",
      narrativeSnippet: "a crucial crossroads requiring total internal alignment"
    },
    reversed: {
      keywords: ["Disharmony", "Imbalance", "Misalignment"],
      meaning: "conflicting priorities, moral compromise, or relational friction",
      narrativeSnippet: "friction caused by opposing values or hasty decisions"
    }
  },
  {
    id: 7,
    name: "The Chariot",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Willpower", "Determination", "Victory"],
      meaning: "harnessing opposing forces through pure focus and disciplined drive",
      narrativeSnippet: "relentless momentum overcoming initial external resistance"
    },
    reversed: {
      keywords: ["Lack of Control", "Aggression", "Directionless"],
      meaning: "losing control, running on impulse, or facing unyielding obstacles",
      narrativeSnippet: "misdirected power stalling forward progression"
    }
  },
  {
    id: 8, 
    name: "Justice",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Fairness", "Truth", "Cause and Effect"],
      meaning: "objective evaluation, accountability, and the weight of consequences",
      narrativeSnippet: "a moment of clear reckoning where facts outweigh bias"
    },
    reversed: {
      keywords: ["Unfairness", "Dishonesty", "Lack of Accountability"],
      meaning: "avoiding responsibility, unfair bias, or unbalanced outcomes",
      narrativeSnippet: "a situation marred by partial truths or evaded consequences"
    
    }
  },
  {
    id: 9,
    name: "The Hermit",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Introspection", "Solitude", "Inner Guidance"],
      meaning: "withdrawing from noisy surroundings to seek fundamental inner clarity",
      narrativeSnippet: "a necessary period of quiet reflection away from external noise"
    },
    reversed: {
      keywords: ["Isolation", "Loneliness", "Withdrawal"],
      meaning: "excessive isolation, paranoia, or refusing helpful perspective",
      narrativeSnippet: "turning inward to a degree that breeds isolation or stagnation"
    }
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Change", "Cycles", "Inevitable Turning"],
      meaning: "shifting momentum, systemic cycles, and sudden turns of event",
      narrativeSnippet: "a decisive shift in circumstances beyond direct personal control"
    },
    reversed: {
      keywords: ["Bad Luck", "Resistance to Change", "Setbacks"],
      meaning: "unwelcome interruptions, repeating cycles, or clinging to control",
      narrativeSnippet: "temporary friction while adapting to forced environmental shifts"
    }
  },
  {
    id: 11,
    name: "Strength",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Courage", "Compassion", "Inner Power"],
      meaning: "quiet endurance, emotional mastery, and gentle persuasion",
      narrativeSnippet: "taming raw instinct through calm and patient composure"
    },
    reversed: {
      keywords: ["Self-Doubt", "Raw Emotion", "Insecurity"],
      meaning: "struggling with self-doubt, reactivity, or feeling overwhelmed",
      narrativeSnippet: "a momentary collapse of confidence in your internal fortitude"
    }
  },
  {
    id: 12,
    name: "The Hanged Man",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Pause", "Surrender", "New Perspective"],
      meaning: "suspending action to look at a situation from an inverted angle",
      narrativeSnippet: "a deliberate pause that transforms your understanding of the problem"
    },
    reversed: {
      keywords: ["Stalling", "Unnecessary Sacrifice", "Resistance"],
      meaning: "senseless delays, martyrdom, or resisting a forced perspective shift",
      narrativeSnippet: "stubbornly clinging to old habits while progress grinds to a halt"
    }
  },
  {
    id: 13,
    name: "Death",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Endings", "Transformation", "Transition"],
      meaning: "the absolute conclusion of a chapter making room for renewal",
      narrativeSnippet: "a complete severance of past conditions to allow new growth"
    },
    reversed: {
      keywords: ["Fear of Change", "Holding On", "Stagnation"],
      meaning: "resisting an inevitable end or clinging to expired conditions",
      narrativeSnippet: "dragged-out transitions caused by refusing to let go of the past"
    }
  },
  {
    id: 14,
    name: "Temperance",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Balance", "Moderation", "Patience"],
      meaning: "blending opposing forces with calm precision and restraint",
      narrativeSnippet: "a harmonious middle ground achieved through patient integration"
    },
    reversed: {
      keywords: ["Imbalance", "Excess", "Lack of Patience"],
      meaning: "extremism, conflicting internal drives, or volatile overreaction",
      narrativeSnippet: "friction and burn-out resulting from extreme swings or impatience"
    }
  },
  {
    id: 15,
    name: "The Devil",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Attachment", "Shadow Self", "Restriction"],
      meaning: "unhealthy attachments, illusion of helplessness, or addictive cycles",
      narrativeSnippet: "a self-imposed trap built on unhealthy habits or material obsession"
    },
    reversed: {
      keywords: ["Freedom", "Release", "Restoring Control"],
      meaning: "breaking free from limiting ties, confronting shadows, and regaining agency",
      narrativeSnippet: "severing unhealthy chains and reclaiming absolute autonomy"
    }
  },
  {
    id: 16,
    name: "The Tower",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Sudden Upheaval", "Revelation", "Awakening"],
      meaning: "the violent collapse of false structures, revealing raw truth",
      narrativeSnippet: "a sudden shock that dismantles unstable foundations instantly"
    },
    reversed: {
      keywords: ["Avoiding Disaster", "Delaying the Inevitable", "Fear of Suffering"],
      meaning: "narrowly escaping a collapse or clinging to a crumbling situation",
      narrativeSnippet: "prolonging structural collapse out of fear of the fallout"
    }
  },
  {
    id: 17,
    name: "The Star",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Hope", "Faith", "Renewal"],
      meaning: "a serene period of healing, deep optimism, and renewed faith",
      narrativeSnippet: "a quiet beacon of clarity restoring faith after chaos"
    },
    reversed: {
      keywords: ["Hopelessness", "Despair", "Discouragement"],
      meaning: "lost faith, lingering pessimism, or feeling disconnected from hope",
      narrativeSnippet: "cynicism obscuring the gentle opportunities emerging around you"
    }
  },
  {
    id: 18,
    name: "The Moon",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Illusion", "Fear", "Subconscious"],
      meaning: "navigating uncertainty, deep projections, and subconscious fears",
      narrativeSnippet: "moving through murky terrain where things are not as they appear"
    },
    reversed: {
      keywords: ["Release of Fear", "Unveiling Truth", "Clarity"],
      meaning: "dispelling self-deception, seeing through illusions, and overcoming anxiety",
      narrativeSnippet: "the fog lifting to expose the concrete realities beneath"
    }
  },
  {
    id: 19,
    name: "The Sun",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Joy", "Success", "Vitality"],
      meaning: "unabashed clarity, high energy, warmth, and absolute triumph",
      narrativeSnippet: "a radiant surge of vitality illuminating every aspect of your path"
    },
    reversed: {
      keywords: ["Temporary Cloudiness", "Overly Optimistic", "Dimmed Joy"],
      meaning: "delayed enthusiasm, minor disappointment, or muted warmth",
      narrativeSnippet: "a short-lived cloud temporarily dulling your momentum"
    }
  },
  {
    id: 20,
    name: "Judgement",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Reckoning", "Awakening", "Calling"],
      meaning: "a higher calling, profound self-evaluation, and definitive resolution",
      narrativeSnippet: "a moment of ultimate self-reckoning that elevates your path"
    },
    reversed: {
      keywords: ["Self-Doubt", "Harsh Criticism", "Refusal to Hear"],
      meaning: "harsh self-judgment, ignoring an inner wake-up call, or lingering regret",
      narrativeSnippet: "ignoring a clear realization due to persistent self-doubt"
    }
  },
  {
    id: 21,
    name: "The World",
    arcana: "Major",
    suit: "Major",
    upright: {
      keywords: ["Completion", "Integration", "Wholeness"],
      meaning: "reaching the end of a major cycle, total synthesis, and accomplishment",
      narrativeSnippet: "the seamless closing of a long loop into total integration"
    },
    reversed: {
      keywords: ["Incompletion", "Lack of Closure", "Shortcuts"],
      meaning: "unfinished business, lingering loose ends, or seeking hasty closure",
      narrativeSnippet: "stuck on the final step right before complete fulfillment"
    }
  },  

  // ... [Indexes 3 to 21 populated similarly for remaining Major Arcana] ...

  // --- MINOR ARCANA: WANDS (22 - 35) ---
  {
    id: 22,
    name: "Ace of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Inspiration", "New Passion", "Creation"],
      meaning: "a sudden surge of creative energy and raw enthusiasm",
      narrativeSnippet: "a spark of initiative that ignites new momentum"
    },
    reversed: {
      keywords: ["Delay", "Lack of Motivation", "Creative Block"],
      meaning: "stalled sparks, hesitation, or unfocused creative impulses",
      narrativeSnippet: "a sense of friction holding back a promising spark"
    }
  },
  {
    id: 23,
    name: "Two of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Planning", "Future Possibilities", "Discovery"],
      meaning: "stepping back to assess long-term horizons and map out bold moves",
      narrativeSnippet: "standing at the edge of past success while charting unknown territory"
    },
    reversed: {
      keywords: ["Fear of Unknown", "Bad Planning", "Playing Safe"],
      meaning: "hesitating to expand beyond your comfort zone or poor strategic execution",
      narrativeSnippet: "playing it safe out of fear of taking the necessary next step"
    }
  },
  {
    id: 24,
    name: "Three of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Expansion", "Foresight", "Momentum"],
      meaning: "watching early plans pay off as momentum carries your vision outward",
      narrativeSnippet: "ships coming in as earlier initiatives begin to return real momentum"
    },
    reversed: {
      keywords: ["Delays", "Frustration", "Lack of Growth"],
      meaning: "unforeseen bottlenecks, stalled progress, or supply lines falling short",
      narrativeSnippet: "plans hitting unexpected friction right as expansion was set to launch"
    }
  },
  {
    id: 25,
    name: "Four of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Celebration", "Home", "Community"],
      meaning: "reaching a stable milestone, gathering with allies, and enjoying solid ground",
      narrativeSnippet: "a moment of shared victory and grounded stability before the next push"
    },
    reversed: {
      keywords: ["Inner Harmony", "Transition", "Canceled Celebration"],
      meaning: "quiet personal victories, tension in the home, or delayed milestones",
      narrativeSnippet: "celebrating quietly on your own or navigating awkward domestic friction"
    }
  },
  {
    id: 26,
    name: "Five of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Conflict", "Competition", "Rivalry"],
      meaning: "clashing egos, healthy competition, or navigating chaotic group energy",
      narrativeSnippet: "a messy free-for-all of ideas where everyone is fighting to be heard"
    },
    reversed: {
      keywords: ["Avoiding Conflict", "Resolution", "Burnout"],
      meaning: "sidestepping petty arguments, exhausting conflict, or finding common ground",
      narrativeSnippet: "walking away from unnecessary drama to save your energy for real work"
    }
  },
  {
    id: 27,
    name: "Six of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Public Recognition", "Victory", "Pride"],
      meaning: "hard-earned validation, public praise, and standing out in your field",
      narrativeSnippet: "a well-deserved victory lap with everyone recognizing your effort"
    },
    reversed: {
      keywords: ["Ego", "Lack of Support", "Fall from Grace"],
      meaning: "seeking external validation, unacknowledged work, or inflated pride",
      narrativeSnippet: "feeling ignored after putting in the work or letting praise go to your head"
    }
  },
  {
    id: 28,
    name: "Seven of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Defensiveness", "Perseverance", "Standing Up"],
      meaning: "holding your ground against competing pressure and backing your position",
      narrativeSnippet: "defending your vantage point against an onslaught of rivals"
    },
    reversed: {
      keywords: ["Giving Up", "Overwhelmed", "Exhaustion"],
      meaning: "feeling outnumbered, yielding under relentless pressure, or tactical retreat",
      narrativeSnippet: "getting exhausted from constantly fighting to hold the line"
    }
  },
  {
    id: 29,
    name: "Eight of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Rapid Movement", "Speed", "Clear Communication"],
      meaning: "a sudden acceleration where events move fast and messages land sharp",
      narrativeSnippet: "fast-moving updates cascading in all at once with zero lag"
    },
    reversed: {
      keywords: ["Delays", "Panic", "Misdirection"],
      meaning: "miscommunication, rushing into walls, or sudden momentum stalls",
      narrativeSnippet: "hasty moves triggering chaos or critical updates getting lost in transit"
    }
  },
  {
    id: 30,
    name: "Nine of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Resilience", "Grit", "Final Guard"],
      meaning: "standing tall through fatigue, guarding your progress, and pushing forward",
      narrativeSnippet: "battled-tested and tired, but holding the fort for one final push"
    },
    reversed: {
      keywords: ["Paranoia", "Burnout", "Defensiveness"],
      meaning: "stubbornly fighting phantom threats, total exhaustion, or letting down defenses",
      narrativeSnippet: "exhausting your battery by treating every minor noise like a threat"
    }
  },
  {
    id: 31,
    name: "Ten of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Burden", "Responsibility", "Hard Labor"],
      meaning: "carrying the heavy weight of success and taking on too much at once",
      narrativeSnippet: "lugging a massive load across the finish line under sheer effort"
    },
    reversed: {
      keywords: ["Delegation", "Collapse", "Dropping the Load"],
      meaning: "offloading unmanageable tasks, reaching a breaking point, or simplifying",
      narrativeSnippet: "dropping the excessive baggage before it crushes your back completely"
    }
  },
  {
    id: 32,
    name: "Page of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Curiosity", "Spark", "Exploration"],
      meaning: "eagerly testing out new ideas, raw enthusiasm, and playful discovery",
      narrativeSnippet: "a curious spark driving you to experiment without worrying about perfection"
    },
    reversed: {
      keywords: ["Unreliable", "Procrastination", "Flakiness"],
      meaning: "scattered focus, starting projects without finishing, or childish impatience",
      narrativeSnippet: "all excitement and zero follow-through, leaving half-baked ideas everywhere"
    }
  },
  {
    id: 33,
    name: "Knight of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Action", "Impulsiveness", "Passion"],
      meaning: "charging headfirst into bold moves with high energy and total nerve",
      narrativeSnippet: "a rush of adrenaline driving fast action with high confidence"
    },
    reversed: {
      keywords: ["Recklessness", "Impatience", "Volatile Energy"],
      meaning: "acting before thinking, hotheaded outbursts, or burning out too quick",
      narrativeSnippet: "charging in blind and leaving a mess in your wake"
    }
  },
  {
    id: 34,
    name: "Queen of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Confidence", "Charisma", "Bold Presence"],
      meaning: "radiating warmth, fierce independence, and total self-assurance",
      narrativeSnippet: "taking center stage with bold charisma that commands the space"
    },
    reversed: {
      keywords: ["Jealousy", "Self-Doubt", "Demanding Control"],
      meaning: "feeling overlooked, insecurity masked as aggression, or high drama",
      narrativeSnippet: "seeking constant validation or letting insecurity sour your vibe"
    }
  },
  {
    id: 35,
    name: "King of Wands",
    arcana: "Minor",
    suit: "Wands",
    upright: {
      keywords: ["Visionary", "Leadership", "Mastery"],
      meaning: "steering high-stakes direction with bold vision, charisma, and execution",
      narrativeSnippet: "rallying energy behind a sweeping direction and driving it home"
    },
    reversed: {
      keywords: ["Dominating", "Impulsive Ruler", "Unrealistic Expectations"],
      meaning: "overbearing control, demanding impossible speed, or dogmatic vision",
      narrativeSnippet: "demanding high results while refusing to listen to practical limits"
    }
  },

  // ... [Indexes 23 to 35: 2 of Wands through King of Wands] ...

  // --- MINOR ARCANA: CUPS (36 - 49) ---
  {
    id: 36,
    name: "Ace of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Emotional Awakening", "Compassion", "Intimacy"],
      meaning: "an outpouring of emotional clarity and open-hearted reception",
      narrativeSnippet: "a deep emotional reset rooted in compassion and connection"
    },
    reversed: {
      keywords: ["Emotional Drain", "Blocked Feelings", "Emptiness"],
      meaning: "unexpressed emotional weight or feeling depleted by external demands",
      narrativeSnippet: "a temporary closure of the emotional channels"
    }
  },
{
    id: 37,
    name: "Two of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Connection", "Mutual Respect", "Partnership"],
      meaning: "building a harmonious bond based on reciprocal energy and shared feelings",
      narrativeSnippet: "a seamless emotional alignment where two perspectives meet in balance"
    },
    reversed: {
      keywords: ["Disconnect", "Misalignment", "Unbalanced Energy"],
      meaning: "relational friction, uneven effort, or a temporary breakdown in communication",
      narrativeSnippet: "an awkward disconnect where mutual understanding gets lost in translation"
    }
  },
  {
    id: 38,
    name: "Three of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Community", "Camaraderie", "Shared Joy"],
      meaning: "rejoicing with your inner circle, mutual support, and collaborative happiness",
      narrativeSnippet: "a lively gathering of allies celebrating a collective victory"
    },
    reversed: {
      keywords: ["Gossip", "Isolation", "Overindulgence"],
      meaning: "feeling left out of the group, social drama, or partying to escape reality",
      narrativeSnippet: "shallow interactions or social fatigue straining close connections"
    }
  },
  {
    id: 39,
    name: "Four of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Apathy", "Contemplation", "Disillusionment"],
      meaning: "turning inward out of boredom or fatigue, ignoring new options nearby",
      narrativeSnippet: "tuning out external offers while absorbed in your own mood"
    },
    reversed: {
      keywords: ["Awareness", "Re-engagement", "Fresh Vibe"],
      meaning: "snapping out of a funk, noticing missed chances, and reopening your mind",
      narrativeSnippet: "a sudden shift in mindset letting fresh energy break through the boredom"
    }
  },
  {
    id: 40,
    name: "Five of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Regret", "Disappointment", "Focus on Loss"],
      meaning: "dwelling on spilled feelings or past missteps while missing what remains",
      narrativeSnippet: "staring down at what went wrong instead of turning to see what survived"
    },
    reversed: {
      keywords: ["Moving On", "Acceptance", "Forgiveness"],
      meaning: "releasing past grief, picking up the pieces, and moving forward with clarity",
      narrativeSnippet: "stopping the pity party and finally making peace with past losses"
    }
  },
  {
    id: 41,
    name: "Six of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Nostalgia", "Innocence", "Reconnecting"],
      meaning: "fond memories, innocent comfort, or an old dynamic resurfacing softly",
      narrativeSnippet: "a sweet blast from the past bringing familiar warmth and ease"
    },
    reversed: {
      keywords: ["Living in Past", "Stuck", "Growing Up"],
      meaning: "clinging to rose-tinted memories or refusing to face current realities",
      narrativeSnippet: "realizing past nostalgia can't fix your present situation"
    }
  },
  {
    id: 42,
    name: "Seven of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Choices", "Illusion", "Daydreaming"],
      meaning: "navigating a overload of options, shiny distractions, and wild imaginations",
      narrativeSnippet: "a dazzling array of possibilities where fantasies blend with facts"
    },
    reversed: {
      keywords: ["Clarity", "Realism", "Decision Time"],
      meaning: "cutting through wishful thinking to pick a realistic grounded option",
      narrativeSnippet: "the fog clearing away to expose which option is actually real"
    }
  },
  {
    id: 43,
    name: "Eight of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Walking Away", "Disillusionment", "Search for Depth"],
      meaning: "leaving behind something functional but emotionally hollow for higher truth",
      narrativeSnippet: "quietly stepping away from an empty situation to find real fulfillment"
    },
    reversed: {
      keywords: ["Fear of Leaving", "Stagnation", "Settling"],
      meaning: "staying in an unsatisfying setup out of fear or habit",
      narrativeSnippet: "clinging to a dead situation because walking away feels too heavy"
    }
  },
  {
    id: 44,
    name: "Nine of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Contentment", "Satisfaction", "Smug Joy"],
      meaning: "savoring emotional comfort, deep personal satisfaction, and good vibes",
      narrativeSnippet: "kicking back with total self-satisfaction as your desires fall into place"
    },
    reversed: {
      keywords: ["Smugness", "Superficiality", "Unmet Expectation"],
      meaning: "shallow pleasure, excess self-indulgence, or feeling empty despite material wins",
      narrativeSnippet: "getting what you wished for only to realize it feels kinda hollow"
    }
  },
  {
    id: 45,
    name: "Ten of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Harmony", "Emotional Fulfillment", "Belonging"],
      meaning: "profound emotional peace, lasting trust, and complete resonance with loved ones",
      narrativeSnippet: "a feeling of absolute harmony and genuine emotional safety"
    },
    reversed: {
      keywords: ["Domestic Friction", "Broken Vibe", "Misaligned Heart"],
      meaning: "surface-level perfection masking emotional disconnection or family drama",
      narrativeSnippet: "cracks in the picture-perfect image causing emotional strain underneath"
    }
  },
  {
    id: 46,
    name: "Page of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Intuitive Spark", "Sensitivity", "Creative Curiosity"],
      meaning: "welcoming unexpected emotional messages, gentle intuition, and creative play",
      narrativeSnippet: "a whimsical, intuitive impulse bringing an unexpected emotional message"
    },
    reversed: {
      keywords: ["Emotional Immaturity", "Moodiness", "Insecurity"],
      meaning: "overly defensive behavior, dramatic mood swings, or ignoring intuitive hints",
      narrativeSnippet: "letting minor emotional bumps turn into messy internal drama"
    }
  },
  {
    id: 47,
    name: "Knight of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Romance", "Idealism", "Following Heart"],
      meaning: "pursuing a vision or connection with heartfelt grace and charm",
      narrativeSnippet: "sweeping in with high romantic ideals and an open heart"
    },
    reversed: {
      keywords: ["Unrealistic", "Manipulative Charm", "Mood Swings"],
      meaning: "chasing impractical fantasies, superficial charm, or brooding moodiness",
      narrativeSnippet: "all dreamy talk with zero realistic grounding to back it up"
    }
  },
  {
    id: 48,
    name: "Queen of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Empathy", "Intuitive Depth", "Emotional Anchor"],
      meaning: "offering deep compassion, safe boundaries, and profound emotional understanding",
      narrativeSnippet: "an anchor of quiet emotional strength and deep intuitive understanding"
    },
    reversed: {
      keywords: ["Codependency", "Emotional Drain", "Over-Sensitivity"],
      meaning: "getting overwhelmed by others' feelings, emotional martyrdom, or moodiness",
      narrativeSnippet: "soaking up surrounding chaotic feelings until your own battery is totally dead"
    }
  },
  {
    id: 49,
    name: "King of Cups",
    arcana: "Minor",
    suit: "Cups",
    upright: {
      keywords: ["Emotional Mastery", "Composure", "Wisdom"],
      meaning: "balancing deep empathy with cool mental composure under high pressure",
      narrativeSnippet: "staying completely calm and centered in the middle of emotional turbulence"
    },
    reversed: {
      keywords: ["Volatility", "Emotional Control", "Suppression"],
      meaning: "passive-aggressive moves, repressed feelings exploding, or emotional manipulation",
      narrativeSnippet: "bottling up raw feelings behind a cold mask until it boils over"
    }
  },

  // ... [Indexes 37 to 49: 2 of Cups through King of Cups] ...

  // --- MINOR ARCANA: SWORDS (50 - 63) ---
  {
    id: 50,
    name: "Ace of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Breakthrough", "Clarity", "Sharp Focus"],
      meaning: "a sharp mental realization cutting clean through confusion",
      narrativeSnippet: "an intellectual breakthrough that establishes undeniable truth"
    },
    reversed: {
      keywords: ["Confusion", "Miscommunication", "Clouded Judgment"],
      meaning: "overthinking, conflicting mental chatter, or harsh miscommunication",
      narrativeSnippet: "mental static that obscures clear decision-making"
    }
  },
  {
    id: 51,
    name: "Two of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Stalemate", "Truce", "Avoidance"],
      meaning: "facing a difficult decision while intentionally blocking out competing facts",
      narrativeSnippet: "a tense standstill where choosing to ignore the issue only delays the inevitable"
    },
    reversed: {
      keywords: ["Information Overload", "Truth Revealed", "Lifting Blindfold"],
      meaning: "forced clarity, seeing through self-deception, or overwhelming information",
      narrativeSnippet: "the blindfold ripping off as unavoidable realities force your hand"
    }
  },
  {
    id: 52,
    name: "Three of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Heartbreak", "Rejection", "Painful Truth"],
      meaning: "sharp mental clarity coming at the price of emotional grief or betrayal",
      narrativeSnippet: "a harsh realization that cuts clean through comfort to expose raw truth"
    },
    reversed: {
      keywords: ["Recovery", "Forgiveness", "Healing Pain"],
      meaning: "releasing painful memories, stitching up old wounds, and letting clarity heal",
      narrativeSnippet: "the initial sting fading away as processing the truth opens room to recover"
    }
  },
  {
    id: 53,
    name: "Four of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Rest", "Mental Recharge", "Sanctuary"],
      meaning: "stepping back from battle to give an exhausted mind time to recuperate",
      narrativeSnippet: "a tactical retreat to quiet mental chatter and reset your battery"
    },
    reversed: {
      keywords: ["Burnout", "Restlessness", "Forced Action"],
      meaning: "returning to action before fully healed or extreme burnout from continuous stress",
      narrativeSnippet: "jumping back into the fray prematurely while your mental battery is still red"
    }
  },
  {
    id: 54,
    name: "Five of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Pyrrhic Victory", "Hostility", "Unchecked Ego"],
      meaning: "winning an argument at the cost of valuable trust and underlying respect",
      narrativeSnippet: "standing alone on the battlefield holding a victory that feels completely hollow"
    },
    reversed: {
      keywords: ["Lingering Resentment", "Desire for Peace", "Moving On"],
      meaning: "dropping petty grudges, cutting losses, or exhausting malicious energy",
      narrativeSnippet: "laying down your weapon because keeping the fight going isn't worth the toll"
    }
  },
  {
    id: 55,
    name: "Six of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Transition", "Moving On", "Quieter Waters"],
      meaning: "leaving turbulent mental waters behind to head toward calmer shores",
      narrativeSnippet: "carrying necessary baggage while navigating slowly toward quieter horizons"
    },
    reversed: {
      keywords: ["Unfinished Business", "Baggage", "Stalled Journey"],
      meaning: "unresolved mental loops dragging down progress or resisting necessary moves",
      narrativeSnippet: "trying to cross over to fresh ground while unresolved baggage holds the boat back"
    }
  },
  {
    id: 56,
    name: "Seven of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Strategy", "Subterfuge", "Lone Wolf"],
      meaning: "using cunning tactics, keeping plans private, or taking shortcuts to win",
      narrativeSnippet: "slipping away under cover of night with the prize before anyone notices"
    },
    reversed: {
      keywords: ["Exposed", "Imposter Syndrome", "Confession"],
      meaning: "sneaky tactics getting called out, severe imposter feelings, or coming clean",
      narrativeSnippet: "getting caught red-handed or realizing sneaky shortcuts cost more than they saved"
    }
  },
  {
    id: 57,
    name: "Eight of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Self-Imposed Trap", "Victim Mentality", "Mental Prison"],
      meaning: "feeling completely trapped by your own internal anxieties and rigid assumptions",
      narrativeSnippet: "surrounded by a fence of loose blades you could easily step right through"
    },
    reversed: {
      keywords: ["Freedom", "New Perspective", "Taking Control"],
      meaning: "dismantling internal limits, reclaiming personal agency, and stepping out",
      narrativeSnippet: "realizing the cage was unlocked all along and stepping out into freedom"
    }
  },
  {
    id: 58,
    name: "Nine of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Anxiety", "Overthinking", "Nightmares"],
      meaning: "spiraling late-night thoughts exaggerating real fears into overwhelming dread",
      narrativeSnippet: "staring up at the dark ceiling while catastrophic thoughts run wild"
    },
    reversed: {
      keywords: ["Relief", "Facing Shadows", "Ending the Spiral"],
      meaning: "waking up from the anxiety loop to realize things aren't as dire as they felt",
      narrativeSnippet: "morning light breaking through to expose your worst fears as exaggerated shadows"
    }
  },
  {
    id: 59,
    name: "Ten of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Rock Bottom", "Defeat", "Inescapable End"],
      meaning: "a definitive mental collapse or betrayal marking the absolute bottom",
      narrativeSnippet: "the dramatic end of a brutal cycle where there is nowhere left to fall but up"
    },
    reversed: {
      keywords: ["Rising Again", "Surviving", "Rebuilding"],
      meaning: "pulling yourself up from total defeat and slowly starting to rebuild",
      narrativeSnippet: "crawling back up after the worst has already happened and dust settles"
    }
  },
  {
    id: 60,
    name: "Page of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Curiosity", "Vigilance", "Mental Sharpness"],
      meaning: "eagerly gathering information, asking sharp questions, and staying alert",
      narrativeSnippet: "a sharp-minded observer poking into details to find out what's really happening"
    },
    reversed: {
      keywords: ["Gossip", "Paranoia", "All Talk"],
      meaning: "spreading reckless rumors, petty intellectual posturing, or jumpy paranoia",
      narrativeSnippet: "spouting sharp theories without having actual evidence to back them up"
    }
  },
  {
    id: 61,
    name: "Knight of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Driven", "Direct Action", "Relentless Focus"],
      meaning: "charging forward with ruthless logic and razor-sharp intellectual momentum",
      narrativeSnippet: "blasting through debate and hesitation with unstoppable mental drive"
    },
    reversed: {
      keywords: ["Tactless", "Reckless Speech", "Tunnel Vision"],
      meaning: "blundering ahead with harsh words, extreme tunnel vision, or arguments for fun",
      narrativeSnippet: "steamrolling over subtle feelings with sharp, tactless observations"
    }
  },
  {
    id: 62,
    name: "Queen of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Clear Boundaries", "Unbiased Perception", "Directness"],
      meaning: "cutting away emotional noise to evaluate facts with direct, honest precision",
      narrativeSnippet: "a sharp, witty intellect that sees right through bullshit without flinching"
    },
    reversed: {
      keywords: ["Coldness", "Cynicism", "Hyper-Critical"],
      meaning: "using sharp intellect as a weapon, extreme cynicism, or cold isolation",
      narrativeSnippet: "turning your sharp mind into a shield that cuts people off before they get close"
    }
  },
  {
    id: 63,
    name: "King of Swords",
    arcana: "Minor",
    suit: "Swords",
    upright: {
      keywords: ["Truth", "Intellectual Mastery", "Objective Authority"],
      meaning: "commanding situation through high mental clarity, logic, and ethical truth",
      narrativeSnippet: "laying down fair, undeniable judgments based purely on cold, hard facts"
    },
    reversed: {
      keywords: ["Manipulative Logic", "Tyranny", "Cold Calculation"],
      meaning: "twisting facts to control the narrative, cold-blooded cynicism, or abuse of power",
      narrativeSnippet: "using intellectual authority to control or manipulate the outcome"
    }
  },

  // ... [Indexes 51 to 63: 2 of Swords through King of Swords] ...

  // --- MINOR ARCANA: PENTACLES (64 - 77) ---
  {
    id: 64,
    name: "Ace of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Abundance", "Practical Opportunity", "Stability"],
      meaning: "a grounding physical opportunity or tangible foundational gain",
      narrativeSnippet: "a practical seed planted for long-term real-world progress"
    },
    reversed: {
      keywords: ["Missed Chance", "Financial Misstep", "Instability"],
      meaning: "poorly timed resource allocation or hesitation around practical steps",
      narrativeSnippet: "a grounded chance that risks slipping through unreadiness"
    }
  }
{
    id: 65,
    name: "Two of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Juggling", "Adaptability", "Prioritization"],
      meaning: "balancing competing real-world demands, resources, and shifting priorities",
      narrativeSnippet: "keeping multiple moving parts in motion through continuous small adjustments"
    },
    reversed: {
      keywords: ["Overwhelmed", "Financial Strain", "Imbalance"],
      meaning: "dropping the ball while trying to juggle too many commitments at once",
      narrativeSnippet: "losing your rhythm as real-world demands pile up faster than you can manage"
    }
  },
  {
    id: 66,
    name: "Three of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Teamwork", "Collaboration", "Craftsmanship"],
      meaning: "combining specialized skills to build something durable and well-crafted",
      narrativeSnippet: "collaborating with skilled peers to translate plans into solid physical work"
    },
    reversed: {
      keywords: ["Misalignment", "Poor Workmanship", "Friction"],
      meaning: "clashing work styles, lack of cohesion, or cutting corners on build quality",
      narrativeSnippet: "misaligned effort and poor communication slowing down tangible progress"
    }
  },
  {
    id: 67,
    name: "Four of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Security", "Control", "Conservation"],
      meaning: "protecting assets, establishing stability, and guarding against material loss",
      narrativeSnippet: "locking down your resources to build a solid, unshakeable perimeter"
    },
    reversed: {
      keywords: ["Greed", "Possessiveness", "Scarcity Mindset"],
      meaning: "clinging so tightly to security that it breeds stagnation or fear of loss",
      narrativeSnippet: "refusing to invest or share out of an intense fear of running empty"
    }
  },
  {
    id: 68,
    name: "Five of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Hardship", "Scarcity", "Isolation"],
      meaning: "navigating physical strain, resource lack, or feeling left out in the cold",
      narrativeSnippet: "trudging through a lean patch while trying to find shelter from the storm"
    },
    reversed: {
      keywords: ["Recovery", "Financial Hope", "Seeking Help"],
      meaning: "emerging from material strain, finding unexpected support, and rebuilding",
      narrativeSnippet: "seeing light at the end of the tunnel as real-world relief finally opens up"
    }
  },
  {
    id: 69,
    name: "Six of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Generosity", "Sharing", "Resource Flow"],
      meaning: "giving or receiving support to maintain a healthy flow of wealth and aid",
      narrativeSnippet: "a balanced exchange of energy, funding, or aid that lifts both sides"
    },
    reversed: {
      keywords: ["Strings Attached", "Power Dynamic", "Unpaid Debt"],
      meaning: "one-sided charity, power imbalance tied to money, or conditional support",
      narrativeSnippet: "accepting aid that comes with hidden costs or unspoken expectations"
    }
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Patience", "Investment", "Long-Term Yield"],
      meaning: "pausing to assess long-term returns on work already put into motion",
      narrativeSnippet: "leaning on your shovel to evaluate how well your past seeds are growing"
    },
    reversed: {
      keywords: ["Impatience", "Wasted Effort", "Poor Return"],
      meaning: "frustration over slow gains, pushing unviable investments, or cutting losses",
      narrativeSnippet: "feeling like massive physical effort yielded tiny, disappointing results"
    }
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Mastery", "Diligence", "Skill Building"],
      meaning: "dedicating focused effort to refining technical craft and repetitive detail",
      narrativeSnippet: "putting your head down to hone your craft through disciplined daily repetition"
    },
    reversed: {
      keywords: ["Shortcuts", "Perfectionism", "Monotony"],
      meaning: "rushing through details, feeling trapped by repetitive tasks, or bad form",
      narrativeSnippet: "slapping work together too quick or grinding endlessly on pointless polish"
    }
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Self-Reliance", "Abundance", "Refined Comfort"],
      meaning: "savoring the fruits of disciplined labor in complete personal independence",
      narrativeSnippet: "enjoying a private sanctuary built entirely by your own hard work"
    },
    reversed: {
      keywords: ["Over-Extension", "Superficiality", "Dependency"],
      meaning: "living beyond means, maintaining a facade of success, or hidden reliance",
      narrativeSnippet: "straining your actual reserves just to keep up an expensive front"
    }
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Legacy", "Long-Term Wealth", "Foundation"],
      meaning: "establishing lasting real-world security and structural support across generations",
      narrativeSnippet: "a rock-solid foundation that secures resources and comfort long into the future"
    },
    reversed: {
      keywords: ["Financial Instability", "Dispute", "Flawed Foundation"],
      meaning: "quarrels over shared resources, fragile structures, or mismanaged wealth",
      narrativeSnippet: "cracks appearing in long-standing financial or organizational structures"
    }
  },
  {
    id: 74,
    name: "Page of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Pragmatic Spark", "Skill Study", "Grounded Start"],
      meaning: "eagerly taking on a practical project or learning a concrete skill from scratch",
      narrativeSnippet: "a grounded urge to study hard and build something real with your own hands"
    },
    reversed: {
      keywords: ["Procrastination", "Lack of Follow-Through", "Short-Sighted"],
      meaning: "daydreaming about results without doing the gritty groundwork needed",
      narrativeSnippet: "getting excited about practical gains but skipping the actual work required"
    }
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Methodical", "Reliability", "Steady Grind"],
      meaning: "driving steady, unyielding progress through absolute consistency and routine",
      narrativeSnippet: "putting one foot in front of the other until the full distance is covered"
    },
    reversed: {
      keywords: ["Stuck in a Rut", "Stubbornness", "Boredom"],
      meaning: "getting stuck in rigid routine, resisting adaptation, or grinding to a halt",
      narrativeSnippet: "plowing ahead on autopilot without checking if the route still makes sense"
    }
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Nurturing Stability", "Resourcefulness", "Grounded Care"],
      meaning: "managing practical affairs with sensible warmth, efficiency, and earthly comfort",
      narrativeSnippet: "keeping the engine running smoothly while maintaining a comfortable space"
    },
    reversed: {
      keywords: ["Workaholism", "Self-Neglect", "Financial Anxiety"],
      meaning: "obsessing over material security to the point of exhausting your own health",
      narrativeSnippet: "over-focusing on physical chores while completely draining your energy"
    }
  },
  {
    id: 77,
    name: "King of Pentacles",
    arcana: "Minor",
    suit: "Pentacles",
    upright: {
      keywords: ["Material Mastery", "Enterprise", "Stability"],
      meaning: "commanding practical resources, business growth, and grounded execution",
      narrativeSnippet: "turning practical vision into an empire of stable, tangible assets"
    },
    reversed: {
      keywords: ["Greed", "Short-Sighted Control", "Material Obsession"],
      meaning: "evaluating everything purely by financial cost while ignoring real value",
      narrativeSnippet: "prioritizing short-term profit margins over long-term stability and integrity"
    }
  }
  // ... [Indexes 65 to 77: 2 of Pentacles through King of Pentacles] ...
];

/**
 * Normalizes any 0-155 index into its card object
 */
function getCardByImageIndex(index) {
  const normalizedIndex = Math.abs(index) % 156;
  const isReversed = normalizedIndex >= 78;
  const baseId = normalizedIndex % 78;
  
  // Fallback to card 0 if array index isn't filled out yet
  const cardData = CARD_DEFINITIONS[baseId] || CARD_DEFINITIONS[0];

  // Pad the base ID to three digits (or use normalizedIndex if your files are named that way)
  const formattedIndex = String(baseId).padStart(3, "0");   // ← add this line

  return {
    imageIndex: normalizedIndex,
    imagePath: `${ASSET_BASE_URL}/tarot${formattedIndex}.png`,
    name: cardData.name,
    arcana: cardData.arcana,
    suit: cardData.suit,
    isReversed: isReversed,
    orientation: isReversed ? "Reversed" : "Upright",
    details: isReversed ? cardData.reversed : cardData.upright
  };
}
