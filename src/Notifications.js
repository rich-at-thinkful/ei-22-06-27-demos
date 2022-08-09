export default function Notifications({ notifications = [] }) {
  return notifications.length > 0 && (
    <div>You have {notifications.length} notifications.</div>
  );
}