const Joi = require('joi');
const OpenAI = require('openai');
const Summary = require('../models/Summary');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Seed data - realistic Hebrew summaries of real articles
// All records include: id, title, originalText, summaryText, date (ISO format), and status
const summaries = [
  new Summary(
    1,
    "מלחמת העולם השנייה",
    "טקסט מקורי על מלחמת העולם השנייה",
    "מלחמה עולמית שהתרחשה בין השנים 1939-1945, בה השתתפו רוב מדינות העולם, וגרמה למותם של כ-70 מיליון בני אדם. המלחמה התחילה עם הפלישה הגרמנית לפולין והסתיימה עם כניעת יפן לאחר השלכת פצצות אטום על הירושימה ונגסאקי.",
    new Date('2024-01-15'),
    'completed'
  ),
  new Summary(
    2,
    "הנחיתה על הירח",
    "טקסט מקורי על הנחיתה על הירח",
    "ב-20 ביולי 1969 הנחתה מעלית אפולו 11 את האסטרונאוטים נל אמסטרונג וברז אלדרין על פני הירח, מה שהוביל להישג אנושי חסר תקדים בחקר החלל. אמסטרונג היה הראשון שהדיס את רגליו על הירח, ודבריו הפורסמים 'צעד קטן לאדם, קפיצה ענקית לאנושות' הפכו לחלק מתולדות ההיסטוריה.",
    new Date('2024-02-20'),
    'completed'
  ),
  new Summary(
    3,
    "האינטרנט",
    "טקסט מקורי על האינטרנט",
    "רשת תקשורת גלובלית המחברת מיליארדי מחשבים ומכשירים ברחבי העולם, ומאפשרת שיתוף מידע, תקשורת וגישה למשאבים דיגיטליים. האינטרנט פותח במקור כפרויקט צבאי אמריקאי בשנות ה-60 והפך לכלי חיוני בחיי היומיום של מיליארדים.",
    new Date('2024-03-10'),
    'completed'
  )
];

async function getSummaries(req, res) {
  try {
    res.json(summaries);
  } catch (error) {
    console.error('Error fetching summaries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createSummary(req, res) {
  try {
    const schema = Joi.object({
      text: Joi.string().min(11).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { text } = req.body;

    let summaryText;

    if (!process.env.OPENAI_API_KEY) {
      // Simulate API delay and return mock summary
      await new Promise(resolve => setTimeout(resolve, 1500));
      summaryText = "זהו סיכום קצר ומדויק של הטקסט שהוזן. הסיכום כולל את הנקודות העיקריות, הרעיונות המרכזיים והמסקנות החשובות מהתוכן המקורי. הוא נכתב בצורה ברורה ומובנת כדי להקל על הקריאה וההבנה.";
    } else {
      // Use OpenAI to generate summary
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that summarizes text in Hebrew. Provide a concise summary in Hebrew.' },
          { role: 'user', content: `Summarize the following text in Hebrew: ${text}` }
        ],
        max_tokens: 150
      });

      summaryText = completion.choices[0].message.content.trim();
    }

    const id = summaries.length + 1;
    // Create new Summary with all fields: id, title, originalText, summaryText, date, and status
    const newSummary = new Summary(
      id,
      `סיכום ${id}`,
      text,
      summaryText,
      new Date(),
      'completed'
    );
    newSummary.validate();

    summaries.push(newSummary);

    // Response includes full object with all fields (id, title, originalText, summaryText, date, status)
    res.status(201).json(newSummary);
  } catch (error) {
    console.error('Error creating summary:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getSummaries,
  createSummary
};