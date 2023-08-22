import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Image } from 'react-native';
import BannerTitle from '../components/banner-title';
import Text from '../components/text/text';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { selectProductsById } from '../redux/productSlice';
import { showMessage } from 'react-native-flash-message';
import Button from '../components/button';
import CounterButton from '../components/counterButton';
import { addToCart } from '../redux/cartSlice';



export default function ProductDetails({ navigation, route }) {
    const id = route.params.id;
    const product = useSelector((state) => selectProductsById(state, id));
    const {
        featuredImage,
        name,
        namesecond,
        rating,
        size,
        price,
        description,
        features,
        delivery,
        deliverydetails1,
        deliverydetails2,
        tc,
        tcd,
        productid,
        seller,
        item,
        images,
    } = product;

    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();

    const add = () => {
        if (amount === 0) {
            return showMessage({
                message: 'You can not add 0 items',
                type: 'danger',
            });
        }

        // create cart product
        const cartProduct = {
            id,
            namesecond,
            productid,
            featuredImage,
            price,
            amount,
            quantityPrice: price * amount,
        };

        
        dispatch(addToCart({ cartProduct }));

        
        showMessage({
            message: 'Product Added Successfully',
            type: 'success',
        });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <BannerTitle />

                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="arrow-back-sharp"
                        size={24}
                        color="black"
                        style={{ margin: spacing[5] }}
                    />
                </Pressable>
                <View style={{ margin: spacing[5] }}>
                    <View
                        style={{
                            backgroundColor: colors.grey,
                            borderRadius: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: spacing[8],
                        }}>
                        <Image source={featuredImage.source} />
                    </View>

                    <View style={{ marginVertical: spacing[5] }}>
                        <Text preset="h1">{namesecond}</Text>
                        <Text preset="h7">{rating}</Text>
                        
                        
                        
                        <Text
                            textColor="#7d7d7d"
                            style={{ marginTop: spacing[5] }}>
                            {description}
                        </Text>
                        <Text preset="h6" style={{ marginTop: spacing[4] }}>
                            {`$ ${price}`}
                        </Text>
                        <Text preset="h6">{size}</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: spacing[6],
                        }}>
                        <CounterButton amount={amount} setAmount={setAmount} />
                        <Button
                            title="Add to cart"
                            style={{ marginLeft: spacing[4] }}
                            onPress={add}
                        />

                    </View>

                    <View style={{ marginVertical: spacing[5] }}>
                        <Text preset="h4">DESCRIPTION</Text>
                        <Text
                            textColor="#7d7d7d"
                            style={{ paddingTop: spacing[3], lineHeight: 25 }}>
                            {features}
                        </Text>
                        
                    </View>

                   

                    <View style={{ marginVertical: spacing[8] }}>
                        {images.map((image, index) => {
                            return (
                                <View
                                    key={index.toString()}
                                    style={{
                                        marginVertical: spacing[3],
                                        overflow: 'hidden',
                                    }}>
                                    <Image
                                        source={image.source}
                                        style={{
                                            alignSelf: 'center',
                                            width: '100%',
                                            borderRadius: 12,
                                        }}
                                    />
                                </View>
                            );
                        })}
                       
                    </View>
                    <Text preset="h6">{delivery}</Text>
                    <Text
                    textColor="#7d7d7d"
                    style={{ marginTop: spacing[5] }}>
                    {deliverydetails1}
                </Text>

                 <Text
                            textColor="#7d7d7d"
                            style={{ marginTop: spacing[1] }}>
                            {deliverydetails2}
                        </Text>

                    <Text preset="h6" style={{marginTop: spacing[5]}}>{tc}</Text>
                    <Text
                            textColor="#7d7d7d"
                            style={{ marginTop: spacing[5] }}>
                            {tcd}
                        </Text>

                 <Text preset="h6" style={{marginTop: spacing[5]}}>{productid}</Text>
                
                 <Text preset="h6">{seller}</Text>
                 
                </View>
               
            </ScrollView>
        </SafeAreaView>
    );
}
