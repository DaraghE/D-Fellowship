export function Waiting(params) {
    return(<div>waiting</div>)
}

export function UserIn(params) {
    return (
        <div>
            <pre> Hello: {auth.user?.profile.email} </pre>
            {/* <pre> ID Token: {auth.user?.id_token} </pre> 
            <pre> Access Token: {auth.user?.access_token} </pre>
            <pre> Refresh Token: {auth.user?.refresh_token} </pre> */}
        </div>
    )
}