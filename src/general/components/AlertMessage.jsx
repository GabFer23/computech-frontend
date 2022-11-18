export const AlertMessage = ({message, type}) => {
  return (
    <div className={`m-0 w-100 h-100 text-center alert alert-${type}`}>
        {message}
    </div>
  )
}
