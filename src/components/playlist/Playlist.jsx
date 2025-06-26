import { Container, Image, ListGroup, ListGroupItem } from "react-bootstrap"

import "./Playlist.scss"

export const Playlist = ({videos, onSelect, playing}) => {
    const className = "vjs-playlist-item listItem"

    return (
        <Container className="vjs-playlist videoplaylist vjs-playlist-vertical vjs-csspointerevents">
            <h1 className="playlist-heading">Up Next</h1>
            <ListGroup className="playlist-item-list">
                {videos.map((video, index) => {
                    let isActive = video.sources[0] === playing ? true : false
                    return(
                        <ListGroupItem key={index} onClick={() => onSelect(video.sources[0])} className="vjs-playlist-item">
                            <picture className="vjs-playlist-thumbnail">
                                <Image src={video.poster} className={isActive ? "vjs-playlist-image videoSelected" : "vjs-playlist-image"} />
                                <div  div className="vjs-playlist-title-container">
                                    {isActive && <span>Now playing</span>}
                                    <cite className="vjs-playlist-name" title="Untitled Video">{video.title}</cite>
                                </div>
                            </picture>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </Container>
    )
}

