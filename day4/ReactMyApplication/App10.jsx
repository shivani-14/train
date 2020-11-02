// import React from 'react'
// import axios from 'Axios'
// class App10 extends React.Component {

//         constructor(props) {
//             super(props)
//             this.state = {
//                 records: []
//             }
//         }
//         componentDidMount() {
//             const apiurl = 'http://jsonplaceholder.typicode.com/users/';
//             // fetch(apiurl)
//             // .then((response)=> response.json())
//             // .then((data)=>console.log("RECORDS are  ",data))

//             // axios.get(apiurl)
//             // .then((response)=>{
//             //     //console.log(response.data)
//             //     this.setState({
//             //         records:response.data
//             //     })
//             //     console.log(this.state.records)
//             // })
//             // .catch(error=>{
//             //     console.log("ERROR")
//             // })

//             const urlone = axios.get('http://jsonplaceholder.typicode.com/users/')
//             const urlsecond = axios.get('https://api.github.com/users/hacktivist123/repos')
//             const myurl = axios.get('http://localhost:4000/users')

//             axios.all([urlone, urlsecond, myurl]).then(axios.spread((...responses) => {
//                 console.log("First ", responses[0].data)
//                 console.log("Second ", responses[1].data)
//                 console.log("third ", responses[2].data)

//                 this.setState({
//                     record: responses[2].data
//                 })
//             }))


//         }
//         render() {
//                 return ( <div>
//                     <input type = "text"
//                     id = 'name'
//                     onInput = {
//                         (e) => this.input(e) }
//                     /> <ul> {
//                         this.state.arr.map(rec => <li> { rec.first_name } </li>)} 
//                         </ul>
//                         </div>
//                         )
//                     }
//                 }

//                 export default App10;