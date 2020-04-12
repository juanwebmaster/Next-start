import quotes from '../../quotes.json';

export default (req, res) => {
	const quote = qutoes[Math.floor(Math.random() * quotes.length)];
	res.status(200).json(quote);
}