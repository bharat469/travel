import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React from 'react';
import {Primary} from '../constant/colors';

interface ViewWrapperProps {
  children: React.ReactNode;
}

const ViewWrapper = (props: ViewWrapperProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.viewWrapperStyle}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default ViewWrapper;

const styles = StyleSheet.create({
  viewWrapperStyle: {
    flex: 1,
    backgroundColor: Primary,
    alignItems: 'center',
  },
});
