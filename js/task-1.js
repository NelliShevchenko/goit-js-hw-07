const categoriesList = document.getElementById('categories');

      // Знаходимо всі елементи li з класом item
      const categoryItems = categoriesList.querySelectorAll('li.item');

      // Виводимо в консоль кількість категорій
      console.log(`Number of categories: ${categoryItems.length}`);

      // Проходимося по кожному елементу li.item
      categoryItems.forEach(item => {
        // Знаходимо заголовок категорії (тег h2)
        const categoryTitle = item.querySelector('h2').textContent;

        // Знаходимо всі елементи li всередині поточної категорії
        const categoryElements = item.querySelectorAll('ul li').length;

        // Виводимо в консоль заголовок категорії та кількість елементів у ній
        console.log(`Category: ${categoryTitle}`);
        console.log(`Elements: ${categoryElements}`);
      });