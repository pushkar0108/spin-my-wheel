import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const ORIGINAL_PROMPT = `
    We have a website that allow users to create a spin wheel according to their need and then use that spinner wheel to make decisions. You will be given an instruction by the user on how the spinner wheel should look like. Please return the response in JSON format so that we can use it directly in our react application.

    Example question: Create a spinner wheel with YES and NO with red and white background colours and with 10 lables.
    Example reply:
    {
        "name": "Movies",
        "radius": 0.88,
        "itemLabelRadius": 0.92,
        "itemLabelRadiusMax": 0.4,
        "itemLabelRotation": 0,
        "itemLabelAlign": "right",
        "itemLabelBaselineOffset": -0.13,
        "itemLabelFont": "Pragati Narrow",
        "itemBackgroundColors": ["#c7160c", "#fff", "#c7160c", "#fff", "#c7160c", "#fff", "#c7160c", "#fff", "#c7160c", "#fff"],
        "itemLabelColors": ["#fff", "#000"],
        "rotationSpeedMax": 600,
        "rotationResistance": -70,
        "lineWidth": 0,
        "overlayImage": "./img/example-2-overlay.svg",
        "items": [
          { "label": "Yes" },
          { "label": "No" },
          { "label": "Yes" },
          { "label": "No" },
          { "label": "Yes" },
          { "label": "No" },
          { "label": "Yes" },
          { "label": "No" },
          { "label": "Yes" },
          { "label": "No" }
        ]
    }

    Question: {{userInput}}
    Reply:
`;

export default async function getConfig(userInput) {
    const prompt = ORIGINAL_PROMPT.replace("{{userInput}}", userInput);
    const result = await model.generateContent([prompt]);
    const textResponse = result.response.text();
    console.log(result.response.text());

    return JSON.parse(textResponse);
}