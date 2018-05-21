
var q;
// var beginDate="19900213";
// var endDate="20180101";
var apiKey="4ce897641c3446babede737c831ec9ad";
var numRecords;

           $("#search-button").on("click", function(event) {
                console.log("hhhhhh");
                event.preventDefault();
                q= $("#search-term").val().trim();
                beginDate=$("#start-year").val();
              endDate=$("#end-year").val();
               numRecords=$("#num-records").val().trim();
                console.log(q);
                var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4ce897641c3446babede737c831ec9ad&q="+q+"&begin_date="+beginDate+"&end_date="+endDate;
                $.ajax({
                    url: url,
                    method: "GET"
                })
                    .then(function (response) {
                       // console.log(response);
                       var results=response.response.docs;
                      for(var i=0;i<numRecords;i++)
                      {    var p1=$("<p class='p-3'>").text(JSON.stringify(response.response.docs[i].headline.print_headline));
                           var p2= $("<p class='p-3'>").text(JSON.stringify(response.response.docs[i].web_url));
                           var div=$("<div class='data '>");
                           div.append([p1,p2]);
                           $("#data").prepend(div);
                       }
                       console.log(response.response.docs);
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
        
                  
            })



          

