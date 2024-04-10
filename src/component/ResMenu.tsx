import {View, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import ResMenuItem from './ResMenuItem';
import {Card4} from '../model/MenuCard';
import AccordionHeader from './AccordionHeader';

type Props = {
  cardData: Card4;
};
const ResMenu = ({cardData}: Props) => {
  const [isShown, setIsShown] = useState(true);
  const {title, itemCards} = cardData;

  const onPresshandler = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return (
    <View>
      <AccordionHeader
        title={title}
        totalItem={itemCards.length}
        handler={onPresshandler}
      />

      {isShown && (
        <FlatList
          data={itemCards}
          renderItem={item => {
            return <ResMenuItem resInfo={item.item.card.info} />;
          }}
          keyExtractor={item => item.card.info.id}
        />
      )}
    </View>
  );
};

export default React.memo(ResMenu);
