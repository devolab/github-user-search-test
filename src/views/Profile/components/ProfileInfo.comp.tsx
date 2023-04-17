interface ProfileInfo {
  name: string;
  publicRepos: number
}

export default function ProfileInfo(props: ProfileInfo) {

  const { name, publicRepos } = props;

  return (
    <>
      <h2 className="profile-name">{name}</h2>
      <p className="repos-count">
        <strong>{publicRepos}</strong> <span className="repos-text">repositories</span>
      </p></>
  )
}