export default function FAQ() {
  return (
    <>
      <details className="group">
        <summary>
          <span>What is a smog check?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          A smog check is an inspection that measures your vehicle’s emissions
          to make sure it meets state air quality standards.
        </p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>Do I need a smog check?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          Most gasoline vehicles over 6 years old need a smog check every 2
          years, and when you sell or register your car in California.
        </p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>How long does the smog check take?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>Most tests take about 15–20 minutes.</p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>What do I need to bring?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>Just your vehicle and your DMV renewal notice (if you have it).</p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>What happens if my car passes?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          We’ll send the results electronically to the DMV, and you’ll get a
          copy of your certificate.
        </p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>What if my car fails?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          You’ll get a detailed report explaining the issue. After repairs, you
          can come back for a retest.
        </p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>How much does a smog check cost?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          Our prices start at <strong>$XX.XX</strong>. Call us for details on
          your vehicle type.
        </p>
      </details>

      {/* <!-- Item --> */}
      <details className="group">
        <summary>
          <span>Do hybrids and diesels need a smog check?</span>
          <span className="group-open:rotate-180">⌄</span>
        </summary>
        <p>
          Yes, most hybrids and diesel vehicles require smog checks. Electric
          cars are exempt.
        </p>
      </details>
    </>
  );
}
