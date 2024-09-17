const adUrls = [
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/monstera-200cm/2820262365-89-9436', 
        category: 'Plants' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/calethea-100cm/2820272219-89-9436', 
        category: 'Plants' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/pflanztier-faultier/2786191384-246-9436', 
        category: 'Plants' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/everlasting-wet-palette-kickstarter-edition/2861823768-249-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/drei-fahrrad-schlaeuche-28-/2865456985-217-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/fahrradbremsen/2865419968-217-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/kettenoel-mit-green-disc/2865416170-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/360-fahrradreflektoren/2865410755-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/inline-skate-schuhe-mit-knie-und-handschuetzer/2865406034-187-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/kleine-hanteln/2864933641-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/frisbee-verschiedene-farben/2864929009-23-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/luftpumpen/2864927971-217-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/yogamatte-blau/2864778858-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/yogamatte-grau/2864776569-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/speedpaint-2-0-megaset-mit-pinseln-und-zubehoer/2861842513-249-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/fendga-kompressor-mit-airbrush-set-mit-zubehoer/2861815360-249-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/box-throne-brettspiel-regal/2844933137-88-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/lenkdrachen-fastrider-skymonkey/2832319397-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/schwimmbrille-speedo-iqfit/2832328148-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/schwimmbrille-speedo/2832326992-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ball-luftpumpe/2832322641-230-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/katakomben-kastelle-mit-der-erweiterung-festen-und-verliese/2670021382-242-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/fahrradhelm-bell-avenue/2864782111-217-9436',
        category: 'Hobbies' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/canon-ts5050-drucker-scanner/2865617508-225-9436',
        category: 'Office' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/pegboard-skadis-ikea/2865611529-93-9436',
        category: 'Office' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ergonomischer-buerostuhl/2864924452-93-9436',
        category: 'Office' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ikea-motrop-zeitschriftenaufbewahrung/2864911760-88-9436',
        category: 'Office' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/laptoptasche-vintage/2436476728-156-9436',
        category: 'Office' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/flash-mob-bluetooth-speaker/2865620577-168-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/beutelloser-staubsauger/2864931578-176-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/steam-link-mit-ladegeraet/2864918114-225-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/multi-platform-controller-8bitdo-pro-2/2864914059-279-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/lautsprecher-inspire-t10/2669993399-172-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/bluetooth-box-dockin-d-fine/2821085889-172-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/armbanduhr-olivia-burton/2670132776-157-9436',
        category: 'Electronic' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/holzbretter/2865390176-84-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/kupferrohre-mit-verbindungsteile/2864729460-84-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/lampen-gluehbirnenset-warmlicht/2864721466-82-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/tageslicht-gluehbirne-3080-lumen/2864704496-82-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/holzlack-und-farbenset/2864691712-282-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/maler-set-zum-streichen-von-waenden/2864678711-282-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/led-strip-alle-farben/2829038733-82-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/holz-tischbeine-80cm/2670023655-87-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/uebertoepfe/2789317986-246-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/makramee-blumenampel/2753680030-89-9436',
        category: 'DIY' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/glamouroeser-ohrensessel/2864938269-88-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/sattelhocker/2864908549-93-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/wollteppich-160x230cm/2864771619-90-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/zuiver-white-stone-s/2864728694-88-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ikea-flata/2864714595-91-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/wolldecke-h-m-home/2864696806-90-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/vintage-schalenstuhl-original-70er/2864062448-86-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ercol-quaker-dining-armchair/2864017590-86-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/terazzo-tablett-vase-humdakin/2786744634-246-9436',
        category: 'Furniture' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/campingstuhl/2864662415-230-9436',
        category: 'Outdoor' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/4-personen-camping-zelt-justcamp/2864656886-230-9436',
        category: 'Outdoor' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/regenschutz-backpack-tatonka/2830674983-156-9436',
        category: 'Outdoor' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/wanderschuhe-groesse-46-marke-landrover/2773074550-158-9436',
        category: 'Outdoor' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/xxl-picknickdecke/2864925369-187-9436',
        category: 'Outdoor' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/orson-scott-prequel-to-ender-game-series-earth-awakens/2830687358-76-9436',
        category: 'Books' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/asimov-das-foundation-projekt/2830691804-76-9436',
        category: 'Books' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/powers-erste-staffel/2830690472-79-9436',
        category: 'Books' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/2-cocktail-shaker/2864918499-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/xiaomi-wasserkocher/2864916360-176-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/elektrische-salz-pfeffermuehle-russel-hobbes/2863990497-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ikea-risatorp/2863985267-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/verschiedene-schnapsglaeser/2863979453-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/kleines-glas-22cl-granit/2863974416-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ikea-dyrgrip/2863969960-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/kupferbecher-strohhalm/2863963619-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/ikea-skala/2863952743-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/13-flaschen-250ml/2433268214-87-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/vorratsglaeser/2786746978-86-9436',
        category: 'Kitchen' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/leggins-schwarz/2688847812-154-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/schuhspanner-vintage/2795656525-156-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/langarm-shirt/2673228036-154-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/vintage-fellmantel-faux-fur-/2670558968-154-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/schnuerschuhe/2670878409-158-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/nike-leggins-dry-fit/2670684068-154-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/topshop-joni-tall/2670678148-154-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/grauer-wollmantel/2670530819-160-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/echtleder-keil-stiefeletten-braun/2785818095-159-9436',
        category: 'Clothes' 
    },
    { 
        url: 'https://www.kleinanzeigen.de/s-anzeige/plateau-high-heels/2785821555-159-9436',
        category: 'Clothes' 
    },
];

// Function to fetch ad details and extract meta tags
async function fetchAdDetails(adUrl) {
    try {
        const proxyUrl = 'https://corsproxy.io/?';
        const response = await fetch(proxyUrl + encodeURIComponent(adUrl));
        const htmlText = await response.text();

        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // Extract meta tag information
        const title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
        const description = doc.querySelector('meta[property="og:description"]')?.getAttribute('content');
        const imageUrl = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';

        // Check if ad is unavailable (missing title or description)
        if (!title || !description) {
            console.warn(`Ad not available or removed: ${adUrl}`);
            return null; // Return null if ad details are incomplete
        }

        return { title, description, imageUrl, advertUrl: adUrl };
    } catch (error) {
        console.error('Error fetching ad details:', error);
        return null;
    }
}

// Dynamically load ads into the grid based on category
async function loadAds(category = null) {
    const adsContainer = document.getElementById('ads-container');
    adsContainer.innerHTML = '';  // Clear the container before loading new ads

    for (const ad of adUrls) {
        if (!category || ad.category === category) {  // Filter ads by category
            const adDetails = await fetchAdDetails(ad.url);
            if (adDetails) {
                // Create card
                const card = document.createElement('div');
                card.className = 'bg-white shadow-lg rounded-lg overflow-hidden';

                const image = document.createElement('img');
                image.className = 'w-full h-64 object-cover';
                image.src = adDetails.imageUrl;
                image.alt = adDetails.title;

                const cardContent = document.createElement('div');
                cardContent.className = 'p-6';

                const cardTitle = document.createElement('h3');
                cardTitle.className = 'text-xl font-semibold mb-2';
                cardTitle.textContent = adDetails.title;

                const cardDescription = document.createElement('p');
                cardDescription.className = 'text-gray-600 mb-4';
                cardDescription.textContent = adDetails.description;

                const cardLink = document.createElement('a');
                cardLink.className = 'inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600';
                cardLink.href = adDetails.advertUrl;
                cardLink.target = '_blank';
                cardLink.textContent = 'Geh zu Kleinanzeigen';

                // Append elements to the card
                cardContent.appendChild(cardTitle);
                cardContent.appendChild(cardDescription);
                cardContent.appendChild(cardLink);
                card.appendChild(image);
                card.appendChild(cardContent);

                // Add card to the container
                adsContainer.appendChild(card);
            }
        }
    }
}

// Function to filter ads by category
function filterByCategory(category) {
    loadAds(category);
}

window.filterByCategory = filterByCategory;

// Load all ads when the page loads
loadAds();

// Example: To filter by category, you can call filterByCategory('Plants');
