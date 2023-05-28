//Сделайте запрос по адресу https://reqres.in/api/users?page=1, обработайте ответ и выведите в консоль только тех юзеров у которых в поле last_name не менее 5ти символов

fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json())
  .then((data) => {
    const filteredUsers = data.data.filter(
      (user) => user.last_name.length >= 5
    );
    if (filteredUsers.length === 0) {
        throw new Error("Нет таких юзеров");
      }
    console.log(filteredUsers);
  })
  .catch((error) => {
    console.log("Не удалось загрузить данные", error);
  });

//Сделайте запрос по адресу https://reqes.in/api/users?page=1, обработайте ошибку этого запроса и выведите в консоль Не удалось загрузить данные

async function fetchUrlWithError() {
  try {
    const response = await fetch("https://reqrrres.in/api/users?page=1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Не удалось загрузить данные", error);
  }
}

fetchUrlWithError();

//Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id пользователя под именем и фамилией Emma Wong, сделайте следующий запрос на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

async function fetchUserData() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();

    const id = data.data.find(
      (user) => user.first_name === "Emma" && user.last_name === "Wong"
    ).id;
    console.log(id);
    if (!id) {
      throw new Error("Пользователь не найден");
    }

    const userResponse = await fetch(`https://reqres.in/api/users/${id}`);
    const userData = await userResponse.json();
    const userWong = userData.data;

    console.log(userWong);
  } catch (error) {
    console.log("Произошла ошибка:", error.message);
  }
}

fetchUserData();
