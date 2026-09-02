/**
 * house.js
 * Sidereal seasonal climate + 12 Houses life-area system
 * Shared resource for all spreads
 * 
 * Uses Eastern Sidereal (Lahiri) framework for the current season.
 * Houses are treated symbolically as life-area categories.
 */

const HouseSystem = {

  /**
   * Returns the current Sidereal Sun sign and its seasonal quality.
   * Updated for 2 September 2026 → Sidereal Leo (Simha)
   * 
   * In a real deployment this can later be made fully dynamic
   * with a proper ayanamsa calculation. For now we lock the
   * current correct value and provide a simple date-based fallback.
   */
  getCurrentClimate() {
    const now = new Date();
    const month = now.getMonth() + 1; // 1–12
    const day = now.getDate();

    let sign = "Leo";
    let quality = "a time that favors self-expression, creativity, recognition, and leading from the heart";

    // Approximate seasonal ranges (internal calculation only)
    if ((month === 4 && day >= 14) || (month === 5 && day <= 14)) {
      sign = "Aries";
      quality = "a time that favors fresh starts, courage, and taking the first step";
    } 
    else if ((month === 5 && day >= 15) || (month === 6 && day <= 14)) {
      sign = "Taurus";
      quality = "a time that favors steady growth, comfort, and building real security";
    } 
    else if ((month === 6 && day >= 15) || (month === 7 && day <= 15)) {
      sign = "Gemini";
      quality = "a time that favors curiosity, conversation, and connecting ideas";
    } 
    else if ((month === 7 && day >= 16) || (month === 8 && day <= 16)) {
      sign = "Cancer";
      quality = "a time that favors emotional honesty, home, and caring for what matters most";
    } 
    else if ((month === 8 && day >= 17) || (month === 9 && day <= 16)) {
      sign = "Leo";
      quality = "a time that favors self-expression, creativity, recognition, and leading from the heart";
    } 
    else if ((month === 9 && day >= 17) || (month === 10 && day <= 16)) {
      sign = "Virgo";
      quality = "a time that favors careful improvement, practical service, health, and quiet refinement";
    } 
    else if ((month === 10 && day >= 17) || (month === 11 && day <= 15)) {
      sign = "Libra";
      quality = "a time that favors balance, relationships, fairness, and finding harmony with others";
    } 
    else if ((month === 11 && day >= 16) || (month === 12 && day <= 15)) {
      sign = "Scorpio";
      quality = "a time that favors depth, honesty about what is hidden, and meaningful transformation";
    } 
    else if ((month === 12 && day >= 16) || (month === 1 && day <= 13)) {
      sign = "Sagittarius";
      quality = "a time that favors big-picture vision, learning, and moving toward greater freedom";
    } 
    else if ((month === 1 && day >= 14) || (month === 2 && day <= 12)) {
      sign = "Capricorn";
      quality = "a time that favors structure, long-term goals, responsibility, and building something lasting";
    } 
    else if ((month === 2 && day >= 13) || (month === 3 && day <= 13)) {
      sign = "Aquarius";
      quality = "a time that favors original thinking, community, and looking ahead to the future";
    } 
    else if ((month === 3 && day >= 14) || (month === 4 && day <= 13)) {
      sign = "Pisces";
      quality = "a time that favors compassion, rest, imagination, and releasing what is complete";
    }

    return {
      sign: sign,
      quality: quality,
      description: `This question is being asked during ${sign} season — ${quality}.`
    };
  },

  /**
   * The 12 Houses as life-area categories
   * Meanings are kept simple and accessible
   */
  HOUSES: {
    1: {
      number: 1,
      name: "1st House",
      themes: ["self", "identity", "body", "appearance", "how I present myself"],
      description: "the self, your body, and the way you meet the world"
    },
    2: {
      number: 2,
      name: "2nd House",
      themes: ["money", "possessions", "values", "security", "what I have"],
      description: "money, resources, and what you value"
    },
    3: {
      number: 3,
      name: "3rd House",
      themes: ["communication", "siblings", "learning", "short trips", "courage"],
      description: "communication, learning, and everyday connections"
    },
    4: {
      number: 4,
      name: "4th House",
      themes: ["home", "family", "mother", "roots", "private life", "emotional foundation"],
      description: "home, family, and your emotional roots"
    },
    5: {
      number: 5,
      name: "5th House",
      themes: ["love", "romance", "creativity", "children", "pleasure", "fun"],
      description: "romance, creativity, and the things that bring you joy"
    },
    6: {
      number: 6,
      name: "6th House",
      themes: ["work", "health", "daily routine", "service", "obstacles"],
      description: "daily work, health, and the routines that shape your life"
    },
    7: {
      number: 7,
      name: "7th House",
      themes: ["relationship", "partnership", "marriage", "the other person", "contracts"],
      description: "committed relationships and one-to-one partnerships"
    },
    8: {
      number: 8,
      name: "8th House",
      themes: ["shared money", "transformation", "deep change", "intimacy", "loss", "inheritance"],
      description: "deep transformation, shared resources, and what is hidden"
    },
    9: {
      number: 9,
      name: "9th House",
      themes: ["beliefs", "travel", "higher learning", "philosophy", "long journeys", "faith"],
      description: "beliefs, higher learning, and the search for meaning"
    },
    10: {
      number: 10,
      name: "10th House",
      themes: ["career", "public image", "reputation", "ambition", "status", "authority"],
      description: "career, public reputation, and your role in the wider world"
    },
    11: {
      number: 11,
      name: "11th House",
      themes: ["friends", "community", "groups", "hopes", "future goals", "networks"],
      description: "friends, community, and your hopes for the future"
    },
    12: {
      number: 12,
      name: "12th House",
      themes: ["solitude", "retreat", "secrets", "letting go", "hidden matters", "rest"],
      description: "solitude, rest, and the things that are still unseen"
    }
  },

    /**
   * Maps a free-text question to the most likely House
   * Returns the house number (1–12) or 0 if unclear
   */
  detectQuestionHouse(questionText) {
    if (!questionText || questionText.trim().length === 0) return 0;

    const q = questionText.toLowerCase();

    // More specific matches first
    if (/\b(love|romance|boyfriend|girlfriend|dating|crush|affair|passion)\b/.test(q)) return 5;
    if (/\b(marriage|husband|wife|partner|relationship|spouse|divorce|separation)\b/.test(q)) return 7;
    if (/\b(career|job|work|promotion|business|boss|profession|ambition|status)\b/.test(q)) return 10;
    if (/\b(money|finance|debt|salary|income|wealth|savings|afford)\b/.test(q)) return 2;
    if (/\b(health|illness|sickness|body|energy|stress|routine|habit)\b/.test(q)) return 6;
    if (/\b(home|house|family|mother|parents|move|relocate|private)\b/.test(q)) return 4;
    if (/\b(friend|community|group|network|social|future hope|wish)\b/.test(q)) return 11;
    if (/\b(travel|study|college|university|belief|faith|purpose|meaning|abroad)\b/.test(q)) return 9;
    if (/\b(sex|intimacy|shared|inheritance|transform|crisis|deep change)\b/.test(q)) return 8;
    if (/\b(sibling|brother|sister|communicate|speak|write|learn|short trip)\b/.test(q)) return 3;
    if (/\b(alone|solitude|secret|hide|release|let go|spiritual retreat)\b/.test(q)) return 12;
    if (/\b(myself|identity|appearance|confidence|who i am)\b/.test(q)) return 1;

    return 0; // unclear
  },

  /**
   * Analyzes the relationship between the current seasonal climate
   * and the House of the question.
   * Returns a warm, plain-language paragraph.
   */
  analyzeClimateHouseRelationship(climate, questionHouseNumber) {
    if (!questionHouseNumber || questionHouseNumber < 1 || questionHouseNumber > 12) {
      return climate.description;
    }

    const house = this.HOUSES[questionHouseNumber];
    const climateSign = climate.sign;

    const fireSigns = ["Aries", "Leo", "Sagittarius"];
    const earthSigns = ["Taurus", "Virgo", "Capricorn"];
    const airSigns = ["Gemini", "Libra", "Aquarius"];
    const waterSigns = ["Cancer", "Scorpio", "Pisces"];

    if (fireSigns.includes(climateSign) && [1, 5, 9, 10].includes(questionHouseNumber)) {
      return `The current Sidereal ${climateSign} climate supports bold expression and visible movement. This works well with questions about ${house.description}.`;
    }

    if (earthSigns.includes(climateSign) && [2, 6, 10].includes(questionHouseNumber)) {
      return `The current Sidereal ${climateSign} climate favors practical steps and steady building. This aligns naturally with questions about ${house.description}.`;
    }

    if (airSigns.includes(climateSign) && [3, 7, 11].includes(questionHouseNumber)) {
      return `The current Sidereal ${climateSign} climate encourages connection, conversation, and perspective. This supports questions about ${house.description}.`;
    }

    if (waterSigns.includes(climateSign) && [4, 8, 12].includes(questionHouseNumber)) {
      return `The current Sidereal ${climateSign} climate brings emotional depth and inner awareness. This resonates with questions about ${house.description}.`;
    }

    // Default meeting of weather and topic
    return `This question about ${house.description} is being asked during Sidereal ${climateSign} season — ${climate.quality}. The cards will show how these two energies are currently meeting.`;
  },

  /**
   * Convenience method: returns full climate + house context for a question
   */
  getFullContext(questionText) {
    const climate = this.getCurrentClimate();
    const houseNum = this.detectQuestionHouse(questionText);
    const relationship = this.analyzeClimateHouseRelationship(climate, houseNum);

    return {
      climate: climate,
      houseNumber: houseNum,
      house: houseNum ? this.HOUSES[houseNum] : null,
      relationshipText: relationship
    };
  }

}; // end of HouseSystem
