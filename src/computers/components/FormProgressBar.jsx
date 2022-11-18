export const FormProgressBar = ({page, numPages}) => {
  return (
    <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-label="Example with label"
          style={{ width: `${((page + 1) / numPages) * 100}%` }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
  )
}
