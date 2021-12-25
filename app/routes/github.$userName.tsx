import { LoaderFunction, useLoaderData } from "remix";
import { getGithubUser } from "~/features/github/api";
import { LoaderData, User } from "~/features/github/types";

export const loader : LoaderFunction = async ({params}) => {
    return await getGithubUser(params.userName)
}



const Github = () => {
    const {user : {login,avatar_url,html_url,bio}} = useLoaderData<LoaderData>()
    console.log(avatar_url)
    return (
        <div>
            <p>{login}</p>
            <img src={avatar_url} alt="dong" />
        </div>
    )
}

export default Github