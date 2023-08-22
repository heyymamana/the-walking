import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import Button from '../components/button';
import { selectWomen } from '../redux/productSlice';
import { useSelector } from 'react-redux';
import BannerTitle from '../components/banner-title';
import { colors, spacing } from '../theme';
import Sponsoredwomenformal from '../components/sponsoredwomenformal';

export default function Women({ navigation }) {
    const women = useSelector(selectWomen);
    const onPressProduct = (id) => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ScrollView>
            
            <BannerTitle />
          
           <Sponsoredwomenformal />
            <View style={{ margin: spacing[5] }}>
                {women.map((women) => {
                    return (
                        <View
                            key={women.name}
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
                                    source={women.featuredImage.source}
                                />
                            </View>

                            <View style={{ marginTop: spacing[5] }}>
                                <Text preset="h4" left>
                                    {women.name}
                                </Text>
                                <Text preset="h6" left>
                                    {women.priceb}
                                    
                                    
                                </Text>
                               
                                <Text
                                    textColor="#919191"
                                    left
                                    style={{
                                        marginTop: spacing[5],
                                        marginHorizontal: spacing[0],
                                    }}>
                                    {women.description}
                                </Text>
                            </View>

                            <Button
                                style={{
                                    alignSelf: 'left',
                                    marginTop: spacing[5],
                                }}
                                title="Explore"
                                onPress={() => onPressProduct(women.id)}
                            />
                        </View>
                    );
                })}
            </View>
            
        </ScrollView>
    )
}