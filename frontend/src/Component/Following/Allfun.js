import { user,post,Follower } from "../../Api/Url"
export const Adddata=(data,LogedinUser)=> {
    if(LogedinUser.length==1){
        let followers=LogedinUser.followers
        followers.push(data)
        let user={...LogedinUser,follower:followers}
        fetch(user, {
            method: 'POST',
            'headers': {'Content-Type': 'application/json',},
            body: JSON.stringify(user)
        }).catch((err)=>{console.log(err)})
    }
}
export const Logedinuser=()=> {
    fetch(`${user}?Login=true`).then((res)=>{
        res.json().then((res)=>{
            return res
        })
    })
}
export const Posts=()=> {
    fetch(`${post}`).then((res)=>{
        res.json().then((res)=>{
            return res
        })
    })
}