import './index.css'

const AppListItem = props => {
  const {appDetails, deleteApp} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = appDetails

  const onDelete = () => {
    deleteApp(id)
  }

  return (
    <li className="app-list-container">
      <p className="time-style">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="image-style" />
      <p className="title">{title}</p>
      <p className="domain-name">{domainUrl}</p>
      <button data-testid="delete" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default AppListItem
