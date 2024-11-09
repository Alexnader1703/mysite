
const recipes = [
    {
        title: 'Домашние блинчики',
        description: 'Нежные и ароматные блинчики с различными начинками',
        time: '30 минут',
        category: 'breakfast',
        image: './image/blin.jpg'
    },
    {
        title: 'Борщ украинский',
        description: 'Традиционный борщ с говядиной и сметаной',
        time: '2 часа',
        category: 'lunch',
        image: './image/bor.jpg'
    },
    {
        title: 'Паста Карбонара',
        description: 'Классическая итальянская паста с беконом и сыром',
        time: '25 минут',
        category: 'dinner',
        image: './image/pasta.jpg'
    },
    {
        title: 'Тирамису',
        description: 'Итальянский десерт с кофейным вкусом',
        time: '40 минут',
        category: 'dessert',
        image: './image/tiras.jpg'
    },
    {
        title: 'Омлет с сыром',
        description: 'Воздушный омлет с тянущимся сыром и зеленью',
        time: '15 минут',
        category: 'breakfast',
        image: './image/omlet.jpg'
    },
    {
        title: 'Греческий салат',
        description: 'Свежий салат с оливками, фетой и оливковым маслом',
        time: '20 минут',
        category: 'lunch',
        image: './image/grecheskiy-salat.jpg'
    },
    {
        title: 'Куриные котлеты',
        description: 'Сочные котлеты из куриного фарша с чесноком',
        time: '45 минут',
        category: 'dinner',
        image: './image/kotlety.jpg'
    },
    {
        title: 'Шоколадный маффин',
        description: 'Воздушный шоколадный кекс с жидкой начинкой',
        time: '35 минут',
        category: 'dessert',
        image: './image/maffin.jpg'
    }
];

function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" data-category="${recipe.category}">
            <img class="recipe-card__image" src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card__content">
                <h3 class="recipe-card__title">${recipe.title}</h3>
                <p class="recipe-card__description">${recipe.description}</p>
                <p class="recipe-card__time">⏰ ${recipe.time}</p>
            </div>
        </div>
    `;
}

function filterRecipes(category) {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const recipesContainer = document.querySelector('.recipes');
recipes.forEach(recipe => {
    recipesContainer.innerHTML += createRecipeCard(recipe);
});


const filterButtons = document.querySelectorAll('.filter__button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('filter__button--active'));
        button.classList.add('filter__button--active');
        filterRecipes(button.dataset.category);
    });
});