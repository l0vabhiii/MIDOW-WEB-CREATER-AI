let countries = {
  "India": "Hindi",
  "USA": "English",
  "France": "French",
  "Germany": "German",
  "Japan": "Japanese"
};

let messages = {
  "whatsapp": "Hey! I'm from MIDOWWEBCREATER. We offer stunning websites, graphic design & AI tools tailored for your business. Let's connect!",
  "linkedin": "Hi, I'm a professional from MIDOWWEBCREATER. I help businesses grow through web development, branding, and AI automation.",
  "email": "Hello, I'm reaching out from MIDOWWEBCREATER. We specialize in building smart websites and automations. Let’s discuss how we can help your business.",
  "fiverr": "Hi! Check out my Fiverr gig – I build custom websites, brand design and AI bots at affordable prices.",
  "upwork": "Hello! I'm from MIDOWWEBCREATER – offering expert web & graphic design. Let's build your next big idea!"
};

window.onload = () => {
  let select = document.getElementById('countrySelect');
  for (let c in countries) {
    let opt = document.createElement('option');
    opt.value = c;
    opt.text = c;
    select.appendChild(opt);
  }
};

function generateMessage() {
  let country = document.getElementById("countrySelect").value;
  let platform = document.getElementById("platformSelect").value;
  let lang = countries[country];
  let baseMsg = messages[platform];
  document.getElementById("output").value = `[${lang}][${country}]\n${baseMsg}`;
  }
