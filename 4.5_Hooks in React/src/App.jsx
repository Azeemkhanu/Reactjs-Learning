// import LearnEvent from './components/LearnEvent'
// import LearnLiftingStateUp from './components/LearnLiftingStateUp'
// import LearnState from './components/LearnState'
// import LearnUseEffect from "./components/LearnUseEffect";
// import LearnUseMemo from './components/LearnUseMemo'
// import LearnUseCallback from './components/LearnUseCallback'
// import CustomHook from './components/CustomHook'
import LearnConditionalRendering from './components/LearnConditionalRendering'

function App() {

  //  Getting child data here in parent
  // const getDataFromChild = (data) =>{
  //   console.log('Getting data from a child',data);
  // }

  return (
    <>
      <h1>Hello</h1>
      {/* <LearnEvent /> */}
      {/* <LearnLiftingStateUp getChildData={getDataFromChild}/> */}
      {/* <LearnState /> */}
      {/* <LearnUseEffect /> */}
      {/* <LearnUseMemo /> */}
      {/* <LearnUseCallback /> */}
      {/* <CustomHook /> */}
      <LearnConditionalRendering />
    </>
  )
}

export default App
