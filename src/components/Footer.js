export default function Footer(props) {
  //   let hour = new Date().getHours();
  //   let open = 10;
  //   let closed = 22;
  //   let isOpen = hour >= open && hour <= closed;
  return (
    <footer className="footer">
      <div className="order">
        <p>We 're Open from 12:00 to 22:00. come visit us or order online</p>
        <button className="btn" href="http://" onClick={props.deleteAll}>
          Delete All
        </button>
      </div>
    </footer>
  );
}
