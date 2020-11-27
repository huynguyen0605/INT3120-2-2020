import HomeStack from './homeStack';
import ListeningStack from './listeningStack';
import ReadingStack from './readingStack';
import VocabularyStack from './vocabularyStack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Listening: {
        screen: ListeningStack,
    },
    Reading: {
        screen: ReadingStack
    },
    Vocabulary: {
        screen: VocabularyStack
    },
});

export default createAppContainer(RootDrawerNavigator);