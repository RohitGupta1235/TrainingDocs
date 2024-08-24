const fetchUser = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data); // Log the fetched data inside the function
    } catch (err) {
        console.error("Error: Cannot connect or fetch data. Details:", err.message);
    }
};


fetchUser();

console.log("Data fetching initiated...");
