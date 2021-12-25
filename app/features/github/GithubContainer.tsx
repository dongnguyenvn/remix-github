import { User } from "./types"

type GithubContainerProps = {
    user : User
} 

const GithubContainer = ({user} : GithubContainerProps) => {
    return (
        <div>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="dong" />
        </div>
    )
}

export default GithubContainer
