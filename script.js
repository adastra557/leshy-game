document.addEventListener('DOMContentLoaded', function() {
    // Game Configuration
    const GAME_CONFIG = {
        difficulties: {
            sprout: { pairs: 4, previewTime: 3000, grid: 'repeat(4, 120px)' },
            blossom: { pairs: 6, previewTime: 2000, grid: 'repeat(4, 110px)' },
            bloom: { pairs: 8, previewTime: 0, grid: 'repeat(5, 100px)' }
        },
        languages: {
            en: { name: 'English', dir: 'ltr' },
            ru: { name: 'Русский', dir: 'ltr' },
            ua: { name: 'Українська', dir: 'ltr' }
        },
        greetings: {
            en: [
                { text: 'Hello', pron: '/həˈloʊ/', match: 'Привет' },
                { text: 'Good morning', pron: '/ɡʊd ˈmɔːrnɪŋ/', match: 'Доброе утро' },
                { text: 'Goodbye', pron: '/ɡʊdˈbaɪ/', match: 'До свидания' },
                { text: 'Nice to meet you', pron: '/naɪs tuː miːt juː/', match: 'Приятно познакомиться' },
                { text: 'How are you?', pron: '/haʊ ɑːr juː/', match: 'Как дела?' },
                { text: 'See you later', pron: '/siː juː ˈleɪtər/', match: 'Увидимся позже' },
                { text: 'Good afternoon', pron: '/ɡʊd ˌæftərˈnuːn/', match: 'Добрый день' },
                { text: 'Bye', pron: '/baɪ/', match: 'Пока' }
            ],
            ru: [
                { text: 'Привет', pron: '/prɪˈvʲet/', match: 'Hello' },
                { text: 'Доброе утро', pron: '/ˈdobrəj ˈutrə/', match: 'Good morning' },
                { text: 'До свидания', pron: '/da svɪˈdanʲɪjə/', match: 'Goodbye' },
                { text: 'Приятно познакомиться', pron: '/prʲɪˈjatnə pəznəkɐˈmʲɪtʲsə/', match: 'Nice to meet you' },
                { text: 'Как дела?', pron: '/kak dʲɪˈla/', match: 'How are you?' },
                { text: 'Увидимся позже', pron: '/ʊvʲɪˈdʲɪməs ˈpozʐə/', match: 'See you later' },
                { text: 'Добрый день', pron: '/ˈdobrɨj dʲenʲ/', match: 'Good afternoon' },
                { text: 'Пока', pron: '/pəˈka/', match: 'Bye' }
            ],
            ua: [
                { text: 'Привіт', pron: '/prɪˈvʲit/', match: 'Hello' },
                { text: 'Доброго ранку', pron: '/doˈbroʒo ˈranku/', match: 'Good morning' },
                { text: 'До побачення', pron: '/do pobat͡ʃɛˈnʲa/', match: 'Goodbye' },
                { text: 'Приємно познайомитися', pron: '/prɪˈjɛmno poʒnaˈjomytʲsʲa/', match: 'Nice to meet you' },
                { text: 'Як справи?', pron: '/jak ˈspraʋɪ/', match: 'How are you?' },
                { text: 'Побачимося пізніше', pron: '/pobaˈt͡ʃimose pizˈniʃʲe/', match: 'See you later' },
                { text: 'Добрий день', pron: '/ˈdobrɪj dɛnʲ/', match: 'Good afternoon' },
                { text: 'Бувай', pron: '/buˈʋaj/', match: 'Bye' }
            ]
        }
    };

    const TRANSLATIONS = {
        en: {
            title: &quot;Leshy&#x27;s Greeting Garden&quot;,
            subtitle: &quot;Match Slavic Greetings with Their Meanings&quot;,
            difficulty: &quot;Difficulty&quot;,
            language: &quot;Language&quot;,
            newGame: &quot;New Game&quot;,
            reset: &quot;Reset&quot;,
            matches: &quot;Matches&quot;,
            attempts: &quot;Attempts&quot;,
            time: &quot;Time&quot;,
            accuracy: &quot;Accuracy&quot;,
            modalTitle: &quot;Garden Complete! 🌸&quot;,
            playAgain: &quot;Play Again&quot;,
            modalTime: &quot;Time:&quot;,
            modalAttempts: &quot;Attempts:&quot;,
            modalAccuracy: &quot;Accuracy:&quot;,
            difficultyNames: {
                sprout: &quot;Sprout (8)&quot;,
                blossom: &quot;Blossom (12)&quot;,
                bloom: &quot;Bloom (20)&quot;
            },
            langNames: {
                en: &quot;English&quot;,
                ru: &quot;Russian&quot;,
                ua: &quot;Ukrainian&quot;
            }
        },
        ru: {
            title: &quot;Сад Лешего&quot;,
            subtitle: &quot;Сопоставьте славянские приветствия с их значениями&quot;,
            difficulty: &quot;Сложность&quot;,
            language: &quot;Язык&quot;,
            newGame: &quot;Новая игра&quot;,
            reset: &quot;Сброс&quot;,
            matches: &quot;Совпадения&quot;,
            attempts: &quot;Попытки&quot;,
            time: &quot;Время&quot;,
            accuracy: &quot;Точность&quot;,
            modalTitle: &quot;Сад завершен! 🌸&quot;,
            playAgain: &quot;Играть снова&quot;,
            modalTime: &quot;Время:&quot;,
            modalAttempts: &quot;Попытки:&quot;,
            modalAccuracy: &quot;Точность:&quot;,
            difficultyNames: {
                sprout: &quot;Росток (8)&quot;,
                blossom: &quot;Цветок (12)&quot;,
                bloom: &quot;Цветение (20)&quot;
            },
            langNames: {
                en: &quot;Английский&quot;,
                ru: &quot;Русский&quot;,
                ua: &quot;Украинский&quot;
            }
        },
        ua: {
            title: &quot;Сад Лешого&quot;,
            subtitle: &quot;Поєднайте слов&#x27;янські привітання з їх значеннями&quot;,
            difficulty: &quot;Рівень складності&quot;,
            language: &quot;Мова&quot;,
            newGame: &quot;Нова гра&quot;,
            reset: &quot;Скинути&quot;,
            matches: &quot;Пари&quot;,
            attempts: &quot;Спроби&quot;,
            time: &quot;Час&quot;,
            accuracy: &quot;Точність&quot;,
            modalTitle: &quot;Сад завершено! 🌸&quot;,
            playAgain: &quot;Грати знову&quot;,
            modalTime: &quot;Час:&quot;,
            modalAttempts: &quot;Спроби:&quot;,
            modalAccuracy: &quot;Точність:&quot;,
            difficultyNames: {
                sprout: &quot;Паросток (8)&quot;,
                blossom: &quot;Квітка (12)&quot;,
                bloom: &quot;Квітіння (20)&quot;
            },
            langNames: {
                en: &quot;Англійська&quot;,
                ru: &quot;Російська&quot;,
                ua: &quot;Українська&quot;
            }
        }
    };

    // Game State
    let gameState = {
        currentDifficulty: 'sprout',
        currentLanguage: 'en',
        cards: [],
        flippedCards: [],
        matches: 0,
        attempts: 0,
        startTime: null,
        timer: null,
        previewTimer: null
    };

    // DOM Elements
    const elements = {
        gardenBoard: document.getElementById('gardenBoard'),
        difficultyBtns: document.querySelectorAll('.difficulty-btn'),
        langBtns: document.querySelectorAll('.lang-btn'),
        newGameBtn: document.getElementById('newGameBtn'),
        resetBtn: document.getElementById('resetBtn'),
        matchesCount: document.getElementById('matchesCount'),
        attemptsCount: document.getElementById('attemptsCount'),
        timerDisplay: document.getElementById('timerDisplay'),
        accuracyDisplay: document.getElementById('accuracyDisplay'),
        leshySpeech: document.getElementById('leshySpeech'),
        completionModal: document.getElementById('completionModal'),
        playAgainBtn: document.getElementById('playAgainBtn'),
        finalTime: document.getElementById('finalTime'),
        finalAttempts: document.getElementById('finalAttempts'),
        finalAccuracy: document.getElementById('finalAccuracy'),
        badgeDisplay: document.getElementById('badgeDisplay')
    };

    // Initialize Game
    function initGame() {
        updateDifficulty(GAME_CONFIG.difficulties.sprout);
        updateLanguage('en');
        startNewGame();
        setupEventListeners();
    }

    // Update UI Text
    function updateUIText() {
        const t = TRANSLATIONS[gameState.currentLanguage];
        document.getElementById('gameTitle').textContent = t.title;
        document.getElementById('gameSubtitle').textContent = t.subtitle;
        document.getElementById('difficultyLabel').textContent = t.difficulty;
        document.getElementById('languageLabel').textContent = t.language;
        document.getElementById('newGameBtn').textContent = t.newGame;
        document.getElementById('resetBtn').textContent = t.reset;
        document.getElementById('matchesLabel').textContent = t.matches;
        document.getElementById('attemptsLabel').textContent = t.attempts;
        document.getElementById('timeLabel').textContent = t.time;
        document.getElementById('accuracyLabel').textContent = t.accuracy;
        document.getElementById('modalTitle').textContent = t.modalTitle;
        document.getElementById('playAgainBtn').textContent = t.playAgain;
        document.getElementById('modalTimeLabel').textContent = t.modalTime;
        document.getElementById('modalAttemptsLabel').textContent = t.modalAttempts;
        document.getElementById('modalAccuracyLabel').textContent = t.modalAccuracy;

        const diffNames = t.difficultyNames;
        document.querySelector('[data-level=&quot;sprout&quot;]').textContent = diffNames.sprout;
        document.querySelector('[data-level=&quot;blossom&quot;]').textContent = diffNames.blossom;
        document.querySelector('[data-level=&quot;bloom&quot;]').textContent = diffNames.bloom;

        const langNames = t.langNames;
        document.querySelector('[data-lang=&quot;en&quot;]').textContent = langNames.en;
        document.querySelector('[data-lang=&quot;ru&quot;]').textContent = langNames.ru;
        document.querySelector('[data-lang=&quot;ua&quot;]').textContent = langNames.ua;
    }

    // Update Difficulty
    function updateDifficulty(difficulty) {
        gameState.currentDifficulty = Object.keys(GAME_CONFIG.difficulties).find(key =&gt; GAME_CONFIG.difficulties[key] === difficulty);
        elements.gardenBoard.className = `garden-board ${gameState.currentDifficulty}`;
        elements.difficultyBtns.forEach(btn =&gt; btn.classList.remove('active'));
        document.querySelector(`[data-level=&quot;${gameState.currentDifficulty}&quot;]`).classList.add('active');
        startNewGame();
    }

    // Update Language
    function updateLanguage(lang) {
        gameState.currentLanguage = lang;
        elements.langBtns.forEach(btn =&gt; btn.classList.remove('active'));
        document.querySelector(`[data-lang=&quot;${lang}&quot;]`).classList.add('active');
        document.documentElement.lang = lang;
        document.documentElement.dir = GAME_CONFIG.languages[lang].dir;
        updateUIText();
        updateLeshySpeech(getWelcomeMessage(lang));
        startNewGame();
    }

    // Start New Game
    function startNewGame() {
        const pairs = GAME_CONFIG.difficulties[gameState.currentDifficulty].pairs;
        const langData = GAME_CONFIG.greetings[gameState.currentLanguage].slice(0, pairs);
        const cardsData = [...langData, ...langData].sort(() =&gt; Math.random() - 0.5);

        gameState.cards = cardsData.map((data, index) =&gt; ({
            id: index,
            content: data,
            flipped: false,
            matched: false
        }));

        gameState.flippedCards = [];
        gameState.matches = 0;
        gameState.attempts = 0;
        gameState.startTime = Date.now();

        renderBoard();
        startTimer();
        if (GAME_CONFIG.difficulties[gameState.currentDifficulty].previewTime &gt; 0) {
            previewCards();
        }
        updateLeshySpeech(getInstructionMessage(gameState.currentLanguage));
        updateStats();
        hideModal();
    }

    // Render Board
    function renderBoard() {
        elements.gardenBoard.innerHTML = '';
        gameState.cards.forEach((card, index) =&gt; {
            const cardElement = createCardElement(card, index);
            elements.gardenBoard.appendChild(cardElement);
        });
    }

    // Create Card Element
    function createCardElement(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'flower-card';
        cardDiv.dataset.index = index;
        cardDiv.setAttribute('role', 'button');
        cardDiv.setAttribute('tabindex', '0');
        cardDiv.setAttribute('aria-label', `${card.content.text} card`);
        cardDiv.addEventListener('click', handleCardClick);
        cardDiv.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick({ currentTarget: this });
            }
        });

        const backFace = document.createElement('div');
        backFace.className = 'card-face card-back';
        backFace.innerHTML = '&lt;div class=&quot;flower-bud&quot;&gt;🌱&lt;/div&gt;';

        const frontFace = document.createElement('div');
        frontFace.className = 'card-face card-front';
        frontFace.innerHTML = `
            &lt;div class=&quot;card-text&quot;&gt;${card.content.text}&lt;/div&gt;
            &lt;div class=&quot;card-pronunciation&quot;&gt;${card.content.pron}&lt;/div&gt;
            &lt;div class=&quot;audio-icon&quot; role=&quot;button&quot; tabindex=&quot;0&quot;&gt;🔊&lt;/div&gt;
        `;

        const audioIcon = frontFace.querySelector('.audio-icon');
        audioIcon.setAttribute('aria-label', `Play pronunciation of ${card.content.text}`);
        audioIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            speakText(card.content.text, card.content.pron);
        });
        audioIcon.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                speakText(card.content.text, card.content.pron);
            }
        });

        cardDiv.appendChild(backFace);
        cardDiv.appendChild(frontFace);

        return cardDiv;
    }

    // Handle Card Click
    function handleCardClick(e) {
        const cardIndex = parseInt(e.currentTarget.dataset.index);
        const card = gameState.cards[cardIndex];

        if (card.flipped || card.matched || gameState.flippedCards.length &gt;= 2) return;

        flipCard(cardIndex);
        gameState.flippedCards.push(cardIndex);

        if (gameState.flippedCards.length === 2) {
            gameState.attempts++;
            setTimeout(checkMatch, 600);
        }

        updateStats();
    }

    // Flip Card
    function flipCard(index) {
        gameState.cards[index].flipped = true;
        document.querySelector(`[data-index=&quot;${index}&quot;]`).classList.add('flipped');
    }

    // Check Match
    function checkMatch() {
        const [idx1, idx2] = gameState.flippedCards;
        const card1 = gameState.cards[idx1];
        const card2 = gameState.cards[idx2];

        if (card1.content.match === card2.content.text || card1.content.text === card2.content.match) {
            // Match!
            gameState.cards[idx1].matched = true;
            gameState.cards[idx2].matched = true;
            document.querySelector(`[data-index=&quot;${idx1}&quot;]`).classList.add('matched');
            document.querySelector(`[data-index=&quot;${idx2}&quot;]`).classList.add('matched');
            gameState.matches++;
            playSound('match');
            updateLeshySpeech(getMatchMessage(gameState.currentLanguage, true));

            if (gameState.matches === GAME_CONFIG.difficulties[gameState.currentDifficulty].pairs) {
                endGame();
            }
        } else {
            // No match
            document.querySelector(`[data-index=&quot;${idx1}&quot;]`).classList.add('shake');
            document.querySelector(`[data-index=&quot;${idx2}&quot;]`).classList.add('shake');
            setTimeout(() =&gt; {
                gameState.cards[idx1].flipped = false;
                gameState.cards[idx2].flipped = false;
                document.querySelector(`[data-index=&quot;${idx1}&quot;]`).classList.remove('flipped', 'shake');
                document.querySelector(`[data-index=&quot;${idx2}&quot;]`).classList.remove('flipped', 'shake');
            }, 500);
            playSound('mismatch');
            updateLeshySpeech(getMatchMessage(gameState.currentLanguage, false));
        }

        gameState.flippedCards = [];
    }

    // End Game
    function endGame() {
        clearInterval(gameState.timer);
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        const accuracy = Math.round((gameState.matches * 2 / gameState.attempts) * 100) || 100;

        elements.finalTime.textContent = formatTime(elapsed);
        elements.finalAttempts.textContent = gameState.attempts;
        elements.finalAccuracy.textContent = `${accuracy}%`;

        // Add badges based on performance
        let badges = ['&lt;div class=&quot;badge&quot;&gt;🏅&lt;/div&gt;'];
        if (accuracy &gt;= 90) {
            badges.push('&lt;div class=&quot;badge&quot;&gt;🥇&lt;/div&gt;');
        } else if (accuracy &gt;= 75) {
            badges.push('&lt;div class=&quot;badge&quot;&gt;🥈&lt;/div&gt;');
        } else {
            badges.push('&lt;div class=&quot;badge&quot;&gt;🥉&lt;/div&gt;');
        }
        elements.badgeDisplay.innerHTML = badges.join('');

        showModal();
        playSound('victory');
        updateLeshySpeech(getCompletionMessage(gameState.currentLanguage));
    }

    // Timer Functions
    function startTimer() {
        gameState.startTime = Date.now();
        gameState.timer = setInterval(updateTimer, 1000);
    }

    function updateTimer() {
        const elapsed = Math.floor((Date.now() - gameState.startTime) / 1000);
        elements.timerDisplay.textContent = formatTime(elapsed);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Preview Cards
    function previewCards() {
        gameState.cards.forEach((_, index) =&gt; flipCard(index));
        setTimeout(() =&gt; {
            gameState.cards.forEach((card, index) =&gt; {
                if (!card.matched) {
                    card.flipped = false;
                    document.querySelector(`[data-index=&quot;${index}&quot;]`).classList.remove('flipped');
                }
            });
        }, GAME_CONFIG.difficulties[gameState.currentDifficulty].previewTime);
    }

    // Update Stats
    function updateStats() {
        elements.matchesCount.textContent = gameState.matches;
        elements.attemptsCount.textContent = gameState.attempts;
        const accuracy = gameState.attempts &gt; 0 ? Math.round((gameState.matches * 2 / gameState.attempts) * 100) : 100;
        elements.accuracyDisplay.textContent = `${accuracy}%`;
    }

    // Leshy Speech Messages
    function getWelcomeMessage(lang) {
        const messages = {
            en: 'Welcome to my enchanted garden!',
            ru: 'Добро пожаловать в мой волшебный сад!',
            ua: 'Ласкаво просимо до мого чарівного саду!'
        };
        return messages[lang] || messages.en;
    }

    function getInstructionMessage(lang) {
        const messages = {
            en: 'Click two flower buds to match greetings!',
            ru: 'Нажмите на два бутона цветов, чтобы сопоставить приветствия!',
            ua: 'Натисніть на два бутони квітів, щоб співставити привітання!'
        };
        return messages[lang] || messages.en;
    }

    function getMatchMessage(lang, isMatch) {
        const messages = {
            en: { true: 'Perfect match! The flowers are blooming! 🌸', false: 'Not quite right. Try again! Keep trying, young adventurer.' },
            ru: { true: 'Идеальное совпадение! Цветы расцветают! 🌸', false: 'Не совсем правильно. Попробуй еще раз! Продолжай пытаться, юный искатель приключений.' },
            ua: { true: 'Ідеальне співпадіння! Квіти розквітають! 🌸', false: 'Не зовсім правильно. Спробуй ще раз! Продовжуй намагатися, юний шукач пригод.' }
        };
        return messages[lang]?.[isMatch] || messages.en[isMatch];
    }

    function getCompletionMessage(lang) {
        const messages = {
            en: 'Amazing! Your garden is complete. You&#x27;ve mastered the greetings!',
            ru: 'Удивительно! Ваш сад завершен. Вы освоили приветствия!',
            ua: 'Чудово! Ваш сад завершено. Ви освоїли привітання!'
        };
        return messages[lang] || messages.en;
    }

    // Update Leshy Speech
    function updateLeshySpeech(message) {
        elements.leshySpeech.textContent = message;
        elements.leshySpeech.classList.add('show');
        setTimeout(() =&gt; elements.leshySpeech.classList.remove('show'), 3000);
    }

    // Modal Functions
    function showModal() {
        elements.completionModal.classList.add('show');
    }

    function hideModal() {
        elements.completionModal.classList.remove('show');
    }

    // Sound Effects (Placeholder - replace with actual audio)
    function playSound(type) {
        // Play audio based on type: 'match', 'mismatch', 'victory'
        console.log(`Playing ${type} sound`);
        // In production, use Web Audio API or &lt;audio&gt; elements
    }

    // Event Listeners Setup
    function setupEventListeners() {
        // Difficulty buttons
        elements.difficultyBtns.forEach(btn =&gt; {
            btn.addEventListener('click', () =&gt; {
                const level = btn.dataset.level;
                updateDifficulty(GAME_CONFIG.difficulties[level]);
            });
        });

        // Language buttons
        elements.langBtns.forEach(btn =&gt; {
            btn.addEventListener('click', () =&gt; {
                updateLanguage(btn.dataset.lang);
            });
        });

        // New Game
        elements.newGameBtn.addEventListener('click', startNewGame);

        // Reset (same as new game for now)
        elements.resetBtn.addEventListener('click', startNewGame);

        // Play Again
        elements.playAgainBtn.addEventListener('click', () =&gt; {
            hideModal();
            startNewGame();
        });

        // Audio icons (delegated click already handled in createCardElement)
    }

    // Speech Synthesis (for pronunciation)
    function speakText(text, pronunciation) {
        if ('speechSynthesis' in window) {
            const langMap = { en: 'en-US', ru: 'ru-RU', ua: 'uk-UA' };
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = langMap[gameState.currentLanguage] || 'en-US';
            speechSynthesis.speak(utterance);
        } else {
            console.log(`Pronunciation: ${pronunciation}`);
        }
    }

    // Initialize
    initGame();

    // Expose for debugging
    window.Game = { gameState, startNewGame };
});