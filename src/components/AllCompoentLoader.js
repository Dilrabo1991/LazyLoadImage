import React, { useEffect, useState } from 'react'
import ContentLoader, {
    List,
    BulletList,
    Facebook,
    Instagram,
} from 'react-content-loader'

const AllCompoentLoader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => {
            setLoading(false)
        }, 3000);

        return () => {
            clearTimeout(t)
        };
    }, [])


    return (
        <>{
            loading ? (
                <>
                    {" "}
                    <div> <h1>List</h1>
                        <List />

                        <h1>BulletList</h1>
                        <BulletList />

                        <h1>Facebook</h1>
                        <Facebook />

                        <h1>Instagram</h1>
                        <Instagram />

                    </div>
                </>
            ) : (
                <h1>bu yerda content bor 😊</h1>
            )}
        </>
    )
}

export default AllCompoentLoader
