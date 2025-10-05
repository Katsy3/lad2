// Оголошення змінних
let studentName = "Олег";
let studentSurname = "Коваленко";
const studentAge = 22;
let isStudying = "так";
let favoriteSubject = "Математика";
let grades = [60, 80, 60]; // Приклад оцінок для тесту

// Виведення типів змінних у консоль
console.log("studentName:", studentName, typeof studentName);
console.log("studentAge:", studentAge, typeof studentAge);
console.log("isStudying:", isStudying, typeof isStudying);
console.log("favoriteSubject:", favoriteSubject, typeof favoriteSubject);
console.log("grades:", grades, typeof grades);

// Обчислення середнього балу
let averageGrade = grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : NaN;

// Визначення категорії за оцінками
let category = "";
if (isNaN(averageGrade)) {
    category = "Не вказано";
} else if (averageGrade >= 90) {
    category = "Відмінник";
} else if (averageGrade >= 80) {
    category = "Хорошист";
} else if (averageGrade >= 60) {
    category = "Трійочник";
} else {
    category = "Двійочник";
}

// Визначення вікової категорії
let ageCategory = isNaN(studentAge) ? "Не вказано" : 
    (studentAge < 18 ? "Неповнолітній студент" : 
     (studentAge <= 25 ? "Молодий студент" : "Зрілий студент"));

// Операції зі строками
let fullName = studentName + (studentSurname ? " " + studentSurname : "");
let containsProgram = favoriteSubject.toLowerCase().includes("програм");
let upperCaseName = studentName.toUpperCase();
let nameLength = studentName.length;

// Математичні операції
let minGrade = grades.length > 0 ? Math.min(...grades) : NaN;
let maxGrade = grades.length > 0 ? Math.max(...grades) : NaN;
let gradeDifference = !isNaN(minGrade) && !isNaN(maxGrade) ? maxGrade - minGrade : NaN;
let nextAge = !isNaN(studentAge) ? studentAge + 1 : NaN;
let successPercent = !isNaN(averageGrade) ? (averageGrade / 100) * 100 : NaN;

// Виведення в консоль
console.log("Повне ім'я:", fullName);
console.log("Містить 'програм':", containsProgram);
console.log("Ім'я у верхньому регістрі:", upperCaseName);
console.log("Довжина імені:", nameLength);
console.log("Різниця оцінок:", gradeDifference);
console.log("Вік наступного року:", nextAge);
console.log("Відсоток успішності:", isNaN(successPercent) ? "Не вказано" : successPercent + "%");
console.log("Категорія:", category);
console.log("Вікова категорія:", ageCategory);

// Виведення на сторінку
document.getElementById("basicInfo").innerHTML = `
  <p><span>Ім'я:</span> ${fullName}</p>
  <p><span>Вік:</span> ${isNaN(studentAge) ? "Не вказано" : studentAge}</p>
  <p><span>Чи навчається:</span> ${isStudying}</p>
  <p><span>Улюблений предмет:</span> ${favoriteSubject}</p>
  <p><span>Чи є 'програм' у предметі:</span> ${containsProgram ? "Так" : "Ні"}</p>
  <p><span>Ім'я у верхньому регістрі:</span> ${upperCaseName}</p>
  <p><span>Довжина імені:</span> ${nameLength}</p>
`;

document.getElementById("gradesInfo").innerHTML = `
  <p><span>Оцінки:</span> ${grades.map(g => isNaN(g) ? "Не вказано" : g).join(", ")}</p>
  <p><span>Середній бал:</span> ${isNaN(averageGrade) ? "Не вказано" : averageGrade.toFixed(2)}</p>
  <p><span>Різниця між оцінками:</span> ${isNaN(gradeDifference) ? "Не вказано" : gradeDifference}</p>
  <p><span>Відсоток успішності:</span> ${isNaN(successPercent) ? "Не вказано" : successPercent.toFixed(2)}%</p>
`;

document.getElementById("categoryInfo").innerHTML = `
  <p><span>Категорія за оцінками:</span> ${category}</p>
`;

document.getElementById("ageCategoryInfo").innerHTML = `
  <p><span>Вікова категорія:</span> ${ageCategory}</p>
`;
