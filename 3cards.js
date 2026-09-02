/**
 * ThreeCardSynthesis 2.1
 * Clear, warm, accessible narrative synthesizer for 3-Card Spreads
 */
const ThreeCardSynthesis = {
  positions: ["Past / Foundation", "Present / Crucible", "Future / Trajectory"],

  generateReading(drawnCards, question = "") {
    if (!drawnCards || drawnCards.length !== 3) {
      return ["Unable to create a reading: Three cards are needed."];
    }

    const [past, present, future] = drawnCards;
    const hasQuestion = question && question.trim().length > 0;
    const cleanQuestion = hasQuestion ? question.trim() : "";

    // Paragraph 1 – Opening + Past
    let p1;
    if (hasQuestion) {
      p1 = `You asked: “${cleanQuestion}”. The cards begin in the past with **${past.name} (${past.orientation})**. This card shows the foundation you have been standing on. It grew out of ${past.details.meaning}. In simple terms, it set the stage by creating ${past.details.narrativeSnippet}.`;
    } else {
      p1 = `The reading begins in the past with **${past.name} (${past.orientation})**. This card shows the foundation you have been standing on. It grew out of ${past.details.meaning}. In simple terms, it set the stage by creating ${past.details.narrativeSnippet}.`;
    }

    // Paragraph 2 – Present
    const p2 = `Now we come to the present, where **${present.name} (${present.orientation})** appears. This is the energy you are walking through right now. It asks you to deal with ${present.details.meaning}. The main themes here are ${present.details.keywords.join(", ").toLowerCase()}.`;

    // Paragraph 3 – Future
    const p3 = `Looking ahead, **${future.name} (${future.orientation})** shows the direction things are moving. The lessons from ${past.name} are passing through your current experience with ${present.name}, and they are leading toward ${future.details.meaning}. At its heart, this points to ${future.details.narrativeSnippet}.`;

    // Paragraph 4 – Orientation (upright vs reversed)
    const p4 = this._analyzeOrientationFlow(past, present, future);

    // Paragraph 5 – How the cards work together
    const p5 = this._analyzeCardInteraction(past, present, future);

    // Paragraph 6 – Elemental feel
    const p6 = this._analyzeSuitInterplay(past, present, future);

    // Paragraph 7 – Pace and timing
    const p7 = this._analyzeTemporalMomentum(past, present, future);

    // Paragraph 8 – Guidance + closing
    const p8 = this._generateGuidanceAndSummary(past, present, future, cleanQuestion);

    return [p1, p2, p3, p4, p5, p6, p7, p8];
  },

  _analyzeOrientationFlow(past, present, future) {
    const reversedCount = [past, present, future].filter(c => c.isReversed).length;

    if (reversedCount === 3) {
      return "All three cards are reversed. This usually means the real work is happening on the inside right now. Things may feel slower or less visible on the outside because important inner shifts are still taking place.";
    }
    if (reversedCount === 0) {
      return "All three cards are upright. This suggests the energy is moving more openly into the outer world. Your actions and choices are likely to create clearer, more visible results.";
    }
    if (past.isReversed && !future.isReversed) {
      return `The past card is reversed while the future card is upright. This is a hopeful sign. It often means something that once felt stuck or heavy is beginning to loosen, making room for freer movement ahead.`;
    }
    if (!past.isReversed && future.isReversed) {
      return `The past was more outward and active, but the future card is reversed. This can be a gentle warning to slow down and look inward before pushing forward too quickly.`;
    }
    return "Some cards are upright and some are reversed. This mix usually shows a natural back-and-forth between taking action in the world and turning inward to reflect and adjust.";
  },

  _analyzeCardInteraction(past, present, future) {
    const majorCount = [past, present, future].filter(c => c.arcana === "Major").length;

    if (majorCount >= 2) {
      return `Two or more Major Arcana cards appear here. When this happens, the reading is pointing to a bigger life theme rather than a small everyday matter. The combination of ${past.name}, ${present.name}, and ${future.name} suggests you are in the middle of an important chapter that deserves your full attention.`;
    }

    return `These three cards are having a conversation with each other. ${past.name} laid down a certain pattern. ${present.name} is now testing or reshaping that pattern. ${future.name} shows where this process wants to lead. Even when the cards feel different from one another, they are still part of the same unfolding story.`;
  },

  _analyzeSuitInterplay(past, present, future) {
    const suits = [past.suit, present.suit, future.suit];
    const majorCount = suits.filter(s => s === "Major").length;

    if (majorCount >= 2) {
      return "Because Major Arcana cards are strong in this spread, the bigger life lessons matter more than the usual elemental details right now.";
    }

    if (past.suit === future.suit && past.suit !== "Major") {
      return `Both the past and the future cards belong to the suit of **${past.suit}**. This creates a strong, steady theme running through the whole reading. Working honestly with ${present.name} in the middle is the key to moving well with this energy.`;
    }

    const uniqueSuits = new Set(suits.filter(s => s !== "Major"));
    if (uniqueSuits.size === 3) {
      return "The cards bring in different elemental energies. This means life may ask you to be flexible — sometimes dealing with feelings, sometimes with thoughts, and sometimes with practical matters.";
    }

    if (uniqueSuits.size === 1) {
      const dominant = [...uniqueSuits][0];
      const elementMeaning = {
        "Wands": "action, passion, and forward movement",
        "Cups": "emotions, relationships, and the heart",
        "Swords": "thoughts, clarity, and honest communication",
        "Pentacles": "the physical world, work, money, and daily stability"
      };
      return `This spread is strongly colored by the suit of **${dominant}**, which relates to ${elementMeaning[dominant] || "this area of life"}. The main lesson is concentrated here.`;
    }

    return `Let ${present.name} act as the bridge between what ${past.name} started and where ${future.name} is pointing. The middle card is where your real influence lies right now.`;
  },

  _analyzeTemporalMomentum(past, present, future) {
    if (future.arcana === "Major" && !future.isReversed) {
      return "A Major Arcana card in the future position often means the road ahead carries real weight. Things may not move at lightning speed, but what is forming has lasting importance.";
    }

    if (future.isReversed) {
      return "The future card is reversed. This usually suggests the outcome is still taking shape beneath the surface. It is better to keep tending the inner work rather than forcing a result before it is ready.";
    }

    if (past.isReversed && present.isReversed) {
      return "Both the past and present cards are reversed. A lot of the current movement is happening quietly on the inside. Outer progress may feel slower because important inner groundwork is still being done.";
    }

    return "The energy of this spread moves at a steady, human pace. It gives you room to participate consciously instead of being swept along too quickly.";
  },

  _generateGuidanceAndSummary(past, present, future, question) {
    const presentFocus = present.details.keywords[0].toLowerCase();
    const futureDirection = future.details.keywords[0].toLowerCase();

    let guidance = `Right now, ${present.name} is asking you to pay attention to **${presentFocus}**. `;

    if (future.isReversed) {
      guidance += `Because the future card is reversed, the most helpful approach is to keep working with this theme quietly and steadily rather than pushing for a fast outer result.`;
    } else {
      guidance += `Doing so naturally supports the direction shown by ${future.name}, which points toward **${futureDirection}**.`;
    }

    let summary;
    if (question) {
      summary = `**In short:** Looking at your question “${question}”, the cards show a path that moves from ${past.details.keywords[0].toLowerCase()} through ${present.details.keywords[0].toLowerCase()} and toward ${future.details.keywords[0].toLowerCase()}. Respect what ${past.name} taught you, work honestly with ${present.name}, and you will be better able to meet what ${future.name} is offering.`;
    } else {
      summary = `**In short:** The cards show a path that moves from ${past.details.keywords[0].toLowerCase()} through ${present.details.keywords[0].toLowerCase()} and toward ${future.details.keywords[0].toLowerCase()}. Respect what ${past.name} taught you, work honestly with ${present.name}, and you will be better able to meet what ${future.name} is offering.`;
    }

    return `${guidance} ${summary}`;
  }
};
