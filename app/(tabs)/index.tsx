// import { Button } from '@/components/Button';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { firestore } from "@/database/fire_base";
import { collection, getDocs, } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <TouchableOpacity
          style={styles.reactLogo}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
          />
        </TouchableOpacity>
      }>
      <ThemedView>
        {/* <Button label='hasan'>anass</Button> */}
        <TextInput
          onChangeText={setName}
          style={{
            padding: 20
          }}
          placeholder='name' />
        <Text style={{
          fontSize: 30
        }}>{name}</Text>
        {colors.sort((a, b) => {
          return Math.random() - 0.5
        }).map(color => (<Text key={color.id} style={{
          color: color.hex,
          fontSize: 30
        }}>{color.name}</Text>))}
      </ThemedView>
    </ParallaxScrollView>
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
