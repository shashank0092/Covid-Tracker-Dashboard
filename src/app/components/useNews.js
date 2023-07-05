const resultOfNewsSearch = async (countryName) => {
    const url = `https://coronavirus-smartable.p.rapidapi.com/news/v1/${countryName}/`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'be88ea1cf8msh70d26e62270510dp14610bjsn2014ca5670da',
            'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
        // console.log(result);
    } catch (error) {
        console.error(error);
    }
}

module.exports={
    resultOfNewsSearch

}