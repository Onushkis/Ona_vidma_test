//    url    //https://tjherkatrrebvelyjaav.supabase.co
//    api key   //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI
function fetchData() {
  // If no id is being passed to the function => just fallback to empty string 
  // Filters:^id, Date, Name, etc

  // + id? `id=${id}` :''
  // +:^concatenation => name + ona = nameona
  // id? : => This is called inline if . 
  // `` => allows us to write dynamic js inside a string 
fetch(`https://tjherkatrrebvelyjaav.supabase.co/rest/v1/vildtmaddata`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqaGVya2F0cnJlYnZlbHlqYWF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNzQyOTAsImV4cCI6MjAwOTY1MDI5MH0.IlwdTgpdK3YPhLi8jKWEXwdYjSFKerx57xii_GoxlfI",
  },
})
  .then((res) => res.json())
  .then(showData);
}

fetchData()



function showData(items) {
  console.log(items);

    items.map((item)=>{
      console.log(item)
    // document.querySelector(".kategory_section .kat1").src="https://vildmad.dk/application/files/2614/9036/4857/lav-klortang.jpg";
// document.querySelector(".item2").src="https://vildmad.dk/application/files/9514/9190/3499/kantarel.jpg"


// Create Image using Javascript 
const image  = document.createElement('img')
const image_wrapper = document.createElement('a')
image_wrapper.appendChild(image)
image.src = item.image
image.height = 40
image.width = 40
// Add random position
image_wrapper.style.position='absolute'
// Display:^inline => is going to take the full width of the line
// Display:^block => is going to take the width of the element itself
image_wrapper.style.display='block'
image_wrapper.href= `receipe.html?id=${item.id}`
// We have to generate a height that starts from 150px top and ends at bottom point.
// window.innerHeight - 150px
image_wrapper.style.top= `${Math.random() * (window.innerHeight - 150 - 30)}px`;
image_wrapper.style.left= `${Math.random() * (window.innerWidth - 106 * 2 - 30)}px`;
// image.style.marginTop ="150px";
// image.style.left= `calc(100% - 100px) * -1`;




// Place Image in the page
const wrapper = document.querySelector('.kategory_section')
wrapper.appendChild(image_wrapper)





    })
    
    
    // =================================
    // We need to add a condition if the page is reciept page 
    // If so , Get the id in the url and call it idParam
    // get teh data for the id from the items array :^ const itemData = items.filter(item=> item.id === idParam)
    //  Now you have the itemData, you can display it the way you tried below 

// document.querySelector(".p_receipe").textContent = itemData.description;

  //items.forEach()
}

 const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".bod");

 menuIcon.addEventListener("click",()=>{ 
 container.classList.toggle("change");
 })

//  document.querySelector(".p_receipe").textContent = items.description;

// ændre inhold
// document.querySelector(".p_receipe").textContent = items.description;

// You are placing static images on the page , We need it dynamic
// document.querySelector(".kategory_section .kat1").src="https://vildmad.dk/application/files/2614/9036/4857/lav-klortang.jpg";
// document.querySelector(".item2").src="https://vildmad.dk/application/files/9514/9190/3499/kantarel.jpg"
// document.querySelector(".item3").src="https://vildmad.dk/application/files/2914/9061/3541/blaeretang.jpg";

// document.querySelector(".p_receipe").textContent = items.description;

// Øndre inold in Kategory.html

// document.querySelector(".kat1").src="https://vildmad.dk/application/files/2614/9036/4857/lav-klortang.jpg";
