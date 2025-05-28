export default async function AboutDetailPage({ params }){

    const {id} = await params;
    console.log(id)
    return(
        <> about</>
    )
}