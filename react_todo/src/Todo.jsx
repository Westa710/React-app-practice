import { useState } from 'react'
import "./styles.css";
export const Todo = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["TODOです1","TODOです2"]);
  const [completeTodos, setCompleteTodos] = useState(["TODOでした1","TODOでした2"]);
    

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
              // keyにtodoを設定するのは妥協案
              // keyはループごとにユニークである必要があり，
              // todoの名前が同じだとユニークでなくなってしまうため
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
              // keyにtodoを設定するのは妥協案
              // keyはループごとにユニークである必要があり，
              // todoの名前が同じだとユニークでなくなってしまうため
              <li key={todo}>
                <div className='list-row'>
                  <p className='todo-item'>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            
          ))}
        </ul>
      </div>
      <div></div>

    </>
  )
}

