import { Container, Image, ListGroup, ListGroupItem } from "react-bootstrap"
import { Videolist } from "../playlist/playlistvideo/VideoList"
import { useState } from "react"


export const Playlist = () => {
    const [selected, setSelected] = useState(false)

    const handleClick = (id) => {
        console.log(id)
    }
    return (
        <Container className="vjs-playlist videoplaylist vjs-playlist-vertical vjs-csspointerevents">
          <h1 className="playlist-heading">Up Next</h1>
          <ListGroup className="playlist-item-list">
                <ListGroupItem  selected={selected} onClick={handleClick} className="vjs-playlist-item vjs-selected">
                    <picture id="video1" className="vjs-playlist-thumbnail vjs-playlist-now-playing">
                        <Image src={`${Videolist[0].poster}`} />
                        {selected && <span className="vjs-playlist-now-playing-text">Now Playing</span>}
                        <div className="vjs-playlist-title-container">
                            <span className="vjs-up-next-text" title="Up Next">Up Next</span>
                            <cite className="vjs-playlist-name" title="Untitled Video">Untitled Video</cite>
                        </div>
                    </picture>
                </ListGroupItem>
                <ListGroupItem selected={selected} onClick={handleClick} className="vjs-playlist-item vjs-selected">
                    <picture className="vjs-playlist-thumbnail vjs-playlist-now-playing">
                        <Image loading="lazy" src={`${Videolist[1].poster}`} />
                        <div className="vjs-playlist-title-container">
                            <span className="vjs-up-next-text" title="Up Next">Up Next</span>
                            <cite className="vjs-playlist-name" title="Untitled Video">Untitled Video</cite>
                        </div>
                    </picture>
                </ListGroupItem>
                <ListGroupItem selected={selected} className="vjs-playlist-item vjs-selected">
                    <picture className="vjs-playlist-thumbnail vjs-playlist-now-playing">
                        <Image loading="lazy" src={`${Videolist[1].poster}`} />
                        <div className="vjs-playlist-title-container">
                            <span className="vjs-up-next-text" title="Up Next">Up Next</span>
                            <cite className="vjs-playlist-name" title="Untitled Video">Untitled Video</cite>
                        </div>
                    </picture>
                </ListGroupItem>
                <ListGroupItem selected={selected} className="vjs-playlist-item vjs-selected">
                    <picture className="vjs-playlist-thumbnail vjs-playlist-now-playing">
                        <Image loading="lazy" src={`${Videolist[1].poster}`} />
                        <div className="vjs-playlist-title-container">
                            <span className="vjs-up-next-text" title="Up Next">Up Next</span>
                            <cite className="vjs-playlist-name" title="Untitled Video">Untitled Video</cite>
                        </div>
                    </picture>
                </ListGroupItem>
            </ListGroup>
        </Container>
    )
}

