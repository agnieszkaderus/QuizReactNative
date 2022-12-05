import React from 'react';
import {
    RefreshControl, StyleSheet, Text, SafeAreaView, Image, View, FlatList, Dimensions, ToastAndroid
} from 'react-native';

const enappdIcon = {uri: "data:image/png;base64,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"}
const widthConst = Dimensions.get('screen').width;

export default function MyList() {
    const IMAGES = {
        image1: enappdIcon, image2: enappdIcon, image3: enappdIcon, image4: enappdIcon, image5: enappdIcon, image6: enappdIcon, image7: enappdIcon, image8: enappdIcon, image9: enappdIcon, image10: enappdIcon,
    }
    const initialData = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Marek",
            image: "1"
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Kasia",
            image: "2"
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Bartek",
            image: "3"
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53cbb28ba",
            title: "Ola",
            image: "4"
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fcd91aa97f63",
            title: "James Sullivan",
            image: "5"
        }
    ];
    const [refreshing, setRefreshing] = React.useState(false);
    const [listData, setListData] = React.useState(initialData);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        if (listData.length < 10) {
            try {
                let response = await fetch(
                    'http://www.mocky.io/v2/5e3315753200008abe94d3d8?mocky-delay=2000ms',
                );
                let responseJson = await response.json();
                console.log(responseJson);
                setListData(responseJson.result.concat(initialData));
                setRefreshing(false)
            } catch (error) {
                console.error(error);
            }
        }
        else{
            ToastAndroid.show('No more new data available', ToastAndroid.SHORT);
            setRefreshing(false)
        }
    }, [refreshing]);

    function Item({ title, image }) {
        return (
            <View style={styles.item}>
                <Image source={IMAGES['image' + image]} style={styles.thumbnail} />
                <Text style={styles.itemText}>{title}</Text>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listData}
                renderItem={({ item }) => <Item title={item.title} image={item.image} />}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                contentContainerStyle={styles.list}
            />
            <View style={styles.enappdWrapper}>
                <Image style={styles.enappdIcon} source={enappdIcon} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    scrollView: {
        flex: 1, backgroundColor: '#eeeeee',
    },
    list: {
        alignItems: 'flex-start', justifyContent: 'flex-start', width: widthConst, flex: 1
    },
    enappdWrapper: {
        position: 'absolute',  bottom: 0
    },
    enappdIcon: {
        width: 100, height: 40
    },
    item: {
        flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 20
    },
    thumbnail: {
        width: 60, height: 60, borderWidth: 1, borderColor: '#aaa'
    },
    itemText: {
        paddingTop: 5, paddingLeft: 10, fontSize: 18
    }
});
