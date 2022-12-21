
export default defineEventHandler(async (event) => {
	const query = getQuery(event)
	const body = await readBody(event)
  console.log(query)
  return {
    msg: "200"
  }
})