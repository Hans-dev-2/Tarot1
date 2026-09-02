/**
 * Tarot App Controller
 * Handles deck shuffling (0-155), 3D flip DOM rendering, user interaction, 
 * pre-computation, and timed narrative synthesis triggers.
 */
const TarotApp = {
  state: {
    currentSpread: [],          // Holds the 3 drawn card objects from meanings.js
    revealedIndices: new Set(), // Tracks which card slots (0, 1, 2) have been flipped
    cardBackPath: "https://hansostudio.github.io/tarot1/assets/card-back.png"
  },

  /**
   * Selects 3 unique base cards (0-77) with randomized orientation state (0-155).
   * Maps through getCardByImageIndex() defined in meanings.js.
   */
  drawCards(count = 3) {
    const drawnIndexes = [];
    const usedBaseIds = new Set();

    while (drawnIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * 156);
      const baseId = randomIndex % 78;

      // Ensure no duplicate physical cards appear in a single spread
      if (!usedBaseIds.has(baseId)) {
        usedBaseIds.add(baseId);
        drawnIndexes.push(randomIndex);
      }
    }

    // Hydrate indexes using the meanings.js lookup engine
    this.state.currentSpread = drawnIndexes.map(index => getCardByImageIndex(index));
    this.state.revealedIndices.clear();
    return this.state.currentSpread;
  },

  /**
   * Initializes a fresh face-down spread and resets status UI
   */
  handleDraw() {
    // 1. Pick cards and hydrate objects
    this.drawCards(3);

    // 2. Render face-down 3D card slots in DOM
    this.renderFaceDownUI();

    // 3. Reset narrative container text while user interacts with cards
    const narrativeContainer = document.getElementById("narrative-container");
    if (narrativeContainer) {
      narrativeContainer.innerHTML = `<p class="status-text">Click each card to reveal your spread...</p>`;
    }
  },

  /**
   * Renders 3D perspective card markup face-down
   */
  renderFaceDownUI() {
    const container = document.getElementById("cards-container");
    if (!container) return;

    container.innerHTML = this.state.currentSpread.map((card, slotIndex) => `
      <div class="card-slot" data-slot="${slotIndex}">
        <span class="position-label">${ThreeCardSynthesis.positions[slotIndex]}</span>
        <div class="card-inner" onclick="TarotApp.handleCardClick(${slotIndex})">
          <div class="card-back">
            <img src="${this.state.cardBackPath}" alt="Card Back" />
          </div>
          <div class="card-front">
            <img src="${card.imagePath}" alt="${card.name} (${card.orientation})" />
          </div>
        </div>
        <p class="card-title">Tap to reveal</p>
      </div>
    `).join("");
  },

  /**
   * Handles user tapping/clicking an individual card slot
   */
  handleCardClick(slotIndex) {
    // Prevent re-triggering already flipped cards
    if (this.state.revealedIndices.has(slotIndex)) return;

    this.state.revealedIndices.add(slotIndex);
    const card = this.state.currentSpread[slotIndex];

    // Trigger 3D CSS rotation & update title text
    const slotEl = document.querySelector(`.card-slot[data-slot="${slotIndex}"]`);
    if (slotEl) {
      const innerEl = slotEl.querySelector(".card-inner");
      const titleEl = slotEl.querySelector(".card-title");

      innerEl.classList.add("flipped");
      titleEl.innerHTML = `<strong>${card.name}</strong><br><em>${card.orientation}</em>`;
    }

    // Update flip status or trigger synthesis
    const narrativeContainer = document.getElementById("narrative-container");
    const count = this.state.revealedIndices.size;

    if (count < 3) {
      if (narrativeContainer) {
        narrativeContainer.innerHTML = `<p class="status-text">${count} of 3 cards revealed... click the rest to synthesize your reading.</p>`;
      }
    } else {
      // Small 500ms delay gives the 3D rotation time to land before fading in the story
      setTimeout(() => {
        this.triggerSynthesis();
      }, 500);
    }
  },

  /**
   * Called automatically when all 3 cards are flipped face-up
   */
  triggerSynthesis() {
    // Call dedicated narrative synthesizer engine from 3cards.js
    const narrativeParagraphs = ThreeCardSynthesis.generateReading(this.state.currentSpread);
    const container = document.getElementById("narrative-container");
    if (!container) return;

    // Render Option C synthesis with fade-in CSS class
    container.innerHTML = `
      <div class="narrative-content fade-in">
        <h3 class="synthesis-header">Spread Narrative Synthesis</h3>
        ${narrativeParagraphs.map(p => `<p class="narrative-p">${p}</p>`).join("")}
      </div>
    `;
  }
};

// Bind button listener on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const drawBtn = document.getElementById("draw-btn");
  if (drawBtn) {
    drawBtn.addEventListener("click", () => TarotApp.handleDraw());
  }
});
