import './style.css';
import { Statue } from './Statue';
import { Artwork } from './Artwork';
var list= new Array<Artwork>();

function attemptPublish(){
  let countAndPrice = document.getElementById("countAndPrice") as HTMLElement;
  let title = (document.getElementById("stTitle") as HTMLInputElement).value;
  let year = (document.getElementById("stYear") as HTMLInputElement).valueAsNumber;
  let price = (document.getElementById("stPrice") as HTMLInputElement).valueAsNumber;
  let height = (document.getElementById("stHeight") as HTMLInputElement).valueAsNumber;
  let errorMessage = document.getElementById("errorMessage") as HTMLElement;

  let ttlRegex = /^[a-zA-Z ,]+$/;
  
  if(title.length < 1){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The statue title MUST be at least 1 character!";
  }else if(!ttlRegex.test(title)){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The statue title MUST consist of letters found in the English alphabet, commas and spaces ONLY!";
  }else if(isNaN(year)){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The date MUST be declared!"
  }else if(year > new Date().getFullYear()){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The date CANNOT be later than the current year!";
  }else if(price < 5 || isNaN(price)){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The price MUST be at least 5 HUF!";
  }else if(height < 15 || isNaN(height)){
    errorMessage.style.color = "rgb(255,40,40)";
    errorMessage.textContent = "The statue MUST be at least 15CM tall to qualify for publishing!";
  }else{
    let statue = new Statue(title, year, price, height);
    list.push(statue);
    let total = 0;
    list.forEach(e => {
      total += e.price;
    });
    countAndPrice.textContent = `Statues: ${list.length} -- Total Price: ${total} HUF`;
    errorMessage.style.color = "rgb(40,220,40)";
    errorMessage.textContent = "Successfully published statue!";
  }
}


document.getElementById("btnPublish")!.addEventListener("click", attemptPublish);