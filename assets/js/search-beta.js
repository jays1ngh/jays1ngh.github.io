(function(){

    var searchBox1 = document.getElementById("search-box1");
    var resultBox1 = document.getElementById("search-results1");
    
    const dataToSearch = async searchText => {
        const response = await fetch('../search/search.json');
        const allDataResults = await response.json();
        if (response.status !==200) {
            throw new console.error("Something went wrong with the search!");
        }
        
        let searchResults = allDataResults.filter(dataResult =>{
            if (dataResult.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1) {
                return true;
            }
        });
        
        if (searchText.length > 3 && searchText.trim() != "" && searchResults.length > 0) {

        outputHtml(searchResults);
        } 
        else {
            console.log("Should remove inner html");
            searchResults = [];
            resultBox1.innerHTML = '';
        }

        console.log("Sorted results");
        console.log(searchResults);
    };

    // Show search results
    const outputHtml = searchResults => {
        if (searchResults.length > 0) {
            const html = searchResults.map(searchResult => `
            <div class="search-card">
                <a href="${searchResult.url}">${searchResult.title}</a>
            </div>
            `)
            .join('');

        resultBox1.innerHTML = html;
        }
    }
    
    searchBox1.addEventListener('input', () => dataToSearch(searchBox1.value));
        
    })();