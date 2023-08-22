import React from 'react';
import { View, Image } from 'react-native';
import { colors, spacing } from '../theme';
import Text from './text/text';

export default function SponsoredSneakers() {
    return (
        <View style={{ padding: spacing[5], alignItems: 'center' }}>
            <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/sdes-3-4.png')}
            />

            <View style={{ paddingVertical: spacing[5] }}>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                <Text preset="h4" textColor={colors.primary}>
                    Limited Stocks Left!
                    </Text>
                </Text>
                <Text centered preset="h5" style={{ textTransform: 'uppercase' }}>
                   
                Gazelle 2.0 QK  
                    
                    
                </Text>
                <Text centered preset="h8" style={{color:'grey'}}>
                    
                    *sponsered
                </Text>
            </View>

            <Text preset= "h7" style={{color:'grey'}} left>
            Let your design shine in satin, keep it classic in canvas and get luxe with its design and comfort. No matter what you choose, these Gazelle 2.0 QK are all about you. classic colour choice and an additional Gum option for the sole mean your shoe is destined to be one of a kind, just like you.
            </Text>
        </View>
    );
}