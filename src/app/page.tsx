import CtaLink from '@/components/ui/ctaLink'

export default function Home() {
  return (
    <>
      <article>
        <div className="prose my-10">
          <p>
            At Algoedge Technologies, we are dedicated to transforming your business through the art of digital innovation. Our expert team
            specializes in crafting bespoke web applications that are not only aesthetically pleasing but are also robust, scalable, and tailored to
            meet the unique needs of your business.
          </p>
          <section>
            <h1 className="text-base">Why Choose Algoedge?</h1>
            <ul>
              <li>
                <p className="font-medium">Cutting-Edge Technology:</p>
                <p>Leveraging the latest in web development technologies, we ensure your application stays ahead of the curve.</p>
              </li>
              <li>
                <p className="font-medium">Custom Solutions:</p>
                <p>
                  Your business is unique, and so are our solutions. We create web applications that are tailored to your specific business
                  requirements.
                </p>
              </li>
              <li>
                <p className="font-medium">Scalable and Secure:</p>
                <p>With a focus on scalability and security, our applications grow with your business and protect your data at every step.</p>
              </li>
              <li>
                <p className="font-medium">User-Centric Design:</p>
                <p>We believe in creating applications that are intuitive, engaging, and easy to navigate, ensuring a seamless user experience.</p>
              </li>
            </ul>
          </section>
          <section>
            <h1 className="text-base">Our Services:</h1>
            <ul>
              <li>
                <p className="font-medium">Enterprise Web Applications:</p>
                <p>Streamline your business processes with custom-made enterprise solutions.</p>
              </li>
              <li>
                <p className="font-medium">E-Commerce Platforms:</p>
                <p>Expand your digital storefront with a powerful, user-friendly e-commerce application.</p>
              </li>
              <li>
                <p className="font-medium">Interactive Web Portals:</p>
                <p>Engage your audience with highly interactive and informative web portals.</p>
              </li>
              <li>
                <p className="font-medium">Cloud-Based Solutions:</p>
                <p>Embrace the power of cloud computing for enhanced flexibility and efficiency.</p>
              </li>
            </ul>
          </section>
          <section>
            <h1 className="text-base">Start Your Digital Transformation Today</h1>
            <p>
              Ready to elevate your business with a bespoke web application? Contact us now for a consultation, and let&apos;s create something
              extraordinary together!
            </p>
          </section>
        </div>
        <CtaLink
          href="mailto:contact@alogedge.co"
          text="Contact us"
        />
      </article>
    </>
  )
}
