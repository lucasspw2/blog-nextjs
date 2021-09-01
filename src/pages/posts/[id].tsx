import {useRouter} from 'next/router';

export default function Post(){
    const router = useRouter();
    return(
        <>
        <div>cole: {router.query.id}</div>
        <div>{router.asPath}</div>
        </>
    )
}