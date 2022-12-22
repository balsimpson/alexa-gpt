import { Configuration, OpenAIApi } from "openai"

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const configuration = new Configuration({
		apiKey: config.OPENAI_KEY,
	});
	const openai = new OpenAIApi(configuration);
	// console.log(event)
	const query = getQuery(event)
	// const body = await readBody(event)

	// OpenAI settings
	let model = "text-davinci-003";
	let max_tokens = 256;
	let temperature = 0.7;

	try {
		const prediction = await openai.createCompletion({
			model: model,
			prompt: query.prompt,
			max_tokens: max_tokens,
			temperature: temperature,
		});

		return { 
			result: prediction.data.choices[0].text 
		}
	} catch (error) {
		console.log(error);
		return error
	}
})