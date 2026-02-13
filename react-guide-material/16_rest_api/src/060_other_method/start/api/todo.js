import axios from 'axios'

const ENDPOINT_URL = 'http://localhost:3003/todo'

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL)
    // console.log(result)
    return result.data
  },
  async post(todo) { // todoを第二引数に指定すると、JSONに変換されてサーバに送信される
    const result = await axios.post(ENDPOINT_URL, todo)
    return result.data
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id)
    return result.data
  },
    async patch(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo)
    return result.data
  }
}

todoApi.getAll();
todoApi.patch({
  "id": "f2c38014-e2df-40ae-ac93-36303b8771ce",
  "content": "買い物",
  "editing": false,
  "completed": false
});
