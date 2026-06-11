document.addEventListener("DOMContentLoaded", () => {
    initDashboard();
    setInterval(updateClock, 1000);
});

function initDashboard() {
    updateClock();
    updateGreeting();
}

function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Formato de dos dígitos
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    clockElement.textContent = `${hours}:${minutes}`;
    
    // Ejecuta la actualización de fecha
    updateDate();
}

function updateDate() {
    const dateElement = document.getElementById("date-display");
    if (!dateElement) return;

    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    let formattedDate = now.toLocaleDateString('es-ES', options);
    
    // Primera letra en mayúscula
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    dateElement.textContent = `Hoy es ${formattedDate}`;
}

function updateGreeting() {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting = "";

    if (hours >= 6 && hours < 12) {
        greeting = "¡Buenos días, Mauricio!";
    } else if (hours >= 12 && hours < 20) {
        greeting = "¡Buenas tardes, Mauricio!";
    } else {
        greeting = "¡Buenas noches, Mauricio!";
    }

    greetingElement.textContent = greeting;
}
