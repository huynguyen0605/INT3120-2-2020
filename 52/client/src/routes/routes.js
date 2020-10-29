import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import ListeningStack from './listeningStack';
import ReadingStack from './readingStack';
import VocabularyStack from './vocabularyStack';

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