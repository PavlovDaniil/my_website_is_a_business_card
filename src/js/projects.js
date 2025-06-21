document.addEventListener("DOMContentLoaded", () => {
  const projectItem = document.getElementById("relational-db");
  const projectDetails = document.getElementById("relational-db-details");

  projectItem.addEventListener("click", () => {
    projectDetails.classList.toggle("hidden");
  });

  const svgObject = document.getElementById("structure-svg");
  const codeDisplay = document.getElementById("code-display");
  const serviceCode = document.getElementById("service-code");

  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;

    // Example: Add click listeners to specific elements in the SVG
    const relationalDb = svgDoc.getElementById("relational-db");
    const apiService = svgDoc.getElementById("api");

    if (relationalDb) {
      relationalDb.addEventListener("click", () => {
        serviceCode.textContent = `
-- Пример SQL-кода для создания таблицы
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);
        `;
        codeDisplay.classList.remove("hidden");
      });
    }

    if (apiService) {
      apiService.addEventListener("click", () => {
        serviceCode.textContent = `
// Пример API-кода
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(3000, () => {
  console.log('API запущен на порту 3000');
});
        `;
        codeDisplay.classList.remove("hidden");
      });
    }
  });
});
