fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)

    })

    const foodContainer = document.querySelector("#food-container");

    fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        
        parsedFoods.forEach(food =>{
            foodContainer.innerHTML += `<section class = "food__flexSection"><h1 class = "food__nameOfFood">${food.name}</h1><p class = "food__categoryOfFood">${food.category}</p> <p class = "food__ethnicityOfFood">${food.ethnicity}</p></section>`

        })
    })

    