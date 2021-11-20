import classNames from "classnames";

const NotificationItem = (props) => {
    const classNoti = classNames("notification_item", {
        "seen": props.status === 1,
    });

    return (
        <div className={classNoti}>
            <p>
                <strong>{props.userCreated}</strong> {props.title}
            </p>
            <span>xxx phut truoc</span>
        </div>
    );
};

const NotificationList = ({ notifications = [] }) => {
    const list = notifications.map((item) => <NotificationItem key={item.id} {...item} />);

    return <div className="notifications">{list}</div>;
};

export default NotificationList;
