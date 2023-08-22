import React from 'react';
import { View, Image } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

export default function Sponsoredwomenformal() {
    return (
        <View style={{ padding: spacing[5], alignItems: 'center' }}>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/womenf-2-1.png')}
            />

            <View style={{ paddingVertical: spacing[5] }}>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                <Text preset="h4" textColor={colors.primary}>
                    Limited Stocks Left!
                    </Text>
                </Text>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                   
                Rheea 65 4 Inch Pumps
                    
                    
                </Text>
                <Text centered preset="h8" style={{color:'grey'}}>
                    
                    *sponsered
                </Text>
            </View>

            <Text preset= "h7" style={{color:'grey'}} left>
            These pointy toe pumps made of brushed material with a varnished heel express timeless elegance. The Rheea 65 is decorated with the iconic enameled metal material that first appeared in 1983 on trunks designed by company.
            </Text>
        </View>
    );
}