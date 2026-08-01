import {cityData} from "./cityData.js";
import {cityData_europe} from "./cityData_europe.js";
const allCities = [...cityData, ...cityData_europe];

export function searchCities(getFocusCity){
    const input = document.getElementById("search-input");
    const resultsBox= document.getElementById("search-results");
    const surpriseBtn = document.getElementById("surprise-btn");
    function renderResults(matches){
        if(!matches.length){
            resultsBox.style.display = "none";
            resultsBox.innerHTML ="";
            return;
        }
        resultsBox.innerHTML =matches.map(city=>{
            const cuisine=city.cuisines[0];
            return `<div class="search-item" data-name="${city.name}">
                ${city.name}${city.country ? ', ' + city.country : ''} — ${cuisine.dish_name}
            </div>`;
        }).join('');
        resultsBox.style.display="block";
    }
    input.addEventListener("input",()=>{
        const q=input.value.trim().toLowerCase();
        if(!q){
            renderResults([]);
            return;
        }
        const matches = allCities.filter(city =>{
            const cuisine=city.cuisines[0];
            return(
                city.name.toLowerCase().includes(q) ||
                (city.country && city.country.toLowerCase().includes(q)) ||
                cuisine.dish_name.toLowerCase().includes(q) ||
                cuisine.toLowerCase().includes(q)
            );
        }).slice(0,8);
        renderResults(matches);
    });

    resultsBox.addEventListener('click',(e)=> {
        const item=e.target.closest('.search-item');
        if(!item)return;
        const city = allCities.find(c => c.name === item.dataset.name);
        if(city){
            getFocusCity()(city);
            input.value="";
            renderResults([]);
        }
    });
    document.addEventListener('click',(e)=>{
        if(!e.target.closest('#top-bar')){
            renderResults([]);
        }
    });
    surpriseBtn.addEventListener('click',()=>{
        const randomCity=allCities[Math.floor(Math.random()*allCities.length)];
        getFocusCity()(randomCity);
        input.value="";
        renderResults([]);
    });
}

