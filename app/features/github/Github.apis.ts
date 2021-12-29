import invariant from 'tiny-invariant'
import type { Repositories, Commits } from './Github.types'

const fetchConfig = {
  headers: {
    accept: 'application/vnd.github.v3+json',
    Authorization: 'token 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',
  },
}

export const getGithubUser = async (userName?: string) => {
  invariant(userName, 'Please provide an user as a string')
  const res = await fetch(
    `https://api.github.com/users/${userName}`,
    fetchConfig,
  )
  const { login, avatar_url, html_url, bio } = await res.json()
  return {
    login,
    avatar_url,
    html_url,
    bio,
  }
}

export const getUserRepo = async (userName?: string) => {
  invariant(userName, 'Please provide an user as a string')
  const res = await fetch(
    `https://api.github.com/users/${userName}/repos`,
    fetchConfig,
  )
  return (await res.json()).map(
    ({ id, name, full_name, stargazers_count, html_url, language }: Repositories.Repo) => ({
      id,
      name,
      full_name,
      stargazers_count,
      html_url,
      language,
    }),
  )
}

export const getUserRepoCommit = async (
  userName?: string,
  repoName?: string,
) => {
  invariant(repoName, 'Please provide an repository name as a string')
  invariant(userName, 'Please provide an user name as a string')
  const res = await fetch(
    `https://api.github.com/repos/${userName}/${repoName}/commits`,
    fetchConfig,
  )
  return (await res.json()).map((commit: Commits.ApiResponse) => ({
    sha: commit.sha,
    message: commit.commit.message,
    html_url: commit.html_url,
  }));
}
