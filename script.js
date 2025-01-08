document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    // Display user message
    displayMessage(userInput, 'user');

    // Clear input field
    document.getElementById('user-input').value = '';

    // Get bot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot');
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ' + (sender === 'bot' ? 'bot-message' : 'user-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple responses for demonstration
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "what is html?": "HTML stands for HyperText Markup Language. It's the standard language for creating web pages.",
        "what is css?": "CSS stands for Cascading Style Sheets. It's used for styling HTML elements.",
        "what is javascript?": "JavaScript is a programming language that allows you to implement complex features on web pages.",
        "bye": "Goodbye! Have a great day!"
    };

    // Return a response or a default message
    return responses[input.toLowerCase()] || "I'm sorry, I don't understand that.";
}