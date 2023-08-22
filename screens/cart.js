import { View, Image, Pressable, Alert, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import { useSelector, useDispatch } from 'react-redux';
import { colors, spacing } from '../theme';
import CounterButton from '../components/counterButton';
import Button from '../components/button';
import {
    addToCart,
    deleteFromCart,
    selectCart,
    selectTotalAmount,
    reset,
} from '../redux/cartSlice';

export default function Cart() {
    const cart = useSelector(selectCart);
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch();

    const onAmountChange = (value, cartItem) => {
        if (value === 0) {
            return Alert.alert(
                'Remove Item?',
                'Do you want to remove this item from the cart?',
                [
                    { text: 'Cancel', style: 'cancel', onPress: () => { } },
                    {
                        text: 'Remove',
                        onPress: () =>
                            dispatch(deleteFromCart({ id: cartItem.id })),
                    },
                ],
            );
        }

        const cartProduct = {
            ...cartItem,
            quantityPrice: value * cartItem.price,
            amount: value,
        };

        dispatch(addToCart({ cartProduct }));
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1, margin: spacing[10] }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text preset="h6">{`Cart Items (${cart.length})`}</Text>
                        <Pressable onPress={() => dispatch(reset())}>
                            <Text
                                textColor="#757575"
                                centered
                                style={{
                                    textDecorationLine: 'underline',
                                    fontWeight: 'bold',
                                }}>
                                Clear all
                            </Text>
                        </Pressable>
                    </View>

                    <View style={{ marginVertical: spacing[5] }}>
                        {cart.map((item) => {
                            const { featuredImage, namesecond, productid, quantityPrice, amount } =
                                item;
                            return (
                                <View
                                    key={item.id}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: spacing[2],
                                    }}>
                                    <View
                                        style={{
                                            backgroundColor: colors.grey,
                                            borderRadius: 12,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: spacing[5],
                                        }}>
                                        <Image
                                            source={featuredImage.source}
                                            style={{ height: 80, width: 80 }}
                                            resizeMode="contain"
                                        />
                                    </View>

                                    <View
                                        style={{
                                            flex: 1,
                                            marginLeft: spacing[5],
                                        }}>
                                        <Text black preset="h6">{namesecond}</Text>
                                        <Text black preset="h8">{productid}</Text>
                                        <Text>{`$${quantityPrice}`}</Text>
                                    </View>

                                    <CounterButton
                                        amount={amount}
                                        setAmount={(value) => {
                                            onAmountChange(value, item);
                                        }}
                                    />
                                </View>
                            );
                        })}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: spacing[85],
                            }}>
                            <Text preset="h6">Total</Text>

                            <Text preset="h5">{`$ ${totalAmount}`}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        margin: spacing[5],
                    }}>
                    <Button
                        title="Payment"
                        style={{ width: '100%' }}
                        
                        onPress={() => {
                            navigation.navigate('Checkout');
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
