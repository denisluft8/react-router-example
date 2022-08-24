function Contato() {
  return (
    <div className="main">
      <div className="description">
        <h1>CONTACT</h1>
        <h4 style={{ padding: "20px" }}>
          Adress: 44 E. West Street Ashland, OH 44805
        </h4>
        <h4 style={{ padding: "20px" }}>
          Phone Number:
          <a href="tel:1-764-060-5149 x25483" style={{ color: "#6a92be" }}>
            1-764-060-5149 x25444
          </a>
        </h4>
        <h4 style={{ padding: "20px" }}>
          Email:{" "}
          <a href="mailto:avin4@uiba-ci.com" style={{ color: "#6a92be" }}>
            {" "}
            avin4@uiba-ci.com
          </a>
        </h4>
        <iframe
          style={{ marginTop: "50px" }}
          height="250px"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8533.678963437127!2d-82.3218239786687!3d40.86943529525352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8839fb4c24509587%3A0xf4548ebfb94a4899!2s44%20W%20Main%20St%2C%20Ashland%2C%20OH%2044805%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1659127213790!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Contato;
