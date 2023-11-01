// Get the input field element by its ID
var inputField = document.getElementById("search-input"); // Replace with the actual ID of your input field

// Get the "results-count_wrapper" div by its ID
var resultsCountWrapper = document.getElementById("results-count_wrapper");
resultsCountWrapper.style.display = "none";

// Get the element where you want to display the input text
var resultsCountTextSearchInput = document.getElementById("results-count-text_search-input");

// Get the element where you want to display the categories or collections value
var resultsCountTextCollection = document.getElementById("results-count-text_collection");

// Get all checkboxes inside the integration-feature_filters div
var checkboxes = document.querySelectorAll(".integration-feature_filters input[type='checkbox']");

// Get all radios inside the integration-feature_filters div
var radios = document.querySelectorAll(".integration-feature_filters input[type='radio']");


//
// Active class behaviour
//
// Function to add the span element with styles
function addSpanToActiveRadio(radioElement) {
    const spanElement = document.createElement("span");
    spanElement.innerHTML = "•";
    spanElement.style.position = "absolute";
    spanElement.style.left = "-0.75rem";
    spanElement.style.color = "#fa4338";
    spanElement.classList.add("active-dot"); // Add a custom class for the span
    radioElement.appendChild(spanElement);
}

// Function to remove the span element
function removeSpanFromRadio(radioElement) {
    const spanElement = radioElement.querySelector(".active-dot");
        if (spanElement) {
            radioElement.removeChild(spanElement);
        }
}

// Function to remove all spans from all radio elements
function removeAllSpansFromAllRadios() {
    const integrationRadioElements = document.querySelectorAll(".integration-radio");
    integrationRadioElements.forEach(element => {
        removeSpanFromRadio(element);
    });
}

// Create link for "See all" in the .integrations-collections-landing_wrapper and add query parameter to URL
function createCollectionsLandingLink() {
    // Get all elements with class "integrations-collections-landing_wrapper"
    var sectionWrappers = document.querySelectorAll(".integrations-collections-landing_wrapper");

    // Loop through each section wrapper
    sectionWrappers.forEach(function (wrapper) {
        // Get the h2 element and link within the current section wrapper
        var titleElement = wrapper.querySelector(".integrations-collections-landing_title-wrapper h2");
        // console.log(titleElement);
        var addQueryLink = wrapper.querySelector(".integrations-collections-landing_title-wrapper a");
        // console.log(addQueryLink);

        // Extract the title text and convert it to the query value
        var titleText = titleElement.textContent;
        var queryValue = titleText.replace(/ /g, "+");

        // Add an event listener to the link to update the URL with the query when clicked
        addQueryLink.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent the default link behavior

            // Update the URL with the "?collections=" query
            var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
            history.pushState({}, "", newURL);

            // Optionally, you can reload the page to reflect the updated URL
            window.location.reload();
        });
    });
}

// Function to create a link for the button in the special landing collections to be linked to specific collection
function createSpecialCollectionsLandingLink() {
    let specialCollections = document.querySelectorAll(".collections-special-landing_left")

    specialCollections.forEach(function (collection) {
        let buttonLink = collection.querySelector("a");
        let collectionName = collection.querySelector(".collections-special-landing_collection-name");

        let collectionNameText = collectionName.textContent;

        collectionName.style.display = 'none';


        var queryValue = collectionNameText.replace(/ /g, "+");

        buttonLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Update the URL with the "?collections=" query
            var newURL = window.location.href.split("?")[0] + "?collections=" + queryValue;
            history.pushState({}, "", newURL);

            window.location.reload();
        });
    });
}

function updateResultsCount() {
    // Get the parent div by its ID
    let integrationsList = document.getElementById('integrations-list');
    
    // Count the number of direct children with class .integrations_item
    let itemCount = integrationsList.querySelectorAll(':scope > .integrations_item').length;

    // Get the results count div
    let resultsCountDiv = document.getElementById('results-count');

    // Display the count
    resultsCountDiv.textContent = itemCount;

    // For debugging purposes
    // console.log('Item count:', itemCount);
    // console.log('Integrations List:', integrationsList);

    let emptyStateDiv = document.getElementById('empty-state');
    if (itemCount > 0) {
        emptyStateDiv.style.display = 'none';
    } else {
        emptyStateDiv.style.display = 'block';
    }
}

function handleCheckboxChange() {
    // console.log("running function handleCheckboxChange");
    toggleResultsCount(); // Call the toggle function when a checkbox is changed
}

function handleRadioChange() {
    // console.log("running function handleRadioChange");
    
    setTimeout(toggleResultsCount, 100); // Call the toggle function when a checkbox is changed
}

function anyCheckboxChecked() {
    // Check if any checkbox is checked
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) return true;
    }
    return false;
}

// Function to show or hide the "results-count_wrapper" div based on input field value
function toggleResultsCount() {
    var inputText = inputField.value.trim(); // Get the trimmed input field value
    if (inputText.length > 0) { // Check if something is typed in
        resultsCountTextSearchInput.textContent = 'for "' + inputText + '"'; // Display the input text surrounded by quotation marks
    } else {
        resultsCountTextSearchInput.textContent = ""; // Clear the text if nothing is typed in
    }

    var urlParams = new URLSearchParams(window.location.search);

    var integrationsValue = urlParams.get("integrations");
    
    var collectionsValue = urlParams.get("collections");
    
    var categoriesValue = urlParams.get("categories");
    

    if (integrationsValue !== null && inputText !== "" || anyCheckboxChecked()) {
        resultsCountWrapper.style.display = "block"; // Show the "results-count_wrapper" div when conditions are met
    } else {
        resultsCountWrapper.style.display = "none"; // Hide the "results-count_wrapper" div otherwise
    }

    if (collectionsValue !== null) {
        // Replace "+" with " " and display the collections value within quotation marks
        resultsCountTextCollection.textContent = 'in "' + collectionsValue.replace(/\+/g, " ") + '"';
    } else if (categoriesValue !== null) {
        // Replace "+" with " " and display the categories value within quotation marks
        resultsCountTextCollection.textContent = 'in "' + categoriesValue.replace(/\+/g, " ") + '"';
    } else {
        // If neither parameter is present, clear the text in the div
        resultsCountTextCollection.textContent = "";
    }

    // console.log(integrationsValue);
    // console.log(collectionsValue);
    // console.log(categoriesValue);
}


window.fsAttributes = window.fsAttributes || [];

// Flags to check if the scripts have loaded
let cmsfilterLoaded = false;
let cmsnestLoaded = false;

// Common function to check if both scripts are loaded, then run your logic
function runMyScript() {
  if (cmsfilterLoaded && cmsnestLoaded) {
    // console.log('Both cmsfilter and cmsnest have loaded.');

    createCollectionsLandingLink();
    createSpecialCollectionsLandingLink();
    updateResultsCount()

    
    // Add event listeners to all checkboxes
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", handleCheckboxChange);
    });

    // Add event listeners to all radios
    radios.forEach(function(radio) {
        radio.addEventListener("change", handleRadioChange);
    });



    // Target element with class .integration-radio
    const integrationRadioElements = document.querySelectorAll(".integration-radio");

    // Initial check for .is-active class upon page load
    integrationRadioElements.forEach(function (element) {
        if (element.classList.contains("is-active")) {
            addSpanToActiveRadio(element);
        }
    });

    document.getElementById("radio").addEventListener("change", function() {
        if (this.checked) {
            removeAllSpansFromAllRadios();
        }
    });

    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.target.classList.contains("is-active")) {
                // Check if the mutation target is the "All collections" label
                if (mutation.target.id === "all-collections") {
                    return; // If it is, we just skip
                }
                removeAllSpansFromAllRadios();
                addSpanToActiveRadio(mutation.target);
            }
        });
    });
    

    // Configure and start the MutationObserver for each .integration-radio element
    integrationRadioElements.forEach(function (element) {
        observer.observe(element, { attributes: true, attributeFilter: ["class"] }); // adding attributeFilter to specifically watch for class changes
    });

    // Trigger the function on page load in case there are existing query parameters or initial input
    toggleResultsCount();

    // Add an event listener to the input field to detect when someone types or deletes text
    inputField.addEventListener("input", toggleResultsCount);

    window.addEventListener("popstate", toggleResultsCount);

    // Update the results count
    // updateResultsCount();
    const integrationsListObserver = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                updateResultsCount();  // Update the count when a direct child is added or removed from #integrations-list
            }
        });
    });

    const integrationsList = document.getElementById('integrations-list');
    if (integrationsList) {
        // Start observing #integrations-list for adding/removing direct children
        integrationsListObserver.observe(integrationsList, { childList: true });
    }

  }
}

// Callback for cmsfilter
window.fsAttributes.push([
    'cmsfilter',
    (listInstances) => {
    //   console.log('cmsfilter Successfully loaded!');
      window.fsAttributes.cmsfilter.init();
      cmsfilterLoaded = true;
      runMyScript();
    },
]);
  
// Callback for cmsnest
window.fsAttributes.push([
    'cmsnest',
    (listInstances) => {
    // console.log('cmsnest Successfully loaded!');
    // window.fsAttributes.cmsnest.init();
    cmsnestLoaded = true;
    runMyScript();
    },
]);