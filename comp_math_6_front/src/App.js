import UserDataInput from "./components/UserDataInput";
import Table from "./components/Table";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="flex justify-center space-x-7">
      <div className="grid space-x-5 space-y-5 m-10">
          <div className="flex justify-center space-x-10">
              <div className="grid space-y-2">
              <img src="./copium-cat.gif" className="h-fit rounded-lg"/>
                  <UserDataInput/>
                  <Graph/>
                  <Table/>
              {/*<ErrorField/>*/}
              </div>
          </div>
          <div className="flex justify-center space-x-10">
          </div>

      </div>
    </div>
  );
}

export default App;
