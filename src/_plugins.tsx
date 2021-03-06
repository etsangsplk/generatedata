/*
* This file is autogenerated. Do not edit! 
* ----------------------------------------
* 
* This imports all the metadata for all plugins and includes that information as part of the core bundle. All actual
* plugin files are bundled separately and loaded on-demand. 
*/

import Alphanumeric from './plugins/dataTypes/Alphanumeric/config';
import AutoIncrement from './plugins/dataTypes/AutoIncrement/config';
import Boolean from './plugins/dataTypes/Boolean/config';
import CVV from './plugins/dataTypes/CVV/config';
import City from './plugins/dataTypes/City/config';
import Company from './plugins/dataTypes/Company/config';
import Composite from './plugins/dataTypes/Composite/config';
import Constant from './plugins/dataTypes/Constant/config';
import Country from './plugins/dataTypes/Country/config';
import Currency from './plugins/dataTypes/Currency/config';
import Date from './plugins/dataTypes/Date/config';
import Email from './plugins/dataTypes/Email/config';
import GUID from './plugins/dataTypes/GUID/config';
import IBAN from './plugins/dataTypes/IBAN/config';
import LatLng from './plugins/dataTypes/LatLng/config';
import List from './plugins/dataTypes/List/config';
import Names from './plugins/dataTypes/Names/config';
import NormalDistribution from './plugins/dataTypes/NormalDistribution/config';
import NumberRange from './plugins/dataTypes/NumberRange/config';
import OrganizationNumber from './plugins/dataTypes/OrganizationNumber/config';
import PAN from './plugins/dataTypes/PAN/config';
import PIN from './plugins/dataTypes/PIN/config';
import PersonalNumber from './plugins/dataTypes/PersonalNumber/config';
import Phone from './plugins/dataTypes/Phone/config';
import PostalZip from './plugins/dataTypes/PostalZip/config';
import Region from './plugins/dataTypes/Region/config';
import Rut from './plugins/dataTypes/Rut/config';
import SIRET from './plugins/dataTypes/SIRET/config';
import StreetAddress from './plugins/dataTypes/StreetAddress/config';
import TextFixed from './plugins/dataTypes/TextFixed/config';
import TextRandom from './plugins/dataTypes/TextRandom/config';
import Track1 from './plugins/dataTypes/Track1/config';
import Track2 from './plugins/dataTypes/Track2/config';

export const dataTypes = {
	Alphanumeric,
	AutoIncrement,
	Boolean,
	CVV,
	City,
	Company,
	Composite,
	Constant,
	Country,
	Currency,
	Date,
	Email,
	GUID,
	IBAN,
	LatLng,
	List,
	Names,
	NormalDistribution,
	NumberRange,
	OrganizationNumber,
	PAN,
	PIN,
	PersonalNumber,
	Phone,
	PostalZip,
	Region,
	Rut,
	SIRET,
	StreetAddress,
	TextFixed,
	TextRandom,
	Track1,
	Track2
};

export type DataTypeFolder = keyof typeof dataTypes;

import JSON from './plugins/exportTypes/JSON/config';
import SQL from './plugins/exportTypes/SQL/config';
import XML from './plugins/exportTypes/XML/config';

export const exportTypes = {
	JSON,
	SQL,
	XML
};

export type ExportTypeFolder = keyof typeof exportTypes;


export const countryList = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Pakistan', 'Peru', 'Poland', 'Russia', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Vietnam'];
export const countries = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Colombia', 'CostaRica', 'France', 'Germany', 'India', 'Indonesia', 'Ireland', 'Italy', 'Mexico', 'Netherlands', 'NewZealand', 'Nigeria', 'Pakistan', 'Peru', 'Poland', 'Russia', 'SouthKorea', 'Spain', 'Sweden', 'Turkey', 'UK', 'US', 'Vietnam'] as const;
export type countryTuple = typeof countries;
export type CountryType = countryTuple[number];
