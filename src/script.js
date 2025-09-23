function updateRating(workerId, inputId, ratingId) {
  const input = document.getElementById(inputId);
  let ratingValue = parseInt(input.value);
  
  // Перевірка, щоб значення було в межах 1-5
  if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
    alert("Оцінка має бути від 1 до 5!");
    input.value = 1; // Повертаємо до мінімального значення
    ratingValue = 1;
  }

  // Генерація зірок
  let stars = "★".repeat(ratingValue) + "☆".repeat(5 - ratingValue);
  document.getElementById(ratingId).textContent = `${stars} (${ratingValue}/5)`;
}