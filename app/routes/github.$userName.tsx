import { LoaderFunction, useLoaderData } from 'remix'
import { Repositories } from '~/features/github/components/Repositories'
import { Types } from '../features/github'
import { Apis } from '../features/github'

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Apis.getGithubUser(params.userName),
    repos: await Apis.getUserRepo(params.userName),
  }
}

const Github = () => {
  const { user, repos } = useLoaderData<Types.Repositories.LoaderData>()
  return <Repositories user={user} repos={repos} />
}

export default Github
