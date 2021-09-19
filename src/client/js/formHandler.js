
function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('url').value

    if(Client.checkForURL(formText)) {
    console.log("::: Form Submitted :::")

    postData('http://localhost:8081/api', {url: formText})

    .then(function(res) {
        document.getElementById('results').innerHTML = `Polarity: ${res.score_tag}` + `&nbsp; Agreement: ${res.agreement}` + ` Subjectivity: ${res.subjectivity}` + ` Confidence: ${res.confidence}`; +`Irony: ${res.irony}`;
    })
    } else {
        alert('Invalid URL.');
    }
}

const postData = async (url = "", data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        cache: "no-cache",
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const allData = await response.json();
        return allData;
    } catch (error) {
        console.log('error', error);
    }
};



export { handleSubmit }
