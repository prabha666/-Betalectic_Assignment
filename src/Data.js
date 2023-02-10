import {useState, useEffect} from 'react'
import HasFav from './HasFav';

export default function Data() {

  const[data,setData] = useState([])
  const[text,setText] = useState([])
  const [selectedOption, setSelectedOption] = useState("");
  const[record,setRecord] = useState('')
  const fetchData=async()=>{
    const res = await fetch('https://api.npms.io/v2/search?q=reactjs')
    const resJson = await res.json()
    setData(resJson)
    setText(resJson.results)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
    setRecord(event.target.value)
  };
  console.log(record)
  return (
    <div className="App">
      <input onChange={(e)=>{
        if(e.target.value===' ')
        setText(data.results)

        let arr = data.results.filter((item)=>{
          return item.package.name.includes(e.target.value)
        })
        setText(arr)
      }}/>
      <br/>
      {
        text&&text.map((item)=>{
          return(
            <>
           
            <input
            type="radio"
            value={item.package.name}
            checked={selectedOption === item.package.name}
          onChange={handleOptionChange}
          />
          {item.package.name}<br/>
          
          </>
          )
        })
      }
      
      <HasFav cop={record} />
    </div>
  );
}