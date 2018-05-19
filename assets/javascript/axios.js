var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "4ce897641c3446babede737c831ec9ad",
 'q': "roosevelt",
 'begin_date': "20080721",
 'end_date': "20180820"
});



        $.ajax({
            url: url,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                console.log(JSON.stringify(response.response.docs));
            })
            .catch(function (error) {
                console.error(error);
            });