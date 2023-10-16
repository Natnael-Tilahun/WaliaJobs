import React from "react";
import { NavLink } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background dark:bg-thm_dark_secondary_background py-5  flex-col my-0 flex md:my-0 px-2 md:px-3 lg:px-10 xl:px-20 ">
      <h1 className="text-xl font-medium pt-5 pb-3">Terms and Conditions</h1>
      <p className="py-3">Last Updated: Oct 16, 2023</p>
      <p>
        Please read these Terms and Conditions ("Terms") carefully before using
        the Walia Jobs website and service. Your access to and use of the
        service is conditioned on your acceptance and compliance with these
        Terms. By accessing or using the service, you agree to be bound by these
        Terms.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">1. Acceptance of Terms</h1>
      <p>
        By using our services, you agree to comply with and be bound by these
        Terms and all applicable laws and regulations. If you do not agree with
        these Terms, please refrain from using our services.{" "}
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">2. Eligibility</h1>
      <p>
        You must be at least 18 years old to use our services. By using our
        platform, you represent and warrant that you meet this age requirement.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">3. User Accounts</h1>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>
          You are responsible for maintaining the confidentiality of your
          account and password. You agree to notify us immediately of any
          unauthorized use of your account.
        </li>
        <li>
          You may not use the account of another user without their permission.
        </li>
        <li>
          We reserve the right to terminate or suspend your account at our
          discretion, with or without notice, for any reason, including
          violations of these Terms.
        </li>
      </ol>
      <h1 className="text-lg font-medium pt-10 pb-3">
        4. Content and User Conduct
      </h1>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>
          You are solely responsible for any content you post on our platform,
          including job listings, reviews, and comments.
        </li>
        <li>
          Content that is unlawful, offensive, or violates the rights of others
          is strictly prohibited.
        </li>
        <li>
          We reserve the right to remove or modify any content that violates
          these Terms.
        </li>
        <li>
          You agree not to use our services for any unlawful or unauthorized
          purpose.
        </li>
      </ol>

      <h1 className="text-lg font-medium pt-10 pb-3">
        5. Privacy and Data Protection
      </h1>
      <p>
        We value your privacy. Please review our Privacy Policy to understand
        how we collect, use, and protect your personal information.{" "}
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">
        6. Intellectual Property
      </h1>
      <p>
        All content and materials on our platform are protected by intellectual
        property laws. You may not use, reproduce, or distribute any content
        without our permission.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">
        7. Limitation of Liability
      </h1>
      <p>
        We are not responsible for any damages or losses resulting from your use
        of our platform. You use our services at your own risk.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">8. Changes to Terms</h1>
      <p>
        We reserve the right to update or modify these Terms at any time. Any
        changes will be effective upon posting the updated Terms on our website.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">9. Termination</h1>
      <p>
        We may terminate or suspend your access to our platform at our
        discretion. Upon termination, your right to use the services will cease
        immediately.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">10. Governing Law</h1>
      <p>
        These Terms are governed by the laws of [Your Jurisdiction]. You agree
        to submit to the exclusive jurisdiction of the courts in [Your
        Jurisdiction] for any dispute arising from or related to these Terms.
      </p>

      <h1 className="text-lg font-medium pt-10 pb-3">11. Contact Us</h1>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at{" "}
        <NavLink className="text-thm_root1_color underline" to="/contact">
          Contact Us
        </NavLink>
        .{" "}
      </p>

      <p>Thank you for using Walia Jobs.</p>
    </div>
  );
};

export default TermsAndConditions;
