// automation.js - Handles posting, cold messages, and auto-action system

// Example: Generate a cold message for a specific platform
function generateMessage(platform, clientName = "Client") {
  const messages = {
    linkedin: `Hi ${clientName}, I'm from MIDOWWEBCREATER. We help businesses scale with stunning web designs, AI automation & marketing. Would love to show you what we can do!`,
    instagram: `Hey ${clientName}! 👋 We're MIDOWWEBCREATER — crafting top-tier websites, AI tools & graphics. Can we send over our catalog?`,
    whatsapp: `Hello ${clientName}, MIDOWWEBCREATER this side. We offer Web Dev, Graphics, AI bots, and SM Marketing. See our work & let's discuss your project.`,
    fiverr: `Hi! I’m from MIDOWWEBCREATER. We offer AI bots, web design, and marketing. Let’s boost your business together. Want a free sample?`,
    upwork: `Hello ${clientName}, our team at MIDOWWEBCREATER builds stunning websites, automation bots, and graphics. Interested in collaborating?`,
  };

  return messages[platform.toLowerCase()] || "Custom message for selected platform.";
}

// Post content templates
const postTemplates = {
  linkedin: [
    "🚀 Scale your business with custom AI tools, stunning websites & smart branding. #MIDOWWEBCREATER #AI #WebDesign #Marketing",
    "✅ Trusted by startups for: Websites | Graphics | AI bots. Let's grow together! DM for our catalog. #Freelancer #MIDOW"
  ],
  instagram: [
    "🔥 Elevate your brand! Custom websites, AI bots & marketing that convert. #MIDOW #WebDesign #AI",
    "Need a website or AI bot? 💻 DM us! #WebDevelopment #AI #StartupSupport"
  ],
  youtube: [
    "Introducing MIDOWWEBCREATER 🚀 Your one-stop solution for websites, AI bots, and branding. Subscribe for more tutorials & client showcases!",
  ]
};

// Example usage
console.log(generateMessage("linkedin", "Arjun"));

export { generateMessage, postTemplates };
