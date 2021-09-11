import { HomeScreen } from "../../actions";

export const mapStateToProps = state => {
     return {
          homescreen: state.HomeScreen
     }
}

export const mapDispatchToProps = dispatch => {
     return {
          fetchRandomUserApi: () => {
               dispatch(HomeScreen.fetchRandomUserApi())
          },
          resetFetchRandomUserApi: () => {
               dispatch(HomeScreen.resetFetchRandomUserApi())
          }
     }
}