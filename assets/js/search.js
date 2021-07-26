(function(){

    var searchBox = document.getElementById("search-box");
    var searchResultsNumber = document.getElementById("search-results-number");
    var searchCard = document.getElementById("search-card");
    
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
        console.log("top");
        console.log(searchResults);

        // Select top results only
        // const selectedSearchResults = searchResults.slice(0,2);
        // console.log("Top 2 only")
        // console.log(selectedSearchResults);
        updatedSearchText = searchText.trim().length;
        console.log(updatedSearchText);

        if (updatedSearchText > 0 && searchResults.length === 0) {
            searchCard.classList.remove("active");
            searchResultsNumber.classList.add("active");

            while (searchResultsNumber.firstChild) {
                searchResultsNumber.removeChild(searchResultsNumber.firstChild)
            }
            const searchResultsNumberContent = document.createElement("p");
            searchResultsNumberContent.textContent = "No results found.";
            searchResultsNumber.append(searchResultsNumberContent);
        }
        
        else if (searchText.length > 0 && searchText.trim() != "" && searchResults.length > 0) {
            searchResultsNumber.classList.remove("active");
            searchCard.classList.add("active");
            console.log(searchResults);

            while (searchCard.firstChild) {
                searchCard.removeChild(searchCard.firstChild);
            }
            searchResults.forEach(searchResult => {
                const resultsBoxContent = document.createElement("p");
                resultsBoxContent.textContent = searchResult.title;
                // resultsBoxContent.href = searchResult.url;
                searchCard.append(resultsBoxContent);
            });

        } 
        else {
            searchResults = [];
            // resultBox.innerHTML = '';
            searchCard.innerText = '';
            searchResultsNumber.classList.remove("active");
        }

    };

    // Show search results
    // const outputHtml = searchResults => {
    //     if (searchResults.length > 0) {
    //         const html = searchResults.map(searchResult => `
    //         <div class="search-card">
    //             <a href="${searchResult.url}">${searchResult.title}</a>
    //         </div>
    //         `)
    //         .join('');

    //     resultBox.innerHTML = html;
    //     }
    // }
    
    searchBox.addEventListener('input', () => dataToSearch(searchBox.value));
        
    })();