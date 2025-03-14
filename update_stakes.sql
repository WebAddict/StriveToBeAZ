
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE id IN (87,855,856,857,858,859,860,861,942,953,987,1051,1053,1084,1130,1345,1347,1350,1478,1772,1773,1776,1945,1946,1951);
UPDATE registrations SET stake='Mesa Arizona Maricopa North Stake' WHERE id IN (421,606,607,1470,1586,1841);
UPDATE registrations SET stake='Mesa Arizona Maricopa Stake' WHERE id IN (839,1842,1950);
UPDATE registrations SET stake='Phoenix Arizona West Maricopa Stake' WHERE id IN (321,327,328,329,330,333,370,371,443,474,476,582,645,646,651,654,771,772,773,894,1017,1018,1653,1843,1846);

UPDATE registrations SET stake=TRIM(stake);
UPDATE registrations SET stake='Buckeye Arizona Stake' WHERE stake LIKE '%Buckeye%' COLLATE NOCASE;
UPDATE registrations SET stake='Casa Grande Arizona Stake' WHERE stake LIKE '%Casa Grande%' COLLATE NOCASE;
UPDATE registrations SET stake='Centennial Arizona Stake' WHERE stake LIKE '%Centennial%' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona East Stake' WHERE stake LIKE '%Chandler%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona South Stake' WHERE stake LIKE '%Chandler%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona Stake' WHERE stake LIKE 'Chandler Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Chandler Arizona West Stake' WHERE stake LIKE '%Chandler%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Chinle Arizona Stake' WHERE stake LIKE '%Chinle%' COLLATE NOCASE;
UPDATE registrations SET stake='Cottonwood Arizona Stake' WHERE stake LIKE '%Cottonwood%' COLLATE NOCASE;
UPDATE registrations SET stake='Duncan Arizona Stake' WHERE stake LIKE '%Duncan%' COLLATE NOCASE;
UPDATE registrations SET stake='Eagar Arizona Stake' WHERE stake LIKE '%Eagar%' COLLATE NOCASE;
UPDATE registrations SET stake='Flagstaff Arizona East Stake' WHERE stake LIKE '%Flagstaff%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Flagstaff Arizona West Stake' WHERE stake LIKE '%Flagstaff%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Gateway Stake' WHERE stake LIKE '%Willows Ward%' COLLATE NOCASE; -- Willows Ward in the Gateway stake
UPDATE registrations SET stake='Gilbert Arizona Gateway Stake' WHERE stake LIKE '%Gateway%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Greenfield Stake' WHERE stake LIKE '%Greenfield%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Highland East Stake' WHERE stake LIKE '%Highland%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Highland West Stake' WHERE stake LIKE '%Highland%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Higley Stake' WHERE stake LIKE '%Higley%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona San Tan Stake' WHERE stake LIKE 'Gilbert%San Tan%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Seville Stake' WHERE stake LIKE '%Seville%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stake' WHERE stake LIKE 'Gilbert Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Stapley Stake' WHERE stake LIKE '%Stapley%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Superstition Springs Stake' WHERE stake LIKE '%Superstition%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Val Vista Stake' WHERE stake LIKE '%Val Vista%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Williams Field Stake' WHERE stake LIKE '%Williams Field%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona Williams Field Stake' WHERE stake LIKE '%Williamsfield%' COLLATE NOCASE; -- misspelled
UPDATE registrations SET stake='Gilbert Arizona Williams Field Stake' WHERE stake LIKE '%William Field%' COLLATE NOCASE; -- misspelled
UPDATE registrations SET stake='Gilbert Arizona Williams Field Stake' WHERE stake LIKE '%Gilbert%Williams%' COLLATE NOCASE;
UPDATE registrations SET stake='Gilbert Arizona YSA Stake' WHERE stake LIKE '%Gilbert%YSA%' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona North Stake' WHERE stake LIKE '%Glendale%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Glendale Arizona Stake' WHERE stake LIKE 'Glendale Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Globe Arizona Stake' WHERE stake LIKE '%Globe%' COLLATE NOCASE;
UPDATE registrations SET stake='Goodyear Arizona Stake' WHERE stake LIKE '%Goodyear%' COLLATE NOCASE;
UPDATE registrations SET stake='Holbrook Arizona Stake' WHERE stake LIKE '%Holbrook%' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona North Stake' WHERE stake LIKE '%Kingman%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Kingman Arizona Stake' WHERE stake LIKE 'Kingman Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Lake Havasu City Arizona Stake' WHERE stake LIKE '%Havasu%' COLLATE NOCASE;
UPDATE registrations SET stake='Marana Arizona Stake' WHERE stake LIKE '%Marana%' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Maricopa Arizona Stake' WHERE stake LIKE 'Maricopa Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Alma Stake' WHERE stake LIKE '%Alma%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Alta Mesa Stake' WHERE stake LIKE '%Alta%Mesa%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Boulder Creek Stake' WHERE stake LIKE '%Boulder%Creek%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Central Stake' WHERE stake LIKE '%Mesa%Central%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Citrus Heights Stake' WHERE stake LIKE '%Citrus%Heights%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Clearview Stake' WHERE stake LIKE '%Clearview%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Desert Ridge Stake' WHERE stake LIKE '%Desert%Ridge%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona East Stake' WHERE stake LIKE '%Mesa East' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona East Stake' WHERE stake LIKE '%Mesa East %' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Eastmark Stake' WHERE stake LIKE '%Eastmark%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Eastmark Stake' WHERE stake LIKE '%Signal Butte%' COLLATE NOCASE; -- There are two stakes with Signal Butte wards, the Signal Butte 1st ward is in flatiron stake
UPDATE registrations SET stake='Mesa Arizona Flatiron Stake' WHERE stake LIKE '%Flatiron%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Hermosa Vista Stake' WHERE stake LIKE '%Hermosa Vista%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Kimball East Stake' WHERE stake LIKE '%Kimball East%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Kimball Stake' WHERE stake LIKE 'Mesa Kimball' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Kimball Stake' WHERE stake LIKE 'Kimball' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Kimball Stake' WHERE stake LIKE '%Kimball Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Lehi Stake' WHERE stake LIKE '%Lehi%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Maricopa North Stake' WHERE stake LIKE '%Maricopa%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Maricopa Stake' WHERE stake LIKE '%Mesa Maricopa' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Mountain View Stake' WHERE stake LIKE '%Mountain View%' COLLATE NOCASE; -- MADE A MISTAKE - I matched ANYTHING %Maricopa% and set to Mesa Arizona Mountain View Stake
UPDATE registrations SET stake='Mesa Arizona North Stake' WHERE stake LIKE '%Mesa North%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Red Mountain Stake' WHERE stake LIKE '%Red Mountain%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Salt River Stake' WHERE stake LIKE '%Salt River%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Skyline Stake' WHERE stake LIKE '%Skyline%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona South Stake' WHERE stake LIKE '%Mesa%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona Stake' WHERE stake LIKE 'Mesa Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona YSA East Stake' WHERE stake LIKE '%Mesa%YSA East%' COLLATE NOCASE;
UPDATE registrations SET stake='Mesa Arizona YSA West Stake' WHERE stake LIKE '%Mesa%YSA West%' COLLATE NOCASE;
UPDATE registrations SET stake='Page Arizona Stake' WHERE stake LIKE '%Page%' COLLATE NOCASE;
UPDATE registrations SET stake='Paradise Valley Arizona Stake' WHERE stake LIKE '%Paradise%Valley%' COLLATE NOCASE;
UPDATE registrations SET stake='Payson Arizona Stake' WHERE stake LIKE '%Payson%' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona North Stake' WHERE stake LIKE '%Peoria%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona North Stake' WHERE stake LIKE '%North%Peoria%' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Peoria Arizona Stake' WHERE stake LIKE 'Peoria Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Peralta Trail Arizona Stake' WHERE stake LIKE '%Peralta%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Deer Valley Stake' WHERE stake LIKE '%Deer%Valley%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Desert Hills Stake' WHERE stake LIKE '%Desert%Hills%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona East Stake' WHERE stake LIKE '%Phoenix%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona North Stake' WHERE stake LIKE '%Phoenix%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona South Mountain Stake' WHERE stake LIKE '%South%Mountain%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona South Mountain Stake' WHERE stake LIKE '%Phoenix%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Stake' WHERE stake LIKE 'Phoenix Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona Thunderbird Park Stake' WHERE stake LIKE '%Thunderbird%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona West Maricopa Stake' WHERE stake LIKE '%West%Maricopa%' COLLATE NOCASE;
UPDATE registrations SET stake='Phoenix Arizona YSA Stake' WHERE stake LIKE '%Phoenix%YSA%' COLLATE NOCASE;
UPDATE registrations SET stake='Pima Arizona Stake' WHERE stake LIKE '%Pima%' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Arizona Stake' WHERE stake LIKE 'Prescott Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Prescott Valley Arizona Stake' WHERE stake LIKE '%Prescott%Valley%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Central Stake' WHERE stake LIKE '%Queen Creek%Central%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Central Stake' WHERE stake LIKE '%Hasting%Farms%' COLLATE NOCASE; -- Hasting Farms in QC Central Stake
UPDATE registrations SET stake='Queen Creek Arizona Central Stake' WHERE stake LIKE '%QC%Central%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona East Stake' WHERE stake LIKE '%Queen Creek%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona East Stake' WHERE stake LIKE '%QC%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Empire Stake' WHERE stake LIKE '%Empire%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Heritage Stake' WHERE stake LIKE '%Heritage%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona North Stake' WHERE stake LIKE '%Queen Creek%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona North Stake' WHERE stake LIKE '%QC%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Ocotillo Stake' WHERE stake LIKE '%Ocotillo%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Ocotillo Stake' WHERE stake LIKE '%Octillio%' COLLATE NOCASE; -- misspelt
UPDATE registrations SET stake='Queen Creek Arizona South Stake' WHERE stake LIKE '%Queen Creek%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona South Stake' WHERE stake LIKE '%QC%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Chandler Heights' COLLATE NOCASE; -- Chandler Heights ward in QC Stake
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Queen Creek' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Queen Creek AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Queen Creek Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Queen Creek AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona Stake' WHERE stake LIKE 'Queen Creek Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona West Stake' WHERE stake LIKE '%Queen Creek%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Queen Creek Arizona West Stake' WHERE stake LIKE '%QC%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Safford Arizona Stake' WHERE stake LIKE '%Safford%' COLLATE NOCASE;
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Sahuarita%' COLLATE NOCASE;
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Sawarita%' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Sahuartia%' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Sahurita%' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Shaurita%' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Sauharita%' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Sahuarita Arizona Stake' WHERE stake LIKE '%Anamax%' COLLATE NOCASE; -- Anamax Ward in Sahuarita Stake
UPDATE registrations SET stake='San Tan Valley Arizona North Stake' WHERE stake LIKE '%San%Tan%North%' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona North Stake' WHERE stake LIKE '%SanTan%North%' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Valley' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Valley Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan AZ Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'San Tan Arizona Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Valley' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Valley Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan AZ Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='San Tan Valley Arizona Stake' WHERE stake LIKE 'SanTan Arizona Valley Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Scottsdale Arizona Camelback Stake' WHERE stake LIKE '%Camelback%' COLLATE NOCASE;
UPDATE registrations SET stake='Scottsdale Arizona North Stake' WHERE stake LIKE '%Scottsdale%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Show Low Arizona Stake' WHERE stake LIKE '%Show%Low%' COLLATE NOCASE;
UPDATE registrations SET stake='Sierra Vista Arizona Stake' WHERE stake LIKE '%Sierra%Vista%' COLLATE NOCASE;
UPDATE registrations SET stake='Silver Creek Arizona Stake' WHERE stake LIKE '%Silver%Creek%' COLLATE NOCASE;
UPDATE registrations SET stake='Snowflake Arizona Stake' WHERE stake LIKE '%Snowflake%' COLLATE NOCASE;
UPDATE registrations SET stake='St David Arizona Stake' WHERE stake LIKE '%St David%' COLLATE NOCASE;
UPDATE registrations SET stake='St David Arizona Stake' WHERE stake LIKE '%St. David%' COLLATE NOCASE;
UPDATE registrations SET stake='St David Arizona Stake' WHERE stake LIKE '%Saint David%' COLLATE NOCASE;
UPDATE registrations SET stake='St Johns Arizona Stake' WHERE stake LIKE '%St Johns%' COLLATE NOCASE;
UPDATE registrations SET stake='St Johns Arizona Stake' WHERE stake LIKE '%Saint Johns%' COLLATE NOCASE;
UPDATE registrations SET stake='Surprise Arizona North Stake' WHERE stake LIKE '%Surprise%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Surprise Arizona Stake' WHERE stake='Surprise' COLLATE NOCASE;
UPDATE registrations SET stake='Surprise Arizona Stake' WHERE stake='Surprise AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Surprise Arizona Stake' WHERE stake='Surprise Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Surprise Arizona West Stake' WHERE stake LIKE '%Surprise%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona South Stake' WHERE stake LIKE '%Tempe%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona Stake' WHERE stake='Tempe Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona West Stake' WHERE stake LIKE '%Tempe%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Tempe Arizona YSA Stake' WHERE stake LIKE '%Tempe%YSA%' COLLATE NOCASE;
UPDATE registrations SET stake='Thatcher Arizona Stake' WHERE stake LIKE '%Thatcher%' COLLATE NOCASE;
UPDATE registrations SET stake='Tuba City Arizona Stake' WHERE stake LIKE '%Tuba%City%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona East Stake' WHERE stake LIKE '%Tucson%East%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona East Stake' WHERE stake LIKE '%Bear Canyon%' COLLATE NOCASE; -- Bear Canyon Ward in Rincon Stake
UPDATE registrations SET stake='Tucson Arizona East Stake' WHERE event='tucson' AND stake LIKE 'East%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona North Stake' WHERE stake LIKE '%Tucson%North%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona North Stake' WHERE event='tucson' AND stake LIKE 'North' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona North Stake' WHERE event='tucson' AND stake LIKE 'North Tucson%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Rincon Stake' WHERE stake LIKE '%Rincon%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Rincon Stake' WHERE stake LIKE '%Saguaro Park%' COLLATE NOCASE; -- Saguaro Park Ward in Rincon Stake
UPDATE registrations SET stake='Tucson Arizona South Stake' WHERE stake LIKE '%Tucson%South%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona South Stake' WHERE event='tucson' AND stake LIKE '%South%Tucson%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona South Stake' WHERE event='tucson' AND stake LIKE '%South Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona South Stake' WHERE event='tucson' AND stake LIKE 'South' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson Stake Center' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson AZ Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson Arizona Stake' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson AZ' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona Stake' WHERE stake='Tucson Arizona' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE stake LIKE '%Tucson%West%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE event='tucson' AND stake LIKE 'West%' COLLATE NOCASE;
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE stake LIKE 'Tucson Weat' COLLATE NOCASE; -- mis spelt
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE stake LIKE '%Greasewood%' COLLATE NOCASE; -- Greasewood Ward in Tucson Arizona West Stake
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE stake LIKE '%Tortolita%' COLLATE NOCASE; -- Tortolita Ward in Tucson Arizona West Stake
UPDATE registrations SET stake='Tucson Arizona West Stake' WHERE stake LIKE '%Tortilla%' COLLATE NOCASE; -- Tortolita Ward in Tucson Arizona West Stake
UPDATE registrations SET stake='White Mountain Arizona Stake' WHERE stake LIKE '%White%Mountain%' COLLATE NOCASE;
UPDATE registrations SET stake='Winslow Arizona Stake' WHERE stake LIKE '%Winslow%' COLLATE NOCASE;
UPDATE registrations SET stake='Yuma Arizona Stake' WHERE stake LIKE '%Yuma%' COLLATE NOCASE;
