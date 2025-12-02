const categoriLoad = () =>{
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then((res) => res.json()
    .then((data) => displayCategories(data.categories)))
}

const displayCategories = (categories) =>{
    const category_section = document.getElementById("categories_ber")
    category_section.innerHTML = ""
    categories.forEach(element => {
        const new_category = document.createElement("div")
        new_category.innerHTML = `<button onclick="loadCategoryPlant(${element.id})" id="btn-${element.id}"  class="categoty-btn btn bg-transparent border-none hover:bg-green-700 hover:text-white">${element.category_name}</button>`
        category_section.append(new_category)
    });
}

const activate = (id) =>{
    const allBtn = document.querySelectorAll(".categoty-btn")
    document.getElementById("alltreebtn").classList.remove("active")
    allBtn.forEach(element => {
        element.classList.remove("active")
    });
    const activeBtn = document.getElementById(`btn-${id}`)
    activeBtn.classList.add("active")
}


const platLoad = () =>{
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url)
    .then((res) => res.json()
    .then((data) => displayPlants(data.plants)))
}

const displayPlants = (plants) =>{
    console.log(plants)
    const platSection = document.getElementById("tree-details")
    platSection.innerHTML = ""
    plants.forEach(plant => {
        const plantCard = document.createElement("div")
        plantCard.innerHTML = `
        <div class="bg-white rounded-lg p-4 mt-5 lg:mt-0">
                <div class="">
                    <img class="rounded-lg w-full h-[166px] object-cover" src="${plant.image}" alt="">
                </div>
                
                <h2 class="text-lg font-bold py-3">${plant.name}</h2>
                <p class="text-[12px] opacity-80">${plant.description}</p>
                <div class="flex justify-between items-center py-5">
                    <p class="py-2 px-3 bg-[#DCFCE7] rounded-3xl text-[#13803D] font-semibold text-base">${plant.category}</p>
                    <p class="font-bold text-lg">৳ ${plant.price}</p>
                </div>
                <button class="btn bg-green-700 rounded-4xl border-none text-white w-full">Add to Cart</button>
            </div>
        `
        platSection.append(plantCard)
    });
    
}

const loadCategoryPlant = (id) =>{
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    console.log(url)
    fetch(url)
    .then((res) => res.json()
    .then((data) => {
        displayPlants(data.plants)
        activate(id)
    }))} 



const alltreebtn = () =>{
    const allBtn = document.querySelectorAll(".categoty-btn")
    allBtn.forEach(element => {
        element.classList.remove("active")
    });
    const activeBtn = document.getElementById("alltreebtn")
    activeBtn.classList.add("active")
    platLoad()
}
platLoad()
categoriLoad()



