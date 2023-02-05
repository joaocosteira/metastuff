const Notification = ({ notification }) => {

    return(
        notification.length === 0 ?
            null :
            <p>{notification}</p>
    )
}

export default Notification;