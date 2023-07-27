import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { getTrendingData } from '../services/api_services'
import Svg,{ Path } from 'react-native-svg';
import ListingCard from '../components/ListingCard';

const Discover = ({navigation}) => {
  const [trendingData, setTrendingData] = useState([])

  useMemo(() => {
    getTrendingData()
      .then(data => {
        setTrendingData(data)
      })
      .catch(e => {
        console.error(`error: ${e}`);
      })
  }, [])

  return (
    <SafeAreaView>

      {/* Title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.Title}>Trending</Text>
      </View>

      {/* Discover */}
        <ScrollView>
          {
            trendingData?.results?.map((trend, index) => {
              return(
                <ListingCard data={trend} key={index} />
              )
            })
          }
        </ScrollView>

    </SafeAreaView>
  )
}

export default Discover

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