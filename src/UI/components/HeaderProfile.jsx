export default function HeaderProfile({data , consume}) {
    return (
        <div style={{ display: "flex" ,alignItems: "center", justifyContent: "center"}}>
            <img src={data.user.image.png} alt={data.user.username} />
            <span className="username">{data.user.username}</span>
            {data.user.username === consume[2].username &&
                <span className="tag">you</span>
            }
            <span>{data.createdAt}</span>
        </div>
    )
}
