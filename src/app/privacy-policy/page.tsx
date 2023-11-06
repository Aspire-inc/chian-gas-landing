import React from "react";
import DotDiffText from "../components/ui/dot-diff-text";
import PrivacyImage from "@/assets/icons/privacy.svg";
import Image from "next/image";
import Search from "@/assets/icons/search.svg";
import { UserApp } from "../components/ui/app-types";

function PrivacyPolicy() {
  return (
    <div className="w-full lg:px-[5rem] xl:px-[5rem] mt-[3rem] px-5">
      <div className="flex items-center justify-between w-full ">
        <div>
          <DotDiffText>Chian Gas Privacy Policy</DotDiffText>
          <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
            At Chian Gas, we are committed to maintaining the privacy
            <br />
            and protection of your personal information.
          </p>
          <div className="flex items-start justify-start mt-[4rem] ">
            <div className="relative">
              <input
                className="w-[345px] lg:w-[509px] h-[50px] bg-slate-50 rounded-[50px] focus:outline-none pl-8  "
                placeholder="Ask your question"
              />
              <Image
                src={Search}
                alt="search"
                width={20}
                height={20}
                className="absolute right-7 top-[0.9rem]"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src={PrivacyImage} alt="" />
        </div>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Introduction</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          Welcome to Chian Gas! We are delighted that you've chosen to use our
          mobile application, website, and related services (collectively
          referred to as "the Services"). At Chian Gas, we are dedicated to
          preserving your privacy and safeguarding your personal information. We
          have created this Privacy Policy to explain how we gather, use, and
          protect your data when you interact with our Services. Your use of
          Chian Gas constitutes your consent to the practices defined in this
          Privacy Policy.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Overview</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          Welcome to Chian Gas, a service dedicated to providing you with a
          convenient and efficient way to access and manage your gas supplies
          through our mobile application and website. At Chian Gas, we value
          your privacy and are committed to protecting your personal
          information. This Privacy Policy is designed to provide you with a
          comprehensive overview of how we collect, use, and safeguard your data
          when you interact with our Services. By using Chian Gas, you agree to
          the practices outlined in this Privacy Policy.
          <br />
          <br />
          Chian Gas is committed to ensuring the highest standards of privacy
          and data protection for all users of our platform. Our aim is to
          provide you with not only a seamless and efficient experience when
          ordering gas supplies but also a secure and privacy-respecting
          environment where your information is treated with the utmost care.
          <br />
          <br />
          Our Privacy Policy covers essential aspects, such as the types of
          information we collect, how we use your data, who we share it with,
          and your choices regarding your personal information. We explain how
          we use your information to deliver, personalize, and improve our
          Services. Security is a top priority, and we detail the measures we
          employ to protect your data.
          <br />
          <br />
          Chian Gas may share your information with gas vendors and service
          providers to ensure the successful fulfillment of your orders and to
          enhance your overall user experience. We also address legal
          compliance, outlining cases in which we may be legally obligated to
          share your information.
          <br />
          <br />
          Data retention practices are described, and you can learn about your
          choices regarding your personal information. You have the option to
          access, correct, or delete your account information, choose to enable
          or disable location services, and manage your communication
          preferences regarding marketing materials.
          <br />
          <br />
          While we implement robust security measures to safeguard your data, it
          is important to be aware that no method of data transmission over the
          internet is entirely secure. We encourage you to exercise secure
          practices when using our Services and to manage your account and
          device security appropriately.
          <br />
          <br />
          Chian Gas Services are not intended for children under 13, and we do
          not knowingly collect information from users under this age. If you
          believe we have unintentionally collected personal information from a
          child under 13, please contact us to address the situation promptly.
          <br />
          <br />
          Changes to this Privacy Policy may be made to reflect changes in our
          practices or for other operational, legal, or regulatory reasons. We
          will notify you of significant changes through our Services, ensuring
          that you are kept informed.
          <br />
          <br />
          If you have questions, concerns, or feedback regarding this Privacy
          Policy, please don't hesitate to contact us. Your privacy matters to
          us, and we are dedicated to addressing any questions or concerns you
          may have.
          <br />
          <br />
          Thank you for entrusting Chian Gas with your gas supply needs. Your
          trust and privacy are highly important to us, and we are committed to
          upholding the highest standards of data protection and security.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Information We Collect</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          To provide you with the best service possible, we collect several
          types of information. These include:
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Personal Information</b> : When you create an account with Chian
          Gas, we collect information such as your name, contact details, and
          payment information. This data is used to process transactions,
          ensuring the smooth fulfillment of your gas orders. We value the
          security of your personal information and employ encryption and secure
          data handling practices to protect it.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Location Information</b> : In order to connect you with nearby gas
          vendors for timely and convenient refills, we need to gather
          information about your location. This information is instrumental in
          ensuring your orders are delivered swiftly and accurately. Our
          location data is collected only when the Chian Gas app is in use, and
          you have the option to disable location services in your device
          settings at any time.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Device Information</b> : We may collect data regarding your device,
          including device type, operating system, and unique identifiers. This
          helps us ensure that our application functions optimally on various
          platforms. Our collection of device information is focused on
          providing you with the best user experience.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Communications</b> : Our communication with you is essential. This
          category covers the data we collect related to your interactions with
          Chian Gas, including customer support inquiries and your valuable
          feedback. Your communications with Chian Gas are securely stored and
          used to provide timely and effective customer support.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>How We Use Your Information</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          Your data plays a crucial role in delivering, personalizing, and
          improving our Services. The primary purposes for which we use your
          information include:
        </p>

        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Providing Services</b> : We utilize your data to provide,
          personalize, and improve the Chian Gas Services. This includes
          processing your orders and optimizing your experience as a user.
          Personal information, such as your name and contact details, is used
          to facilitate order processing. Your payment information is securely
          handled to ensure the successful completion of transactions.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Customer Support</b> : In your journey with Chian Gas, should you
          need assistance, we use your information to respond to your support
          requests and provide the necessary help. Your communication with our
          customer support team is confidential and secure.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Communications</b> : From time to time, we may send you
          notifications, updates, and marketing materials to keep you informed
          about the latest features, promotions, and offerings. These
          communications are designed to enhance your experience and keep you
          updated. Please be aware that you can opt out of marketing
          communications at any time by adjusting your preferences in the app
          settings.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Safety and Security</b> : To ensure a safe and secure environment
          for all users, we employ your data for security purposes, such as
          verifying your identity, preventing fraudulent activities, and
          upholding our policies. We use your personal information to confirm
          your identity during order processing and payment. By doing so, we
          maintain the highest levels of security and ensure that only
          authorized users can place orders.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Sharing Your Information</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          To offer you our Services effectively, we may need to share your
          information with the following:
        </p>

        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Gas Vendors</b> : Information necessary for the successful
          processing of your orders, including delivery details and location, is
          shared with gas vendors. This ensures that your orders are fulfilled
          promptly and accurately. Your personal information is securely
          transmitted to gas vendors to guarantee the efficient delivery of your
          orders. Our gas vendors are committed to upholding the highest
          standards of data privacy and security.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Service Providers</b> : Chian Gas may engage third-party service
          providers to assist with various aspects of our Services, helping us
          maintain high standards of quality and efficiency. These service
          providers may access your information only to the extent necessary to
          perform the services they provide to us. We have strict contractual
          requirements that mandate data privacy and security for all our
          service providers.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Legal Compliance</b> : There may be situations in which we are
          legally obligated to share your information to comply with applicable
          laws, regulations, or governmental requests. While Chian Gas is
          committed to protecting your privacy, we may be required to share
          information with law enforcement agencies or regulatory authorities in
          cases of legal investigations or to fulfill legal obligations.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Data Retention</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          We hold your information for as long as necessary for the purposes
          outlined in this Privacy Policy or as mandated by law. We retain your
          data as long as you have an active account with Chian Gas. If you
          choose to deactivate your account, your data is securely stored in
          accordance with our retention policies. We will only retain your data
          for as long as necessary to fulfill the purposes outlined in this
          Privacy Policy, unless a longer retention period is required or
          permitted by law.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Your Choices</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          At Chian Gas, we respect your right to make choices about your
          personal information. You have several options:
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Account Information</b> : You can access, correct, or delete your
          account information at any time through your account settings. We give
          you the flexibility to manage your personal information to ensure its
          accuracy and completeness.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Location Data</b> : The choice to enable or disable location
          services in your device settings is entirely yours. Chian Gas respects
          your privacy, and you have the freedom to choose whether to share your
          location information.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          <b>Marketing Communications</b> : Should you wish to opt out of
          marketing communications, you can do so through your account settings.
          Your choices are fully respected, and you have the freedom to manage
          your communication preferences. We want to ensure that you receive the
          communication that is most relevant to you.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Security</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          While we implement stringent security measures to protect your
          information, it is important to note that no method of transmission
          over the internet is entirely secure. We employ industry-standard
          encryption and security practices to safeguard your data. Chian Gas is
          committed to providing you with a secure environment for your data.
          However, as with any online activity, there is a degree of risk
          associated with sharing information over the internet.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          We encourage you to exercise secure practices when using our Services.
          Remember to use strong and unique passwords for your Chian Gas account
          and to ensure the security of your device and login credentials.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Children's Privacy</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          Chian Gas Services are not intended for users under the age of 13. We
          do not knowingly collect information from children under 13 years of
          age. If you believe that we have unintentionally collected personal
          information from a child under 13, please contact us immediately to
          rectify the situation.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Changes to this Policy</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          We may update this Privacy Policy to reflect changes in our practices
          or for other operational, legal, or regulatory reasons. We will notify
          you of any significant changes through our Services, and you may
          receive a notification via the app or an email, depending on your
          communication preferences. We encourage you to review this Privacy
          Policy periodically to stay informed about how we are protecting your
          privacy and data. We are dedicated to ensuring that your information
          is handled securely and transparently.
        </p>
      </div>
      <div className="mt-[5rem]">
        <DotDiffText>Contact Us</DotDiffText>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          If you have questions, concerns, or feedback regarding this Privacy
          Policy, please do not hesitate to contact us at [Insert Contact
          Information]. Your privacy matters to us, and we are committed to
          addressing any questions or concerns you may have. We value your trust
          in Chian Gas and strive to provide the highest levels of data privacy
          and security.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          We hope that this comprehensive Privacy Policy provides you with a
          thorough understanding of how your data is managed while using the
          Chian Gas platform. Your trust and privacy are of the utmost
          importance to us, and we are committed to upholding the highest
          standards of data protection and security.
        </p>
        <p className="mt-5 text-xl font-normal tracking-tight text-zinc-600">
          Thank you for entrusting Chian Gas with your gas supply needs!
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <div
          // style={{ marginLeft: `-${appId * 100}%` }}
          className="w-[300%] flex mt-5 gap-x-3 "
        >
          <UserApp />
          {/* <VendorApp /> */}
          {/* <DeliveryApp /> */}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
