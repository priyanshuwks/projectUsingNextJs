

export default function UserProfile({params} : any){
    return <div className="mt-20 text-center text-3xl">
        <h1>This is the user-profile of {params.id}</h1>
    </div>
}