import { LoaderFunction, useLoaderData } from "remix";
import { LoaderData, User } from "~/features/github/types";

export const loader : LoaderFunction = async ({params}) => {
    const res = await fetch(`https://api.github.com/users/${params.userName}`, {
        headers : {
            accept : 'application/vnd.github.v3+json',
            Authorization : 'token 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'
        }
    })
    const {login,avatar_url,html_url,bio} = await res.json()
    return {
        user : {login,avatar_url,html_url,bio}
    }
}

const Github = () => {
    const {user : {login,avatar_url,html_url,bio}} = useLoaderData<LoaderData>()
    return (
        <div>
            <p>{login}</p>
            <img src={avatar_url} alt="dong" />
        </div>
    )
}

export default Github