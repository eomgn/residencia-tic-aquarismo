import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        &copy; {new Date().getFullYear()} Meu Aquarismo. Todos os direitos
        reservados.
      </p>
      <p>Desenvolvido com ❤️ e React.</p>
    </footer>
  );
}

export default Footer;
