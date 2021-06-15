import './message.css';
import {format} from 'timeago.js'

export default function Message({message, own}) {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://static.cpcache.com/homePage/homepage-may2021/fathers-day-hats-trucker-custom-gift.jpg" alt="" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}
