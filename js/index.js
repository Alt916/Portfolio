window.onload = function () {
  var blocs = document.querySelectorAll(".bloc");
  var overlays = document.querySelectorAll(".overlay");
  var closeButtons = document.querySelectorAll(".close");

  blocs.forEach(function (bloc, index) {
    bloc.addEventListener("click", function () {
      overlays[index].style.display = "flex";
    });
  });

  overlays.forEach(function (overlay, index) {
    overlay.addEventListener("click", function (event) {
      if (event.target == overlay) {
        overlay.style.display = "none";
      }
    });
  });

  closeButtons.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      overlays[index].style.display = "none";
    });
  });

  function addToChatbox(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    if (sender === "user") {
      messageElement.classList.add("user-message");
      messageElement.innerText = message;
    } else {
      messageElement.classList.add("bot-message");
      const typingEffect = document.createElement("span");
      typingEffect.classList.add("typing-effect");
      messageElement.appendChild(typingEffect);
      typeMessage(message, typingEffect);
    }

    chatbox.innerHTML = "";
    chatbox.appendChild(messageElement);
    document.querySelector(".chatbox").style.display = "block";
  }

  function typeMessage(message, element, index = 0) {
    if (index < message.length) {
      element.innerHTML += message[index];
      setTimeout(() => typeMessage(message, element, index + 1), 50);
    }
  }

  document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputMessage = document.getElementById("message").value;

    if (inputMessage) {
      addToChatbox(inputMessage, "user");
      handleUserMessage(inputMessage);
      document.getElementById("message").value = "";
      document.getElementById("botImage").classList.add("moveForward");
    }
  });

  document.getElementById("botImage").addEventListener("animationend", function () {
    this.classList.remove("moveForward");
  });

  function handleUserMessage(message) {
    message = message.toLowerCase();

    if (message.includes("bonjour") || message.includes("salut")) {
      const response = "Bonjour ! Comment puis-je vous aider ?";
      addToChatbox(response, "bot");
    } else if (message.includes("quel est ton nom")) {
      const response = "Je suis un chatbot créé par Benoit Gaillard.";
      addToChatbox(response, "bot");
    } else if (message.includes("aide") || message.includes("conseil")) {
      const response = "Bien sûr, je suis là pour vous aider. Que voulez-vous savoir ?";
      addToChatbox(response, "bot");
    } else {
      const response = "Je suis désolé, je ne comprends pas. En revanche, je peut vous rediriger vers Nova, le chatbot créer par Benoit Gaillard. Voici le lien : https://unknown7349.github.io/Nova/";
      addToChatbox(response, "bot");
    }
  }
};
