var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "71c307126f2b400d96f75a360e924d72"
        });

        $.ajax({
            url: url,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                console.log(response.docs);
            })
            .catch(function (error) {
                console.error(error);
            });