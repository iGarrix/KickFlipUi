export async function setDelayAsync(ms: number) {
	return await new Promise((resolve) => setTimeout(resolve, ms));
}
