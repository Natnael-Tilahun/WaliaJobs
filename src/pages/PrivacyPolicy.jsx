import React from "react";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full h-full text-left md:py-10 bg-thm_secondary_background dark:bg-thm_dark_secondary_background py-5  flex-col my-0 flex md:my-0 px-2 md:px-3 lg:px-10 xl:px-20 ">
      <h1 className="text-xl font-medium pt-5 pb-3">Privacy Policy</h1>
      <p className="py-2">Last Updated: Oct 16, 2023</p>
      <p>
        At Walia Jobs, we value your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines our practices
        concerning the collection, use, and protection of your data when you use
        our services. By accessing or using our services, you agree to the terms
        of this Privacy Policy.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">
        1. Information We Collect
      </h1>
      <h1 className="text-lg py-3">a. Personal Information</h1>
      <p>
        We may collect the following personal information when you use our
        platform:
      </p>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>Name</li>
        <li>Email address</li>
        <li>Contact information</li>
        <li>Resume/CV</li>
        <li>Job preferences</li>
        <li>Location</li>
      </ol>
      <h1 className="text-lg py-3">b. Non-Personal Information</h1>
      <p>We may also collect non-personal information, such as:</p>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>Browser information</li>
        <li>Device type</li>
        <li>IP address</li>
        <li>Cookies</li>
      </ol>
      <h1 className="text-lg font-medium pt-10 pb-3">
        2. How We Use Your Information
      </h1>
      <p>We use the information we collect for the following purposes:</p>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>To provide and improve our services</li>
        <li>To match job seekers with relevant job listings</li>
        <li>To communicate with users</li>
        <li>To personalize the user experience</li>
        <li>To analyze and optimize our platform</li>
      </ol>
      <h1 className="text-lg font-medium pt-10 pb-3">
        3. Sharing Your Information
      </h1>
      <p>
        We do not sell or rent your personal information to third parties.
        However, we may share your information in the following situations:
      </p>
      <ol className="text-left space-y-3 py-3 list-disc">
        <li>
          With employers and job seekers for the purpose of job applications
        </li>
        <li>With service providers who assist us in delivering our services</li>
        <li>With law enforcement agencies in response to legal requests</li>
      </ol>
      <h1 className="text-lg font-medium pt-10 pb-3">4. Security</h1>
      <p>
        We take appropriate measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. However,
        no method of transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">5. Your Choices</h1>
      <p>
        You have the right to access, correct, or delete your personal
        information. You can also opt out of receiving communications from us.
        To exercise these rights, please contact us at{" "}
        <NavLink className="text-thm_root1_color underline" to="/contact">
          Contact Us
        </NavLink>
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">6. Cookies</h1>
      <p>
        We use cookies to enhance your experience on our platform. You can
        manage your cookie preferences through your browser settings.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">
        7. Links to Other Websites
      </h1>
      <p>
        Our platform may contain links to external websites. We are not
        responsible for the content or privacy practices of these websites. We
        encourage you to review the privacy policies of any websites you visit.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">8. Children's Privacy</h1>
      <p>
        Our services are not intended for individuals under the age of 18. We do
        not knowingly collect personal information from children.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">
        9. Changes to this Privacy Policy
      </h1>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal reasons. The updated policy will be posted
        on our website.
      </p>
      <h1 className="text-lg font-medium pt-10 pb-3">10. Contact Us</h1>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <NavLink className="text-thm_root1_color underline" to="/contact">
          Contact Us
        </NavLink>
      </p>
      <p>Thank you for choosing Walia Jobs.</p>
    </div>
  );
};

export default PrivacyPolicy;
