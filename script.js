// Частина 1: Створення змінних та робота з примітивними типами
function initializeStudentData(name, surname, age, studying, subject, grade1, grade2, grade3) {
    // Оголошення змінних
    let studentName = name; // string
    const studentAge = age; // number
    let isStudying = studying.toLowerCase() === 'так' || studying.toLowerCase() === 'yes'; // boolean
    let favoriteSubject = subject; // string
    let grades = [grade1, grade2, grade3]; // array of numbers

    // Виведення типів змінних у консоль
    console.log(`studentName: ${studentName}, тип: ${typeof studentName}`);
    console.log(`studentAge: ${studentAge}, тип: ${typeof studentAge}`);
    console.log(`isStudying: ${isStudying}, тип: ${typeof isStudying}`);
    console.log(`favoriteSubject: ${favoriteSubject}, тип: ${typeof favoriteSubject}`);
    console.log(`grades: ${grades}, тип: ${typeof grades}`);

    // Спроба перевизначення та зміни змінних
    try {
        studentName = "New Name"; // Дозволено, бо let
        // studentAge = 30; // Помилка, бо const
        isStudying = false; // Дозволено, бо let
        favoriteSubject = "New Subject"; // Дозволено, бо let
        grades = [90, 95, 100]; // Дозволено, бо let
        console.log("Зміни змінних успішні:", studentName, isStudying, favoriteSubject, grades);
    } catch (e) {
        console.error("Помилка при зміні змінних:", e.message);
    }

    return { studentName, studentAge, isStudying, favoriteSubject, grades };
}

// Частина 2: Умовні оператори
function calculateGradeCategory(averageGrade) {
    if (averageGrade >= 90) {
        return "Відмінник";
    } else if (averageGrade >= 80) {
        return "Хорошист";
    } else if (averageGrade >= 60) {
        return "Трійочник";
    } else {
        return "Двійочник";
    }
}

function calculateAgeCategory(age) {
    if (age < 18) {
        return "Неповнолітній студент";
    } else if (age <= 25) {
        return "Молодий студент";
    } else {
        return "Зрілий студент";
    }
}

// Частина 3: Робота зі строками та числами
function processStudentData() {
    // Отримання даних із форми
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const studying = document.getElementById('studying').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);

    // Валідація даних
    const errorDiv = document.getElementById('error');
    if (!name || !surname || isNaN(age) || !studying || !subject || isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
        errorDiv.textContent = "Будь ласка, заповніть усі поля коректно.";
        return;
    }
    if (age < 0 || grade1 < 0 || grade2 < 0 || grade3 < 0 || grade1 > 100 || grade2 > 100 || grade3 > 100) {
        errorDiv.textContent = "Вік і оцінки мають бути додатними, а оцінки не більше 100.";
        return;
    }
    errorDiv.textContent = "";

    // Ініціалізація даних
    const { studentName, studentAge, isStudying, favoriteSubject, grades } = initializeStudentData(name, surname, age, studying, subject, grade1, grade2, grade3);

    // Обчислення середнього балу
    const averageGrade = (grades[0] + grades[1] + grades[2]) / 3;

    // Операції зі строками
    const fullName = studentName + " " + surname; // Конкатенація
    const containsProgram = favoriteSubject.toLowerCase().includes("програм"); // Перевірка на "програм"
    const upperCaseName = studentName.toUpperCase(); // Верхній регістр
    const nameLength = studentName.length; // Довжина імені

    // Математичні операції
    const maxGrade = Math.max(...grades); // Найвища оцінка
    const minGrade = Math.min(...grades); // Найнижча оцінка
    const gradeDifference = maxGrade - minGrade; // Різниця
    const nextAge = studentAge + 1; // Збільшення віку
    const successPercentage = (averageGrade / 100) * 100; // Відсоток успішності

    // Визначення категорій
    const gradeCategory = calculateGradeCategory(averageGrade);
    const ageCategory = calculateAgeCategory(studentAge);

    // Виведення в консоль
    console.log(`Повне ім'я: ${fullName}`);
    console.log(`Чи містить улюблений предмет "програм": ${containsProgram}`);
    console.log(`Ім'я у верхньому регістрі: ${upperCaseName}`);
    console.log(`Довжина імені: ${nameLength}`);
    console.log(`Різниця між найвищою та найнижчою оцінкою: ${gradeDifference}`);
    console.log(`Вік через рік: ${nextAge}`);
    console.log(`Відсоток успішності: ${successPercentage}%`);
    console.log(`Категорія за оцінками: ${gradeCategory}`);
    console.log(`Вікова категорія: ${ageCategory}`);

    // Виведення на сторінку
    document.getElementById('basicInfo').innerHTML = `
        <strong>Ім'я:</strong> ${fullName}<br>
        <strong>Вік:</strong> ${studentAge}<br>
        <strong>Чи навчається:</strong> ${isStudying ? 'Так' : 'Ні'}<br>
        <strong>Улюблений предмет:</strong> ${favoriteSubject}<br>
        <strong>Чи є "програм" в предметі:</strong> ${containsProgram ? 'Так' : 'Ні'}<br>
        <strong>Ім'я у верхньому регістрі:</strong> ${upperCaseName}<br>
        <strong>Довжина імені:</strong> ${nameLength}
    `;

    document.getElementById('grades').innerHTML = `
        <strong>Оцінки:</strong> ${grades.join(', ')}<br>
        <strong>Середній бал:</strong> ${averageGrade.toFixed(2)}<br>
        <strong>Різниця між оцінками:</strong> ${gradeDifference}<br>
        <strong>Відсоток успішності:</strong> ${successPercentage.toFixed(2)}%
    `;

    document.getElementById('category').innerHTML = `
        <strong>Категорія за оцінками:</strong> ${gradeCategory}<br>
        <strong>Вікова категорія:</strong> ${ageCategory}
    `;
}
