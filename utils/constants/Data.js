import { Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Artists from '../../screens/Artists';
import Colors from './Colors';




export const SettingsData = [
    {
        //icon: <Feather name="upload" size={24} color={Colors[theme]['text']} />,
        iconType: Feather,
        name: "upload",
        title: 'Backup',
        id: 1,
        nextIcon: true,
    },
    {
        //icon: <FontAwesome5 name="bell" size={24} color={Colors[theme]['text']} />,
        iconType: FontAwesome5,
        name: "bell",
        title: 'Notification',
        id: 2,
        nextIcon: true,

    },
    {
        //icon: <Ionicons name="language-outline" size={24} color={Colors[theme]['text']} />,
        iconType: Ionicons,
        name: "language-outline",
        title: 'Language',
        id: 3,
        content: 'English (US)',
        nextIcon: true,

    },
    {
        //icon: <Ionicons name="eye-outline" size={24} color={Colors[theme]['text']} />,
        iconType: Ionicons,
        name: "eye-outline",
        title: 'Dark Mode',
        id: 4,
        toggle: true,
    },
    {
        //icon: <Ionicons name="ios-paper-plane-outline" size={24} color={Colors[theme]['text']} />,
        iconType: Ionicons,
        name: "ios-paper-plane-outline",
        title: 'Share App',
        id: 5,
        nextIcon: true,

    },
    {
        //icon: <MaterialCommunityIcons name="note-text-outline" size={24} color={Colors[theme]['text']} />,
        iconType: MaterialCommunityIcons,
        name: "note-text-outline",
        title: 'Change Log',
        id: 6,
        nextIcon: true,

    },
    {
        //icon: <Feather name="shield" size={24} color={Colors[theme]['text']} />,
        iconType: Feather,
        name: "shield",
        title: 'Privacy Policy',
        id: 7,
        nextIcon: true,

    },
    {
        //icon: <Feather name="info" size={24} color={Colors[theme]['text']} />,
        iconType: Feather,
        name: "info",
        title: 'FAQ',
        id: 8,
        nextIcon: true,

    },
    {
        //icon: <Ionicons name="exit-outline" size={24} color={Colors[theme]['text']} />,
        iconType: Ionicons,
        name: "exit-outline",
        title: 'Quit',
        id: 9
    },
]

export const SuggestedData = {
    Artists : [
        {
            id: 1,
            image: require('../../assets/images/ariana.jpg'),
            title: 'Ariana Grande',
            artist: true
        },
        {
            id: 2,
            image: require('../../assets/images/burna.jpg'),
            title: 'Burna Boy',
            artist: true

        },
        {
            id: 3,
            image: require('../../assets/images/cardi.jpg'),
            title: 'Cardi B',
            artist: true

        },
        {
            id: 4,
            image: require('../../assets/images/central.jpg'),
            title: 'Central Cee',
            artist: true

        },
        {
            id: 5,
            image: require('../../assets/images/dave.jpg'),
            title: 'Dave',
            artist: true

        },
        {
            id: 6,
            image: require('../../assets/images/weeknd.jpg'),
            title: 'The Weeknd',
            artist: true

        },
    ],
    Songs : [
        {
            id: 1,
            image: require('../../assets/images/wonderful.jpg'),
            title: 'Wonderful - Burna Boy'
        },
        {
            id: 2,
            image: require('../../assets/images/starboy.jpg'),
            title: 'Starboy - The Weeknd'
        },
        {
            id: 3,
            image: require('../../assets/images/side2side.jpg'),
            title: 'Side To Side - Ariana Grande'
        },
        {
            id: 4,
            image: require('../../assets/images/psychodrama.jpg'),
            title: 'Psychodrama - Dave'
        },
        {
            id: 5,
            image: require('../../assets/images/privacy.jpg'),
            title: 'Finesse - Cardi B'
        },
        {
            id: 6,
            image: require('../../assets/images/23.jpg'),
            title: '23 - Central Cee'
        },
    ],
    Albums: [
        {
            id: 1,
            image: require('../../assets/images/23.jpg'),
            title: '23 - Central Cee'
        },
        {
            id: 2,
            image: require('../../assets/images/privacy.jpg'),
            title: 'Finesse - Cardi B'
        },
        {
            id: 3,
            image: require('../../assets/images/psychodrama.jpg'),
            title: 'Psychodrama - Dave'
        },
        {
            id: 4,
            image: require('../../assets/images/side2side.jpg'),
            title: 'Side To Side - Ariana Grande'
        },
        {
            id: 5,
            image: require('../../assets/images/starboy.jpg'),
            title: 'Starboy - The Weeknd'
        },
        {
            id: 6,
            image: require('../../assets/images/wonderful.jpg'),
            title: 'Wonderful - Burna Boy'
        },
    ]
}

export const SongsData = [
    {
        id: 1,
        image: require('../../assets/images/23.jpg'),
        song: 'Doja',
        artist: 'Central Cee'
    },
    {
        id: 2,
        image: require('../../assets/images/ariana.jpg'),
        song: 'Butterflies',
        artist: 'Ariana Grande'
    },
    {
        id: 3,
        image: require('../../assets/images/burna.jpg'),
        song: 'Kilometer',
        artist: 'Burna Boy'
    },
    {
        id: 4,
        image: require('../../assets/images/cardi.jpg'),
        song: 'Bodac Yellow',
        artist: 'Cardi B'
    },
    {
        id: 5,
        image: require('../../assets/images/central.jpg'),
        song: 'Ruby',
        artist: 'Central Cee'
    },
    {
        id: 6,
        image: require('../../assets/images/dave.jpg'),
        song: 'Lazarus',
        artist: 'Dave'
    },
    {
        id: 7,
        image: require('../../assets/images/privacy.jpg'),
        song: 'Finesse',
        artist: 'Cardi B'
    },
    {
        id: 8,
        image: require('../../assets/images/psychodrama.jpg'),
        song: 'Psychodrama',
        artist: 'Dave'
    },
    {
        id: 9,
        image: require('../../assets/images/side2side.jpg'),
        song: 'Side To Side',
        artist: 'Central Cee'
    },
    {
        id: 10,
        image: require('../../assets/images/starboy.jpg'),
        song: 'StarBoy',
        artist: 'The Weeknd'
    },
    {
        id: 11,
        image: require('../../assets/images/weeknd.jpg'),
        song: 'Blinding Lights',
        artist: 'The Weeknd'
    },
    {
        id: 12,
        image: require('../../assets/images/wonderful.jpg'),
        song: 'Wonderful',
        artist: 'Burna Boy'
    },
]

export const ArtistsData = [
    {
        id: 1,
        image: require('../../assets/images/ariana.jpg'),
        artist: 'Ariana Grande'
    },
    {
        id: 2,
        image: require('../../assets/images/burna.jpg'),
        artist: 'Burna Boy'
    },
    {
        id: 3,
        image: require('../../assets/images/cardi.jpg'),
        artist: 'Cardi B'
    },
    {
        id: 4,
        image: require('../../assets/images/central.jpg'),
        artist: 'Central Cee'
    },
    {
        id: 5,
        image: require('../../assets/images/dave.jpg'),
        artist: 'Dave'
    },
    {
        id: 6,
        image: require('../../assets/images/weeknd.jpg'),
        artist: 'The Weeknd'
    },
    
]

export const AlbumsData = [
    {
        id: 1,
        image: require('../../assets/images/starboy.jpg'),
        title: 'StarBoy',
        artist: 'The Weeknd',
    },
    {
        id: 2,
        image: require('../../assets/images/privacy.jpg'),
        title: 'Privacy',
        artist: 'Cardi B',
    },
    {
        id: 3,
        image: require('../../assets/images/23.jpg'),
        title: '23',
        artist: 'Central Cee',
    },
    {
        id: 4,
        image: require('../../assets/images/wonderful.jpg'),
        title: 'Love, Damini',
        artist: 'Burna Boy',
    },
    {
        id: 5,
        image: require('../../assets/images/psychodrama.jpg'),
        title: 'Psycdhodrama',
        artist: 'Dave',
    },
    {
        id: 6,
        image: require('../../assets/images/ariana.jpg'),
        title: 'Side To Sidde',
        artist: 'Ariana Grande',
    },
]

export const FoldersData = [
    {
        id: 1,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'Top 100 Billboards',
        playlist: true
    },
    {
        id: 2,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'My Favorite Songs',
        playlist: true
    },
    {
        id: 3,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'Ariana Grande',
        playlist: true
    },
    {
        id: 4,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'Most Popular Songs',
        playlist: true
    },
    {
        id: 5,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'Childhood Memories',
        playlist: true
    },
    {
        id: 6,
        folderImage: <FontAwesome name="folder" size={84} color="#ff8921" />,
        folderTitle: 'Great Soundtracks',
        playlist: true
    },
]

export const PlaylistsData = [
    {
        id: 1,
        image: require('../../assets/images/wonderful.jpg'),
        folderTitle: '90s Old Song',
        playlist: true,
        playlistsPage: true

    },
    {
        id: 2,
        image: require('../../assets/images/23.jpg'),
        folderTitle: 'My Favorite Songs',
        playlist: true,
        playlistsPage: true

    },
    {
        id: 3,
        image: require('../../assets/images/psychodrama.jpg'),
        folderTitle: 'Legend Rock Songs',
        playlist: true,
        playlistsPage: true

    },
    {
        id: 4,
        image: require('../../assets/images/privacy.jpg'),
        folderTitle: 'My Favorite Acoustic Songs',
        playlist: true,
        playlistsPage: true

    },
    {
        id: 5,
        image: require('../../assets/images/side2side.jpg'),
        folderTitle: 'Memories Of Love',
        playlist: true,
        playlistsPage: true

    },
    {
        id: 6,
        image: require('../../assets/images/starboy.jpg'),
        folderTitle: 'Pain - Ryan Jones',
        playlist: true,
        playlistsPage: true

    },
]