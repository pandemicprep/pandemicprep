/** @format */

import React, { useState } from 'react';

import { addUser } from '../../../index';

import './Profile.css';

const states = [
	'Alabama',
	'Alaska',
	'American Samoa',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District of Columbia',
	'Federated States of Micronesia',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Marshall Islands',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Northern Mariana Islands',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Palau',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virgin Island',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
	'None',
];
const countries = [
	'United States',
	'Afghanistan',
	'Albania',
	'Algeria',
	'American Samoa',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antarctica',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegowina',
	'Botswana',
	'Bouvet Island',
	'Brazil',
	'British Indian Ocean Territory',
	'Brunei Darussalam',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Cayman Islands',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Christmas Island',
	'Cocos (Keeling) Islands',
	'Colombia',
	'Comoros',
	'Congo',
	'Congo, the Democratic Republic of the',
	'Cook Islands',
	'Costa Rica',
	"Cote d'Ivoire",
	'Croatia (Hrvatska)',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands (Malvinas)',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'France Metropolitan',
	'French Guiana',
	'French Polynesia',
	'French Southern Territories',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guadeloupe',
	'Guam',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Heard and Mc Donald Islands',
	'Holy See (Vatican City State)',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran (Islamic Republic of)',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	"Korea, Democratic People's Republic of",
	'Korea, Republic of',
	'Kuwait',
	'Kyrgyzstan',
	"Lao, People's Democratic Republic",
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libyan Arab Jamahiriya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macau',
	'Macedonia, The Former Yugoslav Republic of',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Martinique',
	'Mauritania',
	'Mauritius',
	'Mayotte',
	'Mexico',
	'Micronesia, Federated States of',
	'Moldova, Republic of',
	'Monaco',
	'Mongolia',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Niue',
	'Norfolk Island',
	'Northern Mariana Islands',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Pitcairn',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Reunion',
	'Romania',
	'Russian Federation',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia (Slovak Republic)',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Georgia and the South Sandwich Islands',
	'Spain',
	'Sri Lanka',
	'St. Helena',
	'St. Pierre and Miquelon',
	'Sudan',
	'Suriname',
	'Svalbard and Jan Mayen Islands',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syrian Arab Republic',
	'Taiwan, Province of China',
	'Tajikistan',
	'Tanzania, United Republic of',
	'Thailand',
	'Togo',
	'Tokelau',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks and Caicos Islands',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'United States Minor Outlying Islands',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela',
	'Vietnam',
	'Virgin Islands (British)',
	'Virgin Islands (U.S.)',
	'Wallis and Futuna Islands',
	'Western Sahara',
	'Yemen',
	'Yugoslavia',
	'Zambia',
	'Zimbabwe',
];

export const Profile = () => {
    const [isUser, setIsUser] = useState(false)
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [country, setCountry] = useState('');
	const [phone, setPhone] = useState('');
	const [creditCard, setCreditCard] = useState(0);

	const firstNameGetter = (event) => {
		setFirstName(event.target.value);
	};
	const lastNameGetter = (event) => {
		setLastName(event.target.value);
	};
	const emailGetter = (event) => {
		setEmail(event.target.value);
	};
	const password1Getter = (event) => {
		setPassword1(event.target.value);
	};
	const password2Getter = (event) => {
		setPassword2(event.target.value);
	};
	const address1Getter = (event) => {
		setAddress1(event.target.value);
	};
	const address2Getter = (event) => {
		setAddress2(event.target.value);
	};
	const cityGetter = (event) => {
		setCity(event.target.value);
	};
	const zipGetter = (event) => {
		setZipcode(event.target.value);
	};
	const stateGetter = (event) => {
		setState(event.target.value);
	};
	const countryGetter = (event) => {
		setCountry(event.target.value);
	};
	const phoneGetter = (event) => {
		setPhone(event.target.value);
	};
	const creditGetter = (event) => {
		setCreditCard(event.target.value);
	};
	const cancelHandler = (event) => {};
	const formHandler = async (event) => {
        event.preventDefault();
        console.log('getting to the submit with ', firstName, lastName, email);
		addUser({
            isUser,
			firstName,
			lastName,
			email,
			password: password1,
			addressLine1: address1,
			addressLine2: address2,
			city,
			state,
			zipcode,
			country,
			phone,
			creditCard,
		})
			.then((result) => {
				console.log('the new user is ', result);
			})
			.catch((error) => {
				console.error();
			});
	};

	return (
		<div className='profile'>
			<p>Profile</p>
			<form className='profileForm' onSubmit={formHandler}>
				<input
					type='text'
					id='firstName'
					placeholder='First Name'
					onChange={firstNameGetter}
				/>
				<input
					type='text'
					id='lastName'
					placeholder='Last Name'
					onChange={lastNameGetter}
				/>
				<input type='text' id='email' placeholder='Email Address' onChange={emailGetter} />
				<input
					type='text'
					id='password1'
					placeholder='Password'
					onChange={password1Getter}
				/>
				<input
					type='text'
					id='password2'
					placeholder='Password'
					onChange={password2Getter}
				/>
				<input
					type='text'
					id='addressOne'
					placeholder='Address'
					onChange={address1Getter}
				/>
				<input
					type='text'
					id='addressTwo'
					placeholder='Address'
					onChange={address2Getter}
				/>
				<input type='text' id='city' placeholder='City' onChange={cityGetter} />
				<input type='text' id='zipCode' placeholder='Zip Code' onChange={zipGetter} />
				<select className='stateDropdown' onChange={stateGetter}>
					{states.map((state, i) => {
						return <option key={i} value=''>{state}</option>;
					})}
				</select>
				<select className='countryDropdown' onChange={countryGetter}>
					{countries.map((country, i) => {
						return <option key={i} value=''>{country}</option>;
					})}
				</select>
				<input
					type='text'
					id='phoneNumber'
					placeholder='Phone Number'
					onChange={phoneGetter}
				/>
				<input
					type='number'
					id='creditCard'
					placeholder='Credit Card Number'
					value={
						Math.floor(Math.random() * (9999999999999999 - 1000000000000000 + 1)) +
						1000000000000000
					}
					onChange={creditGetter}
				/>
				<button id='submit' type='submit'>
					Submit
				</button>
				<button id='cancel' onChange={cancelHandler}>
					Cancel
				</button>
			</form>
		</div>
	);
};

// Maybe add cvv and date for the credit card. Front end only.