import React from 'react';
import { View, Image } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

export default function Sponsoredmenformal() {
    return (
        <View style={{ padding: spacing[5], alignItems: 'center' }}>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/mf-4-1.png')}
            />

            <View style={{ paddingVertical: spacing[5] }}>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                <Text preset="h4" textColor={colors.primary}>
                    Limited Stocks Left!
                    </Text>
                </Text>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                   
                Highland Tassel Slip-On 07QK  
                    
                    
                </Text>
                <Text centered preset="h8" style={{color:'grey'}}>
                    
                    *sponsered
                </Text>
            </View>

            <Text preset= "h7" style={{color:'grey'}} left>
            Highland Tassel Slip-On loafer from 07Qk is boldness personified. You are the centre of attraction & you like to create an entrance - be assured Highland Tassel will make sure you are noticed wherever you go.
            </Text>
        </View>
    );
}