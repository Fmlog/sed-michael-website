import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
function Footer() {
  return (
    <footer id="main-footer">
      <div className={styles.container}>
        <div className={styles.widgets}>
          <div className={styles.widget}>
            <div className={""}>
              <Link aria-current="page" className={styles.logo} href="/">
                <Image
                  src="/img/sedmichael-wt-logo.svg"
                  width="120%"
                  height="20%"
                  alt="sed-michael-logo"
                />
              </Link>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link
                    className={styles.link}
                    href="https://twitter.com/sed_michael"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.linkTxt}>
                      <div className={styles.image}>
                        <Image
                          src={"/img/twitter.svg"}
                          width="25px"
                          height="25px"
                          alt="sed-michael-twitter"
                        />
                      </div>
                      Twitter
                    </div>
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link
                    className={styles.link}
                    href="https://youtube.com/channel/UCYfJUwfaQ7L5r2KIING5mZw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.linkTxt}>
                      <div className={styles.image}>
                        <Image
                          src={"/img/youtube.svg"}
                          width="25px"
                          height="25px"
                          alt="sed-michael-youtube"
                        />
                      </div>
                      YouTube
                    </div>
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link
                    className={styles.link}
                    href="https://instagram.com/sedmichael_design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.linkTxt}>
                      <div className={styles.image}>
                        <Image
                          src={"/img/instagram.svg"}
                          width="25px"
                          height="25px"
                          alt="sed-michael-youtube"
                        />
                      </div>
                      Instagram
                    </div>
                  </Link>
                </li>
                <li className={styles.listItem}>
                  <Link
                    className={styles.link}
                    href="https://linkedin.com/company/sed-michael-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.linkTxt}>
                      <div className={styles.image}>
                        <Image
                          src={"/img/linkedin.svg"}
                          width="25px"
                          height="25px"
                          alt="sed-michael-linkedin"
                        />
                      </div>
                      LinkedIn
                    </div>
                  </Link>
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
                    <Link href="/contact/">Attract your audience</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/contact/">
                      Explain your product, service or idea
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/contact/">
                      Support your prospects &amp; customers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={""}>
              <h4 className={styles.title}>Services</h4>
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
                    <Link href="/sales-video-production/">Sales Videos</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/social-media-videos/">
                      Social Media Videos
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/teaser-videos/">Teaser Videos</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/training-video-production/">
                      Training Videos
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/video-ad-production/">Video Ads</Link>
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
                    <Link href="/pricing/">Pricing</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/why-us/">Why Sed Michael</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/customers/">
                      Our Customers &amp; 5* Reviews
                    </Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/team/">Our Team</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/blog/">Blog</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/guides/">Guides</Link>
                  </li>
                  <li className={styles.listItem}>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>

      <div>
        <div className={styles.bottom}>
          <div className={styles.legal}>
            <div className={styles.legalItem}>
              <Link href="#">© Copyright Sed Michael 2022</Link>
            </div>
            <div className={styles.legalItem}>
              <Link href="/privacy/">Privacy Policy</Link>
            </div>
            <div className={styles.legalItem}>
              <Link href="/terms/">Terms &amp; Conditions</Link>
            </div>
            <div className={styles.legalItem}>
              <Link href="/cookies/">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
