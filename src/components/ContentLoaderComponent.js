import React from 'react'
import ContentLoader, {
    List,
    BulletList,
    Facebook,
    Instagram,
    Twitter,
    Linkedin
} from 'react-content-loader'
import ReactPlayer from 'react-player'

const HeadBodyGrid = ({ ...rest }) => (
    <>
        <ContentLoader height="500" width="1000" viewBox="0 0 265 230" {...rest}>
            <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
            <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
            <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
            <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
        </ContentLoader>
        {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
    </>
)

HeadBodyGrid.metadata = {
    name: 'Didier Munezero',
    github: 'didiermunezero',
    description: 'Grid for content of head and body',
    filename: 'HeadBodyGrid',
}

export default HeadBodyGrid