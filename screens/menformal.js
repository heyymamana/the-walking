import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import Button from '../components/button';
import { selectMenformal } from '../redux/productSlice';
import { useSelector } from 'react-redux';
import BannerTitle from '../components/banner-title';

import { colors, spacing } from '../theme';

import Sponsoredmenformal from '../components/sponsoredmenformal';

export default function Menformal({ navigation }) {
    const menformal = useSelector(selectMenformal);
    const onPressProduct = (id) => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ScrollView>
            <BannerTitle />
            <Sponsoredmenformal />
            <View style={{ margin: spacing[5] }}>
                {menformal.map((menformal) => {
                    return (
                        <View
                            key={menformal.name}
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
                                    source={menformal.featuredImage.source}
                                />
                            </View>

                            <View style={{ marginTop: spacing[5] }}>
                                <Text preset="h4" left>
                                    {menformal.name}
                                </Text>
                                <Text preset="h6" left>
                                    {menformal.priceb}
                                    
                                    
                                </Text>
                                <Text
                                    textColor="#919191"
                                    left
                                    style={{
                                        marginTop: spacing[5],
                                        marginHorizontal: spacing[0],
                                    }}>
                                    {menformal.description}
                                </Text>
                            </View>

                            <Button
                                style={{
                                    alignSelf: 'left',
                                    marginTop: spacing[5],
                                }}
                                title="Explore"
                                onPress={() => onPressProduct(menformal.id)}
                            />
                        </View>
                    );
                })}
            </View>
           
        </ScrollView>
    )
}