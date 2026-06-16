import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

// ─── CONCEPTS ────────────────────────────────────────────────────────────────

const concepts = [
  {
    id: "s1", title: "What is AI, really?", subtitle: "The helpful assistant that never sleeps",
    emoji: "🤝", duration: "2 min",
    analogy: "AI is like having a very knowledgeable friend available any time of day or night. You can ask them anything — a recipe, a question about your health, help writing a message — and they always have time for you. They never get tired, never judge you, and never make you feel silly for asking.",
    explanation: `AI simply means a computer programme that can have a conversation with you in plain, everyday language.\n\nYou type or speak normally. It understands you and responds. No special commands, no confusing menus, no technical knowledge needed.\n\nThe most important thing to know: you cannot break it. You cannot ask a wrong question. It is always patient.`,
    realWorld: `Imagine being able to ask:\n\n"What can I cook with chicken, tomatoes and onions?"\n\n"How do I write a message to my doctor asking for an appointment?"\n\n"What's a good film for a quiet evening?"\n\nAnd getting a helpful, friendly answer in seconds. That is AI.`,
    sticky: `"AI is a knowledgeable friend, always available, never impatient, never judging. Just ask — in plain language, exactly as you would ask a person."`,
    quiz: [
      { q: "You want to ask AI something but you're worried about using the wrong words. What should you do?", options: ["Find the exact right words first", "Just ask in your own words, exactly as you would ask a friend", "Wait until you know more about AI", "Ask someone else to do it for you"], answer: 1, explain: "AI understands everyday language perfectly. There is no wrong way to ask. The simpler and more natural your question, the better." },
      { q: "You ask AI a question and the answer isn't quite right. What do you do?", options: ["Give up — AI doesn't work for you", "Say 'that's not quite what I meant' and explain what you wanted", "Start over from the beginning", "AI answers are always right so accept it"], answer: 1, explain: "AI is a conversation, not a one-shot answer machine. You can always say 'actually I meant...' or 'can you try again but...' — just like talking to a person." }
    ]
  },
  {
    id: "s2", title: "How to Talk to AI", subtitle: "Just like sending a WhatsApp message",
    emoji: "💬", duration: "2 min",
    analogy: "Talking to AI is exactly like sending a WhatsApp message to a very helpful friend. You type what you want, press send, and they reply. If their reply isn't what you needed, you type again and explain. That's the whole thing.",
    explanation: `You already know how to do this.\n\nType your question or request. Press enter or the send button. Read the reply.\n\nA few tips that make it even better:\n\n• Be specific. Instead of "tell me about cooking" try "give me a simple chicken soup recipe for two people"\n\n• Give it context. "I am 70 years old and have high blood pressure — what gentle exercises can I do at home?"\n\n• Ask it to simplify. "Can you explain that in simpler words?" always works.`,
    realWorld: `Real examples you could try today:\n\n"Can you write a birthday message for my granddaughter who is turning 8? She loves animals."\n\n"I have a headache and a sore throat. What home remedies might help?"\n\n"Translate this message into Hindi for me: I will arrive at 5pm tomorrow."`,
    sticky: `"Type like you talk. Be specific. Give context. If the answer isn't right, just say so and ask again. You already know how to do this — it's just like WhatsApp."`,
    quiz: [
      { q: "Which question will get you a more helpful answer?", options: ["Tell me about food", "Give me a simple recipe for dal that takes less than 30 minutes", "Recipes please", "I want to cook something"], answer: 1, explain: "The more specific your question, the more useful the answer. Tell AI exactly what you want — quantity, time, any preferences. It cannot read your mind, but it will use every detail you give it." },
      { q: "AI gives you a recipe but it uses ingredients you don't have. What do you do?", options: ["Accept it and go buy the ingredients", "Give up and try something else", "Type: 'I don't have cumin or coriander — what can I use instead?'", "AI cannot help with this"], answer: 2, explain: "Just continue the conversation. AI remembers what you were just talking about, so you can ask follow-up questions naturally — just like you would with a person." }
    ]
  },
  {
    id: "s3", title: "AI for Recipes and Cooking", subtitle: "Your patient, always-available kitchen helper",
    emoji: "🍳", duration: "2 min",
    analogy: "Having AI for cooking is like having a chef friend on WhatsApp who knows every cuisine in the world, is available at midnight when you suddenly need an idea, and never minds if you ask the same question twice.",
    explanation: `AI is wonderful in the kitchen because you can:\n\n• Tell it exactly what you have and ask what to cook\n• Ask for recipes adjusted for your needs (less salt, no sugar, vegetarian)\n• Ask it to simplify complicated recipes step by step\n• Ask how to substitute an ingredient you don't have\n• Ask it to convert measurements ("what is 2 cups in grams?")\n\nYou can even describe a dish you ate once and ask it to help you recreate it.`,
    realWorld: `Try typing exactly this:\n\n"I have potatoes, onions, tomatoes and some paneer. What can I make for dinner for two people? I prefer something not too spicy and easy to make."\n\nOr: "My mother used to make a sweet rice dish with saffron and cardamom. Can you help me recreate it?"`,
    sticky: `"Tell AI what you have, what you need, and any preferences. It will find a way. Think of it as a patient chef friend who never runs out of ideas."`,
    quiz: [
      { q: "You want a recipe but you have diabetes and need to avoid sugar. How do you ask AI?", options: ["Just ask for any recipe and figure it out yourself", "Ask: 'Give me a sweet snack recipe that is safe for someone with diabetes — no sugar'", "AI cannot help with health-related cooking", "Search the internet instead"], answer: 1, explain: "AI is excellent at personalising recipes for your needs. Always include your requirements — health conditions, preferences, what you have at home. The more context you give, the better it helps." },
      { q: "A recipe says '350 degrees Fahrenheit' but your oven uses Celsius. What do you ask AI?", options: ["Guess the temperature", "Don't make the recipe", "Type: 'What is 350 degrees Fahrenheit in Celsius?'", "Call someone to ask"], answer: 2, explain: "AI is perfect for quick conversions and practical questions like this. Measurements, temperatures, timings — just ask." }
    ]
  },
  {
    id: "s4", title: "AI for Health Questions", subtitle: "A starting point — not a replacement for your doctor",
    emoji: "🏥", duration: "2 min",
    analogy: "Think of AI like a very well-read friend who has studied medicine. They can help you understand what a doctor told you, explain what a medicine does, or suggest when something is worth worrying about. But just like that friend — they are not your doctor. Always confirm important things with your actual doctor.",
    explanation: `AI can help you:\n\n• Understand medical terms in plain language ("what does 'hypertension' mean?")\n• Prepare questions to ask your doctor before an appointment\n• Learn about a medicine your doctor prescribed\n• Find gentle exercises or foods that might help a condition\n\nWhat AI cannot do:\n• Examine you\n• Give you a diagnosis\n• Replace your doctor's advice\n\nAlways tell your doctor before changing anything about your health.`,
    realWorld: `"My doctor said I have high cholesterol. Can you explain what that means in simple terms and what foods I should eat or avoid?"\n\n"I am going to the doctor on Thursday. Can you help me write down my symptoms so I don't forget anything?"\n\n"What is metformin used for and what are the common side effects?"`,
    sticky: `"AI helps you understand and prepare — not diagnose. Use it to learn what your doctor told you, prepare questions, and understand your medicines. Always check important decisions with your doctor."`,
    quiz: [
      { q: "Your doctor prescribed a new medicine and you want to understand it better. AI can help you...", options: ["Decide whether to take it or not", "Understand what it does and common side effects in plain language", "Get a second opinion instead of seeing your doctor", "Order it online"], answer: 1, explain: "AI is excellent for helping you understand medicines in simple language. But the decision to take or change medication always stays with your doctor — AI gives you understanding, not medical advice." },
      { q: "You have chest pain. What should you do?", options: ["Ask AI what it might be", "Call your doctor or emergency services immediately", "Wait and see if it gets better", "Search the internet first"], answer: 1, explain: "For serious or urgent symptoms — chest pain, difficulty breathing, severe pain — always call your doctor or emergency services first. AI is for learning and understanding, not emergencies." }
    ]
  },
  {
    id: "s5", title: "AI for Writing Messages", subtitle: "Help putting your thoughts into words",
    emoji: "✉️", duration: "2 min",
    analogy: "AI is like having a patient friend who is good with words sitting next to you. You tell them what you want to say, and they help you find the right words. You still decide what to send — they just help you express it better.",
    explanation: `AI can help you write:\n\n• A message to a doctor or hospital\n• A birthday or anniversary message for someone you love\n• A formal letter or complaint\n• A reply to something you received but aren't sure how to answer\n• A message in another language\n\nYou don't have to start from scratch. You can say "I want to write a message to my landlord about a leaking tap — can you help me?" and AI will write a draft that you can change to suit you.`,
    realWorld: `"Help me write a WhatsApp message to my son telling him I miss him and would love to visit next month. Keep it warm but not too long."\n\n"I need to write a formal complaint letter to my building society about noise from the upstairs flat. Can you write it for me?"\n\n"Can you translate this message from my doctor into simple English? [paste the message]"`,
    sticky: `"Tell AI who you're writing to, what you want to say, and the tone (warm, formal, brief). It writes a draft. You read it, change what you want, and send it. Your words, just better expressed."`,
    quiz: [
      { q: "You want to write a birthday message for your granddaughter but can't find the right words. You ask AI:", options: ["Write me a birthday message", "Write a warm birthday message for my granddaughter Priya who is turning 10. She loves dancing and animals.", "Birthday message please", "What should I write?"], answer: 1, explain: "The more you tell AI about the person and situation, the more personal and meaningful the message will be. Names, ages, interests — include everything you know." },
      { q: "AI writes a message but uses words that don't sound like you. What do you do?", options: ["Send it anyway", "Say: 'Can you make it sound warmer and more personal, like I'm speaking to family?'", "Give up and write it yourself", "Ask someone else"], answer: 1, explain: "AI is a starting point, not the final word. You can always ask it to change the tone, make it shorter, add something personal, or rewrite it completely. It's your message." }
    ]
  },
  {
    id: "s6", title: "AI for Entertainment", subtitle: "Finding things you'll actually enjoy",
    emoji: "🎬", duration: "2 min",
    analogy: "AI is like a friend who has watched everything, read everything, and listened to everything — and actually remembers what you like. Tell them your taste and they give you personalised suggestions, not a generic list.",
    explanation: `AI can help you find:\n\n• Films and TV shows based on what you've enjoyed before\n• Music that matches your mood\n• Books you might love\n• Podcasts on topics that interest you\n\nThe key is to describe what you like in your own words. Don't worry about names of genres — just say "I like films with a good story and a happy ending, nothing too violent."`,
    realWorld: `"I enjoyed the film Piku and Dil Dhadakne De. Can you suggest similar Indian films I might like? I prefer films with family stories and good music."\n\n"I like old Hindi songs from the 1960s and 70s — can you suggest some I might not have heard?"\n\n"I want to start reading again. I like stories set in India with strong women characters. What would you suggest?"`,
    sticky: `"Tell AI what you've liked before and why. Be specific about what you don't like too. The more it knows your taste, the better it can suggest things you'll actually enjoy."`,
    quiz: [
      { q: "You want a film recommendation. Which question gets you the best answer?", options: ["Suggest a film", "I like feel-good Indian films with good music and family stories, nothing sad or violent. What would you suggest?", "What films are popular?", "Give me a list of films"], answer: 1, explain: "AI suggestions improve dramatically when you describe your taste. What you've liked, what you don't like, your mood — all of this helps AI find something you'll genuinely enjoy." },
      { q: "AI suggests a film but you've already seen it. What do you say?", options: ["Accept it and watch it again", "Stop using AI for recommendations", "Say: 'I've seen that one. I enjoyed it — can you suggest something similar I haven't seen?'", "Ask someone else"], answer: 2, explain: "Just tell AI you've seen it! Mentioning that you enjoyed it gives AI even better information to find you something similar. This is exactly how the conversation should work." }
    ]
  },
  {
    id: "s7", title: "Staying Safe with AI", subtitle: "What to share and what to keep private",
    emoji: "🔒", duration: "2 min",
    analogy: "Using AI safely is like talking to a helpful stranger in a public place. They can help you with directions, recommendations, information — but you wouldn't give them your bank details, passwords, or identity documents. Same rule applies here.",
    explanation: `AI is safe and helpful for most everyday questions. But there are things you should never share:\n\n🚫 Never share:\n• Bank account numbers or card details\n• Passwords\n• Your full address to an AI you don't know\n• Identity documents (passport, Aadhaar)\n• Anything you wouldn't say to a stranger\n\n✅ Perfectly safe to share:\n• Your first name\n• General health questions\n• Recipes and cooking preferences\n• Questions about films, books, music\n• Messages you want help writing`,
    realWorld: `If anyone — a website, an app, or even something claiming to be AI — asks for your bank details, passwords, or money, stop immediately. Legitimate AI assistants like Claude never ask for payment information or passwords.\n\nIf something feels wrong, close the app and call a family member.`,
    sticky: `"AI is a helper, not a bank. Never share passwords, card numbers, or identity documents. If anyone asks for these things claiming to be AI — stop and call family immediately."`,
    quiz: [
      { q: "An app says it's AI and asks for your bank card number to 'verify your identity'. What do you do?", options: ["Enter it — the app needs it to help you", "Stop immediately and call a family member", "Enter just the last 4 digits", "Ask AI if it's safe"], answer: 1, explain: "Legitimate AI assistants never ask for bank details, passwords, or identity documents. This is a scam. Close the app immediately and tell a family member." },
      { q: "Which of these is safe to tell AI?", options: ["Your bank account number", "Your password", "That you prefer mild food and enjoy Bollywood films", "Your passport number"], answer: 2, explain: "Preferences, interests, and general questions are completely safe to share. AI uses this information only to help you better in that conversation." }
    ]
  },
  {
    id: "s8", title: "AI as a Daily Companion", subtitle: "Making it part of your everyday routine",
    emoji: "☀️", duration: "2 min",
    analogy: "The best way to get comfortable with AI is the same way you got comfortable with WhatsApp — by using it a little every day until it feels natural. Start small. Ask one question today. Tomorrow, try something slightly different. Within a week it will feel like second nature.",
    explanation: `Small ways to use AI every day:\n\n☕ Morning: "What's a healthy breakfast I can make in 10 minutes with eggs and vegetables?"\n\n📱 Afternoon: "Help me reply to this message from my doctor" or "suggest a film for this evening"\n\n🌙 Evening: "Tell me something interesting I didn't know" or "read me a short poem"\n\nYou don't need to know everything about AI to use it well. You just need to be curious and willing to ask.`,
    realWorld: `One idea to start today:\n\nOpen Claude (or whichever AI app your family set up for you). Type:\n\n"Hello. I'm new to AI. I'd love your help with cooking, writing messages, and finding good films. Can you introduce yourself and tell me how you can help me?"\n\nThen just have a conversation. There is no wrong way to start.`,
    sticky: `"Start with one small question today. You cannot break it, you cannot ask the wrong thing, and it will never make you feel silly. Just ask — exactly like you would ask a trusted friend."`,
    quiz: [
      { q: "You're new to AI and feeling nervous about using it. The best first step is:", options: ["Study everything about AI before trying", "Ask a family member to use it for you", "Type one simple question — anything you're curious about — and see what happens", "Wait until you feel more confident"], answer: 2, explain: "The only way to get comfortable is to start. One question. That's all. You cannot break it, you cannot say the wrong thing, and it will not judge you. Just start." },
      { q: "After one week of using AI daily, you'll probably feel:", options: ["Still completely lost", "More comfortable and able to think of more ways it can help you", "Like an AI expert", "Bored of it"], answer: 1, explain: "Like WhatsApp, AI gets easier and more useful the more you use it. After a week of small daily questions, most people feel comfortable and start discovering uses they hadn't thought of." }
    ]
  }
];

// ─── THEME ───────────────────────────────────────────────────────────────────

const t = {
  bg: "#1a0a0f",
  surface: "#2a1018",
  surfaceHover: "#331520",
  border: "#5a2535",
  accent: "#f472b6",
  accentDim: "#be185d",
  accentSoft: "#fbcfe8",
  text: "#fff1f5",
  textMid: "#fda4c0",
  textDim: "#f472b6",
  pill: "#3d0a20",
  gradient: "linear-gradient(135deg, #be185d, #f472b6)",
  headerGrad: "linear-gradient(180deg, #200a10 0%, transparent 100%)",
  cardGrad: "linear-gradient(135deg, #2a1018 0%, #3d1525 100%)",
};

// ─── PHASE CONFIG ─────────────────────────────────────────────────────────────

const phases = ["analogy", "explanation", "realworld", "sticky"];
const phaseLabels = {
  analogy: "Think of it this way",
  explanation: "Here's how it works",
  realworld: "In your everyday life",
  sticky: "The key thing to remember",
};
const phaseIcons = { analogy: "💡", explanation: "📖", realworld: "🌱", sticky: "⭐" };

// ─── MAIN APP ────────────────────────────────────────────────────────────────

export default function LifeStick() {
  const [view, setView] = useState("home");
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [phase, setPhase] = useState("analogy");
  const [quizState, setQuizState] = useState({ current: 0, answers: [], showExplain: false, selected: null });
  const [isAnimating, setIsAnimating] = useState(false);

  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ls_completed")) || []; } catch { return []; }
  });
  const [streak, setStreak] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ls_streak")) || { count: 0, lastDate: null }; } catch { return { count: 0, lastDate: null }; }
  });

  useEffect(() => { localStorage.setItem("ls_completed", JSON.stringify(completed)); }, [completed]);
  useEffect(() => { localStorage.setItem("ls_streak", JSON.stringify(streak)); }, [streak]);

  function updateStreak() {
    const today = new Date().toDateString();
    setStreak(s => {
      if (s.lastDate === today) return s;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      return { count: s.lastDate === yesterday ? s.count + 1 : 1, lastDate: today };
    });
  }

  function openConcept(concept) {
    setSelectedConcept(concept);
    setPhase("analogy");
    setView("learn");
  }

  function nextPhase() {
    setIsAnimating(true);
    setTimeout(() => {
      const idx = phases.indexOf(phase);
      if (idx < phases.length - 1) {
        setPhase(phases[idx + 1]);
      } else {
        setView("quiz");
        setQuizState({ current: 0, answers: [], showExplain: false, selected: null });
      }
      setIsAnimating(false);
    }, 250);
  }

  function selectAnswer(i) {
    if (quizState.showExplain) return;
    setQuizState(q => ({ ...q, selected: i, showExplain: true }));
  }

  function nextQuestion() {
    const { current, answers, selected } = quizState;
    const correct = selected === selectedConcept.quiz[current].answer;
    const newAnswers = [...answers, { selected, correct }];
    if (current + 1 < selectedConcept.quiz.length) {
      setQuizState({ current: current + 1, answers: newAnswers, showExplain: false, selected: null });
    } else {
      setCompleted(c => [...new Set([...c, selectedConcept.id])]);
      updateStreak();
      setView("results");
      setQuizState(q => ({ ...q, answers: newAnswers }));
    }
  }

  function goNextConcept() {
    const idx = concepts.findIndex(c => c.id === selectedConcept.id);
    const next = concepts.slice(idx + 1).find(() => true) || concepts[0];
    openConcept(next);
  }

  const score = quizState.answers.filter(a => a.correct).length;

  return (
    <div style={{
      minHeight: "100vh",
      background: t.bg,
      color: t.text,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: 16,
      maxWidth: 500,
      margin: "0 auto",
    }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        .fadein { animation: fi 0.3s ease forwards; }
        @keyframes fi { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .tap:active { transform: scale(0.97); transition: transform 0.1s; }
      `}</style>

      {view === "home" && (
        <HomeView
          completed={completed}
          streak={streak.count}
          onOpen={openConcept}
        />
      )}
      {view === "learn" && selectedConcept && (
        <LearnView
          concept={selectedConcept}
          phase={phase}
          isAnimating={isAnimating}
          onNext={nextPhase}
          onBack={() => setView("home")}
        />
      )}
      {view === "quiz" && selectedConcept && (
        <QuizView
          concept={selectedConcept}
          state={quizState}
          onSelect={selectAnswer}
          onNext={nextQuestion}
          onBack={() => { setView("learn"); setPhase("sticky"); }}
        />
      )}
      {view === "results" && selectedConcept && (
        <ResultsView
          concept={selectedConcept}
          score={score}
          total={selectedConcept.quiz.length}
          onHome={() => setView("home")}
          onNextConcept={goNextConcept}
          onRetry={() => { setView("quiz"); setQuizState({ current: 0, answers: [], showExplain: false, selected: null }); }}
        />
      )}
      <Analytics />
    </div>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function HomeView({ completed, streak, onOpen }) {
  const next = concepts.find(c => !completed.includes(c.id)) || concepts[0];
  const pct = Math.round((completed.length / concepts.length) * 100);

  return (
    <div style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ padding: "52px 22px 22px", background: t.headerGrad }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 3, color: t.accentSoft, fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>LifeStick</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: t.text, marginBottom: 4 }}>
              AI for everyday life
            </h1>
            <p style={{ fontSize: 14, color: t.textMid, lineHeight: 1.5 }}>
              Simple lessons. No jargon. At your own pace.
            </p>
          </div>
          {streak > 0 && (
            <div style={{ background: t.gradient, borderRadius: 16, padding: "10px 14px", textAlign: "center", minWidth: 58, flexShrink: 0, marginLeft: 16 }}>
              <div style={{ fontSize: 22 }}>🔥</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{streak}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", letterSpacing: 1, textTransform: "uppercase" }}>days</div>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div style={{ background: t.surface, borderRadius: 14, padding: "16px 18px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 14, color: t.textMid }}>
              {completed.length === 0
                ? "Ready to start your journey"
                : completed.length === concepts.length
                  ? "All lessons complete! Well done 🌸"
                  : `${completed.length} of ${concepts.length} lessons done`}
            </span>
            <span style={{ fontSize: 14, color: t.accentSoft, fontWeight: 600 }}>{pct}%</span>
          </div>
          <div style={{ height: 6, background: t.border, borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: t.gradient, borderRadius: 99, transition: "width 0.6s ease" }} />
          </div>
        </div>
      </div>

      {/* Up Next */}
      <div style={{ padding: "8px 18px 26px" }}>
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: t.accentSoft, fontWeight: 700, textTransform: "uppercase", marginBottom: 14, paddingLeft: 2 }}>
          {completed.length === 0 ? "Start here" : "Continue here"}
        </div>
        <div
          onClick={() => onOpen(next)}
          className="tap"
          style={{
            background: t.cardGrad,
            border: `1px solid ${t.border}`,
            borderRadius: 24,
            padding: "26px 22px",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -28, right: -28, fontSize: 120, opacity: 0.07 }}>{next.emoji}</div>
          <div style={{ fontSize: 11, letterSpacing: 2, color: t.accentSoft, fontWeight: 600, textTransform: "uppercase", marginBottom: 6 }}>{next.duration}</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: t.text, marginBottom: 6 }}>{next.title}</h2>
          <p style={{ fontSize: 15, color: t.textMid, marginBottom: 20, lineHeight: 1.5 }}>{next.subtitle}</p>
          <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ fontSize: 10, color: t.accentSoft, letterSpacing: 1.5, marginBottom: 6, textTransform: "uppercase", fontWeight: 600 }}>A simple way to think about it</div>
            <p style={{ fontSize: 15, color: t.text, lineHeight: 1.65 }}>{next.analogy}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["💡", "📖", "🌱", "⭐"].map((e, i) => (
                <div key={i} style={{ width: 32, height: 32, background: "rgba(0,0,0,0.3)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{e}</div>
              ))}
            </div>
            <div style={{ background: t.gradient, color: "#fff", fontWeight: 700, fontSize: 15, padding: "12px 22px", borderRadius: 99 }}>Begin →</div>
          </div>
        </div>
      </div>

      {/* All lessons list */}
      <div style={{ padding: "0 18px" }}>
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: t.accentSoft, fontWeight: 700, textTransform: "uppercase", marginBottom: 14, paddingLeft: 2 }}>All lessons</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {concepts.map(c => {
            const done = completed.includes(c.id);
            return (
              <div
                key={c.id}
                onClick={() => onOpen(c)}
                className="tap"
                style={{
                  background: done ? t.surface : t.bg,
                  border: `1px solid ${done ? t.accentDim + "44" : t.border}`,
                  borderRadius: 16,
                  padding: "16px 18px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 30 }}>{c.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 16, color: done ? t.accentSoft : t.text }}>{c.title}</div>
                  <div style={{ fontSize: 13, color: t.textDim, marginTop: 3 }}>{c.subtitle}</div>
                </div>
                <div style={{ fontSize: 18 }}>{done ? "✅" : "▶️"}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── LEARN ───────────────────────────────────────────────────────────────────

function LearnView({ concept, phase, isAnimating, onNext, onBack }) {
  const phaseIdx = phases.indexOf(phase);
  const isLast = phaseIdx === phases.length - 1;
  const content = {
    analogy: concept.analogy,
    explanation: concept.explanation,
    realworld: concept.realWorld,
    sticky: concept.sticky,
  }[phase];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ padding: "52px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onBack}
          style={{
            background: t.surface, border: "none", color: t.accentSoft,
            fontSize: 20, cursor: "pointer", borderRadius: 12,
            width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.accentSoft, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
            {concept.emoji} {concept.title}
          </div>
        </div>
        <div style={{ fontSize: 13, color: t.textDim, fontWeight: 600 }}>{phaseIdx + 1} / {phases.length}</div>
      </div>

      {/* Progress steps */}
      <div style={{ display: "flex", gap: 6, padding: "0 20px 20px" }}>
        {phases.map((p, i) => (
          <div key={p} style={{ flex: 1, height: 4, borderRadius: 99, background: i <= phaseIdx ? t.accent : t.border, transition: "background 0.3s" }} />
        ))}
      </div>

      {/* Content card */}
      <div style={{ flex: 1, padding: "0 18px 20px" }}>
        <div
          className={isAnimating ? "" : "fadein"}
          style={{
            background: t.surface,
            border: `1px solid ${t.border}`,
            borderRadius: 26,
            padding: "30px 24px",
            minHeight: 360,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -30, right: -30, fontSize: 160, opacity: 0.04 }}>{concept.emoji}</div>

          {/* Phase label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span style={{ fontSize: 28 }}>{phaseIcons[phase]}</span>
            <div style={{ fontSize: 12, letterSpacing: 1.5, color: t.accentSoft, textTransform: "uppercase", fontWeight: 700 }}>
              {phaseLabels[phase]}
            </div>
          </div>

          {/* Content */}
          {phase === "sticky" ? (
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: t.pill, border: `1px solid ${t.accent}`, borderRadius: 20, padding: "30px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 18 }}>🧠</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: t.text,
                  lineHeight: 1.55,
                  fontStyle: "italic",
                }}>{concept.sticky}</p>
              </div>
            </div>
          ) : (
            <p style={{ fontSize: 16, color: t.textMid, lineHeight: 1.8, whiteSpace: "pre-line", flex: 1 }}>{content}</p>
          )}
        </div>
      </div>

      {/* Next button */}
      <div style={{ padding: "0 18px 52px" }}>
        <button
          onClick={onNext}
          className="tap"
          style={{
            width: "100%",
            background: isLast ? t.gradient : t.surface,
            border: isLast ? "none" : `1px solid ${t.border}`,
            color: isLast ? "#fff" : t.accentSoft,
            fontWeight: 700,
            fontSize: 17,
            padding: "20px",
            borderRadius: 18,
            cursor: "pointer",
          }}
        >
          {isLast ? "Take the quiz →" : `Next: ${phaseLabels[phases[phaseIdx + 1]]} →`}
        </button>
      </div>
    </div>
  );
}

// ─── QUIZ ────────────────────────────────────────────────────────────────────

function QuizView({ concept, state, onSelect, onNext, onBack }) {
  const { current, showExplain, selected } = state;
  const q = concept.quiz[current];
  const isCorrect = selected === q.answer;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ padding: "52px 20px 16px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onBack}
          style={{
            background: t.surface, border: "none", color: t.accentSoft,
            fontSize: 20, cursor: "pointer", borderRadius: 12,
            width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >←</button>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: t.accentSoft, letterSpacing: 2, textTransform: "uppercase", fontWeight: 600 }}>
            Quick check · {concept.title}
          </div>
        </div>
        <div style={{ fontSize: 13, color: t.textDim, fontWeight: 600 }}>
          {current + 1} of {concept.quiz.length}
        </div>
      </div>

      <div style={{ flex: 1, padding: "0 18px" }}>
        {/* Question */}
        <div className="fadein" style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 24, padding: "28px 22px", marginBottom: 16 }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, color: t.text, lineHeight: 1.45 }}>{q.q}</p>
        </div>

        {/* Answer options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((opt, i) => {
            let bg = t.surface, border = t.border, color = t.textMid;
            if (showExplain) {
              if (i === q.answer) { bg = t.pill; border = t.accent; color = t.accentSoft; }
              else if (i === selected) { bg = "#1a0808"; border = "#ef4444"; color = "#fca5a5"; }
            } else if (selected === i) {
              bg = t.surfaceHover; border = t.accent;
            }
            return (
              <div
                key={i}
                onClick={() => onSelect(i)}
                className="tap"
                style={{
                  background: bg,
                  border: `1px solid ${border}`,
                  borderRadius: 16,
                  padding: "16px 18px",
                  cursor: showExplain ? "default" : "pointer",
                  transition: "all 0.2s",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  minWidth: 26, height: 26, borderRadius: 99,
                  background: border === t.border ? t.border : border + "33",
                  border: `1px solid ${border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 700, color, marginTop: 1, flexShrink: 0,
                }}>
                  {showExplain
                    ? (i === q.answer ? "✓" : i === selected ? "✗" : String.fromCharCode(65 + i))
                    : String.fromCharCode(65 + i)}
                </div>
                <span style={{ fontSize: 16, color, lineHeight: 1.55 }}>{opt}</span>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplain && (
          <div className="fadein" style={{
            background: isCorrect ? t.pill : "#1a0808",
            border: `1px solid ${isCorrect ? t.accent : "#ef4444"}`,
            borderRadius: 16, padding: "18px", marginTop: 16,
          }}>
            <div style={{ fontWeight: 700, color: isCorrect ? t.accentSoft : "#f87171", marginBottom: 8, fontSize: 16 }}>
              {isCorrect ? "✓ That's right!" : "✗ Not quite — and that's okay!"}
            </div>
            <p style={{ fontSize: 15, color: isCorrect ? t.textMid : "#fecaca", lineHeight: 1.65 }}>{q.explain}</p>
          </div>
        )}
      </div>

      {showExplain && (
        <div style={{ padding: "20px 18px 52px" }}>
          <button
            onClick={onNext}
            className="tap"
            style={{
              width: "100%", background: t.gradient, border: "none",
              color: "#fff", fontWeight: 700, fontSize: 17,
              padding: "20px", borderRadius: 18, cursor: "pointer",
            }}
          >
            {current + 1 < concept.quiz.length ? "Next question →" : "See how I did →"}
          </button>
        </div>
      )}
    </div>
  );
}

// ─── RESULTS ─────────────────────────────────────────────────────────────────

function ResultsView({ concept, score, total, onHome, onNextConcept, onRetry }) {
  const perfect = score === total;
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 26px", textAlign: "center" }}>
      <div style={{ fontSize: 80, marginBottom: 18 }}>{perfect ? "🌸" : score >= total / 2 ? "🎯" : "📚"}</div>
      <div style={{ fontSize: 11, letterSpacing: 3, color: t.accentSoft, textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>Lesson complete</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: t.text, marginBottom: 8 }}>{concept.title}</h2>
      <div style={{ fontSize: 56, fontWeight: 700, color: perfect ? t.accent : t.text, margin: "16px 0" }}>{score}/{total}</div>
      <p style={{ fontSize: 16, color: t.textMid, maxWidth: 280, lineHeight: 1.65, marginBottom: 28 }}>
        {perfect
          ? "Wonderful! You've got this one. 🌸"
          : score > 0
            ? "Good start. Reading the lesson again will help it click."
            : "Don't worry — go back and read it again. It takes time."}
      </p>

      {/* Sticky takeaway */}
      <div style={{ background: t.surface, border: `1px solid ${t.border}`, borderRadius: 18, padding: "22px", width: "100%", marginBottom: 24, textAlign: "left" }}>
        <div style={{ fontSize: 10, color: t.accentSoft, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 10, fontWeight: 700 }}>Remember this</div>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: t.text, lineHeight: 1.55, fontStyle: "italic" }}>{concept.sticky}</p>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
        <button
          onClick={onNextConcept}
          className="tap"
          style={{
            background: t.gradient, border: "none", color: "#fff",
            fontWeight: 700, fontSize: 17, padding: "20px", borderRadius: 18, cursor: "pointer",
          }}
        >
          Next lesson →
        </button>
        <button
          onClick={onHome}
          className="tap"
          style={{
            background: t.surface, border: `1px solid ${t.border}`, color: t.accentSoft,
            fontWeight: 600, fontSize: 16, padding: "18px", borderRadius: 18, cursor: "pointer",
          }}
        >
          Back to all lessons
        </button>
        <button
          onClick={onRetry}
          className="tap"
          style={{
            background: "none", border: "none", color: t.textDim,
            fontSize: 14, cursor: "pointer", padding: "8px",
          }}
        >
          Try the quiz again
        </button>
      </div>
    </div>
  );
}
