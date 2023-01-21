/**
 * The type of location of user.
 * @typedef {Object} location
 * @property {{number: number, name: string}} street
 */

/**
 * The type of login of user.
 * @typedef {{uuid: string, username: string, password: string, salt: string, md5: string, sha1: string, sha256: string}} login
 */

/**
 * The type of user data getting from API.
 * @typedef {Object} UserType
 * @property {string} gender
 * @property {{title: string, first: string, last: string}} name - Full name of user
 * @property {location} location
 * @property {string} city
 * @property {string} state
 * @property {string} country
 * @property {string} postcode
 * @property {{latitude: string, longitude: string}} coordinates
 * @property {{offset: string, description: string}} timezone
 * @property {string} email
 * @property {login} login
 * @property {{date: string, age: string}} dob
 * @property {{date: string, age: string}} registered
 * @property {string} phone
 * @property {string} cell
 * @property {{name: string, value: string}} id
 * @property {{large: string, medium: string, thumbnail: string}} id
 * @property {string} nat
 */

exports.unused = {};
