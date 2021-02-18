window.onresize = function () {
    windowSize();
}

document.onreadystatechange = function () {
    windowSize();
    CountriesByFetch();
}

async function CountriesByFetch() {
    let response = await fetch('https://demo-api.transfast.net/api/catalogs/countries', {
        origin: 'https://musfikur-rahman.github.io',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'PEF1dGhlbnRpY2F0aW9uPjxJZD5hYTU0NTI2ZS0wNDY4LTQ1YmQtYmRmNC03OGNkYjM3NzFjZTE8L0lkPjxVc2VyTmFtZT5jVU53MDhxTCtJbHdoSmpBS1psOGtkcmZHazU0Wm4wNHFJR1lhTDZrS0Rmak1mdW1keFFQU1hFVk14RzluTFM1ZzZrdEZLQkNSOGJsYmhMOGwrRFZaM1VFK0oyY2wyZXV0aWZ2WnlwWlowWlJOaGVQZWNDbWRUSkh0SzlrUXZjZkhVcnlsc0Q5Nk5WdXVFVk1ubWQxbDcwM21NL2VoNGdzbFFKRjRCYnFrbjA9PC9Vc2VyTmFtZT48UGFzc3dvcmQ+UzFJU1FOZEF4ZGQwV2YzVlUwZGo1dEVrK1ozcys3LzZ6Unl2aW81MWpPRXFXaldHSllZY1JuZjkwTWwvdW5mZlRiU1ZqNkxWVEZjQlM3K2dyclJXMjBZLzdyd3lhOGdGeGdCOEJPemlWUmswQ2FDdTZ2UHNxNTJMOStwd2dLU0ZxUGJGNzNoMEJmVkFOWHhHdHhDTkFKcTNhZDBjUEUybFVZRlBJTXAzQ3pjPTwvUGFzc3dvcmQ+PEJyYW5jaElkPlJET3ZEaDA2djFIQ0Fjc1NDcTVjeUFqbFpTOGJDMjF6cGk4b2JoaFJHMlJXR3BKQS9qNVlqWEEzWS91QWdBOWhMSzRrUy9raisrL0RsVHM3azQ1TFlCQ05ZOG14bEc2Z0dobGxYTHJTM256SE44bi8zS1VJdU0ycVVMb2paVnYzdVhLSmhnTXRqdEw0YkIxeWJlUUo1UG1sWlhmc3o0RFNFSFNaN0dsTThZVT08L0JyYW5jaElkPjwvQXV0aGVudGljYXRpb24+'
        }
    });
    try {
        let data = await response.text();
        alert(data);
        let obj = JSON.parse(data);
        var textSet = '';
        textSet += '<tr>';
        textSet += '<th><b>Name</b></th>';
        textSet += '<th><b>IsoCode</b></th>';
        textSet += '<th><b>HasTown</b></th>';
        textSet += '</tr>';
        for (i = 0; i < obj.length; i++) {
            textSet += '<tr>';
            textSet += '<td>' + obj[i].Name + '</td>';
            textSet += '<td>' + obj[i].IsoCode + '</td>';
            textSet += '<td>' + obj[i].HasTown + '</td>';
            textSet += '</tr>';
        }
        document.getElementById('tableData').innerHTML = textSet;
    }
    catch (error) {
        alert(error.message);
    }
}

async function windowSize() {
    document.getElementById('screen').style.height = (window.innerHeight - 75) + 'px';
    document.getElementById('screen').style.overflow = scroll;
}
