const adUrls = [
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/monstera-200cm/2820262365-89-9436",
    category: "Plants",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/calethea-100cm/2820272219-89-9436",
    category: "Plants",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/pflanztier-faultier/2786191384-246-9436",
    category: "Plants",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/uebertoepfe/2789317986-246-9436",
    category: "Plants",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/makramee-blumenampel/2753680030-89-9436",
    category: "Plants",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/everlasting-wet-palette-kickstarter-edition/2861823768-249-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/fahrradbremsen/2865419968-217-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/kettenoel-mit-green-disc/2865416170-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/360-fahrradreflektoren/2865410755-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/inline-skate-schuhe-mit-knie-und-handschuetzer/2865406034-187-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/frisbee-verschiedene-farben/2864929009-23-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/luftpumpen/2864927971-217-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/yogamatte-blau/2864778858-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/yogamatte-grau/2864776569-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/speedpaint-2-0-megaset-mit-pinseln-und-zubehoer/2861842513-249-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/fendga-kompressor-mit-airbrush-set-mit-zubehoer/2861815360-249-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/box-throne-brettspiel-regal/2844933137-88-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/lenkdrachen-fastrider-skymonkey/2832319397-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/schwimmbrille-speedo-iqfit/2832328148-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/schwimmbrille-speedo/2832326992-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ball-luftpumpe/2832322641-230-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/katakomben-kastelle-mit-der-erweiterung-festen-und-verliese/2670021382-242-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/fahrradhelm-bell-avenue/2864782111-217-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/handyhalter-fuer-das-fahrrad/2867286195-217-9436",
    category: "Hobbies",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/canon-ts5050-drucker-scanner/2865617508-225-9436",
    category: "Office",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ergonomischer-buerostuhl/2864924452-93-9436",
    category: "Office",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ikea-motrop-zeitschriftenaufbewahrung/2864911760-88-9436",
    category: "Office",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/laptoptasche-vintage/2436476728-156-9436",
    category: "Office",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/flash-mob-bluetooth-speaker/2865620577-168-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/beutelloser-staubsauger/2864931578-176-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/steam-link-mit-ladegeraet/2864918114-225-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/multi-platform-controller-8bitdo-pro-2/2864914059-279-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/lautsprecher-inspire-t10/2669993399-172-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/bluetooth-box-dockin-d-fine/2821085889-172-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/armbanduhr-olivia-burton/2670132776-157-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/gehaeuseluefter-mit-mainboard-zubehoer/2867058404-225-9436",
    category: "Electronic",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/holzbretter/2865390176-84-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/lampen-gluehbirnenset-warmlicht/2864721466-82-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/tageslicht-gluehbirne-3080-lumen/2864704496-82-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/holzlack-und-farbenset/2864691712-282-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/maler-set-zum-streichen-von-waenden/2864678711-282-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/led-strip-alle-farben/2829038733-82-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/holz-tischbeine-80cm/2670023655-87-9436",
    category: "DIY",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/wollteppich-160x230cm/2864771619-90-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/zuiver-white-stone-s/2864728694-88-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ikea-flata/2864714595-91-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/wolldecke-h-m-home/2864696806-90-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/vintage-schalenstuhl-original-70er/2864062448-86-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ercol-quaker-dining-armchair/2864017590-86-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/terazzo-tablett-vase-humdakin/2786744634-246-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/pinnwand-mit-stoff-und-pins/2867274747-246-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/wandregal-bretter/2867049302-88-9436",
    category: "Furniture",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/regenschutz-backpack-tatonka/2830674983-156-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/wanderschuhe-groesse-46-marke-landrover/2773074550-158-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/xxl-picknickdecke/2864925369-187-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/rankengitter/2867122167-89-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/designer-balkon-blumentopf-in-gruen-und-beige/2867023614-89-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/runder-blumentopf-fuer-den-balkon-mit-halterung-fuer-das-gelaender/2867021086-89-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/balkontopf-mit-halterung/2867018566-89-9436",
    category: "Outdoor",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/orson-scott-prequel-to-ender-game-series-earth-awakens/2830687358-76-9436",
    category: "Books",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/asimov-das-foundation-projekt/2830691804-76-9436",
    category: "Books",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/powers-erste-staffel/2830690472-79-9436",
    category: "Books",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/2-cocktail-shaker/2864918499-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/xiaomi-wasserkocher/2864916360-176-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/elektrische-salz-pfeffermuehle-russel-hobbes/2863990497-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ikea-risatorp/2863985267-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/verschiedene-schnapsglaeser/2863979453-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/kleines-glas-22cl-granit/2863974416-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ikea-dyrgrip/2863969960-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/kupferbecher-strohhalm/2863963619-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/ikea-skala/2863952743-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/13-flaschen-250ml/2433268214-87-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/vorratsglaeser/2786746978-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/verkaufe-verschiedene-vorratsglaeser-und-kleinere-flaschen/2867072880-86-9436",
    category: "Kitchen",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/leggins-schwarz/2688847812-154-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/schuhspanner-vintage/2795656525-156-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/langarm-shirt/2673228036-154-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/vintage-fellmantel-faux-fur-/2670558968-154-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/schnuerschuhe/2670878409-158-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/nike-leggins-dry-fit/2670684068-154-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/topshop-joni-tall/2670678148-154-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/grauer-wollmantel/2670530819-160-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/echtleder-keil-stiefeletten-braun/2785818095-159-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/plateau-high-heels/2785821555-159-9436",
    category: "Clothes",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.vinted.de/items/5052333052-dr-martens-1460",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4805828151-langere-bomberjacke",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4679293979-roter-spitzen-bh-figleaves",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4679252173-figleaves-pimlico",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4679241313-schuhspanner-vintage",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4635148997-terazzo-tablett-vase-humdakin",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4616791529-langarm-pulli",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4616784228-strickkleid",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4616781419-blaues-leinenhemd",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4616654106-jumpsuit-yoga-bodysuit",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4615291910-kette-morsezeichen",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4328695186-perlen-choker-kette-toggle-luv-mei",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4142382492-schwarze-leggins",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4072028226-braunes-langarm-shirt",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4061045836-schnurschuhe",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4060025857-figleaves-pimlico-bh-mesh",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4059781558-grauer-wollmantel",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4058115570-uhr-olivia-burton",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/4057804300-vintage-fake-fur-mantel-schwarz",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/2960428774-nike-leggins-dry-fit",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/2957916403-topshop-joni-tall",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/1505302712-plateau-high-heels",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.vinted.de/items/1505243757-echtleder-keil-stiefeletten-braun",
    category: "Clothes",
    source: "Vinted",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/foehn-mit-ausziehbarem-kabel/2867287621-176-9436",
    category: "Bathroom",
    source: "Kleinanzeigen",
  },
  {
    url: "https://www.kleinanzeigen.de/s-anzeige/waeschestaender-mit-waescheklammern/2867041234-87-9436",
    category: "Bathroom",
    source: "Kleinanzeigen",
  },
];

// Function to fetch ad details and extract meta tags
async function fetchAdDetails(adUrl) {
  try {
    const proxyUrl = "https://corsproxy.io/?";
    const response = await fetch(proxyUrl + encodeURIComponent(adUrl));
    const htmlText = await response.text();

    // Parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, "text/html");

    // Extract meta tag information
    const title = doc
      .querySelector('meta[property="og:title"]')
      ?.getAttribute("content");
    const description = doc
      .querySelector('meta[property="og:description"]')
      ?.getAttribute("content");
    const imageUrl =
      doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ||
      "";

    // Check if ad is unavailable (missing title or description)
    if (!title || !description) {
      console.warn(`Ad not available or removed: ${adUrl}`);
      return null; // Return null if ad details are incomplete
    }

    return { title, description, imageUrl, advertUrl: adUrl };
  } catch (error) {
    console.error("Error fetching ad details:", error);
    return null;
  }
}

async function loadAds() {
  const adsContainer = document.getElementById("ads-container");
  if (!adsContainer) {
    console.error("Ads container not found");
    return;
  }

  adsContainer.innerHTML = "";

  for (const ad of adUrls) {
    const adDetails = await fetchAdDetails(ad.url);
    if (adDetails) {
      // Create a card for the ad
      const card = document.createElement("div");
      card.className = "bg-white shadow-lg rounded-lg overflow-hidden card";
      card.dataset.category = ad.category; // Set category for filtering

      const image = document.createElement("img");
      image.className = "w-full h-64 object-cover";
      image.src = adDetails.imageUrl;
      image.alt = adDetails.title;

      const cardContent = document.createElement("div");
      cardContent.className = "p-6";

      const cardTitle = document.createElement("h3");
      cardTitle.className = "text-xl font-semibold mb-2";
      cardTitle.textContent = adDetails.title;

      const cardDescription = document.createElement("p");
      cardDescription.className = "text-gray-600 mb-4";
      cardDescription.textContent = adDetails.description;

      const cardLink = document.createElement("a");
      cardLink.className =
        "inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600";
      cardLink.href = adDetails.advertUrl;
      cardLink.target = "_blank";
      cardLink.textContent = `View on ${ad.source}`;

      cardContent.appendChild(cardTitle);
      cardContent.appendChild(cardDescription);
      cardContent.appendChild(cardLink);
      card.appendChild(image);
      card.appendChild(cardContent);

      // Append the card to the container
      adsContainer.appendChild(card);
    }
  }
}

function filterAds(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    if (category === "All" || card.dataset.category === category) {
      card.style.display = "block"; // Show card
    } else {
      card.style.display = "none"; // Hide card
    }
  });
}

// Expose the filter function globally
window.filterAds = filterAds;

// Load all ads when the page loads
loadAds();
