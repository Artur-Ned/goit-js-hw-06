const ulWhisId = document.querySelector('#categories');
const liInCategries = ulWhisId.querySelectorAll('.item');
console.log(`Number of categories: ${liInCategries.length}`); // вывели все ли в категориях

for (const element of liInCategries) {
    const titleOfLi = element.querySelector('h2');
    const liInUk = element.querySelectorAll('li');
    
    console.log(`Category: ${titleOfLi.textContent}`);
     console.log(`Elements: ${liInUk.length}`);
    
        
}


// const nameOfTitleInLi = ulWhisId.querySelectorAll('h2');
// console.log(nameOfTitleInLi.textContent);

//console.log(nameOfTitleInLi.textContent);

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas!';
