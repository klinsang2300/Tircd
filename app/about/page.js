const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async()=>{
    const res = await fetch(url);
    const data = await res.json();
    return data
}

export default async function AboutPage()
{
     const data = await fetchTodos();
     return (
        <>
        
            {data.map((item,index)=>{
                return <li key={index}>{item.title}</li>
            })}
        </>
     )
}