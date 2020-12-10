import HomeStack from './homeStack';
import ListeningStack from './listeningStack';
import ReadingStack from './readingStack';
import VocabularyStack from './vocabularyStack';
import Login from './loginStack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    Nghe: {
        screen: ListeningStack,
    },
    Đọc: {
        screen: ReadingStack
    },
    'Từ điển': {
        screen: VocabularyStack
    },
    'Đăng nhập': {
        screen:Login
    }
});
export default createAppContainer(RootDrawerNavigator);