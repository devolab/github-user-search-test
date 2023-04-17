export interface IProfilePictureProps {
  avatarUrl: string
}

export default function ProfilePicture(props: IProfilePictureProps) {
  const { avatarUrl } = props;

  return (
    <img
      className="profile-picture"
      src={avatarUrl}
      alt="Profile Avatar"
    />
  )
}