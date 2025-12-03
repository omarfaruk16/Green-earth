const History = [];
let total_tree_price = 0;
let cart_number = 0;

const categoriLoad = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url).then((res) =>
    res.json().then((data) => displayCategories(data.categories))
  );
};

const displayCategories = (categories) => {
  const category_section = document.getElementById("categories_ber");
  category_section.innerHTML = "";
  categories.forEach((element) => {
    const new_category = document.createElement("div");
    new_category.innerHTML = `<button onclick="loadCategoryPlant(${element.id})" id="btn-${element.id}"  class="categoty-btn btn bg-transparent border-none hover:bg-green-700 hover:text-white">${element.category_name}</button>`;
    category_section.append(new_category);
  });
};

const activate = (id) => {
  const allBtn = document.querySelectorAll(".categoty-btn");
  document.getElementById("alltreebtn").classList.remove("active");
  allBtn.forEach((element) => {
    element.classList.remove("active");
  });
  const activeBtn = document.getElementById(`btn-${id}`);
  activeBtn.classList.add("active");
};

const plantLoad = () => {
  loadingStatus(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url).then((res) =>
    res.json().then((data) => displayPlants(data.plants))
  );
};

const displayPlants = (plants) => {
  const platSection = document.getElementById("tree-details");
  platSection.innerHTML = "";
  plants.forEach((plant) => {
    const plantCard = document.createElement("div");
    plantCard.innerHTML = `
        <div class="bg-white rounded-lg p-4 mt-5 lg:mt-0">
                <div class="">
                    <img class="rounded-lg w-full h-[166px] object-cover" src="${plant.image}" alt="">
                </div>
                
                <button onclick="loadSinglePlant(${plant.id})" class="text-lg font-bold py-3">${plant.name}</button>
                <p class="text-[12px] opacity-80">${plant.description}</p>
                <div class="flex justify-between items-center py-5">
                    <p class="py-2 px-3 bg-[#DCFCE7] rounded-3xl text-[#13803D] font-semibold text-base">${plant.category}</p>
                    <p class="font-bold text-lg">৳ ${plant.price}</p>
                </div>
                <button onclick="addToCart('${plant.name}',${plant.price})" class="btn bg-green-700 rounded-4xl border-none text-white w-full">Add to Cart</button>
            </div>
        `;
    platSection.append(plantCard);
  });
  loadingStatus(false);
};

const loadCategoryPlant = (id) => {
  loadingStatus(true);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      displayPlants(data.plants);
      activate(id);
    })
  );
};

// All tree button active
const alltreebtn = () => {
  const allBtn = document.querySelectorAll(".categoty-btn");
  allBtn.forEach((element) => {
    element.classList.remove("active");
  });
  const activeBtn = document.getElementById("alltreebtn");
  activeBtn.classList.add("active");
  plantLoad();
};

const loadSinglePlant = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url).then((res) => res.json().then((data) => openmodal(data.plants)));
};

const openmodal = (id) => {
  console.log(id);
  const modal_box = document.getElementById("my_modal_1");
  modal_box.innerHTML = "";

  const newmodal = document.createElement("div");
  newmodal.innerHTML = `
    <div class="modal-box">
    <h3 class="text-lg font-bold pb-4">${id.name}</h3>
            <div class="aspect-[6/4] w-full pb-3">
                    <img class="rounded-lg w-full h-full object-cover" src="${id.image}" alt="">
            </div>
            <p><span class="font-bold py-3 text-lg">Category: </span> ${id.category}</p>
            <p><span class="font-bold py-3 text-lg">Price: </span> ${id.price}</p>
            <p><span class="font-bold py-3 text-lg">description: </span> ${id.description}</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
            <div class="modal-box">
            
    </div>
    `;
  modal_box.append(newmodal);
  my_modal_1.showModal();
};

const loadingStatus = (status) => {
  if (status) {
    document.getElementById("tree-details").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
  } else {
    document.getElementById("tree-details").classList.remove("hidden");
    document.getElementById("loading").classList.add("hidden");
  }
};

const addToCart = (name, price) => {
  History.push({
    tree_name: name,
    tree_price: price,
  });
  total_tree_price += price
  seeCartHistory();
}
const seeCartHistory = () => {
  const cart_section = document.getElementById("cart-section");
  cart_section.innerHTML = ""; // prevent duplicates

  History.forEach((element, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class="flex justify-between items-center rounded-lg bg-green-100 p-4 mb-3">
        <div>
            <h3 class="font-semibold text-lg">${element.tree_name}</h3>
            <p class="text-base">${element.tree_price}</p>
        </div>
        <button onclick = deleteHistory(${index}) class ="fa-solid fa-xmark text-red-600"></button>
    </div>`;
    cart_section.append(div);
  });

  const total_section = document.getElementById("total");
  total_section.innerHTML = `
    <p class="text-lg font-semibold text-right">Total : ৳${total_tree_price}</p>
  `;};

const deleteHistory = (index) =>{
  total_tree_price -= History[index].tree_price;
  History.splice(index, 1);
  seeCartHistory();
}

console.log(History);
plantLoad();
categoriLoad();
