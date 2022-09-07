import Head from "next/head";

const HeadTag = ({title}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <meta name="author" content=""/>
            <link rel="Shortcut icon" href="/images/favicon.ico" type='image/icon' />
            <title>{title}</title>
        </Head>
    )
}

export default HeadTag;