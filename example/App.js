/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @flow
 */

import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';

export default class App extends React.Component<{}, $FlowFixMeState> {
  state = {
    values: ['One', 'Two', 'Three'],
    value: 'Unselected',
    selectedIndex: undefined,
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.segmentContainer}>
          <Text style={styles.text}>Segmented controls can have values</Text>
          <SegmentedControlIOS values={['One', 'Two']} />
        </View>

        <View style={styles.segmentSection}>
          <SegmentedControlIOS
            values={['One', 'Two', 'Three', 'Four', 'Five']}
          />
        </View>

        <View style={styles.segmentSection}>
          <Text style={styles.text}>
            Segmented controls can have pre-selected values
          </Text>
          <SegmentedControlIOS values={['One', 'Two']} selectedIndex={0} />
        </View>

        <View style={styles.segmentSection}>
          <Text style={styles.text}>Segmented controls can be momentary</Text>
          <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
        </View>

        <View style={styles.segmentSection}>
          <Text style={styles.text}>Segmented controls can be disabled</Text>
          <SegmentedControlIOS
            enabled={false}
            values={['One', 'Two']}
            selectedIndex={1}
          />
        </View>

        <View style={styles.segmentContainer}>
          <Text style={styles.text}>Custom colors can be provided</Text>
          <SegmentedControlIOS
            tintColor="#ff0000"
            values={['One', 'Two', 'Three', 'Four']}
            selectedIndex={0}
            backgroundColor="#0000ff"
          />
        </View>
        <View style={styles.segmentContainer}>
          <SegmentedControlIOS
            tintColor="#00ff00"
            values={['One', 'Two', 'Three']}
            selectedIndex={1}
          />
        </View>
        <View style={styles.segmentSection}>
          <SegmentedControlIOS
            textColor="#ff00ff"
            values={['One', 'Two']}
            selectedIndex={1}
          />
        </View>

        <View>
          <Text style={styles.text}>Custom colors can be provided</Text>
          <View style={styles.segmentContainer}>
            <SegmentedControlIOS
              values={this.state.values}
              selectedIndex={this.state.selectedIndex}
              onChange={this._onChange}
              onValueChange={this._onValueChange}
            />
          </View>
          <Text style={[styles.text]}>
            Value: {this.state.value} Index: {this.state.selectedIndex}
          </Text>
        </View>
      </ScrollView>
    );
  }

  _onChange = (event) => {
    this.setState({
      selectedIndex: event.nativeEvent.selectedSegmentIndex,
    });
  };

  _onValueChange = (value) => {
    this.setState({
      value: value,
    });
  };
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
  segmentContainer: {
    marginBottom: 10,
  },
  segmentSection: {
    marginBottom: 25,
  },
  container: {
    paddingTop: 80,
  },
});
