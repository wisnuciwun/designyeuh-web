var apibaseresume = `wq2JW1dFsZBXK5B`
var apibaseimage = `Uf5CE2eTK5yeDdi`
var apibasedonation = `I2qUaJ6OtpdCOJy`
var apibasecontributors = `GZKHwxPb8lxoIhQ`
var apibaseusers = `TKhp86kus08brnJ`
var apiauth = `amRd2xPxrZeDe8K`
var apibaseadmin = `x5eYKp9V1qGnyrt`

module.exports = {
    API_URL_GET_RESUMES : `${apibaseresume}/85Ac17eClf`,
    API_URL_POST_RESUMES : `${apibaseadmin}/TwcHvQWwS6`,
    API_URL_DELETE_RESUME : `${apibaseadmin}/5FCFfRqbqO`,
    API_URL_PUT_RESUME : `${apibaseadmin}/KROBFzOhPN`,
    API_URL_SORT_TIME_RESUMES : `${apibaseresume}/r2ImyKmxUZ`,
    API_URL_SORT_POPULARITY_RESUMES : `${apibaseresume}/87stPpQrZy`,
    API_URL_ALL_RESUMES : `${apibaseresume}/a1PfYcu7AB`,
    API_URL_PAGES_RESUMES : `${apibaseresume}/bWrc6tHEPR`,
    API_URL_DOWNLOAD_RESUMES : `${apibaseresume}/8CudWiLDO7`,

    API_URL_GET_IMAGES : `${apibaseimage}/kn69JVJH1a`,
    API_URL_POST_IMAGES : `${apibaseadmin}/dik25dWhR6`,
    API_URL_DELETE_IMAGE : `${apibaseadmin}/dPSfTOsrEa`,
    API_URL_PUT_IMAGE : `${apibaseadmin}/aNho5iy0Ve`,
    API_URL_SORT_TIME_IMAGES : `${apibaseimage}/aCIJI6W7jp`,
    API_URL_SORT_POPULARITY_IMAGES : `${apibaseimage}/9gW6Mq21Q5`,
    API_URL_ALL_IMAGES : `${apibaseimage}/wPiArezdNl`,
    API_URL_PAGES_IMAGES : `${apibaseimage}/NTX2ig1uX4`,
    API_URL_DOWNLOAD_IMAGES : `${apibaseimage}/WKc7kvvUhp`,

    API_URL_GET_DONATE : `${apibasedonation}/p94pWBtP7t`,
    API_URL_POST_DONATE : `${apibaseadmin}/ZwxxizLrn8`,
    API_URL_DELETE_DONATE : `${apibaseadmin}/GGLNfjOCVx`,
    API_URL_PUT_DONATE : `${apibaseadmin}/gBEK4VJDRV`,

    API_URL_GET_CONTRIBUTORS : `${apibasecontributors}/T3jS0WpBJP`,
    API_URL_POST_CONTRIBUTORS : `${apibaseadmin}/Poh5V8QnZe`,
    API_URL_DELETE_CONTRIBUTORS : `${apibaseadmin}/tRJV7SoSx5`,
    API_URL_PUT_CONTRIBUTORS : `${apibaseadmin}/aTYM06FNYK`,

    DOWNLOAD_TEMP_RESUMES : `/files/resume_insert_template.xlsx`,
    DOWNLOAD_TEMP_IMAGES : `/files/image_insert_template.xlsx`,
    DOWNLOAD_TEMP_CONTRIBUTORS : `/files/contributor_insert_template.xlsx`,
    DOWNLOAD_TEMP_DONATE : `/files/donation_insert_template.xlsx`,

    API_URL_GET_USERS : `${apibaseadmin}/6kJQ6Tqyzt`,
    API_URL_POST_USERS  : `${apibaseadmin}/q6gsc9mXIY`,
    API_URL_PUT_USERS : `${apibaseadmin}/SNhhB1KYCc`,
    API_URL_DELETE_USERS : `${apibaseadmin}/wlcBSH0EA1`,

    API_URL_REGISTER : `${apiauth}/MFwL8GPwO5`,
    API_URL_LOGIN  : `${apiauth}/0mCEPcpnzp`,

    NATIONALITIES: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
}
