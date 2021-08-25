let findResponse = async (input) => {
    try {
        console.log(input);
        let response = await fetch("http://localhost:3000/get-response", {
            method: "POST",
            body: JSON.stringify({ data: input }),
            headers: { "Content-type": "application/json" },
            mode: 'cors'
        });
        let data = await response.json();
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
}