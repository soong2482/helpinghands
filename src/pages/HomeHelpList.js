const HomeHelpList = ({help})=>{
    return(
        <div>
                {help.map(help =>(
                    <div>
                        <div>{help.title}</div>
                        <div>{help.address}</div>
                        <div>{help.image}</div>
                        <div>{help.name}</div>
                        <div>{help.phone}</div>
                        <div>{help.text}</div>
                       </div>
                ))}
        </div>
    )
}
export default HomeHelpList;