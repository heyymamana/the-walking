import React from 'react';
import { View, Image } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

export default function SponseredSport() {
    return (
        <View style={{ padding: spacing[5], alignItems: 'center' }}>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/sports-2-4.png')}
            />

            <View style={{ paddingVertical: spacing[5] }}>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                <Text preset="h4" textColor={colors.primary}>
                    Limited Stocks Left!
                    </Text>
                </Text>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                   
                        VS Pace 2.0
                    
                    
                </Text>
                <Text centered preset="h8" style={{color:'grey'}}>
                    
                    *sponsered
                </Text>
            </View>

            <Text preset= "h7" style={{color:'grey'}} left>
            With a sleek design that is more comfortable than your favourite T-shirt, the VS Pace 2.0 3-Strips is made to feel good and look fast. Its stretchy sleeve creates a cosy, sock-like fit while the super-soft foam adds spring to your step. Put them on and you will never want to take them off.
            </Text>
        </View>
    );
}
