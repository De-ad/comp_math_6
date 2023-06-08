import UserDataInput from "./components/UserDataInput";

function App() {
  return (
    <div className="flex justify-center space-x-7">
      <div className="grid space-x-5 space-y-5 m-10">
          <div className="flex justify-center space-x-10">
              <div className="grid">
              <img src="./copium-cat.gif" className="h-fit rounded-lg"/>
                  <UserDataInput/>
              {/*<ErrorField/>*/}
              </div>
          </div>
          <div className="flex justify-center space-x-10">
          </div>
          {/*<Graph/>*/}
      </div>
    </div>
  );
}

export default App;
