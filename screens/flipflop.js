import { ScrollView, View, Image } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import Button from '../components/button';
import { selectFlipflop} from '../redux/productSlice';
import { useSelector } from 'react-redux';
import BannerTitle from '../components/banner-title';
import { colors, spacing } from '../theme';
import Sponsoredflipflops from '../components/sponsoredflipflops';

export default function Flipflop({ navigation }) {
    const flipflop = useSelector(selectFlipflop);
    const onPressProduct = (id) => {
        navigation.navigate("Details", { id: id })
    }
    return (
        <ScrollView>
            
            <BannerTitle />
          
            <Sponsoredflipflops />
            <View style={{ margin: spacing[5] }}>
                {flipflop.map((flipflop) => {
                    return (
                        <View
                            key={flipflop.name}
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
                                    source={flipflop.featuredImage.source}
                                />
                            </View>

                            <View style={{ marginTop: spacing[5] }}>
                                <Text preset="h4" left>
                                    {flipflop.name}
                                </Text>

                                <Text preset="h6" left>
                                    {flipflop.priceb}
                                    
                                    
                                </Text>
                                
                                <Text
                                    textColor="#919191"
                                    left
                                    style={{
                                        marginTop: spacing[5],
                                        marginHorizontal: spacing[0],
                                    }}>
                                    {flipflop.description}
                                </Text>
                            </View>

                            <Button
                                style={{
                                    alignSelf: 'left',
                                    marginTop: spacing[5],
                                }}
                                title="Explore"
                                onPress={() => onPressProduct(flipflop.id)}
                            />
                        </View>
                    );
                })}
            </View>
            
        </ScrollView>
    )
}