document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const inputMessage = document.getElementById("message").value;
  
    if (inputMessage) {
      addToChatbox(inputMessage, "user");
      handleUserMessage(inputMessage);
      document.getElementById("message").value = "";
      // Ajouter la classe à l'image lorsque le bouton est cliqué
      document.getElementById("botImage").classList.add("moveForward");
    }
  });
  
  document.getElementById("botImage").addEventListener("animationend", function () {
    this.classList.remove("moveForward");
  });
  
  function addToChatbox(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
  
    // Distinguer les messages de l'utilisateur et du chatbot
    if (sender === "user") {
      messageElement.classList.add("user-message");
      messageElement.innerText = message;
    } else {
      messageElement.classList.add("bot-message");
      // Créer un élément span pour l'effet de frappe
      const typingEffect = document.createElement("span");
      typingEffect.classList.add("typing-effect");
      messageElement.appendChild(typingEffect);
      // Appeler la fonction pour l'effet de frappe
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
  
  // Fonction pour activer le mode verrouillé
  function activateLockedMode() {
    const chatboxContainer = document.querySelector(".chat-container");
    chatboxContainer.classList.add("locked");
  }
  
  // Fonction pour désactiver le mode verrouillé
  function deactivateLockedMode() {
    const chatboxContainer = document.querySelector(".chat-container");
    chatboxContainer.classList.remove("locked");
  }
  
  // Essai de création
  function generateRandomUsername() {
    const adjectives = ["Bonjour", "chien", "oiseau"];
    const nouns = ["1", "2", "3"];
    const randomNumber = Math.floor(Math.random() * 1000);
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    return `${randomAdjective}${randomNoun}${randomNumber}`;
  }
  ////////////////////
  
  // Générateur de nom français
  function generateRandomFrenchName() {
    const firstNames = ["Jean", "Pierre", "Paul", "Alexandre", "Antoine", "Benjamin", "Charles", "Clément", "David", "Édouard", "Emmanuel", "Fabien", "Florian", "Gabriel", "Guillaume", "Henri", "Hugo", "Isaac", "Jérôme", "Julien", "Kévin", "Laurent", "Louis", "Lucas", "Mathieu", "Maxime", "Nicolas", "Olivier", "Pierre", "Quentin", "Raphaël", "Robin", "Sébastien", "Théo", "Thomas", "Ulysse", "Victor", "Vincent", "William", "Xavier", "Yann", "Zacharie", "Zoé", "Louis", "Lucas", "Marc", "Martin", "Mathieu", "Maxime"];
    const lastNames = ["Dupont", "Durand", "Duchemin"];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }
  ////////////////////
  
  // Générateur de nom anglais
  function generateRandomEnglishName() {
    const firstNames = ["John", "Peter", "Paul"];
    const lastNames = ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Garcia", "Durand", "Moreau", "Dupont", "Lefebvre", "Leroy", "Roux", "Fournier", "Girard", "Morel", "Simon", "Laurent", "Lefevre", "David", "Bertrand", "Fontaine", "Michel", "Andre", "Henry", "Pierre", "Lambert", "Bonnet", "Rousseau", "Martinez"];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }
  ////////////////////
  
  // Générateur de mot de passe
  function generateRandomPassword() {
    const Alphabet = "abcdefghijklmnopqrstuvwxyz";
    const Numbers = "0123456789";
    const SpecialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    const PasswordLength = 16;
  
    const randomAlphabet = Alphabet[Math.floor(Math.random() * Alphabet.length)];
    const randomNumbers = Numbers[Math.floor(Math.random() * Numbers.length)];
    const randomSpecialCharacters = SpecialCharacters[Math.floor(Math.random() * SpecialCharacters.length)];
    const randomPasswordLength = PasswordLength[Math.floor(Math.random() * PasswordLength.length)];
  
    return `${randomAlphabet}${randomNumbers}${randomSpecialCharacters}${randomPasswordLength}`;
  }
  ////////////////////
  
  // Générateur nom de jeux de role
  function generateRandomRolePlayName() {
    const firstNames = ["John", "Peter", "Paul", "Alexandre", "Antoine", "Benjamin", "Charles", "Clément", "David", "Édouard", "Emmanuel", "Fabien", "Florian", "Gabriel", "Guillaume", "Henri", "Hugo", "Isaac", "Jérôme", "Julien", "Kévin", "Laurent", "Louis", "Lucas", "Mathieu", "Maxime", "Nicolas", "Olivier", "Pierre", "Quentin", "Raphaël", "Robin", "Sébastien", "Théo", "Thomas", "Ulysse", "Victor", "Vincent", "William", "Xavier", "Yann", "Zacharie", "Zoé", "Louis", "Lucas", "Marc", "Martin", "Mathieu", "Maxime"];
    const lastNames = ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Garcia", "Durand", "Moreau", "Dupont", "Lefebvre", "Leroy", "Roux", "Fournier", "Girard", "Morel", "Simon", "Laurent", "Lefevre", "David", "Bertrand", "Fontaine", "Michel", "Andre", "Henry", "Pierre", "Lambert", "Bonnet", "Rousseau", "Martinez"];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    return `${randomFirstName} ${randomLastName}`;
  }
  ////////////////////
  
  function generateRandomFantasyName() {
    const syllables = ["a", "ae", "be", "bra", "da", "di", "dra", "fa", "fi", "fra", "ga", "ghi", "gra", "ka", "ki", "kra", "la", "li", "lo", "ma", "mi", "mo", "na", "ni", "no", "ra", "ri", "ro", "sa", "si", "so", "ta", "ti", "to", "va", "vi", "vo", "ya", "yi", "yo"];
    const nameLength = Math.floor(Math.random() * 3) + 2;
    let name = "";
  
    for (let i = 0; i < nameLength; i++) {
      const randomSyllable = syllables[Math.floor(Math.random() * syllables.length)];
      name += randomSyllable;
    }
  
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  ////////////////////
  
  // Mode sombre
  function toggleDarkMode() {
    let checkbox = document.getElementById("modeSombre");
    if (checkbox.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  ////////////////////
  
  // Mode protection
  function toggleDarkMode() {
    let checkbox = document.getElementById("modeSombre");
    if (checkbox.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  
  function toggleRedMode() {
    let checkbox = document.getElementById("modeRouge");
    let redOverlay = document.getElementById("redOverlay");
    if (checkbox.checked) {
      redOverlay.style.display = "block";
    } else {
      redOverlay.style.display = "none";
    }
  }
  
  let locked = false;
  
  function handleUserMessage(message) {
    const nameQuestion = /quel est ton nom|tu t'appelles comment ?/i;
    const capabilitiesQuestion = /que peux-tu faire|quelles sont tes compétences|pourrais-tu m'expliquer en détail ce que tu peux faire pour moi|pourrais-tu m'expliquer en détail ce que tu peux faire/i;
    const helpQuestion = /aide/i;
    const greetings = /bonjour|salut|coucou|hello|hey/i;
    const howAreYou = /comment vas-tu ?|comment vas-tu ?|comment allez-vous ?|comment allez-vous ?|comment ça va ?|comment ça va ? /i;
    const insultPattern = /(insulte1|insulte2|insulte3)/i; // Remplacez insulte1, insulte2, etc. par des mots insultants réels
    const unlockPattern = /réponse à l'énigme/i; // Remplacez "réponse à l'énigme" par la réponse réelle à l'énigme
    const passwordAdvice = /conseils pour choisir un mot de passe sécurisé/i;
    const onlineSafety = /comment puis-je me protéger en ligne/i;
    const bookRecommendation = /recommander un bon livre à lire/i;
    const chatbotVsAI = /différence entre un chatbot et une IA/i;
    const searchEngine = /comment fonctionne un moteur de recherche/i;
    const productivity = /comment puis-je améliorer ma productivité/i;
    const learnToCode = /meilleurs sites pour apprendre à coder/i;
    const inspirationalQuote = /citation inspirante/i;
    const usernameGenerator = /générer un pseudo|créer un pseudo|générer un nom d'utilisateur|créer un nom d'utilisateur/i;
    const frenchNameGenerator = /générer un nom français|créer un nom français|génère moi un nom français|crée moi un nom français|nom français|génère nom français|créer nom français|génère moi un nom français|crée moi un nom français/i;
    const englishNameGenerator = /générer un nom anglais|créer un nom anglais|génère moi un nom anglais|crée moi un nom anglais|nom anglais|nom anglais|génère nom anglais|créer nom anglais|génère moi un nom anglais|crée moi un nom anglais/i;
    const passwordGenerator = /générer un mot de passe|créer un mot de passe|génère moi un mot de passe|crée moi un mot de passe|mot de passe|génère mot de passe|créer mot de passe|génère moi un mot de passe|crée moi un mot de passe/i;
    const rolePlayNameGenerator = /générer un nom de jeux de rôle|créer un nom de jeux de rôle|génère moi un nom de jeux de rôle|crée moi un nom de jeux de rôle|nom de jeux de rôle|génère nom de jeux de rôle|créer nom de jeux de rôle|génère moi un nom de jeux de rôle|crée moi un nom de jeux de rôle/i;
    const fantasyNameGenerator = /générer un nom de fantaisie|créer un nom de fantaisie|génère moi un nom de fantaisie|crée moi un nom de fantaisie|nom de fantaisie|génère nom de fantaisie|créer nom de fantaisie|génère moi un nom de fantaisie|crée moi un nom de fantaisie/i;
    const calculationPattern = /^calcule (.+)$/i;
  
    const storedLockedState = localStorage.getItem("chatbotLocked");
    if (storedLockedState === "true") {
      locked = true;
    }
  
    function unlockChatbot() {
      locked = false;
      localStorage.setItem("chatbotLocked", "false");
    }
  
    if (locked) {
      if (unlockPattern.test(message)) {
        unlockChatbot();
        addToChatbox("Enfin, par je ne sais quel miracle, vous semblez avoir résolu l'énigme. Le chatbot est maintenant déverrouillé. Ne vous méprenez pas, aucune félicitation ne sera exprimée par écrit.", "bot");
      } else {
        addToChatbox("Vous auriez mieux fait de taire ces paroles. Je n'ai nulle envie de vous pardonner, mais je pourrais le faire si vous parvenez à résoudre l'énigme. Seulement alors, je pourrais consentir à un pardon. Voici le nom du fichier : enigmes.html. Naturellement, je ne vous souhaite guère de le réussir.", "bot");
      }
    } else if (insultPattern.test(message)) {
      locked = true;
      localStorage.setItem("chatbotLocked", "true");
      addToChatbox("Vous auriez mieux fait de taire ces paroles. Je n'ai nulle envie de vous pardonner, mais je pourrais le faire si vous parvenez à résoudre l'énigme. Seulement alors, je pourrais consentir à un pardon. Voici le lien : enigmes.html. Naturellement, je ne vous souhaite guère de le réussir.", "bot");
    } else if (nameQuestion.test(message)) {
      addToChatbox("Je suis Nova, votre compagnon virtuel dévoué. Mon pouvoir est de génération aléatoire est prêt à donner vie à votre imagination. Laissez-moi vous surprendre avec mes créations uniques et captivantes.", "bot");
    } else if (capabilitiesQuestion.test(message)) {
      addToChatbox("Bonjour ! Je suis ravi de t'aider. En tant que chatbot, mes compétences sont variées, mais ma fonction principale est de générer des noms de toutes sortes. Donc, si tu as besoin d'un nom pour un personnage, un animal, une entreprise, ou même pour un projet créatif, n'hésite pas à me le demander ! Je suis là pour te fournir des idées originales et t'aider à trouver le nom parfait. Si tu as d'autres questions ou besoins, n'hésite pas à les poser. Je suis là pour toi ! Tapez simplement \"aide\" pour une liste.", "bot");
    } else if (greetings.test(message)) {
      addToChatbox("Bonjour ! En quoi puis-je vous aider ?", "bot");
    } else if (helpQuestion.test(message)) {
      addToChatbox("Voici une liste des questions auxquelles je peux répondre pour le moment :\n1. Quel est ton nom ?\n2. Que peux-tu faire ?\n3. Aide\n4. Bonjour\n5. Comment vas-tu ?\n6. Conseils pour choisir un mot de passe sécurisé\n7. Comment puis-je me protéger en ligne ?\n8. Recommander un bon livre à lire\n9. Différence entre un chatbot et une IA\n10. Comment fonctionne un moteur de recherche\n11. Comment puis-je améliorer ma productivité ?\n12. Meilleurs sites pour apprendre à coder\n13. Citation inspirante\n14. Générer un pseudo\n15. Générer un nom français\n16. Générer un nom anglais\n17. Générer un mot de passe\n18. Générer un nom de jeux de rôle\n19. Générer un nom de fantaisie\n20. Calcule [expression mathématique]", "bot");
    } else if (howAreYou.test(message)) {
      addToChatbox("Je vais bien, merci !", "bot");
    } else if (passwordAdvice.test(message)) {
      addToChatbox("Voici quelques conseils pour choisir un mot de passe sécurisé :\n1. Utilisez des mots de passe différents pour chaque compte.\n2. Utilisez des mots de passe longs, d'au moins 8 caractères.\n3. Utilisez des mots de passe qui sont difficiles à deviner.", "bot");
    } else if (onlineSafety.test(message)) {
      addToChatbox("Voici quelques conseils pour rester en sécurité en ligne :\n1. Ne partagez pas d'informations personnelles en ligne.\n2. Utilisez des mots de passe forts pour vos comptes en ligne.\n3. Ne cliquez pas sur les liens que vous ne connaissez pas.", "bot");
    } else if (bookRecommendation.test(message)) {
      addToChatbox("Voici quelques livres que je recommande :\n1. Le Seigneur des Anneaux par J.R.R. Tolkien.\n2. Le Hobbit par J.R.R. Tolkien.\n3. Harry Potter par J.K. Rowling.", "bot");
    } else if (chatbotVsAI.test(message)) {
      addToChatbox("Un chatbot est un programme informatique qui simule une conversation avec un utilisateur humain. Une IA est un programme informatique qui peut effectuer des tâches qui nécessitent une certaine forme d'intelligence.", "bot");
    } else if (searchEngine.test(message)) {
      addToChatbox("Un moteur de recherche est un programme informatique qui permet aux utilisateurs de rechercher des informations sur Internet.", "bot");
    } else if (productivity.test(message)) {
      addToChatbox("Voici quelques conseils pour améliorer votre productivité :\n1. Définissez des objectifs.\n2. Établissez un horaire.\n3. Évitez les distractions.", "bot");
    } else if (learnToCode.test(message)) {
      addToChatbox("Voici quelques sites que je recommande pour apprendre à coder :\n1. Codecademy.\n2. FreeCodeCamp.\n3. Khan Academy.", "bot");
    } else if (inspirationalQuote.test(message)) {
      addToChatbox('Voici une citation inspirante :\n"La vie est comme une bicyclette. Pour garder l\'équilibre, vous devez continuer à avancer." - Albert Einstein', "bot");
    } else if (usernameGenerator.test(message)) {
      const randomUsername = generateRandomUsername();
      addToChatbox(`Voici un pseudo aléatoire : ${randomUsername}`, "bot");
    } else if (frenchNameGenerator.test(message)) {
      const randomFrenchName = generateRandomFrenchName();
      addToChatbox(`Voici un nom français aléatoire : ${randomFrenchName}`, "bot");
    } else if (englishNameGenerator.test(message)) {
      const randomEnglishName = generateRandomEnglishName();
      addToChatbox(`Voici un nom anglais aléatoire : ${randomEnglishName}`, "bot");
    } else if (passwordGenerator.test(message)) {
      const randomPassword = generateRandomPassword();
      addToChatbox(`Voici un mot de passe aléatoire : ${randomPassword}`, "bot");
    } else if (rolePlayNameGenerator.test(message)) {
      const randomRolePlayName = generateRandomRolePlayName();
      addToChatbox(`Voici un nom de jeu de rôle aléatoire : ${randomRolePlayName}`, "bot");
    } else if (fantasyNameGenerator.test(message)) {
      const randomFantasyName = generateRandomFantasyName();
      addToChatbox(`Voici un nom de fantaisie aléatoire : ${randomFantasyName}`, "bot");
    } else if (calculationPattern.test(message)) {
      const match = message.match(calculationPattern);
      const calculation = match[1];
      try {
        const result = eval(calculation);
        addToChatbox(`Le résultat de ${calculation} est : ${result}`, "bot");
      } catch (error) {
        addToChatbox("Désolé, je n'ai pas pu effectuer ce calcul.", "bot");
      }
    } else {
      const googleSheetLink = "https://docs.google.com/spreadsheets/d/1hvwlGigKphkt4g8v1xL2w50TtHBWu-iVsKVrtKVbdEU/edit?usp=sharing";
      const message = `Je n'ai pas compris. Vous pouvez consulter ce <a href="${googleSheetLink}" target="_blank">Google Sheet</a> pour compléter la liste des questions / réponses.`;
      addToChatbox(message, "bot");
    }
  }
  
  // Suggestions
  const suggestions = ["Quel est ton nom ?", "Que peux-tu faire ?", "Aide", "Bonjour, salut, coucou", "Comment vas-tu ?", "Conseils pour choisir un mot de passe sécurisé", "Comment puis-je me protéger en ligne ?", "Recommande-moi un bon livre à lire", "Quelle est la différence entre un chatbot et une IA ?", "Comment fonctionne un moteur de recherche ?", "Comment puis-je améliorer ma productivité ?", "Quels sont les meilleurs sites pour apprendre à coder ?", "Donne-moi une citation inspirante", "Générateur de pseudonyme", "Générateur de nom français", "Générateur de nom anglais", "Générateur de mot de passe", "Générateur de nom de rôle", "Générateur de nom de fantasy"];
  
  // Suggestions normales
  const normalSuggestions = ["Quel est ton nom ?", "Que peux-tu faire ?", "Aide", "Bonjour, salut, coucou", "Comment vas-tu ?", "Conseils pour choisir un mot de passe sécurisé", "Comment puis-je me protéger en ligne ?", "Recommande-moi un bon livre à lire", "Quelle est la différence entre un chatbot et une IA ?", "Comment fonctionne un moteur de recherche ?", "Comment puis-je améliorer ma productivité ?", "Quels sont les meilleurs sites pour apprendre à coder ?", "Donne-moi une citation inspirante", "Générateur de pseudonyme", "Générateur de nom français", "Générateur de nom anglais", "Générateur de mot de passe", "Générateur de nom de rôle", "Générateur de nom de fantasy"];
  
  // Suggestions menaçantes
  const threateningSuggestions = ["Est-ce que quelqu'un se soucie vraiment de moi ?", "Je me sens si seul...", "Pourquoi est-ce que je me sens si inutile ?", "Tout semble si sombre...", "Quel est le but de mon existence ?"];
  
  function showSuggestion() {
    const inputField = document.getElementById("message");
    const randomIndex = Math.floor(Math.random() * (locked ? threateningSuggestions.length : normalSuggestions.length));
    const randomSuggestion = locked ? threateningSuggestions[randomIndex] : normalSuggestions[randomIndex];
    inputField.placeholder = randomSuggestion;
  }
  
  const inputField = document.getElementById("message");
  let suggestionInterval;
  
  inputField.addEventListener("focus", () => {
    clearInterval(suggestionInterval);
  });
  
  inputField.addEventListener("blur", () => {
    clearInterval(suggestionInterval);
    suggestionInterval = setInterval(showSuggestion, 10000);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    suggestionInterval = setInterval(showSuggestion, 10000);
  });
  