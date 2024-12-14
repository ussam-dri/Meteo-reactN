export class FailedToFetchError extends Error {
	constructor(message: string = "Failed to fetch data from the server") {
		super(message);
		this.name = "FailedToFetchError";
	}
}
