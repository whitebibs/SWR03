import useSWR from "swr"


const fetcher = (url) => fetch(url).then(res=>res.json())
export function useGithubUser(username){
const {user, error, mutate} = useSWR( username?`https://api.github.com/users/${username}` :null, fetcher)
function handleRef(){
    mutate(`https://api.github.com/users/${username}`, fetcher)
}

if(error)return <div>{handleRef()}</div>
return <h3>Hello {user.name}</h3>

}