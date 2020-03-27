import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident
    const message = 
    `Hello ${incident.name} I'm contacting you because I would like to help with the incident \"${incident.title}\" with a value of ${Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(incident.value)}`
    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Hero of the Incident: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO: </Text>
                <Text style={styles.incidentValue}>
                    {incident.name} of {incident.city}/{incident.uf}
                </Text>

                <Text style={styles.incidentProperty}>INCIDENT: </Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALUE: </Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(incident.value)}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the hero of this incident.</Text>
                <Text style={styles.heroDescription}>Contact us</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                        onPress={sendWhatsapp}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={sendMail}
                        style={styles.action}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}