import "./VideoTitle.scss"

export const VideoTitle = ({videos}) => {
    return (
        <span className="videoTitle">{videos[0].title}</span>
    )
}