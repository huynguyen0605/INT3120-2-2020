import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Audio } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

export default class App extends React.Component {
    state = {
        isPlaying: false,
        playbackInstance: null,
        currentIndex: 0,
        volume: 1.0,
        isBuffering: true
    }

    async componentDidMount() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                playsInSilentModeIOS: true,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: true
            })

            this.loadAudio()
        } catch (e) {
            console.log(e)
        }
    }

    async loadAudio() {
        const { isPlaying, volume } = this.state
        const { currentAudioUri } = this.props;

        try {
            const playbackInstance = new Audio.Sound()
            const source = {
                uri: currentAudioUri
            }

            const status = {
                shouldPlay: isPlaying,
                volume: volume
            }

            playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
            await playbackInstance.loadAsync(source, status, false)
            this.setState({
                playbackInstance
            })
        } catch (e) {
            console.log(e)
        }
    }

    onPlaybackStatusUpdate = status => {
        this.setState({
            isBuffering: status.isBuffering
        })
    }

    handlePlayPause = async () => {
        const { isPlaying, playbackInstance } = this.state
        isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

        this.setState({
            isPlaying: !isPlaying
        })
    }

    handlePreviousTrack = async () => {
        return;
    }

    handleNextTrack = async () => {
        return;
    }

    renderFileInfo() {
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.controls}>
                    {/* <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
                        <Ionicons name='ios-skip-backward' size={48} color='#444' />
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
                        {this.state.isPlaying ? (
                            <Ionicons name='ios-pause' size={48} color='#444' />
                        ) : (
                                <Ionicons name='ios-play-circle' size={48} color='#444' />
                            )}
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
                        <Ionicons name='ios-skip-forward' size={48} color='#444' />
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 128,
        marginTop: 8,
        backgroundColor: 'rgb(156,156,156)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    albumCover: {
        width: 250,
        height: 250
    },
    trackInfo: {
        padding: 40,
        backgroundColor: '#fff'
    },

    trackInfoText: {
        textAlign: 'center',
        flexWrap: 'wrap',
        color: '#550088'
    },
    largeText: {
        fontSize: 22
    },
    smallText: {
        fontSize: 16
    },
    control: {
        margin: 20
    },
    controls: {
        flexDirection: 'row'
    }
})