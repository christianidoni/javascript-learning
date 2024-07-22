// Вправа 1: Базовий Async/Await

// Напишіть функцію delayedMessage, яка повертає Promise, який вирішується через 2 секунди з повідомленням «Hello, World!».
// Створіть ще одну функцію printMessage, яка використовує async/await для виклику delayedMessage і реєструє повідомлення на консолі.

function delayedMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
}

async function printMessage() {
  const message = await delayedMessage();
  console.log(message);
}

// Вправа 2: отримання даних з API

// Напишіть функцію fetchUser, яка отримує дані з API JSONPlaceholder (https://jsonplaceholder.typicode.com/users/1).
// Використовуйте async/await, щоб отримати дані та зареєструвати ім’я та електронну адресу користувача у консолі.

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  const data = await res.json();

  const name = data.name;
  const email = data.email;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
}

// Вправа 3: Виправлення помилки в асинхронних функціях

// Змініть функцію fetchUser для обробки помилок за допомогою try...catch.
// Якщо сталася помилка (наприклад, проблеми з мережею, недійсна URL-адреса), зареєструйте повідомлення про помилку у консолі.

async function fetchUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }

    const data = await res.json();

    const name = data.name;
    const email = data.email;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
  } catch (error) {
    console.error(error);
  }
}

// Вправа 4: Послідовні асинхронні операції

// Напишіть функцію fetchPostAndUser, яка:
// Отримує публікацію з API JSONPlaceholder (https://jsonplaceholder.typicode.com/posts/1).
// Використовує userId з публікації для отримання відповідних даних користувача.
// Запишіть назву публікації та ім’я користувача у консоль.

async function fetchPostAndUser() {
  try {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!postResponse.ok) {
      throw new Error(`Post request failed: ${postResponse.statusText}`);
    }

    const postData = await postResponse.json();
    const userId = postData.userId;
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!userResponse.ok) {
      throw new Error(`User request failed: ${userResponse.statusText}`);
    }

    const userData = await userResponse.json();
    const postTitle = postData.title;
    const userName = userData.name;

    console.log(`Post Title: ${postTitle}`);
    console.log(`User Name: ${userName}`);
  } catch (error) {
    console.error(error);
  }
}

// Вправа 5: Одночасні асинхронні операції

// Напишіть функцію fetchMultipleUsers, яка:
// Одночасно отримує дані для користувачів з ідентифікаторами 1, 2 і 3 з JSONPlaceholder API.
// Використовуйте Promise.all, щоб дочекатися виконання всіх запитів і записати масив імен користувачів у консоль.

async function fetchMultipleUsers() {
  try {
    const userIds = [1, 2, 3];
    const userPromises = userIds.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((userData) => userData.name)
    );

    const userNames = await Promise.all(userPromises);

    console.log(userNames);
  } catch (error) {
    console.error(error);
  }
}

// Вправа 6: ланцюжок промісів

// Напишіть функцію fetchData, яка:
// Отримує список дописів з JSONPlaceholder API (https://jsonplaceholder.typicode.com/posts).
// Використовує ідентифікатор першої публікації для отримання коментарів до цієї публікації (https://jsonplaceholder.typicode.com/comments?postId=1).
// Зареєструйте назву першої публікації та кількість коментарів до неї.

async function fetchData() {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const commentsUrlBase =
    "https://jsonplaceholder.typicode.com/comments?postId=";

  try {
    const postsResponse = await fetch(postsUrl);
    if (!postsResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await postsResponse.json();

    const firstPost = posts[0];
    console.log(firstPost.title);

    const commentsUrl = `${commentsUrlBase}${firstPost.id}`;
    const commentsResponse = await fetch(commentsUrl);
    if (!commentsResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const comments = await commentsResponse.json();

    console.log(comments.length);
  } catch (error) {
    console.error(error);
  }
}
