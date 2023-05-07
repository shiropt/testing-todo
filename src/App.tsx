import "./App.css";
import { Button } from "./components/atoms/Button";

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODOリスト</h1>
        <form>
          <input type="text" placeholder="新しいタスクを追加" />
          <Button type="submit" variant="ADD">
            追加
          </Button>
        </form>
      </header>
      <main>
        <ul>
          <li>
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">買い物に行く</label>
            <Button variant="DELETE">削除</Button>
          </li>
          <li>
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">洗濯する</label>
            <Button variant="DELETE">削除</Button>
          </li>
          <li>
            <input type="checkbox" id="task3" />
            <label htmlFor="task3">プログラミングの勉強をする</label>
            <Button variant="DELETE">削除</Button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
