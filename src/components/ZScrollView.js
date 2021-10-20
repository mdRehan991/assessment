import React from 'react';
import {FlatList} from 'react-native';

const ZScrollView = props => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={[]}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
      ListEmptyComponent={null}
      keyExtractor={() => 'blank'}
      {...props}
    />
  );
};

export default ZScrollView;
