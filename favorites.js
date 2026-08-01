const STORAGE_KEY ='food.Explorer.favorites';
function cityKey(city){
    return `${city.name}-${city.country}`;
}
function readFavoriteKeys(){
    try{
        const raw=localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw):[];
    } catch(e){
        console.warn("Could not read favorites from local Storage.")
        return[];
    }
}

function writeFavoriteKeys(keys){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(keys));
    } catch(e){
        console.warn("Could not save favorities to localStorage:",e);
    }
}

export function isFavorite(city){
    return readFavoriteKeys().includes(cityKey(city));
}
export function toggleFavorite(city){
    const key=cityKey(city);
    const keys= readFavoriteKeys();
    const idx = keys.indexOf(key);
    if(idx=== -1){
        keys.push(key);
    } else{
        keys.splice(idx,1);
    }
    writeFavoriteKeys(keys);
    return keys.includes(key);
}

export function getFavoriteCities(allCities){
    const keys = new Set(readFavoriteKeys());
    return allCities.filter(city => keys.has(cityKey(city)))
}
