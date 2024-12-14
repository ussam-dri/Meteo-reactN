import { firestore } from "@/database/fire_base";
import { FailedToFetchError } from "@/errors/FailedToFetchError";
import { collection, getDocs } from "firebase/firestore";
export async function findAll<T>(collectionName: string): Promise<Array<T>> {
	const collectionRef = collection(firestore, collectionName);
	try {
		const querySnapshot = await getDocs(collectionRef);

		return querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as Array<T>;
	} catch (error) {
		throw new FailedToFetchError();
	}
}
