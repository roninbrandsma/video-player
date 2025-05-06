import { Container, Image, ListGroup, ListGroupItem } from "react-bootstrap"
import { useState } from "react"

import "./Playlist.scss"

export const Playlist = ({videos, onSelect, playing}) => {
    const className = "vjs-playlist-item listItem"
    const [selected, setSelected] = useState(false);

    const handleClick = (id) => {
        let elements = document.querySelectorAll(".listItem")
        elements.forEach(element => element.classList.remove("vjs-selected"))
        document.getElementById(id).classList.add("vjs-selected")
    };

    return (
        <Container className="vjs-playlist videoplaylist vjs-playlist-vertical vjs-csspointerevents">
            <h1 className="playlist-heading">Up Next</h1>
            <ListGroup className="playlist-item-list">
                {videos.map((video, index) => {
                    let isActive = video.sources[0] === playing ? true : false
                    return(
                    <ListGroupItem key={index} onClick={() => onSelect(video.sources[0])} className={isActive ? "vjs-playlist-item videoSelected" : "vjs-playlist-item"}>
                        <picture className="vjs-playlist-thumbnail vjs-playlist-now-playing">
                            <Image src={`${video.poster}`} />
                            <div className="vjs-playlist-title-container">
                                <cite className="vjs-playlist-name" title="Untitled Video">{video.title}</cite>
                            </div>
                        </picture>
                    </ListGroupItem>
                )})}
            </ListGroup>
        </Container>
    )
}

