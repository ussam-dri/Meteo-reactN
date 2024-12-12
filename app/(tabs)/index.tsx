import { AppButton } from "@/components/app/AppButton";
import ScrollScreen from "@/components/scroll-screen";
import { ThemedText } from "@/components/ThemedText";
import { firestore } from "@/database/fire_base";
import { collection, getDocs, } from "firebase/firestore";
import { useEffect, useState } from 'react';
type Color = {
  id: string;
  name: string;
  hex: string;
}
export default function HomeScreen() {
  const [colors, setColors] = useState<Array<Color>>([]);
  const [name, setName] = useState<string>("");
  async function fetchAllDocuments() {
    const collectionRef = collection(firestore, "colors");
    const querySnapshot = await getDocs(collectionRef);

    const documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Color[];

    setColors(documents);
    return documents;
  }

  useEffect(() => {
    fetchAllDocuments()
  }, [])
  return (
    <ScrollScreen className="p-4 flex items-center justify-center bg-background">
      <ThemedText className="font-bold" type="title">hey</ThemedText>
      <AppButton>
        hello
      </AppButton>
    </ScrollScreen>
  );
}