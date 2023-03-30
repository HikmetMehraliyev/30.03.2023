fetch("https://api.tvmaze.com/shows")
.then(data=>data.json)
.then(arr=>{
    
    `<div class=".container text-center">
        <div class="row align-items-start">`
    for(let i=0;i,arr.length;i++){

    `   <div class="card col" style="width: 18rem;">
            <img src="${arr[i].image.medium}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${arr[i].name}</h5>
            <p class="card-text">${arr[i].langugage}<br>${arr[i].genres.Science-Fiction}</p>
            <a href="${arr[i].officialSite}" class="btn btn-primary">Official Site</a>
            <p>${arr[i].premiered}<br>${arr[i].ended}</p>
        </div> 
      </div>
    </div>`
    }
})
