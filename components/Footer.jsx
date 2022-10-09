import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer id="main-footer">
      <div className={styles.container}>
        <div className={styles.widgets}>
          <div className={styles.widget}>
            <div className={""}>
              <a aria-current="page" className={styles.logo} href="/">
                <Image
                  src="/img/sedmichael-wt-logo.svg"
                  width="120%"
                  height="20%"
                  alt="sed-michael-logo"
                />
              </a>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://twitter.com/sed_michael"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/img/twitter.svg"}
                      width="25px"
                      height="25px"
                      alt=""
                    />
                    <span className={styles.linkTxt}>Twitter</span>
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://youtube.com/channel/UCYfJUwfaQ7L5r2KIING5mZw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/img/youtube.svg"}
                      width="25px"
                      height="25px"
                      alt=""
                    />
                    <span className={styles.linkTxt}>YouTube</span>
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://instagram.com/sedmichael_design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/img/instagram.svg"}
                      width="25px"
                      height="25px"
                      alt=""
                    />
                    <span className={styles.linkTxt}>Instagram</span>
                  </a>
                </li>
                <li className={styles.listItem}>
                  <a
                    className={styles.link}
                    href="https://linkedin.com/company/sed-michael-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"/img/linkedin.svg"}
                      width="25px"
                      height="25px"
                      alt=""
                    />
                    <span className={styles.linkTxt}>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={""}>
              <h4 className={styles.title}>Your Goal</h4>
              <div className={""}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Link href="/attract/">Attract your audience</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/explain/">
                      Explain your product, service or idea
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/support/">
                      Support your prospects &amp; customers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={""}>
              <h4 className={styles.title}>Video Types</h4>
              <div className={""}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Link href="/animated-video/">Animated Video</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/live-action-video/">Live Action Video</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/animated-graphics/">Animated Graphics</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={""}>
              <h4 className={styles.title}>Use Cases</h4>
              <div className={""}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <Link href="/app-demo-videos/">App Demo Videos</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/corporate-video-production/">
                      Corporate Videos
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/explainer-videos/">Explainer Videos</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/product-demo-video-production/">
                      Product Demo Videos
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/sales-video-production/">Sales Videos</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/social-media-videos/">Social Media Videos</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/teaser-videos/">Teaser Videos</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/training-video-production/">Training Videos</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/video-ad-production/">Video Ads</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={""}>
              <h4 className={styles.title}>Other Pages</h4>
              <div className={""}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <a href="/pricing/">Pricing</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/why-us/">Why Sed Michael</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/customers/">Our Customers &amp; 5* Reviews</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/team/">Our Team</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/blog/">Blog</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/guides/">Guides</a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="/contact-us/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div>
        <div className={styles.widgets}>
          <ul className={styles.legal}>
            <li className={styles.listItem}>
              <a href="#">© Copyright Sed Michael 2022 – Digital Design</a>
            </li>
            <li className={styles.listItem}>
              <a href="/privacy/">Sed Michael Privacy Policy</a>
            </li>
            <li className={styles.listItem}>
              <a href="/terms/">Terms &amp; Conditions</a>
            </li>
            <li className={styles.listItem}>
              <a href="/cookies/">Sed Michael Cookies Policy</a>
            </li>
          </ul>{" "}
        </div>
      </div>

      <div>
        <div className={""}></div>
      </div>
    </footer>
  );
}

export default Footer;
