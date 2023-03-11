import React from "react"
import Emojidata from "./Emojidata"
import data  from "../data"


// function Emoji_map(datas){
//     return(
//         <Emojidata
//         key={datas.id}
//         emoji={datas.emoji}
//         caption={datas.caption}
//         description={datas.description}
//         />
//     )
// }

function App(){
    return(
        <div>
            <h1 className="heading">EMOJIPEDIA</h1>
            <dl className="dictionary">
            {data.map(datas =>  <Emojidata
            key={datas.id}
            emoji={datas.emoji}
            caption={datas.caption}
            description={datas.description}
            />)}
            </dl>
            

            {/* <Emojidata emoji={data[0].emoji}/>
            <Emojidata caption={data[0].caption}/> 
            <Emojidata description={data[0].description}/> */}
        </div>
    )
}

export default App;

