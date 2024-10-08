import {userConnected} from '../../../graphql';
import Screen from '../../ui-kit/layout/Screen';
import UiText from '../../ui-kit/typography/UiText';
import Menu from "../../ui-kit/menu/menu";

const HomeScreen = () => (
    <Screen>
        <Menu/>
        <UiText>
            Hello
            &nbsp;
            {userConnected()?.email}
        </UiText>
    </Screen>
);

export default HomeScreen;
