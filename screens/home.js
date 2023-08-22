import { ActivityIndicator, Image, Pressable, ScrollView, useWindowDimensions, View} from 'react-native'
import React, { useEffect } from 'react'
import {TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../components/text/text'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, selectFeaturedProducts, selectStatus } from '../redux/productSlice'
import { colors, spacing } from '../theme'
import Button from '../components/button'


const CategoryBox = ({ title, image, onPress }) => {
    return (
        <Pressable onPress={onPress} style={{
            marginVertical: spacing[8],
            marginHorizontal: spacing[5],
            borderRadius: spacing[4],
            backgroundColor: colors.white,
            alignItems: "center",
            padding: spacing[5]
        }}>
            <Image source={image} style={{ top: -60 }} />
            <View style={{ alignItems: "center", justifyContent: "center", top: -50 }}>
                <Text preset="h6">{title}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: spacing[0] }}>
                
      
            </View>
        </Pressable>
    )
}

const FeatureProducts = ({ name, namesecond, category, image,title, onPress, color }) => {
    const { width, height } = useWindowDimensions();
    return (
        <View style={{
            marginVertical: spacing[5],
            backgroundColor: colors.primary,
            borderRadius: spacing[4],
            alignItems: "center",
            justifyContent: "center"

        }}>

            <View style={{
                borderWidth: 1,
                borderColor: "#d8d8d8",
                borderRadius: 400,
                height: 320,
                width: width - 40,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    borderWidth: 1,
                    borderColor: "#d8d8d8",
                    borderRadius: 400,
                    height: 280,
                    width: width - 80,
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                    <Image style={{ height: 172, width: 180 }} resizeMode="contain" source={image.source} />

                </View>
            </View>
            <View style={{ paddingBottom: spacing[8], marginTop: -spacing[7] }}>
                <Text preset="h3" centered uppercase white>
                    {name}
                </Text>
                <Text preset="h3" centered uppercase white>
                    {category}
                </Text>
                <Text preset="h6" centered style={{ width: 250, marginTop: spacing[4] }} white>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </Text>
                <Button title={'SEE PRODUCT'}
                    style={{
                        backgroundColor: colors.black,
                        alignSelf: "center",
                        marginTop: spacing[5]
                    }} />
            </View>
        </View>
    )
}


export default function Home({ navigation }) {
    const dispatch = useDispatch();
    const status = useSelector(selectStatus);
    const featureProducts = useSelector(selectFeaturedProducts);
    const { width, height } = useWindowDimensions();
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts())
        }
    }, [])

    if (status === 'loading') {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator />
            </View>
        )
    }
    return (
        <ScrollView>
            
            <View style={{ backgroundColor: colors.white ,}}>
                
                <Image style={{ alignSelf: "center", resizeMode: "cover" }} source={require("../assets/images/sneakerp5.png")} />
                <View style={{ position: "absolute", width: "100%", top: 30 }}>
                    <Text black preset="h3" centered>Today's Deal</Text>
                    
                </View>
                <View style={{ position: "absolute", width: "100%", top: 90 }}>
                    <Text black preset="h5" centered>50% OFF!</Text>

                    
                    
                </View>

                <View style={{ position: "absolute", width: "100%", left: 230, top: 520 }}>
                <Button  
                        onPress={this.onPressButton} 
                        title="Buy Now !"  
                       
                    />   
                    
                </View>
               
            </View>

            <View style={{ paddingVertical: spacing[2], top:10 }}>
                <CategoryBox title="Sneakers" image={require("../assets/images/sneakerslogo.png")}
                    onPress={() => {
                        navigation.navigate("SneakersTab")
                    }}
                />
                <CategoryBox title="Sports" image={require("../assets/images/Sportsshoelogo1.png")}
                    onPress={() => {
                        navigation.navigate("SportsTab")
                    }}
                />
                <CategoryBox title="Men's Formal" image={require("../assets/images/formalshoelogo.png")}
                    onPress={() => {
                        navigation.navigate("MenformalTab")
                    }}
                />
                <CategoryBox title="Women's Formal" image={require("../assets/images/womenformal.png")}
                    onPress={() => {
                        navigation.navigate("WomenTab")
                    }}
                />
                 <CategoryBox title="Flip Flops" image={require("../assets/images/flipflopslogo.png")}
                    onPress={() => {
                        navigation.navigate("FlipflopTab")
                    }}
                />


                <CategoryBox title="Favourite's" image={require("../assets/images/favlogo2.png")}
                    onPress={() => {
                        navigation.navigate("SpeakersTab")
                    }}
                />
            </View>

            <View style={{
                paddingVertical: spacing[2],
                paddingHorizontal: spacing[4]
            }}>
                {
                    featureProducts.map((product) => (
                        <FeatureProducts key={product.id} name={product.name} category={product.category} image={product.featuredImage} />
                    ))
                }
            </View>
        </ScrollView>
    )
}