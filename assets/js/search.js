(function () {
    // Select the required elements 
    var searchBox = document.getElementById("search-box");
    var searchResultsNumber = document.getElementById("search-results-number");
    var searchCard = document.getElementById("search-card");

    // Fetch data for search
    const dataToSearch = async searchText => {
        const response = await fetch('/search.json');
        const allDataResults = await response.json();
        if (response.status !== 200) {
            throw new console.error("Something went wrong with the search!");
        }

        let searchResults = allDataResults.filter(dataResult => {
            if (dataResult.title.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1) {
                return true;
            }
        });

        // Select top results only
        // const selectedSearchResults = searchResults.slice(0,2);
        // console.log("Top 2 only")
        // console.log(selectedSearchResults);

        // Get the length of typed search text
        var updatedSearchText = searchText.trim().length;

        // show message no results found if no search matches found
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

        // show search matches
        else if (searchText.length > 0 && searchText.trim() != "" && searchResults.length > 0) {
            searchResultsNumber.classList.remove("active");
            searchCard.classList.add("active");
            console.log(searchResults);

            while (searchCard.firstChild) {
                searchCard.removeChild(searchCard.firstChild);
            }
            searchResults.forEach(searchResult => {
                const searchCardLi = document.createElement("li");
                const searchCardA = document.createElement("a");
                searchCardA.setAttribute("href", searchResult.url);
                searchCardA.innerText = searchResult.title;
                searchCardLi.appendChild(searchCardA);
                searchCard.append(searchCardLi);
            });

        }

        // Clear the unwanted results
        else {
            searchResults = [];
            searchCard.innerText = '';
            searchResultsNumber.classList.remove("active");
        }

    };

    // Reads the input typed in the search
    searchBox.addEventListener('input', () => dataToSearch(searchBox.value));

})();