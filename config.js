languages = {
	'it': {
		filename: 'it',
		fallback: 'en',
		isRTL: false
	},
	'en': {
		filename: 'en',
		fallback: null,
		isRTL: true
	},
}

const currentLanguage = process.env.LANGUAGE || 'en'
if (!languages[currentLanguage]) {
	throw("Undefined language: " + currentLanguage)
}
const language = languages[currentLanguage]

const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
	currentLanguage: currentLanguage,
	language: language,

	nodeEnv: nodeEnv,
	isProduction: nodeEnv === 'production'
}
