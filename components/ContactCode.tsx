import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "jacobwiltshire.com",
    href: "https://jacobwiltshire.com",
  },
  {
    social: "email",
    link: "jacobjameswiltshire@protonmail.com",
    href: "mailto:jacobjameswiltshire@protonmail.com",
  },
  {
    social: "github",
    link: "RCNOverwatcher",
    href: "https://github.com/RCNOverwatcher",
  },
  {
    social: "linkedin",
    link: "jacobwiltshire",
    href: "https://www.linkedin.com/in/jacob-wiltshire-44b154244/",
  },
  {
    social: "discord",
    link: "RCN#0001",
    href: "https://large-type.com/#RCN%230001",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(5, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
