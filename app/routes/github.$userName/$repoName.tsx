import { LoaderFunction, useLoaderData } from 'remix'
import { Apis,Types } from '~/features/github'
import { Commits } from '~/features/github/components/Commits'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    commits: await Apis.getUserRepoCommit(params.userName, params.repoName),
    user: await Apis.getGithubUser(params.userName),
  }
}

export function ErrorBoundary() {
  return <h3>Whoops. Something went wrong</h3>
}

const RepoName = () => {
  const { commits, user } = useLoaderData<Types.Commits.LoaderData>()
  return <Commits commits={commits} user={user} />
}

export default RepoName
