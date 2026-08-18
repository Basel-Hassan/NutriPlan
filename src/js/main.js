let appLoadingOverlay = document.getElementById("app-loading-overlay");
let navLinks = Array.from(document.querySelectorAll(".nav-link"));
let pages = Array.from(document.querySelectorAll("#main-content > section"));
let HeaderH = document.getElementById("HeaderH");
let HeaderP = document.getElementById("HeaderP");
let ariasBtns = document.getElementById("ariasBtns");
let categoriesGrid = document.getElementById("categories-grid");
let recipesGrid = document.getElementById("recipes-grid");
const mealsApi = "https://nutriplan-api.vercel.app/api/meals/";
let colorsArr = [
  "red",
  "rose",
  "amber",
  "orange",
  "pink",
  "slate",
  "gray",
  "yellow",
  "cyan",
  "blue",
  "green",
  "emerald",
  "teal",
  "lime",
];
let searchInput = document.getElementById("search-input");
let recipesCount = document.getElementById("recipes-count");
let gridViewBtn = document.getElementById("grid-view-btn");
let listViewBtn = document.getElementById("list-view-btn");
let recipeCardsArray = Array.from(document.querySelectorAll(".recipe-card"));
let searchFilterSection = document.getElementById("search-filters-section");
let mealCategoriesSection = document.getElementById("meal-categories-section");
let allRecipesSection = document.getElementById("all-recipes-section");
let mealDetails = document.getElementById("meal-details");
let backToMealsBtn = document.getElementById("back-to-meals-btn");
let mealDetailsHero = document.getElementById("mealDetailsHero");
let ingredientsCount = document.getElementById("ingredientsCount");
let ingredientsList = document.getElementById("ingredientsList");
let instructionsList = document.getElementById("instructionsList");
let mealVideo = document.getElementById("mealVideo");
let mealVideoContainer = document.getElementById("mealVideoContainer");
const productsApi = "https://nutriplan-api.vercel.app/api/products/";
let productSearchInput = document.getElementById("product-search-input");
let searchProductBtn = document.getElementById("search-product-btn");
let productsGrid = document.getElementById("products-grid");
const nutritionsApi = "https://nutriplan-api.vercel.app/api/nutrition/analyze";
const nutritionsApiKey = "x5ww8eHUoZLsVFxRqig8dQ5F9OlzRb9WKifa9jby";
let calPerServing = document.getElementById("calPerServing");
let calPerServingTotal = document.getElementById("calPerServingTotal");
let protein = document.getElementById("protein");
let proteinPrsen = document.getElementById("proteinPrsen");
let carbs = document.getElementById("carbs");
let carbsPrsen = document.getElementById("carbsPrsen");
let fat = document.getElementById("fat");
let fatPrsen = document.getElementById("fatPrsen");
let fiber = document.getElementById("fiber");
let fiberPersen = document.getElementById("fiberPersen");
let sugar = document.getElementById("sugar");
let sugarPersen = document.getElementById("sugarPersen");
let cholesterol = document.getElementById("cholesterol");
let sodium = document.getElementById("sodium");
let nutritionFactsContainer = document.getElementById(
  "nutrition-facts-container",
);
let nutritionPlaceHolder = document.getElementById("nutritionPlaceHolder");
let logMealBtn = document.getElementById("log-meal-btn");
let logMealModal = document.getElementById("log-meal-modal");
let modalImg = document.getElementById("modalImg");
let modalName = document.getElementById("modalName");
let decreaseServings = document.getElementById("decrease-servings");
let increaseServings = document.getElementById("increase-servings");
let mealServings = document.getElementById("meal-servings");
let modalCalories = document.getElementById("modal-calories");
let modalProtein = document.getElementById("modal-protein");
let modalCarbs = document.getElementById("modal-carbs");
let modalFat = document.getElementById("modal-fat");
let cancelLogMeal = document.getElementById("cancel-log-meal");
let confirmLogMeal = document.getElementById("confirm-log-meal");
let barcodeInput = document.getElementById("barcode-input");
let lookupBarcodeBtn = document.getElementById("lookup-barcode-btn");
let productsEmpty = document.getElementById("products-empty");
let nutriCcoreFilter = Array.from(
  document.querySelectorAll(".nutri-score-filter"),
);
let productDetailModal = document.getElementById("product-detail-modal");
let productModalImg = document.getElementById("productModalImg");
let productModalBrand = document.getElementById("productModalBrand");
let productModalName = document.getElementById("productModalName");
let productModalScore = document.getElementById("productModalScore");
let productModalNova = document.getElementById("productModalNova");
let closeProductModal = Array.from(
  document.querySelectorAll(".close-product-modal"),
);
let productModalCal = document.querySelector("#productModalCal");
let productModalProtein = document.querySelector("#productModalProtein");
let productModalProteinPer = document.querySelector("#productModalProteinPer");
let productModalCarbs = document.querySelector("#productModalCarbs");
let productModalCarbsPer = document.querySelector("#productModalCarbsPer");
let productModalFat = document.querySelector("#productModalFat");
let productModalFatPer = document.querySelector("#productModalFatPer");
let productModalSugar = document.querySelector("#productModalSugar");
let productModalSugarPer = document.querySelector("#productModalSugarPer");
let productModalFiber = document.querySelector("#productModalFiber");
let productModalSalt = document.querySelector("#productModalSalt");
let productModalLog = document.querySelector("#productModalLog");
let foodlogDate = document.querySelector("#foodlog-date");
let loggedItemsList = document.querySelector("#logged-items-list");
let logCount = document.querySelector("#logCount");
let clearFoodlog = document.querySelector("#clear-foodlog");
let logBtnCal = document.querySelector("#logBtnCal");
let logPerCal = document.querySelector("#logPerCal");
let logPerPro = document.querySelector("#logPerPro");
let logBtnPro = document.querySelector("#logBtnPro");
let logBtnCar = document.querySelector("#logBtnCar");
let logPerCar = document.querySelector("#logPerCar");
let logBtnFat = document.querySelector("#logBtnFat");
let logPerFat = document.querySelector("#logPerFat");
let weeklyOverview = document.querySelector("#weekly-overview");
let weeklyAverage = document.querySelector("#weekly-average");
let weeklyItems = document.querySelector("#weekly-items");
let daysOnGoal = document.querySelector("#days-on-goal");
let currentSearchProducts = [];
let currentSearchValue = "";
let headerMenuBtn = document.getElementById("header-menu-btn")
let sidebar = document.getElementById("sidebar")
let sidebarOverlay = document.getElementById("sidebar-overlay")
let sidebarCloseBtn = document.getElementById("sidebar-close-btn")

let date = new Date();
let currentDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  month: "short",
  day: "numeric",
});

let nutritionMax = {
  protein: 50,
  carbs: 250,
  fat: 65,
  fiber: 25,
  sugar: 50,
  saturatedFat: 20,
  cal: 2000,
};

let products = JSON.parse(localStorage.getItem("products")) || [];
let meals = JSON.parse(localStorage.getItem("meals")) || [];

let foodLog = [...products, ...meals];

loadPageFromURL();
displayArias();
displayCategories();
displayMeals();
changeFoodLogData();

// * Page Loading

window.addEventListener("load", () => {
  const currentPage = getCurrentPage();

  history.replaceState(null, "", `#${currentPage}`);

  appLoadingOverlay.classList.add("loading");
});

window.addEventListener("popstate", () => {
  loadPageFromURL();
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    sidebar.classList.remove("open")
    sidebarOverlay.classList.remove("active")

    navLinks.forEach((link) => {
      link.classList.add("hover:bg-gray-50", "text-gray-600");

      link.classList.remove("bg-emerald-50", "text-emerald-700");
    });

    link.classList.remove("hover:bg-gray-50", "text-gray-600");

    link.classList.add("bg-emerald-50", "text-emerald-700");

    let pageName = link.getAttribute("href");

    resetMealDetails();

    showPage(pageName);
    changeHeader(pageName);

    history.pushState(null, "", `#${pageName}`);
  });
});

function getCurrentPage() {
  const currentPage = document.querySelector("section:not(.hidden)");

  return currentPage?.dataset.page || "home";
}

function showPage(pageName) {
  pages.forEach((page) => {
    page.classList.add("hidden");
  });

  const page = pages.find((page) => page.dataset.page === pageName);

  page?.classList.remove("hidden");
}

function loadPageFromURL() {
  let hash = location.hash.replace("#", "");

  if (!hash) {
    showPage("home");
    resetMealDetails();
    changeHeader("home");
    return;
  }

  if (hash.startsWith("meal/")) {
    showPage("home");
    openMealDetailsPageFromURL(hash);
    return;
  }

  let pageName = hash;

  let pageExists = pages.some((page) => page.dataset.page === pageName);

  if (pageExists) {
    showPage(pageName);
    resetMealDetails();
    changeHeader(pageName);
  } else {
    showPage("home");
    resetMealDetails();
    changeHeader("home");
    history.replaceState(null, "", "#home");
  }
}

function changeHeader(pageName) {
  switch (pageName) {
    case "home":
      HeaderH.innerHTML = `Meals & Recipes`;
      HeaderP.innerHTML = `Discover delicious and nutritious recipes tailored for you`;
      break;

    case "products":
      HeaderH.innerHTML = `Product Scanner`;
      HeaderP.innerHTML = `Search packaged foods by name or barcode`;
      break;

    case "foodlog":
      HeaderH.innerHTML = `Food Log`;
      HeaderP.innerHTML = `Track your daily nutrition and food intake`;
      break;

    case "mealDetails":
      HeaderH.innerHTML = `Recipe Details`;
      HeaderP.innerHTML = `View full recipe information and nutrition facts`;
      break;

    default:
      HeaderH.innerHTML = `Meals & Recipes`;
      HeaderP.innerHTML = `Discover delicious and nutritious recipes tailored for you`;
      break;
  }
}

headerMenuBtn.addEventListener("click" , function() {
  sidebar.classList.add("open")
  sidebarOverlay.classList.add("active")
})

sidebarCloseBtn.addEventListener("click" , function() {
  sidebar.classList.remove("open")
  sidebarOverlay.classList.remove("active")
})

// * Apis
async function getMealsApi(endPoint) {
  try {
    let res = await fetch(`${mealsApi}${endPoint}`);
    if (!res.ok) {
      throw new Error("somthing wrong");
    }
    let data = await res.json();
    let dataArray = data.results ? data.results : data.result;

    return dataArray;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getProductsApi(endPoint) {
  try {
    let res = await fetch(`${productsApi}${endPoint}`);
    if (!res.ok) {
      throw new Error("somthing wrong");
    }
    let data = await res.json();
    let dataArray = data.results ? data.results : data.result;

    return dataArray;
  } catch (error) {
    console.log(error);
  }
}

async function PostNutritionsApi(ingredients, recipeName) {
  try {
    let res = await fetch(`${nutritionsApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": nutritionsApiKey,
      },
      body: JSON.stringify({
        recipeName: recipeName,
        ingredients: ingredients,
      }),
    });
    if (!res.ok) {
      throw new Error("somthing wrong");
    }
    let data = await res.json();
    let dataArray = data.data;

    console.log(dataArray);
    return dataArray;
  } catch (error) {
    console.log(error);
  }
}

// * First Page

async function displayArias() {
  let data = await getMealsApi("areas");

  let box = `
    <button
        class="ariaBtn px-4 py-2 bg-emerald-600 text-white rounded-full font-medium text-sm whitespace-nowrap hover:bg-emerald-700 transition-all"
        data-aria="all"
    >
        All Cuisines
    </button>
    `;
  data.forEach((btn) => {
    box += `
        <button
            class="ariaBtn px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm whitespace-nowrap hover:bg-gray-200 transition-all"
            data-aria="${btn.name}"
        >
            ${btn.name}
        </button>
        `;
  });

  ariasBtns.innerHTML = box;

  let ariaBtnsArr = document.querySelectorAll(".ariaBtn");
  filterAsAria(ariaBtnsArr);
}

async function displayCategories() {
  let data = await getMealsApi("categories");
  let box = ``;
  data.forEach((btn) => {
    let from = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    let to = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    box += `
        <div
            class="category-card bg-gradient-to-br from-${from}-50 to-${to}-50 rounded-xl p-3 border border-${from}-200 hover:border-${from}-400 hover:shadow-md cursor-pointer transition-all group"
            data-category="${btn.name}"
        >
            <div class="flex items-center gap-2.5">

            <div class="w-9 h-9 overflow-hidden rounded-lg group-hover:scale-110 transition-transform flex items-center justify-center ">
                <img src="${btn.thumbnail}" alt="${btn.name}" class="w-full object-cover rounded-lg">
            </div>
            <div>
                <h3 class="text-sm font-bold text-gray-900">${btn.name}</h3>
            </div>
            </div>
        </div>
        `;
  });

  categoriesGrid.innerHTML = box;

  let categoryCardsArr = document.querySelectorAll(".category-card");
  filterAsCategory(categoryCardsArr);
}

async function displayMeals() {
  let data = await getMealsApi("search?q=chicken&page=1&limit=25");
  let box = ``;
  data.forEach((meal) => {
    box += `
        <div
            class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            data-meal-id="${meal.id}"
        >
            <div class="relative h-48 overflow-hidden">
            <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail}"
                alt="${meal.name}"
                loading="lazy"
            />
            <div class="absolute bottom-3 left-3 flex gap-2">
                <span
                class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                >
                ${meal.category}
                </span>
                <span
                class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white ${meal.area ? "" : "hidden"}"
                >
                ${meal.area}
                </span>
            </div>
            </div>
            <div class="p-4">
            <h3
                class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
            >
                ${meal.name}
            </h3>
            <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                ${meal.instructions.join(" ")}
            </p>
            <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900">
                <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                ${meal.category}
                </span>
                <span class="font-semibold text-gray-500">
                <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                ${meal.area || "International"}
                </span>
            </div>
            </div>
        </div>
        `;
  });

  recipesGrid.innerHTML = box;
  recipesCount.innerHTML = `Showing ${data.length} recipes`;

  recipeCardsArray = Array.from(document.querySelectorAll(".recipe-card"));
  openMealDetails();
}

// * Search

searchInput.addEventListener("input", async function () {
  recipesGrid.innerHTML = `
        <div class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
`;
  let data = await getMealsApi(`search?q=${this.value}`);
  let box = ``;
  data.forEach((meal) => {
    box += `
        <div
            class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            data-meal-id="${meal.id}"
        >
            <div class="relative h-48 overflow-hidden">
            <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail}"
                alt="${meal.name}"
                loading="lazy"
            />
            <div class="absolute bottom-3 left-3 flex gap-2">
                <span
                class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                >
                ${meal.category}
                </span>
                <span
                class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white ${meal.area ? "" : "hidden"}"
                >
                ${meal.area}
                </span>
            </div>
            </div>
            <div class="p-4">
            <h3
                class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
            >
                ${meal.name}
            </h3>
            <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                ${meal.instructions.join(" ")}
            </p>
            <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900">
                <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                ${meal.category}
                </span>
                <span class="font-semibold text-gray-500">
                <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                ${meal.area || "International"}
                </span>
            </div>
            </div>
        </div>
        `;
  });
  recipesGrid.innerHTML = box;
  recipesCount.innerHTML = `Showing ${data.length} recipes for "${this.value}"`;
  if (data.length == 0) {
    recipesGrid.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
            </div>
            <p class="text-gray-500 text-lg">No recipes found</p>
            <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
        </div>
        `;
  }
  if (!this.value) {
    recipesCount.innerHTML = `Showing ${data.length} recipes`;
  }
  recipeCardsArray = Array.from(document.querySelectorAll(".recipe-card"));
  openMealDetails();
});

// * Filter

async function filterAsCategory(categoryCardsArr) {
  categoryCardsArr.forEach((btn) => {
    btn.addEventListener("click", async function () {
      recipesGrid.innerHTML = `
        <div class="col-span-full flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      `;

      let data = await getMealsApi(
        `filter?category=${encodeURIComponent(
          btn.dataset.category,
        )}&page=1&limit=25`,
      );

      if (!data.length) {
        recipesGrid.innerHTML = `
          <div class="col-span-full flex flex-col items-center justify-center py-12 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
            </div>

            <p class="text-gray-500 text-lg">
              No recipes found
            </p>

            <p class="text-gray-400 text-sm mt-2">
              No recipes available for ${btn.dataset.category}
            </p>
          </div>
        `;

        recipesCount.innerHTML = `No ${btn.dataset.category} recipes found`;

        recipeCardsArray = [];

        return;
      }

      let box = "";

      data.forEach((meal) => {
        box += `
          <div
            class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            data-meal-id="${meal.id}"
          >
            <div class="relative h-48 overflow-hidden">
              <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail}"
                alt="${meal.name}"
                loading="lazy"
              />

              <div class="absolute bottom-3 left-3 flex gap-2">
                <span
                  class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                >
                  ${meal.category}
                </span>

                <span
                  class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white ${
                    meal.area ? "" : "hidden"
                  }"
                >
                  ${meal.area}
                </span>
              </div>
            </div>

            <div class="p-4">
              <h3
                class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
              >
                ${meal.name}
              </h3>

              <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                ${meal.instructions.join(" ")}
              </p>

              <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900">
                  <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                  ${meal.category}
                </span>

                <span class="font-semibold text-gray-500">
                  <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                  ${meal.area || "International"}
                </span>
              </div>
            </div>
          </div>
        `;
      });

      recipesGrid.innerHTML = box;

      recipesCount.innerHTML = `Showing ${data.length} ${btn.dataset.category} recipes`;

      recipeCardsArray = Array.from(document.querySelectorAll(".recipe-card"));

      openMealDetails();
    });
  });
}

async function filterAsAria(ariaBtnsArr) {
  let data = "";
  ariaBtnsArr.forEach((btn) => {
    btn.addEventListener("click", async function () {
      ariaBtnsArr.forEach((btn) => {
        btn.classList.add("bg-gray-100", "text-gray-700", "hover:bg-gray-200");
        btn.classList.remove(
          "bg-emerald-600",
          "text-white",
          "hover:bg-emerald-700",
        );
      });
      btn.classList.remove("bg-gray-100", "text-gray-700", "hover:bg-gray-200");
      btn.classList.add("bg-emerald-600", "text-white", "hover:bg-emerald-700");
      recipesGrid.innerHTML = `
        <div class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
`;
      data = await getMealsApi(
        btn.dataset.aria == "all"
          ? "search?q=chicken&page=1&limit=25"
          : `filter?area=${btn.dataset.aria}&page=1&limit=25`,
      );
      let box = ``;
      data.forEach((meal) => {
        box += `
        <div
            class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            data-meal-id="${meal.id}"
        >
            <div class="relative h-48 overflow-hidden">
            <img
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail}"
                alt="${meal.name}"
                loading="lazy"
            />
            <div class="absolute bottom-3 left-3 flex gap-2">
                <span
                class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                >
                ${meal.category}
                </span>
                <span
                class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white ${meal.area ? "" : "hidden"}"
                >
                ${meal.area}
                </span>
            </div>
            </div>
            <div class="p-4">
            <h3
                class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
            >
                ${meal.name}
            </h3>
            <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                ${meal.instructions.join(" ")}
            </p>
            <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900">
                <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                ${meal.category}
                </span>
                <span class="font-semibold text-gray-500">
                <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                ${meal.area || "International"}
                </span>
            </div>
            </div>
        </div>
        `;
      });
      recipesGrid.innerHTML = box;
      recipesCount.innerHTML = `Showing ${data.length} ${btn.dataset.aria} recipes`;
      if (!data.length) {
        recipesGrid.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 text-center">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
            </div>
            <p class="text-gray-500 text-lg">No recipes found</p>
            <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
        </div>
        `;
      }

      recipeCardsArray = Array.from(document.querySelectorAll(".recipe-card"));
      openMealDetails();
    });
  });
}

// * Layout Btns

gridViewBtn.addEventListener("click", function () {
  recipesGrid.classList.remove("grid-cols-2", "gap-4");
  recipesGrid.classList.add("grid-cols-4", "gap-5");
  recipeCardsArray.forEach((card) => {
    card.classList.remove("flex", "flex-row", "h-40");
    card
      .querySelector("div.relative")
      .classList.remove("h-full", "w-48", "shrink-0");
    card.querySelector("div.relative").classList.add("h-48");
    card.querySelector("div.absolute").classList.remove("hidden");
  });
  this.classList.add("bg-white", "rounded-md", "shadow-sm");
  listViewBtn.classList.remove("bg-white", "rounded-md", "shadow-sm");
});

listViewBtn.addEventListener("click", function () {
  recipesGrid.classList.add("grid-cols-2", "gap-4");
  recipesGrid.classList.remove("grid-cols-4", "gap-5");
  recipeCardsArray.forEach((card) => {
    card.classList.add("flex", "flex-row", "h-40");
    card
      .querySelector("div.relative")
      .classList.add("h-full", "w-48", "shrink-0");
    card.querySelector("div.relative").classList.remove("h-48");
    card.querySelector("div.absolute").classList.add("hidden");
  });

  this.classList.add("bg-white", "rounded-md", "shadow-sm");
  gridViewBtn.classList.remove("bg-white", "rounded-md", "shadow-sm");
});

// * Meal Details

function openMealDetails() {
  recipeCardsArray.forEach((card) => {
    card.addEventListener("click", function () {
      let meal = this.dataset.mealId;

      searchFilterSection.classList.add("hidden");
      mealCategoriesSection.classList.add("hidden");
      allRecipesSection.classList.add("hidden");
      mealDetails.classList.remove("hidden");

      changeHeader("mealDetails");

      let mealName = this.querySelector("div h3")
        .textContent.trim()
        .toLowerCase()
        .replaceAll(" ", "-");

      history.pushState(null, "", `#meal/${mealName}`);

      getMealsDetails(meal);
    });
  });
}

backToMealsBtn.addEventListener("click", function () {
  resetMealDetails();

  showPage("home");
  changeHeader("home");

  history.pushState(null, "", "#home");
});

async function getMealsDetails(meal) {
  const requestId = Date.now();
  getMealsDetails.currentRequest = requestId;

  nutritionFactsContainer.classList.add("hidden");
  nutritionPlaceHolder.classList.remove("hidden");

  logMealBtn.querySelector("span").innerHTML = `Calculating...`;
  logMealBtn.querySelector("svg").classList.add("fa-spinner", "fa-spin");
  logMealBtn.querySelector("svg").classList.remove("fa-clipboard-list");

  logMealBtn.classList.add(
    "bg-gray-300",
    "text-gray-500",
    "cursor-not-allowed",
  );

  logMealBtn.classList.remove("bg-blue-600", "text-white", "hover:bg-blue-700");

  mealDetailsHero.innerHTML = `
    <div class="relative h-80 md:h-96 bg-gray-200 animate-pulse">
      
      <div class="absolute inset-0 bg-gray-300"></div>

      <div class="absolute bottom-0 left-0 right-0 p-8">
        
        <div class="flex items-center gap-3 mb-3">
          <span class="w-24 h-7 bg-gray-400/70 rounded-full"></span>
          <span class="w-24 h-7 bg-gray-400/70 rounded-full"></span>
        </div>

        <div class="w-3/4 h-10 bg-gray-400/70 rounded mb-4"></div>

        <div class="flex items-center gap-6">
          <span class="w-20 h-5 bg-gray-400/70 rounded"></span>
          <span class="w-24 h-5 bg-gray-400/70 rounded"></span>
          <span class="w-28 h-5 bg-gray-400/70 rounded"></span>
        </div>

      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="w-12 h-12 border-4 border-white/40 border-t-emerald-500 rounded-full animate-spin"
        ></div>
      </div>

    </div>
  `;

  ingredientsCount.innerHTML = `Loading...`;
  ingredientsList.innerHTML = `
    <div class="col-span-full flex items-center justify-center py-8">
      <div
        class="w-10 h-10 border-4 border-gray-200 border-t-emerald-500 rounded-full animate-spin"
      ></div>
    </div>
  `;

  instructionsList.innerHTML = `
    <div class="flex items-center justify-center py-8">
      <div
        class="w-10 h-10 border-4 border-gray-200 border-t-emerald-500 rounded-full animate-spin"
      ></div>
    </div>
  `;

  mealVideoContainer.classList.add("hidden");

  let mealData = await getMealsApi(meal);

  if (getMealsDetails.currentRequest !== requestId) {
    return;
  }

  if (!mealData || !mealData.ingredients || !mealData.instructions) {
    nutritionPlaceHolder.classList.remove("hidden");
    nutritionFactsContainer.classList.add("hidden");

    mealDetailsHero.innerHTML = `
      <div class="relative h-80 md:h-96 bg-gray-100 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fa-solid fa-circle-exclamation text-gray-400 text-2xl"></i>
          </div>

          <p class="text-gray-500 font-medium">
            Failed to load recipe
          </p>

          <p class="text-gray-400 text-sm mt-1">
            Please try again
          </p>
        </div>
      </div>
    `;

    return;
  }

  let ingredientsArr = [];

  mealData.ingredients.forEach((ingred) => {
    ingredientsArr.push(`${ingred.measure} ${ingred.ingredient}`);
  });

  let nutritionsData = await PostNutritionsApi(ingredientsArr, mealData.name);

  if (getMealsDetails.currentRequest !== requestId) {
    return;
  }

  if (!nutritionsData) {
    return;
  }

  let tags = Array.isArray(mealData.tags) ? mealData.tags : [];

  mealDetailsHero.innerHTML = `
    <div class="relative h-80 md:h-96">
      
      <img
        src="${mealData.thumbnail}"
        alt="${mealData.name}"
        class="w-full h-full object-cover"
        onerror="this.onerror=null; this.src='src/images/meal-placeholder.jpg';"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
      ></div>

      <div class="absolute bottom-0 left-0 right-0 p-8">
        
        <div class="flex items-center gap-3 mb-3 flex-wrap">

          <span
            class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
          >
            ${mealData.category}
          </span>

          <span
            class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full ${
              mealData.area ? "" : "hidden"
            }"
          >
            ${mealData.area || ""}
          </span>

          <span
            class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full ${
              tags[0] ? "" : "hidden"
            }"
          >
            ${tags[0] || ""}
          </span>

          <span
            class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full ${
              tags[1] ? "" : "hidden"
            }"
          >
            ${tags[1] || ""}
          </span>

        </div>

        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          ${mealData.name}
        </h1>

        <div class="flex items-center gap-6 text-white/90">

          <span class="flex items-center gap-2">
            <i class="fa-solid fa-clock"></i>
            <span>30 min</span>
          </span>

          <span class="flex items-center gap-2">
            <i class="fa-solid fa-utensils"></i>
            <span id="hero-servings">
              ${nutritionsData.servings} servings
            </span>
          </span>

          <span class="flex items-center gap-2">
            <i class="fa-solid fa-fire"></i>
            <span id="hero-calories">
              ${nutritionsData.perServing.calories} cal/serving
            </span>
          </span>

        </div>
      </div>
    </div>
  `;

  ingredientsCount.innerHTML = `${mealData.ingredients.length} items`;

  let box = "";

  mealData.ingredients.forEach((card) => {
    box += `
      <div
        class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
      >
        <input
          type="checkbox"
          class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
        />

        <span class="text-gray-700">
          <span class="font-medium text-gray-900">
            ${card.measure}
          </span>
          ${card.ingredient}
        </span>
      </div>
    `;
  });

  ingredientsList.innerHTML = box;

  let cartona = "";
  let cartonaConter = 1;

  mealData.instructions.forEach((card) => {
    cartona += `
      <div
        class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div
          class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
        >
          ${cartonaConter}
        </div>

        <p class="text-gray-700 leading-relaxed pt-2">
          ${card}
        </p>
      </div>
    `;

    cartonaConter++;
  });

  instructionsList.innerHTML = cartona;

  if (mealData.youtube) {
    try {
      mealVideoContainer.classList.remove("hidden");

      let videoUrl = new URL(mealData.youtube);
      let videoId = videoUrl.searchParams.get("v");

      if (videoId) {
        mealVideo.src = `https://www.youtube.com/embed/${videoId}`;
      } else {
        mealVideoContainer.classList.add("hidden");
      }
    } catch (error) {
      mealVideoContainer.classList.add("hidden");
    }
  } else {
    mealVideoContainer.classList.add("hidden");
  }

  logMealBtn.setAttribute("data-meal-id", mealData.id);

  logMealBtn.querySelector("span").innerHTML = `Log This Meal`;

  logMealBtn.querySelector("svg").classList.remove("fa-spinner", "fa-spin");

  logMealBtn.querySelector("svg").classList.add("fa-clipboard-list");

  logMealBtn.classList.remove(
    "bg-gray-300",
    "text-gray-500",
    "cursor-not-allowed",
  );

  logMealBtn.classList.add("bg-blue-600", "text-white", "hover:bg-blue-700");

  logMealBtn.onclick = function () {
    logMealModal.classList.remove("hidden");

    modalImg.setAttribute("src", mealData.thumbnail);
    modalImg.setAttribute("alt", mealData.name);

    modalName.innerHTML = mealData.name;

    decreaseServings.onclick = function () {
      if (mealServings.value == mealServings.getAttribute("min")) {
        return;
      }

      mealServings.value = Number(mealServings.value) - 0.5;
    };

    increaseServings.onclick = function () {
      if (mealServings.value == mealServings.getAttribute("max")) {
        return;
      }

      mealServings.value = Number(mealServings.value) + 0.5;
    };

    modalCalories.innerHTML = `${nutritionsData.perServing.calories}`;

    modalProtein.innerHTML = `${nutritionsData.perServing.protein}g`;

    modalCarbs.innerHTML = `${nutritionsData.perServing.carbs}g`;

    modalFat.innerHTML = `${nutritionsData.perServing.fat}g`;

    cancelLogMeal.onclick = function () {
      logMealModal.classList.add("hidden");
      mealServings.value = mealServings.getAttribute("value");
    };

    confirmLogMeal.onclick = function () {
      if (confirmLogMeal.disabled) return;

      confirmLogMeal.disabled = true;

      let servings = Number(mealServings.value);
      let foodDate = new Date();

      let totalCalories = nutritionsData.perServing.calories * servings;

      let loggedMeal = {
        ...mealData,

        servings: servings,

        nutrition: {
          calories: totalCalories,
          protein: nutritionsData.perServing.protein * servings,
          carbs: nutritionsData.perServing.carbs * servings,
          fat: nutritionsData.perServing.fat * servings,
        },

        date: foodDate,
      };

      meals.push(loggedMeal);

      localStorage.setItem("meals", JSON.stringify(meals));

      foodLog = [...products, ...meals];

      changeFoodLogData();

      logMealModal.classList.add("hidden");

      mealServings.value = mealServings.getAttribute("value");

      Swal.fire({
        icon: "success",
        title: "Meal Logged!",
        showConfirmButton: false,
        timer: 1000,
        html: `
      <p style="
        font-size: 20px;
        color: #64748b;
        margin: 0 0 8px;
      ">
        ${mealData.name} (${servings} ${
          servings == 1 ? "serving" : "servings"
        }) has been added to your daily log.
      </p>

      <p style="
        font-size: 20px;
        font-weight: 700;
        color: #10b981;
        margin: 0;
      ">
        +${Math.round(totalCalories)} calories
      </p>
    `,
        confirmButtonText: "OK",
        confirmButtonColor: "#2563eb",
        width: "550px",
        padding: "45px 35px",
        customClass: {
          popup: "rounded-2xl",
          title: "text-3xl font-bold text-gray-700",
          confirmButton: "px-8 py-3 rounded-xl text-base font-semibold",
        },
      });

      setTimeout(() => {
        confirmLogMeal.disabled = false;
      }, 500);
    };
  };

  nutritionPlaceHolder.classList.add("hidden");
  nutritionFactsContainer.classList.remove("hidden");

  calPerServing.innerHTML = nutritionsData.perServing.calories;

  calPerServingTotal.innerHTML = nutritionsData.totals.calories;

  protein.innerHTML = `${nutritionsData.perServing.protein}g`;

  proteinPrsen.style.width = `${Math.min(
    (nutritionsData.perServing.protein / nutritionMax.protein) * 100,
    100,
  ).toFixed()}%`;

  carbs.innerHTML = `${nutritionsData.perServing.carbs}g`;

  carbsPrsen.style.width = `${Math.min(
    (nutritionsData.perServing.carbs / nutritionMax.carbs) * 100,
    100,
  ).toFixed()}%`;

  fat.innerHTML = `${nutritionsData.perServing.fat}g`;

  fatPrsen.style.width = `${Math.min(
    (nutritionsData.perServing.fat / nutritionMax.fat) * 100,
    100,
  ).toFixed()}%`;

  fiber.innerHTML = `${nutritionsData.perServing.fiber}g`;

  fiberPersen.style.width = `${Math.min(
    (nutritionsData.perServing.fiber / nutritionMax.fiber) * 100,
    100,
  ).toFixed()}%`;

  sugar.innerHTML = `${nutritionsData.perServing.sugar}g`;

  sugarPersen.style.width = `${Math.min(
    (nutritionsData.perServing.sugar / nutritionMax.sugar) * 100,
    100,
  ).toFixed()}%`;

  cholesterol.innerHTML = `${nutritionsData.perServing.cholesterol}mg`;

  sodium.innerHTML = `${nutritionsData.perServing.sodium}mg`;
}

function resetMealDetails() {
  searchFilterSection.classList.remove("hidden");
  mealCategoriesSection.classList.remove("hidden");
  allRecipesSection.classList.remove("hidden");
  mealDetails.classList.add("hidden");
}

async function openMealDetailsPageFromURL(hash) {
  searchFilterSection.classList.add("hidden");
  mealCategoriesSection.classList.add("hidden");
  allRecipesSection.classList.add("hidden");
  mealDetails.classList.remove("hidden");

  changeHeader("mealDetails");

  let mealName = hash.replace("meal/", "").replaceAll("-", " ");

  let data = await getMealsApi(`search?q=${encodeURIComponent(mealName)}`);

  if (!data || !data.length) {
    return;
  }

  let meal = data[0];

  getMealsDetails(meal.id);
}

// * second Page

// * search
searchProductBtn.addEventListener("click", async function () {
  let searchValue = productSearchInput.value.trim();

  if (!searchValue) return;

  currentSearchValue = searchValue;

  productsEmpty.classList.add("hidden");

  productsGrid.classList.remove("hidden");

  productsGrid.innerHTML = `
    <div class="col-span-full flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
  `;

  try {
    let productsData = await getValidProducts(searchValue, 24);

    currentSearchProducts = productsData || [];

    if (currentSearchProducts.length === 0) {
      productsGrid.innerHTML = "";

      productsEmpty.classList.remove("hidden");

      document.querySelector("#products-count").innerHTML =
        `No products found for "${searchValue}"`;

      return;
    }

    productsEmpty.classList.add("hidden");
    productsGrid.classList.remove("hidden");

    let box = "";

    currentSearchProducts.forEach((product) => {
      box += `
        <div
          class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
          data-barcode="${product.barcode}"
        >
          <div
            class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
          >
            <img
              class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.onerror=null; this.src='src/images/product-placeholder.jpg';"
            />

            <div
              class="absolute top-2 left-2 bg-${nutriColor(
                product.nutritionGrade,
              )}-500 text-white text-xs font-bold px-2 py-1 rounded uppercase ${
                !product.nutritionGrade || product.nutritionGrade == "unknown"
                  ? "hidden"
                  : ""
              }"
            >
              Nutri-Score ${product.nutritionGrade}
            </div>

            <div
              class="absolute top-2 right-2 bg-${novaColor(
                product.novaGroup,
              )}-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                product.novaGroup ? "" : "hidden"
              }"
            >
              ${product.novaGroup}
            </div>
          </div>

          <div class="p-4">
            <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">
              ${product.brand}
            </p>

            <h3
              class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
            >
              ${product.name}
            </h3>

            <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span>
                <i class="fa-solid fa-fire mr-1"></i>
                ${product.nutrients.calories.toFixed()} kcal/100g
              </span>
            </div>

            <div class="grid grid-cols-4 gap-1 text-center">
              <div class="bg-emerald-50 rounded p-1.5">
                <p class="text-xs font-bold text-emerald-700">
                  ${product.nutrients.protein.toFixed(1)}g
                </p>
                <p class="text-[10px] text-gray-500">Protein</p>
              </div>

              <div class="bg-blue-50 rounded p-1.5">
                <p class="text-xs font-bold text-blue-700">
                  ${product.nutrients.carbs.toFixed(1)}g
                </p>
                <p class="text-[10px] text-gray-500">Carbs</p>
              </div>

              <div class="bg-purple-50 rounded p-1.5">
                <p class="text-xs font-bold text-purple-700">
                  ${product.nutrients.fat.toFixed(1)}g
                </p>
                <p class="text-[10px] text-gray-500">Fat</p>
              </div>

              <div class="bg-orange-50 rounded p-1.5">
                <p class="text-xs font-bold text-orange-700">
                  ${product.nutrients.sugar.toFixed(1)}g
                </p>
                <p class="text-[10px] text-gray-500">Sugar</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    productsGrid.innerHTML = box;

    document.querySelector("#products-count").innerHTML =
      `Found ${currentSearchProducts.length} products for "${searchValue}"`;

    let productCard = Array.from(document.querySelectorAll(".product-card"));

    openProductModal(productCard);

    handleScoreFilter();
  } catch (error) {
    currentSearchProducts = [];

    productsGrid.innerHTML = "";
    productsGrid.classList.add("hidden");

    productsEmpty.classList.remove("hidden");

    document.querySelector("#products-count").innerHTML =
      `No products found for "${searchValue}"`;
  }
});

lookupBarcodeBtn.addEventListener("click", async function () {
  let barcode = barcodeInput.value.trim();

  if (!barcode) return;

  productsGrid.classList.remove("hidden");

  productsGrid.innerHTML = `
    <div class="col-span-full flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
  `;

  let product = await getProductsApi(`barcode/${barcode}`);

  if (!product || !isValidProduct(product)) {
    productsGrid.innerHTML = "";

    productsEmpty.classList.add("hidden");

    productDetailModal.classList.add("hidden");

    document.querySelector("#products-count").innerHTML =
      `No product found with barcode: ${barcode}`;

    Swal.fire({
      position: "bottom-end",
      icon: false,
      text: "Product not found in database",
      showConfirmButton: false,
      timer: 1000,
      width: "345px",
      background: "#ff2b3a",
      color: "#fff",
      customClass: {
        popup: "rounded-xl",
        title: "text-xl",
      },
    });

    return;
  }

  productsEmpty.classList.add("hidden");
  productsGrid.classList.remove("hidden");

  document.querySelector("#products-count").innerHTML =
    `Found product: ${product.name}`;

  fillProductModal(product);

  productDetailModal.classList.remove("hidden");

  productsGrid.innerHTML = `
    <div
      class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      data-barcode="${product.barcode}"
    >
      <div
        class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
      >
        <img
          class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null; this.src='src/images/product-placeholder.jpg';"
        />

        <div
          class="absolute top-2 left-2 bg-${nutriColor(
            product.nutritionGrade,
          )}-500 text-white text-xs font-bold px-2 py-1 rounded uppercase ${
            !product.nutritionGrade || product.nutritionGrade == "unknown"
              ? "hidden"
              : ""
          }"
        >
          Nutri-Score ${product.nutritionGrade}
        </div>

        <div
          class="absolute top-2 right-2 bg-${novaColor(
            product.novaGroup,
          )}-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
            product.novaGroup ? "" : "hidden"
          }"
        >
          ${product.novaGroup}
        </div>
      </div>

      <div class="p-4">
        <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">
          ${product.brand}
        </p>

        <h3
          class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
        >
          ${product.name}
        </h3>

        <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>
            <i class="fa-solid fa-fire mr-1"></i>
            ${product.nutrients.calories.toFixed()} kcal/100g
          </span>
        </div>

        <div class="grid grid-cols-4 gap-1 text-center">

          <div class="bg-emerald-50 rounded p-1.5">
            <p class="text-xs font-bold text-emerald-700">
              ${product.nutrients.protein.toFixed(1)}g
            </p>
            <p class="text-[10px] text-gray-500">Protein</p>
          </div>

          <div class="bg-blue-50 rounded p-1.5">
            <p class="text-xs font-bold text-blue-700">
              ${product.nutrients.carbs.toFixed(1)}g
            </p>
            <p class="text-[10px] text-gray-500">Carbs</p>
          </div>

          <div class="bg-purple-50 rounded p-1.5">
            <p class="text-xs font-bold text-purple-700">
              ${product.nutrients.fat.toFixed(1)}g
            </p>
            <p class="text-[10px] text-gray-500">Fat</p>
          </div>

          <div class="bg-orange-50 rounded p-1.5">
            <p class="text-xs font-bold text-orange-700">
              ${product.nutrients.sugar.toFixed(1)}g
            </p>
            <p class="text-[10px] text-gray-500">Sugar</p>
          </div>

        </div>
      </div>
    </div>
  `;

  let productCard = Array.from(document.querySelectorAll(".product-card"));

  openProductModal(productCard);
});

function fillProductModal(data) {
  productModalImg.setAttribute(
    "src",
    data.image || "src/images/product-placeholder.jpg",
  );

  productModalImg.setAttribute("alt", data.name);

  productModalBrand.innerHTML = data.brand;
  productModalName.innerHTML = data.name;

  if (data.nutritionGrade && data.nutritionGrade !== "unknown") {
    let nutri = modalNutri(data.nutritionGrade);

    productModalScore.classList.remove("hidden");

    productModalScore.style.backgroundColor = nutri.bg;

    productModalScore.querySelector("span").style.backgroundColor = nutri.Text;

    productModalScore.querySelector("span").innerHTML = data.nutritionGrade;

    productModalScore.querySelector(".NS").style.color = nutri.Text;

    productModalScore.querySelector(".NSD").innerHTML = nutri.mode;
  } else {
    productModalScore.classList.add("hidden");
  }

  if (data.novaGroup && data.novaGroup !== "unknown") {
    let nova = modalNova(data.novaGroup);

    productModalNova.classList.remove("hidden");

    productModalNova.style.backgroundColor = nova.bg;

    productModalNova.querySelector("span").style.backgroundColor = nova.Text;

    productModalNova.querySelector("span").innerHTML = data.novaGroup;

    productModalNova.querySelector(".NS").style.color = nova.Text;

    productModalNova.querySelector(".NSD").innerHTML = nova.mode;
  } else {
    productModalNova.classList.add("hidden");
  }

  productModalCal.innerHTML = data.nutrients.calories.toFixed();

  productModalProtein.innerHTML = `${data.nutrients.protein.toFixed(1)}g`;

  productModalProteinPer.style.width = `${Math.min(
    (data.nutrients.protein / nutritionMax.protein) * 100,
    100,
  )}%`;

  productModalCarbs.innerHTML = `${data.nutrients.carbs.toFixed(1)}g`;

  productModalCarbsPer.style.width = `${Math.min(
    (data.nutrients.carbs / nutritionMax.carbs) * 100,
    100,
  )}%`;

  productModalFat.innerHTML = `${data.nutrients.fat.toFixed(1)}g`;

  productModalFatPer.style.width = `${Math.min(
    (data.nutrients.fat / nutritionMax.fat) * 100,
    100,
  )}%`;

  productModalSugar.innerHTML = `${data.nutrients.sugar.toFixed(1)}g`;

  productModalSugarPer.style.width = `${Math.min(
    (data.nutrients.sugar / nutritionMax.sugar) * 100,
    100,
  )}%`;

  productModalFiber.innerHTML = `${data.nutrients.fiber.toFixed(1)}g`;

  productModalSalt.innerHTML = `${(data.nutrients.sodium * 2.5).toFixed(1)}g`;

  productModalLog.setAttribute("data-barcode", data.barcode);

  productModalLog.onclick = function () {
    if (productModalLog.disabled) return;

    productModalLog.disabled = true;

    let foodDate = new Date();

    let loggedProduct = {
      ...data,
      date: foodDate,
    };

    products.push(loggedProduct);

    localStorage.setItem("products", JSON.stringify(products));

    foodLog = [...products, ...meals];

    changeFoodLogData();

    productDetailModal.classList.add("hidden");

    // Success Alert بعد تسجيل المنتج
    Swal.fire({
      position: "bottom-end",
      icon: false,
      text: `${data.name} logged to your daily intake! 📝`,
      showConfirmButton: false,
      timer: 1000,
      width: "400px",
      background: "#00bf83",
      color: "#fff",
      customClass: {
        popup: "rounded-xl",
      },
    });

    setTimeout(() => {
      productModalLog.disabled = false;
    }, 500);
  };
}

function isValidProduct(product) {
  return (
    product &&
    product.barcode &&
    product.name &&
    product.image &&
    product.brand &&
    product.nutritionGrade &&
    product.nutrients &&
    typeof product.nutrients.calories === "number" &&
    product.nutrients.calories > 0 &&
    typeof product.nutrients.protein === "number" &&
    typeof product.nutrients.carbs === "number" &&
    typeof product.nutrients.fat === "number" &&
    typeof product.nutrients.sugar === "number"
  );
}

async function getValidProducts(searchValue, requiredCount = 24, limit = 24) {
  let validProducts = [];
  let page = 1;

  while (validProducts.length < requiredCount) {
    let productsData = await getProductsApi(
      `search?q=${encodeURIComponent(searchValue)}&page=${page}&limit=${limit}`,
    );

    if (!productsData || !productsData.length) {
      break;
    }

    let validData = productsData.filter(isValidProduct);

    validProducts.push(...validData);

    page++;

    if (page > 10) {
      break;
    }
  }

  return validProducts.slice(0, requiredCount);
}

function nutriColor(nutri) {
  switch (nutri) {
    case "a":
      return "green";
      break;
    case "b":
      return "lime";
      break;
    case "c":
      return "yellow";
      break;
    case "d":
      return "orange";
      break;
    case "e":
      return "red";
      break;

    default:
      return "green";
      break;
  }
}
function novaColor(nova) {
  switch (nova) {
    case 1:
      return "green";
      break;
    case 2:
      return "lime";
      break;
    case 3:
      return "orange";
      break;
    case 4:
      return "red";
      break;

    default:
      return "green";
      break;
  }
}

async function handleScoreFilter() {
  nutriCcoreFilter.forEach((btn) => {
    btn.onclick = async function () {
      nutriCcoreFilter.forEach((btn) => {
        btn.classList.remove("ring-gray-900", "ring-2");
      });

      btn.classList.add("ring-gray-900", "ring-2");

      let Score = btn.dataset.grade;

      // Loading
      productsEmpty.classList.add("hidden");
      productsGrid.classList.remove("hidden");

      productsGrid.innerHTML = `
        <div class="col-span-full flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      `;

      // Give browser time to render loader
      await new Promise((resolve) => setTimeout(resolve, 200));

      let filteredProducts;

      if (Score === "all") {
        filteredProducts = currentSearchProducts.slice(0, 25);
      } else {
        filteredProducts = currentSearchProducts
          .filter((product) => product.nutritionGrade === Score)
          .slice(0, 25);
      }

      // No products
      if (filteredProducts.length === 0) {
        productsGrid.innerHTML = "";

        productsGrid.classList.add("hidden");

        productsEmpty.classList.remove("hidden");

        document.querySelector("#products-count").innerHTML =
          `No products found for "${currentSearchValue}" with Nutri-Score ${Score.toUpperCase()}`;

        return;
      }

      let box = "";

      filteredProducts.forEach((product) => {
        box += `
          <div
            class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
            data-barcode="${product.barcode}"
          >
            <div
              class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
            >
              <img
                class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                onerror="this.onerror=null; this.src='src/images/product-placeholder.jpg';"
              />

              <div
                class="absolute top-2 left-2 bg-${nutriColor(
                  product.nutritionGrade,
                )}-500 text-white text-xs font-bold px-2 py-1 rounded uppercase ${
                  !product.nutritionGrade ||
                  product.nutritionGrade === "unknown"
                    ? "hidden"
                    : ""
                }"
              >
                Nutri-Score ${product.nutritionGrade}
              </div>

              <div
                class="absolute top-2 right-2 bg-${novaColor(
                  product.novaGroup,
                )}-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                  product.novaGroup ? "" : "hidden"
                }"
              >
                ${product.novaGroup}
              </div>
            </div>

            <div class="p-4">
              <p class="text-xs text-emerald-600 font-semibold mb-1 truncate">
                ${product.brand}
              </p>

              <h3
                class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
              >
                ${product.name}
              </h3>

              <div class="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span>
                  <i class="fa-solid fa-fire mr-1"></i>
                  ${product.nutrients.calories.toFixed()} kcal/100g
                </span>
              </div>

              <div class="grid grid-cols-4 gap-1 text-center">

                <div class="bg-emerald-50 rounded p-1.5">
                  <p class="text-xs font-bold text-emerald-700">
                    ${product.nutrients.protein.toFixed(1)}g
                  </p>
                  <p class="text-[10px] text-gray-500">Protein</p>
                </div>

                <div class="bg-blue-50 rounded p-1.5">
                  <p class="text-xs font-bold text-blue-700">
                    ${product.nutrients.carbs.toFixed(1)}g
                  </p>
                  <p class="text-[10px] text-gray-500">Carbs</p>
                </div>

                <div class="bg-purple-50 rounded p-1.5">
                  <p class="text-xs font-bold text-purple-700">
                    ${product.nutrients.fat.toFixed(1)}g
                  </p>
                  <p class="text-[10px] text-gray-500">Fat</p>
                </div>

                <div class="bg-orange-50 rounded p-1.5">
                  <p class="text-xs font-bold text-orange-700">
                    ${product.nutrients.sugar.toFixed(1)}g
                  </p>
                  <p class="text-[10px] text-gray-500">Sugar</p>
                </div>

              </div>
            </div>
          </div>
        `;
      });

      productsGrid.innerHTML = box;

      productsGrid.classList.remove("hidden");
      productsEmpty.classList.add("hidden");

      document.querySelector("#products-count").innerHTML =
        Score === "all"
          ? `Found ${filteredProducts.length} products for "${currentSearchValue}"`
          : `Found ${filteredProducts.length} products for "${currentSearchValue}" with Nutri-Score ${Score.toUpperCase()}`;

      let productCard = Array.from(document.querySelectorAll(".product-card"));

      openProductModal(productCard);
    };
  });
}

async function openProductModal(productCard) {
  productCard.forEach((product) => {
    product.onclick = async function () {
      productDetailModal.classList.remove("hidden");

      let data = await getProductsApi(`barcode/${product.dataset.barcode}`);

      fillProductModal(data);
    };
  });
}

closeProductModal.forEach((btn) => {
  btn.onclick = function () {
    productDetailModal.classList.add("hidden");
  };
});

function modalNutri(nutri) {
  switch (nutri) {
    case "a":
      return {
        mode: "Excellent",
        bg: "#03814120",
        Text: "#038141",
      };

    case "b":
      return {
        mode: "Good",
        bg: "#85bb2f20",
        Text: "#85bb2f",
      };

    case "c":
      return {
        mode: "Average",
        bg: "#fecb0220",
        Text: "#fecb02",
      };

    case "d":
      return {
        mode: "Poor",
        bg: "#ee810020",
        Text: "#ee8100",
      };

    case "e":
      return {
        mode: "Bad",
        bg: "#e63e1120",
        Text: "#e63e11",
      };

    default:
      break;
  }
}

function modalNova(nova) {
  switch (nova) {
    case 1:
      return {
        mode: "Unprocessed",
        bg: "#03814120",
        Text: "#038141",
      };

    case 2:
      return {
        mode: "mid",
        bg: "#85bb2f20",
        Text: "#85bb2f",
      };

    case 3:
      return {
        mode: "Processed",
        bg: "#ee810020",
        Text: "#ee8100",
      };

    case 4:
      return {
        mode: "Ultra-processed",
        bg: "#e63e1120",
        Text: "#e63e11",
      };

    default:
      break;
  }
}

// * 3th Page
function changeFoodLogData() {
  foodlogDate.innerHTML = currentDate;

  let todayKey = getTodayKey();

  let todayItems = foodLog.filter((item) => {
    return item.date && getDateKey(item.date) === todayKey;
  });

  logCount.innerHTML = todayItems.length;

  let logCal = 0;
  let logPro = 0;
  let logCar = 0;
  let logFat = 0;

  todayItems.forEach((data) => {
    logCal += Number(data.nutrition?.calories ?? data.nutrients?.calories ?? 0);

    logPro += Number(data.nutrition?.protein ?? data.nutrients?.protein ?? 0);

    logCar += Number(data.nutrition?.carbs ?? data.nutrients?.carbs ?? 0);

    logFat += Number(data.nutrition?.fat ?? data.nutrients?.fat ?? 0);
  });

  if (todayItems.length === 0) {
    clearFoodlog.classList.add("hidden");

    loggedItemsList.innerHTML = `
      <div class="text-center py-8 text-gray-500">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <i class="fa-solid fa-utensils text-3xl text-gray-300"></i>
        </div>

        <p class="font-medium text-gray-700">
          No food logged today
        </p>

        <p class="text-sm text-gray-400 mt-2">
          Start tracking your nutrition by logging meals or scanning products
        </p>

        <div class="flex items-center justify-center gap-3 mt-5">
          <button
            id="browse-recipes-empty"
            class="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all"
          >
            <i class="fa-solid fa-plus mr-2"></i>
            Browse Recipes
          </button>

          <button
            id="scan-product-empty"
            class="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            <i class="fa-solid fa-barcode mr-2"></i>
            Scan Product
          </button>
        </div>
      </div>
    `;

    document
      .querySelector("#browse-recipes-empty")
      ?.addEventListener("click", () => {
        showPage("home");
        changeHeader("home");
        history.pushState(null, "", "#home");

        navLinks.forEach((link) => {
          link.classList.remove("bg-emerald-50", "text-emerald-700");
          link.classList.add("hover:bg-gray-50", "text-gray-600");
        });

        let homeLink = document.querySelector('.nav-link[href="home"]');

        homeLink?.classList.remove("hover:bg-gray-50", "text-gray-600");
        homeLink?.classList.add("bg-emerald-50", "text-emerald-700");
      });

    document
      .querySelector("#scan-product-empty")
      ?.addEventListener("click", () => {
        showPage("products");
        changeHeader("products");
        history.pushState(null, "", "#products");

        navLinks.forEach((link) => {
          link.classList.remove("bg-emerald-50", "text-emerald-700");
          link.classList.add("hover:bg-gray-50", "text-gray-600");
        });

        let productsLink = document.querySelector('.nav-link[href="products"]');

        productsLink?.classList.remove("hover:bg-gray-50", "text-gray-600");

        productsLink?.classList.add("bg-emerald-50", "text-emerald-700");
      });
  } else {
    clearFoodlog.classList.remove("hidden");

    let box = "";

    todayItems.forEach((data) => {
      let originalIndex = foodLog.indexOf(data);

      let dataTime = new Date(data.date).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });

      let isMeal = data.nutrition !== undefined;

      box += `
        <div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">

          <div class="flex items-center gap-4">

            <img
              src="${data.image || data.thumbnail}"
              alt="${data.name}"
              class="w-14 h-14 rounded-xl object-cover"
              onerror="this.onerror=null; this.src='src/images/product-placeholder.jpg';"
            >

            <div>
              <p class="font-semibold text-gray-900">
                ${data.name}
              </p>

              <p class="text-sm text-gray-500">
                ${data.servings || 1}
                ${data.servings == 1 ? "serving" : "servings"}

                <span class="mx-1">•</span>

                <span class="text-emerald-600">
                  ${isMeal ? "Recipe" : "Product"}
                </span>
              </p>

              <p class="text-xs text-gray-400 mt-1">
                ${dataTime}
              </p>
            </div>
          </div>

          <div class="flex items-center gap-4">

            <div class="text-right">
              <p class="text-lg font-bold text-emerald-600">
                ${(
                  data.nutrition?.calories ??
                  data.nutrients?.calories ??
                  0
                ).toFixed()}
              </p>

              <p class="text-xs text-gray-500">
                kcal
              </p>
            </div>

            <div class="md:flex gap-2 text-xs text-gray-500">

              <span class="px-2 py-1 bg-blue-50 rounded">
                ${(
                  data.nutrition?.protein ??
                  data.nutrients?.protein ??
                  0
                ).toFixed(1)}g P
              </span>

              <span class="px-2 py-1 bg-amber-50 rounded">
                ${(data.nutrition?.carbs ?? data.nutrients?.carbs ?? 0).toFixed(
                  1,
                )}g C
              </span>

              <span class="px-2 py-1 bg-purple-50 rounded">
                ${(data.nutrition?.fat ?? data.nutrients?.fat ?? 0).toFixed(
                  1,
                )}g F
              </span>

            </div>

            <button
              class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2"
              data-index="${originalIndex}"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>

          </div>
        </div>
      `;
    });

    loggedItemsList.innerHTML = box;

    let removeFoodlogItem = Array.from(
      document.querySelectorAll(".remove-foodlog-item"),
    );

    removeFoodlogItem.forEach((btn) => {
      btn.onclick = function () {
        let index = Number(this.dataset.index);

        foodLog.splice(index, 1);

        products = foodLog.filter((item) => item.nutrition === undefined);

        meals = foodLog.filter((item) => item.nutrition !== undefined);

        localStorage.setItem("products", JSON.stringify(products));
        localStorage.setItem("meals", JSON.stringify(meals));

        foodLog = [...products, ...meals];

        changeFoodLogData();

        Swal.fire({
          position: "bottom-end",
          icon: false,
          text:
            foodLog.filter((item) => {
              return item.date && getDateKey(item.date) === todayKey;
            }).length === 0
              ? "Today's log cleared"
              : "Item removed from log",
          showConfirmButton: false,
          timer: 1000,
          width: "275px",
          background: "#2f80ed",
          color: "#fff",
          customClass: {
            popup: "rounded-xl",
          },
        });
      };
    });
  }

  updateTodayNutrition(logCal, logPro, logCar, logFat);

  renderWeeklyOverview();
}

function clearFood() {
  Swal.fire({
    title: "Clear Today's Log?",
    text: "This will remove all logged food items for today.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, clear it!",
  }).then((result) => {
    if (!result.isConfirmed) return;

    let todayKey = getTodayKey();

    products = products.filter((item) => {
      return !item.date || getDateKey(item.date) !== todayKey;
    });

    meals = meals.filter((item) => {
      return !item.date || getDateKey(item.date) !== todayKey;
    });

    localStorage.setItem("products", JSON.stringify(products));

    localStorage.setItem("meals", JSON.stringify(meals));

    foodLog = [...products, ...meals];

    changeFoodLogData();

    Swal.fire({
      title: "Cleared!",
      text: "Your food log has been cleared for today",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  });
}

clearFoodlog.addEventListener("click", clearFood);

function getDateKey(date) {
  let d = new Date(date);

  let year = d.getFullYear();
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let day = String(d.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getTodayKey() {
  return getDateKey(new Date());
}

function getDailyFoodData() {
  let groupedData = {};

  foodLog.forEach((item) => {
    if (!item.date) return;

    let key = getDateKey(item.date);

    if (!groupedData[key]) {
      groupedData[key] = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        items: 0,
      };
    }

    groupedData[key].calories += Number(
      item.nutrition?.calories ?? item.nutrients?.calories ?? 0,
    );

    groupedData[key].protein += Number(
      item.nutrition?.protein ?? item.nutrients?.protein ?? 0,
    );

    groupedData[key].carbs += Number(
      item.nutrition?.carbs ?? item.nutrients?.carbs ?? 0,
    );

    groupedData[key].fat += Number(
      item.nutrition?.fat ?? item.nutrients?.fat ?? 0,
    );

    groupedData[key].items++;
  });

  return groupedData;
}

function getWeeklyData() {
  let groupedData = getDailyFoodData();

  let week = [];

  for (let i = 6; i >= 0; i--) {
    let date = new Date();

    date.setDate(date.getDate() - i);

    let key = getDateKey(date);

    week.push({
      date: new Date(date),
      key: key,
      calories: groupedData[key]?.calories ?? 0,
      protein: groupedData[key]?.protein ?? 0,
      carbs: groupedData[key]?.carbs ?? 0,
      fat: groupedData[key]?.fat ?? 0,
      items: groupedData[key]?.items ?? 0,
    });
  }

  return week;
}

function renderWeeklyOverview() {
  let weeklyData = getWeeklyData();

  let totalCalories = 0;
  let totalItems = 0;
  let goalDays = 0;

  let box = "";

  weeklyData.forEach((day) => {
    let dayName = day.date.toLocaleDateString("en-US", {
      weekday: "short",
    });

    let dayNumber = day.date.getDate();

    let isToday = day.key === getTodayKey();

    totalCalories += day.calories;
    totalItems += day.items;

    if (
      day.calories >= nutritionMax.cal &&
      day.calories <= nutritionMax.cal * 1.1
    ) {
      goalDays++;
    }

    box += `
      <div
        class="rounded-xl p-3 text-center transition-all ${
          isToday ? "bg-indigo-100 border-2 border-indigo-200" : "bg-white"
        }"
      >
        <p class="text-xs text-gray-500 mb-1">${dayName}</p>

        <p class="text-sm font-semibold text-gray-900 mb-3">
          ${dayNumber}
        </p>

        <p
          class="text-lg font-bold ${
            day.calories > 0
              ? day.calories >= nutritionMax.cal
                ? "text-red-500"
                : "text-emerald-600"
              : "text-gray-300"
          }"
        >
          ${day.calories.toFixed()}
        </p>

        <p class="text-xs text-gray-500">kcal</p>

        ${
          day.items > 0
            ? `
              <p class="text-xs text-gray-400 mt-2">
                ${day.items} ${day.items === 1 ? "item" : "items"}
              </p>
            `
            : ""
        }
      </div>
    `;
  });

  weeklyOverview.innerHTML = box;

  let average = totalCalories / 7;

  weeklyAverage.innerHTML = average.toFixed();
  weeklyItems.innerHTML = totalItems;
  daysOnGoal.innerHTML = goalDays;
}

function updateTodayNutrition(cal, pro, car, fat) {
  updateNutritionProgress(logBtnCal, logPerCal, cal, nutritionMax.cal);

  updateNutritionProgress(logBtnPro, logPerPro, pro, nutritionMax.protein);

  updateNutritionProgress(logBtnCar, logPerCar, car, nutritionMax.carbs);

  updateNutritionProgress(logBtnFat, logPerFat, fat, nutritionMax.fat);
}

function updateNutritionProgress(textElement, barElement, value, max) {
  let percentage = (value / max) * 100;

  let isOver = percentage >= 100;

  textElement.innerHTML = value.toFixed();

  barElement.style.width = `${Math.min(percentage, 100)}%`;

  if (isOver) {
    barElement.classList.remove(
      "bg-emerald-500",
      "bg-blue-500",
      "bg-amber-500",
      "bg-purple-500",
    );

    barElement.classList.add("bg-red-500");

    textElement.classList.remove(
      "text-gray-500",
      "text-emerald-600",
      "text-blue-600",
      "text-amber-600",
      "text-purple-600",
    );

    textElement.classList.add("text-red-500");
  } else {
    barElement.classList.remove("bg-red-500");

    if (barElement === logPerCal) {
      barElement.classList.add("bg-emerald-500");
    }

    if (barElement === logPerPro) {
      barElement.classList.add("bg-blue-500");
    }

    if (barElement === logPerCar) {
      barElement.classList.add("bg-amber-500");
    }

    if (barElement === logPerFat) {
      barElement.classList.add("bg-purple-500");
    }

    textElement.classList.remove("text-red-500");

    if (textElement === logBtnCal) {
      textElement.classList.add("text-gray-500");
    }

    if (textElement === logBtnPro) {
      textElement.classList.add("text-gray-500");
    }

    if (textElement === logBtnCar) {
      textElement.classList.add("text-gray-500");
    }

    if (textElement === logBtnFat) {
      textElement.classList.add("text-gray-500");
    }
  }
}
