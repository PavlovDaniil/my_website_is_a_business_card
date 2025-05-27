document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('active')) return;

      const currentButton = document.querySelector('.tab-button.active');
      const currentContent = document.querySelector('.tab-content.active');

      currentButton.classList.remove('active');
      button.classList.add('active');

      const techItems = currentContent.querySelectorAll('.tech-item');

      // Уменьшаем все элементы с задержкой (можно одновременно или с небольшой задержкой)
      techItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('hide');
        }, index * 50); // 50ms задержка между элементами, чтобы была волна
      });

      // Ждем окончания анимации уменьшения (с запасом)
      setTimeout(() => {
        // Скрываем старый контент
        currentContent.classList.remove('active');

        // Показываем новый контент
        const targetId = button.getAttribute('data-tab');
        const newContent = document.getElementById(targetId);

        newContent.classList.add('active');

        // Получаем новые элементы и "скрываем" их сразу
        const newItems = newContent.querySelectorAll('.tech-item');
        newItems.forEach(item => {
          item.classList.add('hide');
        });

        // Плавно показываем новые элементы с задержкой
        newItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.remove('hide');
          }, index * 50 + 100); // начало появления чуть позже
        });

      }, techItems.length * 50 + 300); // подождать пока все элементы уменьшатся и чуть больше
    });
  });
});
