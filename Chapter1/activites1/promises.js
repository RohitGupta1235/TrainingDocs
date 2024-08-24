

// fetching data wth the promises




try{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
    })
    .then(data => {
        console.log(data); // Log the data
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
catch(err){
    console.log(err+"arror");
    
}





// type error