import React from 'react';
import { View, Image } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

export default function Sponsoredflipflops() {
    return (
        <View style={{ padding: spacing[5], alignItems: 'center' }}>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/f-5-4.png')}
            />

            <View style={{ paddingVertical: spacing[5] }}>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                <Text preset="h4" textColor={colors.primary}>
                    Limited Stocks Left!
                    </Text>
                </Text>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                   
                Strudi Mx47 with 3-Stripes
                    
                    
                </Text>
                <Text centered preset="h8" style={{color:'grey'}}>
                    
                    *sponsered
                </Text>
            </View>

            <Text preset= "h7" style={{color:'grey'}} left>
            You have played hard. You have sweated. You have given your all. Now there is just one last thing you have to hit the showers. Do not worry, we have got your back with our material quality and durability. Our products one-piece foam design feels soft and comfortable while traction patterns on the sole help with wet surfaces. They dry quickly too, so no one will know you have just stepped out of the showers as you slide up to the party.
            </Text>
        </View>
    );
}