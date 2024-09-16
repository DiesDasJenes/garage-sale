// Example data structure
const ads = {
    pflanzen: [
        {
            title: "Monstera 200cm - For Sale",
            description: "Check out this beautiful 200cm tall Monstera plant available for sale!",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/72/7277904a-fc9e-4f6f-9df0-4ff3ea44d1d6?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/monstera-200cm/2820262365-89-9436"
        }
    ],
    // You can add more categories and adverts
    electronics: [
        {
            title: "Flashmob Bluetooth speaker",
            description: "Zustand ist in Ordnung. Die Batterie ist schon etwas runter aber funktioniert noch gut.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/bb/bbbeafc5-0500-4be8-9e6b-7d2d9664109f?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/flash-mob-bluetooth-speaker/2865620577-168-9436"
        }
    ],
    Büro: [
        {
            title: "Pegboard Skadis Ikea",
            description: "Verkaufe zwei Skadis Ikea Pegboards. Es können auch Teile dieses Angebots gekauft werden.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/4b/4b15b90f-7913-4ef6-af08-ac0e52bf600b?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/pegboard-skadis-ikea/2865611529-93-9436"
        }
    ],
    Camping: [
        {
            title: "Campingstuhl",
            description: "Gern gegen ne Tüte Haribo oder nen 5er zu verschenken.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/04/0452599b-1a1d-4893-adaa-880f0655dbcd?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/campingstuhl/2864662415-230-9437"
        },
        {
            title: "4 Personen Camping Zelt von Justcamp",
            description: "Alles vorhanden. 4 Personen leicht, stabil, wasserdicht, doppelwandig Kuppelzelt mit verschließbarem Vorzelt.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/13/1329b809-cff2-4d5e-b874-e3b43473251f?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/4-personen-camping-zelt-justcamp/2864656886-230-9436"
        }
    ],
    Hobby: [
        {
            title: "Speedpaint 2.0 Megaset mit Pinseln und Zubehör",
            description: "Die Farben sind gut gefüllt. Aufgrund der Menge kam ich nicht dazu allzu viel zu verbrauchen. Es gibt zusätzlich noch Farben die ich nach gekauft habe und noch von Citadel. Die Pinsel sind in gutem Zustand. Da gibt es noch eine Reinigungscremes für die Pinsel dazu.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/0f/0f603b93-8895-4bd9-9616-37e7292b1991?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/speedpaint-2-0-megaset-mit-pinseln-und-zubehoer/2861842513-249-9436"
        },
        {
            title: "Everlasting Wet Palette Kickstarter Edition",
            description: "Perfekt für alle bei denen die Farben beim Malen austrocknen. Nur ein foam pad wurde bisher verbraucht.",
            imageUrl: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/9e/9e4d84f9-7540-4a34-a87c-2a1f2e145659?rule=$_59.JPG",
            advertUrl: "https://www.kleinanzeigen.de/s-anzeige/everlasting-wet-palette-kickstarter-edition/2861823768-249-9436"
        }
    ],
};

// Dynamically load categories into the sidebar
const categoryList = document.getElementById("category-list");
Object.keys(ads).forEach(category => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "w-full py-2 px-4 bg-gray-200 rounded hover:bg-gray-300";
    button.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    button.onclick = () => loadAds(category);
    li.appendChild(button);
    categoryList.appendChild(li);
});

// Function to load the adverts based on selected category
function loadAds(category) {
    const adsContainer = document.getElementById("ads-container");
    adsContainer.innerHTML = ""; // Clear the container before loading new ads

    ads[category].forEach(ad => {
        const card = document.createElement("div");
        card.className = "max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden";

        const image = document.createElement("img");
        image.className = "w-full h-64 object-cover";
        image.src = ad.imageUrl;
        image.alt = ad.title;

        const cardContent = document.createElement("div");
        cardContent.className = "p-6";

        const cardTitle = document.createElement("h3");
        cardTitle.className = "text-xl font-semibold mb-2";
        cardTitle.textContent = ad.title;

        const cardDescription = document.createElement("p");
        cardDescription.className = "text-gray-600 mb-4";
        cardDescription.textContent = ad.description;

        const cardLink = document.createElement("a");
        cardLink.className = "inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600";
        cardLink.href = ad.advertUrl;
        cardLink.target = "_blank";
        cardLink.textContent = "View on Kleinanzeigen";

        // Append all elements to the card
        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);
        cardContent.appendChild(cardLink);
        card.appendChild(image);
        card.appendChild(cardContent);
        adsContainer.appendChild(card);
    });
}

// Load the first category by default
loadAds("pflanzen");
