import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import Button from '../components/button';
import { selectSports } from '../redux/productSlice';
import { useSelector } from 'react-redux';
import BannerTitle from '../components/banner-title';
import { colors, spacing } from '../theme';
import SponseredSport from '../components/sponsoredsports';

export default function Sports({ navigation }) {
    const sports = useSelector(selectSports);
    const onPressProduct = (id) => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ScrollView>
            
            <BannerTitle />
            
            
            <SponseredSport />
            <View style={{ margin: spacing[5] }}>
                {sports.map((earphone) => {
                    return (
                        <View
                            key={sports.name}
                            style={{ marginBottom: 60 }}>
                            <View
                                style={{
                                    backgroundColor: colors.grey,
                                    borderRadius: 16,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: spacing[5],
                                }}>
                                <Image
                                    source={sports.featuredImage.source}
                                />
                            </View>

                            <View style={{ marginTop: spacing[5] }}>
                                <Text preset="h4" left>
                                    {sports.name}
                                </Text>
                                <Text preset="h6" left>
                                    {sports.priceb}
                                    
                                    
                                </Text>
                                <Text
                                    textColor="#808080"
                                    left
                                    style={{
                                        marginTop: spacing[5],
                                        marginHorizontal: spacing[0],
                                    }}>
                                    {sports.description}
                                </Text>
                            </View>

                            <Button
                                style={{
                                    alignSelf: 'left',
                                    marginTop: spacing[5],
                                }}
                                title="Explore"
                                onPress={() => onPressProduct(sports.id)}
                            />
                        </View>
                    );
                })}
            </View>
            
        </ScrollView>
    )
}