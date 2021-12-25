import { LoaderFunction, useLoaderData } from "remix";
import { getGithubUser } from "~/features/github/api";
import { LoaderData, User } from "~/features/github/types";

export const loader : LoaderFunction = async ({params}) => {
    return await getGithubUser(params.userName)
}



const Github = () => {
    const {user } = useLoaderData<LoaderData>()
    return (
        <div>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="dong" />
        </div>
    )
}

export default Github