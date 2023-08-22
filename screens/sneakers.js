import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { useSelector } from 'react-redux'
import { selectSneakers } from '../redux/productSlice'
import BannerTitle from '../components/banner-title'
import { colors, spacing } from '../theme'
import Button from '../components/button'
import SponsoredSneakers from '../components/sponsoredsneakers'

export default function Sneakers({ navigation }) {
    const sneakers = useSelector(selectSneakers);
    const onPressProduct = (id) => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ScrollView>
            <BannerTitle />
            
            
            <SponsoredSneakers />
            <View style={{ margin: spacing[10] }}>
                {sneakers.map((sneakers) => {
                    return (
                        <View
                            key={sneakers.name}
                            style={{ marginBottom: 60 }}>
                            <View
                                style={{
                                    backgroundColor: colors.white,
                                    borderRadius: 16,
                                    alignSelf: 'center',
                                    resizeMode:'cover',
                                    paddingVertical: spacing[1],
                                }}>
                               
                                
                            </View>
                            <Image
                                    source={sneakers.featuredImage.source}
                                    style={{
                                        alignSelf:'center',
                                        
                                    }}></Image>
                                

                            <View style={{ marginTop: spacing[5] }}>
                                <Text preset="h4" centered>
                                    {sneakers.name}
                                    
                                    
                                </Text>
                                <Text preset="h6" left>
                                    {sneakers.priceb}
                                    
                                    
                                </Text>
                                
                                
                               
                               
                                <Text
                                    textColor="#808080"
                                    left
                                    style={{
                                        marginTop: spacing[2],
                                        marginHorizontal: spacing[0],
                                    }}>
                                    {sneakers.description}
                                </Text>
                            </View>
                            
                            <Button
                                style={{
                                    alignSelf: 'left',
                                    marginTop: spacing[5],
                                }}
                                title="Explore"
                                onPress={() => onPressProduct(sneakers.id)}
                                
                            />
                            
                        </View>
                    );
                })}
            </View>
            
        </ScrollView>
    )
}