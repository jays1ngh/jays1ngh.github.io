(function(){

    var searchBox = document.getElementById("search-box");
    var resultBox = document.getElementById("search-results");
    
    const dataToSearch = async searchText => {
        const response = await fetch('/search.json');
        const allDataResults = await response.json();
        if (response.status !==200) {
            throw new console.error("Something went wrong with the search!");
        }
        
        let searchResults = allDataResults.filter(dataResult =>{
            if (dataResult.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1) {
                return true;
            }
        });

        // Select top results only
        // const selectedSearchResults = searchResults.slice(0,2);
        // console.log("Top 2 only")
        // console.log(selectedSearchResults);
        
        if (searchText.length > 2 && searchText.trim() != "" && searchResults.length > 0) {

        outputHtml(searchResults);
        } 
        else {
            searchResults = [];
            resultBox.innerHTML = '';
        }

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

        resultBox.innerHTML = html;
        }
    }
    
    searchBox.addEventListener('input', () => dataToSearch(searchBox.value));
        
    })();