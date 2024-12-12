import { Button } from '@/components/Button';
import { ThemedView } from '@/components/ThemedView';
import { firestore } from "@/database/fire_base";
import { collection, getDocs, } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      id: doc.id, // Document ID
      ...doc.data(), // Document Data
    })) as Color[];

    setColors(documents);
    return documents;
  }

  useEffect(() => {
    fetchAllDocuments()
  }, [])
  useEffect(() => {
    console.log("rerender")
  }, [])
  return (
    <SafeAreaView>
      <ScrollView>
        <ThemedView>
          <Button label='click me' variant="destructive" size="sm" />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
