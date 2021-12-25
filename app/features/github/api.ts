import invariant from "tiny-invariant"

export const getGithubUser = async (userName ?: string) => {
    invariant(userName, 'Please provide an user as a string')
    const res = await fetch(`https://api.github.com/users/${userName}`, {
        headers : {
            accept: "application/vnd.github.v3+json",
            Authorization : 'token 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'
        }
    })
    const {login,avatar_url,html_url,bio} = await res.json()
    return {
        user : {login,avatar_url,html_url,bio}
    }
}