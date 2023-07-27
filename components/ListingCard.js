import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

const ListingCard = ({data, key}) => {
  const image_base_url = 'https://image.tmdb.org/t/p/original'
  const navigation = useNavigation();

  return (
    <Pressable style={styles.listing} key={key} onPress={() => navigation.navigate('DiscoverDetails', {
      data
    })}>
      <View style={styles.imageWrapper}>
        <Image src={image_base_url + data.poster_path} style={{width: 60, height: 80, borderRadius: 10}} />
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.topSection}>
          <Text style={{
            fontWeight: '600',
            fontSize: 18
          }}>
            {
              data.media_type == 'tv' ? data.name : data.title
            }
          </Text>
        </View>
        <View style={styles.bottomSection}>
          <View>
            <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.5)'}}>{data.media_type?.toUpperCase()}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Svg style={{color: '#FFD966'}} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="15" height="15" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
              <Path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></Path>
            </Svg>
            <Text>{data.vote_average}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default ListingCard

const styles = StyleSheet.create({
  Title: {
    fontWeight: '700',
    fontSize: 25
  },
  titleWrapper: {
    paddingLeft: 20,
    paddingTop: 20
  },
  listing: {
    // backgroundColor: 'red',
    height: 100,
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)'
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    flex: 4,
  },
  topSection: {
    flex: 3
  },
  bottomSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
})