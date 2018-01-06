import { StackNavigator } from 'react-navigation'
import { StartScreenContainer, ResultScreenContainer } from '../containers'

const RootNavigator = StackNavigator({
    Start: {
        screen: StartScreenContainer,
        navigationOption: {
            headerTitle: 'Start'
        }
    },
    Result: {
        screen: ResultScreenContainer,
        navigationOption: {
            headerTitle: 'Result'
        }
    }
})

export default RootNavigator    