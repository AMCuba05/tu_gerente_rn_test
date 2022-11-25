import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserId = async id => {
  try {
    await AsyncStorage.setItem('user_id', id);
  } catch (e) {
    alert(e);
  }
};

export const getUserId = async () => {
  try {
    const value = await AsyncStorage.getItem('user_id');
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    alert(e);
  }
};
