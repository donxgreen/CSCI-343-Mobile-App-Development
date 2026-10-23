# Section 9 destination data notes

The 20 vacation destinations are national parks across 10 countries. `yearFounded` is the park establishment/designation year, not the geological age of the landscape. Costs are illustrative USD per person per day, excluding travel to the country. Ratings are classroom dummy values out of five, not real customer reviews. These estimates are not sourced or presented as live travel quotes.

| Country | Destination | yearFounded | Primary history source |
| --- | --- | --- | --- |
| United States | Yellowstone National Park | 1872 | [National Park Service anniversaries](https://www.nps.gov/subjects/npscelebrates/park-anniversaries.htm) |
| United States | Yosemite National Park | 1890 | [National Park Service anniversaries](https://www.nps.gov/subjects/npscelebrates/park-anniversaries.htm) |
| Canada | Banff National Park | 1885 | [Parks Canada mountain park histories](https://www.canada.ca/en/parks-canada/news/2022/08/management-plans-for-the-mountain-national-parks-tabled-in-parliament.html) |
| Canada | Jasper National Park | 1907 | [Parks Canada mountain park histories](https://www.canada.ca/en/parks-canada/news/2022/08/management-plans-for-the-mountain-national-parks-tabled-in-parliament.html) |
| Australia | Royal National Park | 1879 | [NSW National Parks](https://www.nationalparks.nsw.gov.au/visit-a-park/parks/royal-national-park) |
| Australia | Blue Mountains National Park | 1959 | [NSW park management plan, reservation dates](https://www.environment.nsw.gov.au/sites/default/files/blue-mountains-np-kanangra-boyd-np-plan-of-management-240234.pdf) |
| New Zealand | Tongariro National Park | 1894 | [Department of Conservation history](https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/history-of-tongariro-national-park/) |
| New Zealand | Abel Tasman National Park | 1942 | [Department of Conservation history and culture](https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park) |
| Japan | Nikko National Park | 1934 | [Japan Ministry of the Environment](https://www.env.go.jp/en/np/index_2.html) |
| Japan | Fuji-Hakone-Izu National Park | 1936 | [Japan Ministry of the Environment](https://www.env.go.jp/en/np/index_2.html) |
| India | Jim Corbett National Park | 1936 | [Uttarakhand Tourism](https://www.uttarakhandtourism.gov.in/destination/corbett-national-park) |
| India | Kaziranga National Park | 1974 | [Government of Assam notification dates](https://forest.assam.gov.in/information-services/detail/data-of-wildlife) |
| Brazil | Iguacu National Park | 1939 | [ICMBio park history](https://www.gov.br/icmbio/pt-br/assuntos/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/lista-de-ucs/parna-do-iguacu/pagina/historia) |
| Brazil | Tijuca National Park | 1961 | [ICMBio creation decree](https://www.gov.br/icmbio/pt-br/assuntos/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/lista-de-ucs/parna-da-tijuca/decreto-de-criacao-do-parna-da-tijuca) |
| South Africa | Kruger National Park | 1926 | [SANParks history](https://www.sanparks.org/corporate/about/profile/history) |
| South Africa | Table Mountain National Park | 1998 | [SANParks natural and cultural history](https://www.sanparks.org/parks/table-mountain/explore/natural-cultural-history) |
| United Kingdom | Peak District National Park | 1951 | [Peak District facts](https://www.peakdistrict.gov.uk/learning-about/news/mediacentre/peak-district-facts) |
| United Kingdom | Lake District National Park | 1951 | [Lake District park history](https://lakedistrict.gov.uk/authority/contact-us/media-centre/history-of-the-lake-district-national-park/) |
| France | Vanoise National Park | 1963 | [Vanoise park history](https://www.vanoise-parcnational.fr/fr/parc-national-de-la-vanoise/les-60-ans-du-parc/60-ans-dactions-du-parc/un-peu-dhistoire) |
| France | Port-Cros National Park | 1963 | [Port-Cros park creation](https://www.portcros-parcnational.fr/fr/le-parc-national-de-port-cros/letablissement-public/la-creation-du-parc-national) |

Jasper's initial park/reserve establishment year is 1907, as reported by Parks Canada; its formal national park designation followed in 1930. Banff uses the agency's establishment year of 1885. Tongariro uses DOC's formal establishment year of 1894, rather than the 1887 protection agreement. Kruger uses formal national park creation in 1926 rather than its precursor reserve's 1898 date. These dates therefore describe the named destination's park history, not the start of human habitation.

## Destination photo credits

All images remain on Wikimedia servers and are referenced by HTTPS URL in `dummy-data.js`. No destination photos are stored in `assets`. The app displays smaller/cropped views in rows and a larger view in the modal. Original images have not been edited. Wikimedia may resize the linked thumbnails.

| Destination | Photographer / author | Source file | License |
| --- | --- | --- | --- |
| Yellowstone National Park | Rhododendrites | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grand_Canyon_of_the_Yellowstone_Lower_Falls_(95819p).jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Yosemite National Park | Thomas Wolf, www.foto-tw.de | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Half_Dome_with_Eastern_Yosemite_Valley_(50MP).jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Banff National Park | Gorgo | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moraine_Lake_17092005.jpg) | Public domain |
| Jasper National Park | Ethan Sahagun | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mount_Andromeda_at_dusk,_Jasper_National_Park,_Alberta,_Canada.jpg) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| Royal National Park | Jenny Mealing | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Late_Afternoon_at_North_%26_South_Era.jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| Blue Mountains National Park | Visions of Domino | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Australia_-_Part_3_(27446932621).jpg) | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| Tongariro National Park | James Shook | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tongariro_Mahuia_River_n.jpg) | [CC BY 2.5](https://creativecommons.org/licenses/by/2.5) |
| Abel Tasman National Park | Hagai Agmon-Snir حچاي اچمون-سنير חגי אגמון-שניר | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:AnchorageBayNZDec022024_02.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Nikko National Park | Uraomote yamaneko | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lake_chuzenji_and_kegon_waterfall.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Fuji-Hakone-Izu National Park | Alpsdake | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Asagiri_Highland_and_Mount_Fuji.JPG) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Jim Corbett National Park | Soumyajit Nandy | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bengal-Tiger_Corbett_Uttarakhand_Dec-2013.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Kaziranga National Park | Diganta Talukdar | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beauty_of_Kaziranga_National_Park.jpg) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Iguacu National Park | Enaldo Valadares | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Iguazu_Cataratas2.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Tijuca National Park | Halley Pacheco de Oliveira | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Floresta_da_Tijuca_60.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Kruger National Park | Nithin bolar k | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kruger_Zebra.JPG) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Table Mountain National Park | Pavel Špindler | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stolov%C3%A1_hora_a_12_apo%C5%A1tol%C5%AF,_Kapsk%C3%A9_m%C4%9Bsto_-_Table_Mountains,_Cape_Town_-_panoramio.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| Peak District National Park | Evilbish | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mam_Tor.jpg) | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| Lake District National Park | User:Diliff | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Derwent_Water,_Lake_District,_Cumbria_-_June_2009.jpg) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| Vanoise National Park | Ibex73 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grande_Casse_(3855m).JPG) | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Port-Cros National Park | Yyuri1989 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Porquerolles_vue_du_ciel_-_Pointe_M%C3%A8des.JPG) | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |

All 20 image URLs returned HTTP 200 with image/jpeg response headers during preparation on October 7, 2026. These remote links require internet access and are controlled by their host.
