import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import Text from '../ui-toolkit/Text';
import {Posts} from '../model/Post';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../redux/postService';
import {MainState, useAppDispatch} from '../redux/appStore';
import CardView from '../ui-toolkit/CardView';
import {useAppNavigation} from '../navigation/useAppNavigation';
import {APIStatus, TextTypes} from '../utils/Enums';

const PostScreen = () => {
  const dispatch = useAppDispatch();

  const posts: Posts = useSelector((store: MainState) => store.post.posts);
  const postsStatus = useSelector((store: MainState) => store.post.status);
  const navigation = useAppNavigation();
  const theme = useTheme();
  const allPosts = posts.posts;

  useEffect(() => {
    if (postsStatus === APIStatus.LOADING) {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const onPressHandle = () => {
    navigation.navigate('PostDetails');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={allPosts}
        renderItem={item => {
          return (
            <CardView onPress={onPressHandle}>
              <Text style={{color: theme.colors.text}} type={TextTypes.PRIMARY}>
                {item.item.title}
              </Text>
            </CardView>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    marginBottom: 5,
    margin: 15,
  },
});

export default PostScreen;
