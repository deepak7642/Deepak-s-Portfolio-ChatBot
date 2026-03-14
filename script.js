var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919818055526'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9818055526</label></div></a> <a href='mailto:kauradeepak26@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg'></div></a> <a target='_blank' href='https://github.com/deepak7642'> <div class='socialItem'><img class='socialItemI' src='images/github.svg'></div></a> <a target='_blank' href='https://wa.me/919818055526'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg'></div></a> <a target='_blank' href='https://www.linkedin.com/in/deepak-kaura-66a903162'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg'></div></a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Deepak Kaura Resume 2026.pdf</label></div><a href='assets/Deepak Kaura Resume 2026.pdf' download='Deepak_Kaura_Resume_2026.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Namaste 🙏,<br><br>I'm <span class='bold'><a class='alink'>Deepak Kaura</a>.</span><br><br><span class='bold'>AI/ML Developer with 3.2 years of experience</span> building predictive analytics and LLM applications.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - View my technical skills<br><span class='bold'>'resume'</span> - Download my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'contact'</span> - Connect with me<br><span class='bold'>'experience'</span> - View my work experience<br><span class='bold'>'awards'</span> - View my awards & recognitions<br><span class='bold'>'clear'</span> - Clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>My core skills include:<br><br><span class='bold'>Programming Language</span><br>Python<br><br> <span class='bold'>Time Series Analysis</span><br>FB-Prophet<br>LSTM<br>Regression Models<br><br> <span class='bold'>Machine Learning</span><br>Linear Regression<br>Logistic Regression<br>Decision Tree<br>Random Forest<br>SVM<br>KNN<br>XGBoost<br>LightGBM<br>CatBoost<br>K-Means Clustering<br><br> <span class='bold'>LLM Frameworks</span><br>LangChain<br>txtai<br><br> <span class='bold'>NLP</span><br>BERT<br><br> <span class='bold'>Libraries</span><br>Pandas<br>NumPy<br>Matplotlib<br>Seaborn<br>Plotly<br>Scikit-Learn<br><br> <span class='bold'>AutoML</span><br>\
PyCaret<br><br> <span class='bold'>MLOps</span><br>MLflow<br>ZenML<br><br> <span class='bold'>Database</span><br>\
MS SQL<br><br> <span class='bold'>Data Visualization</span><br>Tableau<br><br> <span class='bold'>Deployment</span><br>Streamlit<br>Flask<br>Gradio</span>");
            break;

        case "education":
            sendTextMessage("🎓 <span class='bold'>Education</span><br><br>MBA in Financial Planning<br><br>Post Graduate Program in <span class='bold'>Data Science & AI</span><br>from <span class='bold'>IIM Indore and IIT Guwahati</span>.");
            break;

        case "experience":
            sendTextMessage("💼 <span class='bold'>Work Experience</span><br><br> <span class='bold'>Farmoid Robotech Pvt Ltd</span><br>• Developed and deployed AI-driven AgriTech solutions including Commodity Market Price Forecasting, Crop Yield Prediction, Crop Stage Advisory, and Soil Health Monitoring powering the Farmoid mobile app.<br>\• Designed the <span class='bold'>Farmoid AI Chatbot</span> (“Kisan Ke Sawalon Ka AI Jawaab”) using LLM frameworks to assist farmers with real-time answers in regional languages.<br>\• Led the AI/ML team across the full lifecycle — research, experimentation, and deployment via Streamlit, Gradio, and Flask.<br>\• Increased farmer profitability by <span class='bold'>35–40%</span> through AI-driven forecasting and advisory systems.<br><br> <span class='bold'>Rework AI</span><br> • Led development of AI-powered HR automation tools including GPT/LLM-based job description generation and NLP-driven resume–JD matching systems deployed on the company website.<br>\• Improved JD matching accuracy by <span class='bold'>25%</span> by building automated NLP pipelines processing 1,000+ resumes.<br>\• Recognized by senior management for exceptional contribution and performance during the internship.<br><br> <span class='bold'>Resolute.AI</span><br> • Designed predictive analytics proof-of-concepts and presented them directly to the Co-Founder and senior leadership.<br>\• Architected and deployed a predictive analytics solution later adopted as a flagship feature on the corporate website, serving as a key client engagement tool.");
            break;
        case "awards":
            sendTextMessage("🏆 <span class='bold'>Awards & Recognition</span><br><br>🎤 Represented <span class='bold'>Farmoid</span> at the <span class='bold'>Bharat AI Summit 2026</span> at Bharat Mandapam, New Delhi.<br><br>🥈 Finalist – <span class='bold'>Gamified: A Gentle Digital Fast</span>, TechSprint – Leveraging the Power of AI.<br><br>🥉 Semi-Finalist – <span class='bold'>Track B: BDH-Driven Continuous Narrative Reasoning</span>, IIT Kharagpur Data Science Hackathon 2026.<br><br>🏅 Top 10 Runner-Up – <span class='bold'>AI Cart Recovery Agent</span>, ReelCode August 2025 Project-A-Thons.<br><br>🥈 Finalist – <span class='bold'>Insurance Customer Value Enhancement</span>, Airothon 2025 – Agentic AI Hackathon.<br><br>🔎 View the complete list of Awards/Recognition — <a href='https://github.com/deepak7642/Hackathons-Recognization-' target='_blank'>Full Achievements</a>");
            break;

        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <span class='bold'>Deepak Kaura</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/deepak7642'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
